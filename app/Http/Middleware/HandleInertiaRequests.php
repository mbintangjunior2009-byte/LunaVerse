<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
            ],
            // Real user progress stats — available on every authenticated page.
            // Falls back to zero for brand-new accounts with no progress record.
            'progress' => $user ? [
                'xp'               => $user->progress?->xp ?? 0,
                'level'            => $user->progress?->level ?? 1,
                'streak'           => $user->progress?->streak ?? 0,
                'completed_lessons' => $user->progress?->completed_lessons ?? 0,
            ] : null,
            // Today's pending events count — powers the notification banner on
            // Dashboard and Calendar pages.
            'todaysEventCount' => $user
                ? $user->events()->whereDate('event_date', today())->where('is_completed', false)->count()
                : 0,
            'locale' => app()->getLocale(),
        ];
    }
}
