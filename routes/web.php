<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/languages', function () {
    if (Auth::check()) {
        return Inertia::render('Dashboard/Languages');
    }

    return Inertia::render('Public/Languages');
})->name('languages');

Route::get('/pricing', function () {
    return Inertia::render('Public/Pricing');
})->name('pricing');

Route::get('/community', function () {
    return Inertia::render('Public/Community');
})->name('community');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/practice', function () {
        return Inertia::render('Dashboard/Practice');
    })->name('practice');

    Route::get('/vocabulary', function () {
        return Inertia::render('Dashboard/Vocabulary');
    })->name('vocabulary');

    Route::get('/achievements', function () {
        return Inertia::render('Dashboard/Achievements');
    })->name('achievements');

    Route::get('/progress', function () {
        return Inertia::render('Dashboard/Progress');
    })->name('progress');

    Route::get('/calendar', function () {
        return Inertia::render('Dashboard/Calendar');
    })->name('calendar');

    Route::get('/settings', function () {
        return Inertia::render('Dashboard/Settings');
    })->name('settings.index');

    Route::get('/profile', function () {
        return Inertia::render('Dashboard/Profile');
    })->name('profile.index');

    // Dynamic Language Routes - Works for all supported languages
    $allowedLanguages = ['japanese', 'chinese', 'korean', 'english', 'spanish'];
    
    Route::prefix('language/{lang}')->group(function () use ($allowedLanguages) {
        Route::get('/', function (string $lang) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Hub', [
                'languageId' => $slug,
            ]);
        })->name('language.hub');

        Route::get('/study', function (string $lang) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Study', [
                'languageId' => $slug,
            ]);
        })->name('language.study');

        Route::get('/study/{lesson}', function (string $lang, string $lesson) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Lesson', [
                'languageId' => $slug,
                'lessonId' => $lesson,
            ]);
        })->name('language.lesson');

        Route::get('/practice', function (string $lang) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Practice', [
                'languageId' => $slug,
            ]);
        })->name('language.practice');

        // Hiragana quiz routes - must be defined BEFORE the generic {quiz} route
        Route::get('/basic-hiragana-quiz', function (string $lang) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/BasicHiraganaQuiz', [
                'languageId' => $slug,
            ]);
        })->name('language.basic-hiragana-quiz');

        Route::get('/dakuten-quiz', function (string $lang) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/BasicHiraganaQuiz', [
                'languageId' => $slug,
                'quizType' => 'dakuten',
            ]);
        })->name('language.dakuten-quiz');

        Route::get('/handakuten-quiz', function (string $lang) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/BasicHiraganaQuiz', [
                'languageId' => $slug,
                'quizType' => 'handakuten',
            ]);
        })->name('language.handakuten-quiz');

        Route::get('/mixed-hiragana-quiz', function (string $lang) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/BasicHiraganaQuiz', [
                'languageId' => $slug,
                'quizType' => 'mixed',
            ]);
        })->name('language.mixed-hiragana-quiz');

        // Generic quiz route for other quizzes
        Route::get('/practice/{quiz}', function (string $lang, string $quiz) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Dashboard/Japanese/Quiz', [
                'quizId' => $quiz,
            ]);
        })->name('language.quiz');

        Route::get('/progress', function (string $lang) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Progress', [
                'languageId' => $slug,
            ]);
        })->name('language.progress');

        Route::get('/achievements', function (string $lang) use ($allowedLanguages) {
            $slug = strtolower($lang);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Achievements', [
                'languageId' => $slug,
            ]);
        })->name('language.achievements');
    });


    // Legacy redirects so old bookmarks keep working
    Route::redirect('/dashboard/profile', '/profile');
    Route::redirect('/dashboard/settings', '/settings');
});

Route::middleware('auth')->group(function () {
    Route::get('/account', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
