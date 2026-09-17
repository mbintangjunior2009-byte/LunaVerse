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

Route::get('/features', function () {
    return Inertia::render('Features');
})->name('features');

Route::get('/languages-info', function () {
    return Inertia::render('PublicLanguages');
})->name('public.languages');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('pricing');

Route::get('/community', function () {
    return Inertia::render('Community');
})->name('community');

Route::get('/languages', function () {
    if (Auth::check()) {
        return Inertia::render('Dashboard/Languages');
    }

    return Inertia::render('PublicLanguages');
})->name('languages');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');

    // Practice routes with unlock progression
    Route::get('/practice', [\App\Http\Controllers\PracticeController::class, 'index'])->name('practice');
    Route::post('/practice/submit', [\App\Http\Controllers\PracticeController::class, 'submit'])->name('practice.submit');
    Route::get('/api/practice/questions', [\App\Http\Controllers\PracticeController::class, 'getQuestions'])->name('api.practice.questions');

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

    Route::prefix('languages/{language}')->group(function () use ($allowedLanguages) {
        Route::get('/', function (string $language) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Hub', [
                'languageId' => $slug,
            ]);
        })->name('languages.show');

        Route::get('/study', function (string $language) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Study', [
                'languageId' => $slug,
            ]);
        })->name('languages.study');

        Route::get('/study/{lesson}', function (string $language, string $lesson) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Lesson', [
                'languageId' => $slug,
                'lessonId' => $lesson,
            ]);
        })->name('languages.study.lesson');

        Route::get('/practice', function (string $language) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Practice', [
                'languageId' => $slug,
            ]);
        })->name('languages.practice');

        // Hiragana quiz route - must be defined BEFORE the generic {category} route
        Route::get('/practice/hiragana', function (string $language) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/HiraganaQuiz', [
                'languageId' => $slug,
                'quizId' => 'basic-hiragana',
            ]);
        })->name('languages.practice.hiragana');

        // Generic practice category route
        Route::get('/practice/{category}', function (string $language, string $category) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Practice', [
                'languageId' => $slug,
                'category' => $category,
            ]);
        })->name('languages.practice.show');

        Route::get('/vocabulary', function (string $language) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Vocabulary', [
                'languageId' => $slug,
            ]);
        })->name('languages.vocabulary');

        Route::get('/progress', function (string $language) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Progress', [
                'languageId' => $slug,
            ]);
        })->name('languages.progress');

        Route::get('/achievements', function (string $language) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Achievements', [
                'languageId' => $slug,
            ]);
        })->name('languages.achievements');
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
