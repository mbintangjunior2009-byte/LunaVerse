<?php

use App\Http\Controllers\AdminController;
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

        // Study category overview — must be defined BEFORE the generic {lesson} wildcard
        $studyCategories = ['hiragana', 'katakana', 'kanji', 'grammar', 'vocabulary', 'listening'];
        Route::get('/study/{category}', function (string $language, string $category) use ($allowedLanguages, $studyCategories) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            // If the segment matches a known study category, show the category overview
            if (in_array($category, $studyCategories, true)) {
                return Inertia::render('Language/StudyCategory', [
                    'languageId' => $slug,
                    'categoryId' => $category,
                ]);
            }
            // Otherwise treat it as a lesson ID and render the lesson viewer
            return Inertia::render('Language/Lesson', [
                'languageId' => $slug,
                'lessonId'   => $category,
            ]);
        })->name('languages.study.show');

        // Explicit lesson route keeps working (e.g. links generated with the full lesson id)
        Route::get('/study/{category}/{lesson}', function (string $language, string $category, string $lesson) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            return Inertia::render('Language/Lesson', [
                'languageId' => $slug,
                'lessonId'   => $lesson,
            ]);
        })->name('languages.study.lesson');

        Route::get('/practice', function (string $language) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            // Delegate to PracticeController so unlock/score state is passed to the view
            return app(\App\Http\Controllers\PracticeController::class)->index($slug);
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

        // Generic practice category quiz (kanji, vocabulary, grammar, listening, …)
        Route::get('/practice/{category}', function (string $language, string $category) use ($allowedLanguages) {
            $slug = strtolower($language);
            abort_unless(in_array($slug, $allowedLanguages, true), 404);
            $validCategories = ['katakana', 'kanji', 'vocabulary', 'grammar', 'listening'];
            abort_unless(in_array($category, $validCategories, true), 404);
            return Inertia::render('Language/CategoryQuiz', [
                'languageId' => $slug,
                'category'   => $category,
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

// Admin Panel Routes
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::get('/users', [AdminController::class, 'users'])->name('users.index');
    Route::put('/users/{user}', [AdminController::class, 'updateUser'])->name('users.update');
    Route::delete('/users/{user}', [AdminController::class, 'deleteUser'])->name('users.destroy');
    Route::get('/settings', [AdminController::class, 'settings'])->name('settings.index');
    Route::post('/settings', [AdminController::class, 'updateSettings'])->name('settings.update');
});

require __DIR__.'/auth.php';
