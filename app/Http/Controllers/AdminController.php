<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserPracticeProgress;
use App\Models\UserProgress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Path to persistent settings JSON file.
     */
    protected function getSettingsPath(): string
    {
        return storage_path('app/site_settings.json');
    }

    /**
     * Default platform settings.
     */
    protected function getDefaultSettings(): array
    {
        return [
            'site_name' => 'LinguaNova',
            'site_tagline' => 'Next-Gen Gamified Polyglot Learning Platform',
            'contact_email' => 'admin@linguanova.com',
            'allow_registration' => true,
            'require_email_verification' => false,
            'ai_tutor_enabled' => true,
            'community_forum_enabled' => true,
            'leaderboard_enabled' => true,
            'daily_streak_reminders' => true,
            'default_user_role' => 'user',
            'maintenance_mode' => false,
            'supported_languages' => [
                ['id' => 'japanese', 'name' => 'Japanese', 'enabled' => true, 'levels' => 'N5 - N1'],
                ['id' => 'chinese', 'name' => 'Chinese (Mandarin)', 'enabled' => true, 'levels' => 'HSK 1 - 6'],
                ['id' => 'korean', 'name' => 'Korean', 'enabled' => true, 'levels' => 'TOPIK I - II'],
                ['id' => 'english', 'name' => 'English', 'enabled' => true, 'levels' => 'A1 - C2'],
                ['id' => 'spanish', 'name' => 'Spanish', 'enabled' => true, 'levels' => 'A1 - C2'],
            ],
        ];
    }

    /**
     * Retrieve current settings merged with defaults.
     */
    protected function getSettings(): array
    {
        $path = $this->getSettingsPath();
        if (File::exists($path)) {
            $data = json_decode(File::get($path), true);
            if (is_array($data)) {
                return array_merge($this->getDefaultSettings(), $data);
            }
        }
        return $this->getDefaultSettings();
    }

    /**
     * Admin Dashboard with overview statistics.
     */
    public function dashboard()
    {
        $totalUsers = User::count();
        $totalPracticeSessions = (int) UserPracticeProgress::sum('attempts');
        if ($totalPracticeSessions === 0) {
            $totalPracticeSessions = UserPracticeProgress::count();
        }

        $activeStreaks = UserProgress::where('streak', '>', 0)->count();
        $totalXP = (int) UserProgress::sum('xp');
        $adminCount = User::where('role', 'admin')->count();
        $learnerCount = User::where('role', '!=', 'admin')->count();

        // 5 most recently joined users
        $recentUsers = User::with('progress')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($u) {
                return [
                    'id' => $u->id,
                    'name' => $u->name,
                    'email' => $u->email,
                    'role' => $u->role,
                    'created_at' => $u->created_at ? $u->created_at->toFormattedDateString() : 'N/A',
                    'streak' => $u->progress ? $u->progress->streak : 0,
                    'xp' => $u->progress ? $u->progress->xp : 0,
                ];
            });

        $systemInfo = [
            'laravel_version' => app()->version(),
            'php_version' => PHP_VERSION,
            'environment' => app()->environment(),
            'db_driver' => config('database.default'),
        ];

        return Inertia::render('Admin/Dashboard', [
            'metrics' => [
                'totalUsers' => $totalUsers,
                'totalPracticeSessions' => $totalPracticeSessions,
                'activeStreaks' => $activeStreaks,
                'totalXP' => $totalXP,
                'adminCount' => $adminCount,
                'learnerCount' => $learnerCount,
            ],
            'recentUsers' => $recentUsers,
            'systemInfo' => $systemInfo,
        ]);
    }

    /**
     * User Management Table.
     */
    public function users(Request $request)
    {
        $search = $request->input('search');
        $roleFilter = $request->input('role');

        $query = User::with(['progress', 'practiceProgress']);

        if (!empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        if (!empty($roleFilter) && $roleFilter !== 'all') {
            $query->where('role', $roleFilter);
        }

        $users = $query->latest()->get()->map(function ($u) {
            return [
                'id' => $u->id,
                'name' => $u->name,
                'email' => $u->email,
                'role' => $u->role,
                'created_at' => $u->created_at ? $u->created_at->format('M d, Y') : 'N/A',
                'progress' => [
                    'xp' => $u->progress ? $u->progress->xp : 0,
                    'level' => $u->progress ? $u->progress->level : 1,
                    'streak' => $u->progress ? $u->progress->streak : 0,
                    'completed_lessons' => $u->progress ? $u->progress->completed_lessons : 0,
                ],
                'practice_sessions' => $u->practiceProgress ? $u->practiceProgress->sum('attempts') : 0,
                'completed_practices' => $u->practiceProgress ? $u->practiceProgress->where('is_completed', true)->count() : 0,
            ];
        });

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
            'filters' => [
                'search' => $search ?? '',
                'role' => $roleFilter ?? 'all',
            ],
            'currentAdminId' => Auth::id(),
        ]);
    }

    /**
     * Update user details and role.
     */
    public function updateUser(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'role' => ['required', 'string', Rule::in(['admin', 'user'])],
        ]);

        // Safety safeguard: Prevent current admin from demoting themselves
        if ($user->id === Auth::id() && $validated['role'] !== 'admin') {
            return back()->withErrors([
                'role' => 'You cannot remove admin privileges from your own logged-in account.',
            ]);
        }

        $user->update($validated);

        return back()->with('success', "User '{$user->name}' updated successfully.");
    }

    /**
     * Delete user.
     */
    public function deleteUser(User $user)
    {
        // Safety safeguard: Prevent admin from deleting themselves
        if ($user->id === Auth::id()) {
            return back()->withErrors([
                'user' => 'You cannot delete your own logged-in administrator account.',
            ]);
        }

        $userName = $user->name;
        
        // Clean up progress relationships if cascading isn't automated in DB
        $user->progress()->delete();
        $user->practiceProgress()->delete();
        $user->delete();

        return back()->with('success', "User '{$userName}' has been deleted.");
    }

    /**
     * Site Settings & Feature Toggles.
     */
    public function settings()
    {
        $settings = $this->getSettings();

        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings,
        ]);
    }

    /**
     * Save site settings & feature toggles.
     */
    public function updateSettings(Request $request)
    {
        $validated = $request->validate([
            'site_name' => ['required', 'string', 'max:100'],
            'site_tagline' => ['nullable', 'string', 'max:255'],
            'contact_email' => ['required', 'email', 'max:255'],
            'allow_registration' => ['boolean'],
            'require_email_verification' => ['boolean'],
            'ai_tutor_enabled' => ['boolean'],
            'community_forum_enabled' => ['boolean'],
            'leaderboard_enabled' => ['boolean'],
            'daily_streak_reminders' => ['boolean'],
            'default_user_role' => ['required', 'string', Rule::in(['admin', 'user'])],
            'maintenance_mode' => ['boolean'],
            'supported_languages' => ['array'],
            'supported_languages.*.id' => ['required', 'string'],
            'supported_languages.*.name' => ['required', 'string'],
            'supported_languages.*.enabled' => ['boolean'],
            'supported_languages.*.levels' => ['nullable', 'string'],
        ]);

        $path = $this->getSettingsPath();
        File::ensureDirectoryExists(dirname($path));
        File::put($path, json_encode($validated, JSON_PRETTY_PRINT));

        return back()->with('success', 'Site configuration saved successfully.');
    }
}
