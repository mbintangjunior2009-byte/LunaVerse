<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Display the dashboard with true user completion data.
     */
    public function index()
    {
        $user = Auth::user();
        
        // Ensure we load the progress relationship
        $progress = $user->progress;

        // Example calculation based on completed lessons
        // (Assuming 100 total lessons in the curriculum for percentage calculation)
        $totalLessons = 100;
        $completed = $progress ? $progress->completed_lessons : 0;
        
        // Calculate true percentage instead of hardcoded demo stats
        $completionPercentage = $totalLessons > 0 ? min(100, round(($completed / $totalLessons) * 100)) : 0;

        // Build language-specific progress array
        // In a real implementation, this would come from a language_progress table
        // For now, we'll initialize all languages with 0 progress for new users
        $languageProgresses = [
            'japanese' => ['xp' => 0, 'completed_lessons' => 0, 'completion_percentage' => 0],
            'chinese' => ['xp' => 0, 'completed_lessons' => 0, 'completion_percentage' => 0],
            'korean' => ['xp' => 0, 'completed_lessons' => 0, 'completion_percentage' => 0],
            'english' => ['xp' => 0, 'completed_lessons' => 0, 'completion_percentage' => 0],
            'spanish' => ['xp' => 0, 'completed_lessons' => 0, 'completion_percentage' => 0],
        ];

        return Inertia::render('Dashboard', [
            'backendProgress' => [
                'xp' => $progress ? $progress->xp : 0,
                'level' => $progress ? $progress->level : 1,
                'streak' => $progress ? $progress->streak : 0,
                'completed_lessons' => $completed,
                'completion_percentage' => $completionPercentage,
            ],
            'languageProgresses' => $languageProgresses,
        ]);
    }
}
