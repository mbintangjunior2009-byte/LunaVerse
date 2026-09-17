<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\UserPracticeProgress;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PracticeController extends Controller
{
    /**
     * Get randomized practice questions with enforced limits per session.
     */
    public function getQuestions(Request $request)
    {
        $category = $request->input('category');
        
        $limits = [
            'hiragana' => 40,
            'katakana' => 40,
            'kanji' => 15,
            'vocabulary' => 30,
            'grammar' => 20,
            'listening' => 20,
        ];

        // Default to 10 if category is unknown
        $limit = $limits[$category] ?? 10;

        $questions = Question::where('category', $category)
            ->inRandomOrder()
            ->limit($limit)
            ->get();

        return response()->json(['questions' => $questions]);
    }

    /**
     * Submit practice session results and update progress.
     */
    public function submit(Request $request)
    {
        $request->validate([
            'category' => 'required|string',
            'score' => 'required|integer|min:0|max:100',
            'completed' => 'required|boolean',
        ]);

        $user = Auth::user();
        $category = $request->input('category');
        $score = $request->input('score');
        $completed = $request->input('completed');

        // Get or create practice progress for this category
        $progress = $user->practiceProgress()->firstOrCreate(
            ['category' => $category],
            [
                'is_unlocked' => $category === 'hiragana',
                'is_completed' => false,
                'best_score' => 0,
                'attempts' => 0,
            ]
        );

        // Update attempts
        $progress->attempts += 1;

        // Update best score if current score is better
        if ($score > $progress->best_score) {
            $progress->best_score = $score;
        }

        // Mark as completed if session was completed and score meets pass criteria (70%)
        $passThreshold = 70;
        if ($completed && $score >= $passThreshold && !$progress->is_completed) {
            $progress->is_completed = true;
            $progress->completed_at = now();

            // Unlock the next category in sequence
            $nextCategory = UserPracticeProgress::getNextCategory($category);
            if ($nextCategory) {
                $nextProgress = $user->practiceProgress()->where('category', $nextCategory)->first();
                if ($nextProgress && !$nextProgress->is_unlocked) {
                    $nextProgress->is_unlocked = true;
                    $nextProgress->save();
                }
            }

            // Award XP for completion
            $xpAward = 100;
            $userProgress = $user->progress;
            if ($userProgress) {
                $userProgress->xp += $xpAward;
                $userProgress->completed_lessons += 1;
                
                // Update level based on XP (simple formula: level = floor(xp / 500) + 1)
                $userProgress->level = floor($userProgress->xp / 500) + 1;
                $userProgress->save();
            }
        }

        $progress->save();

        return response()->json([
            'success' => true,
            'progress' => $progress,
            'next_unlocked' => $progress->is_completed ? UserPracticeProgress::getNextCategory($category) : null,
        ]);
    }

    /**
     * Get practice page with category unlock status.
     *
     * @param string $language  Language slug (default: 'japanese').
     *                          Pass 'legacy' to render the old Practice/Index page
     *                          (used by the standalone /practice route).
     */
    public function index(string $language = 'legacy')
    {
        $user = Auth::user();

        // Get all practice progress for the user
        $practiceProgress = $user->practiceProgress()->get()->keyBy('category');

        // Category metadata (shared between legacy and language-scoped pages)
        $categories = [
            [
                'id'           => 'hiragana',
                'name'         => 'Hiragana',
                'icon'         => 'あ',
                'description'  => 'Master the basic Japanese phonetic script',
                'questions'    => 40,
                'xp_reward'    => 100,
                'is_unlocked'  => $practiceProgress->get('hiragana')?->is_unlocked ?? true,
                'is_completed' => $practiceProgress->get('hiragana')?->is_completed ?? false,
                'best_score'   => $practiceProgress->get('hiragana')?->best_score ?? 0,
                'attempts'     => $practiceProgress->get('hiragana')?->attempts ?? 0,
            ],
            [
                'id'           => 'katakana',
                'name'         => 'Katakana',
                'icon'         => 'ア',
                'description'  => 'Learn Katakana characters used for foreign words',
                'questions'    => 40,
                'xp_reward'    => 100,
                'is_unlocked'  => $practiceProgress->get('katakana')?->is_unlocked ?? false,
                'is_completed' => $practiceProgress->get('katakana')?->is_completed ?? false,
                'best_score'   => $practiceProgress->get('katakana')?->best_score ?? 0,
                'attempts'     => $practiceProgress->get('katakana')?->attempts ?? 0,
            ],
            [
                'id'           => 'kanji',
                'name'         => 'Kanji',
                'icon'         => '漢',
                'description'  => 'Learn N5 level Kanji with readings and meanings',
                'questions'    => 15,
                'xp_reward'    => 150,
                'is_unlocked'  => $practiceProgress->get('kanji')?->is_unlocked ?? false,
                'is_completed' => $practiceProgress->get('kanji')?->is_completed ?? false,
                'best_score'   => $practiceProgress->get('kanji')?->best_score ?? 0,
                'attempts'     => $practiceProgress->get('kanji')?->attempts ?? 0,
            ],
            [
                'id'           => 'vocabulary',
                'name'         => 'Vocabulary',
                'icon'         => '語',
                'description'  => 'Build your Japanese vocabulary',
                'questions'    => 30,
                'xp_reward'    => 120,
                'is_unlocked'  => $practiceProgress->get('vocabulary')?->is_unlocked ?? false,
                'is_completed' => $practiceProgress->get('vocabulary')?->is_completed ?? false,
                'best_score'   => $practiceProgress->get('vocabulary')?->best_score ?? 0,
                'attempts'     => $practiceProgress->get('vocabulary')?->attempts ?? 0,
            ],
            [
                'id'           => 'grammar',
                'name'         => 'Grammar',
                'icon'         => '文',
                'description'  => 'Practice Japanese grammar and sentence patterns',
                'questions'    => 20,
                'xp_reward'    => 130,
                'is_unlocked'  => $practiceProgress->get('grammar')?->is_unlocked ?? false,
                'is_completed' => $practiceProgress->get('grammar')?->is_completed ?? false,
                'best_score'   => $practiceProgress->get('grammar')?->best_score ?? 0,
                'attempts'     => $practiceProgress->get('grammar')?->attempts ?? 0,
            ],
            [
                'id'           => 'listening',
                'name'         => 'Listening',
                'icon'         => '聴',
                'description'  => 'Practise listening comprehension',
                'questions'    => 20,
                'xp_reward'    => 140,
                'is_unlocked'  => $practiceProgress->get('listening')?->is_unlocked ?? false,
                'is_completed' => $practiceProgress->get('listening')?->is_completed ?? false,
                'best_score'   => $practiceProgress->get('listening')?->best_score ?? 0,
                'attempts'     => $practiceProgress->get('listening')?->attempts ?? 0,
            ],
        ];

        // Language-scoped route: render Language/Practice with backendCategories
        if ($language !== 'legacy') {
            return Inertia::render('Language/Practice', [
                'languageId'        => $language,
                'backendCategories' => $categories,
            ]);
        }

        // Legacy standalone /practice route
        return Inertia::render('Practice/Index', [
            'categories' => $categories,
            'language'   => 'japanese',
        ]);
    }
}
