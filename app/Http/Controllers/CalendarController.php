<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class CalendarController extends Controller
{
    /**
     * Display the calendar page with the user's events.
     */
    public function index(): Response
    {
        $events = Auth::user()
            ->events()
            ->orderBy('event_date')
            ->orderBy('start_time')
            ->get();

        return Inertia::render('Calendar', [
            'events' => $events,
        ]);
    }

    /**
     * Store a newly created event.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title'       => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:2000'],
            'event_date'  => ['required', 'date'],
            'start_time'  => ['nullable', 'string'],
            'category'    => ['required', 'string', Rule::in(['study', 'quiz', 'reminder', 'exam'])],
        ]);

        Auth::user()->events()->create([
            'title'       => $validated['title'],
            'description' => $validated['description'] ?? null,
            'event_date'  => $validated['event_date'],
            'start_time'  => $validated['start_time'] ?? null,
            'category'    => $validated['category'],
            'is_completed' => false,
        ]);

        return redirect()->back()->with('status', 'Event created.');
    }

    /**
     * Update an existing event.
     */
    public function update(Request $request, Event $event): RedirectResponse
    {
        $this->authorize('update', $event);

        $validated = $request->validate([
            'title'        => ['sometimes', 'required', 'string', 'max:255'],
            'description'  => ['nullable', 'string', 'max:2000'],
            'event_date'   => ['sometimes', 'required', 'date'],
            'start_time'   => ['nullable', 'string'],
            'category'     => ['sometimes', 'required', 'string', Rule::in(['study', 'quiz', 'reminder', 'exam'])],
            'is_completed' => ['sometimes', 'boolean'],
        ]);

        $event->update($validated);

        return redirect()->back()->with('status', 'Event updated.');
    }

    /**
     * Remove the specified event.
     */
    public function destroy(Request $request, Event $event): RedirectResponse
    {
        $this->authorize('delete', $event);

        $event->delete();

        return redirect()->back()->with('status', 'Event deleted.');
    }

    /**
     * Toggle the is_completed status of an event.
     */
    public function toggle(Request $request, Event $event): RedirectResponse
    {
        $this->authorize('update', $event);

        $event->update(['is_completed' => !$event->is_completed]);

        return redirect()->back();
    }
}
