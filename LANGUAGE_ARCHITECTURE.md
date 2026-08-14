# Language System Architecture

## Overview
The language system has been refactored into a dynamic, reusable architecture that supports multiple languages through a single codebase.

## Supported Languages
- Japanese (🇯🇵)
- Chinese (🇨🇳)
- Korean (🇰🇷)
- English (🇺🇸)
- Spanish (🇪🇸)

## Architecture

### Configuration System
**File:** `resources/js/data/languageConfig.js`

Centralized configuration for all languages including:
- Language metadata (id, name, native name, flag)
- Theme colors
- RTL support
- Levels (Beginner, Intermediate, Advanced)
- Study categories
- Practice categories
- Achievement definitions

### Progress Tracking
**File:** `resources/js/lib/languageProgress.js`

Generic progress tracking system that works for any language:
- `loadLanguageProgress(languageId)` - Load progress for a specific language
- `saveLanguageProgress(languageId, progress)` - Save progress
- `markLessonComplete(languageId, lessonId, xpAward)` - Mark lesson as complete
- `setLastLesson(languageId, lessonId)` - Track last accessed lesson
- `getLessonProgressPercent(languageId, lessonId, completedIds)` - Get lesson progress
- `setLessonPartialProgress(languageId, lessonId, percent)` - Track partial progress

### Curriculum Management
**File:** `resources/js/data/languageCurriculum.js`

Dynamic curriculum loading system:
- `getLanguageCurriculum(languageId)` - Get curriculum for a language
- `getLessonById(languageId, lessonId)` - Get specific lesson
- `getAdjacentLessons(languageId, lessonId)` - Get previous/next lessons
- `isLessonUnlocked(languageId, lessonId, completedIds)` - Check unlock status
- `getTotalLessonCount(languageId)` - Get total lesson count
- `registerCurriculum(languageId, curriculum)` - Register new curriculum

### Reusable Components
**Directory:** `resources/js/Components/language/`

All components are language-agnostic and accept `languageId` prop:

1. **LanguageHeader** - Navigation header with language-specific branding
2. **StudyCard** - Study category/lesson card
3. **PracticeCard** - Practice quiz card
4. **ProgressCard** - Progress metric card with visual indicator
5. **AchievementCard** - Achievement/badge card with animations
6. **LessonCard** - Lesson card for study pages
7. **QuizCard** - Quiz card for practice pages
8. **VocabularyCard** - Vocabulary list display
9. **GrammarCard** - Grammar notes display
10. **ProgressBar** - Reusable progress bar component

### Dynamic Pages
**Directory:** `resources/js/Pages/Language/`

All pages work for any language through `languageId` prop:

1. **Hub** - Main language hub with overview stats and navigation
2. **Study** - Study page with all lessons organized by category
3. **Practice** - Practice page with quizzes and exercises
4. **Progress** - Progress page with detailed statistics
5. **Achievements** - Achievements page with badges and milestones
6. **Lesson** - Individual lesson viewer

## Routing

### Dynamic Routes
All language routes follow the pattern: `/language/{languageId}/{action}`

- `/language/{lang}` - Hub
- `/language/{lang}/study` - Study page
- `/language/{lang}/study/{lesson}` - Lesson viewer
- `/language/{lang}/practice` - Practice page
- `/language/{lang}/practice/{quiz}` - Quiz viewer
- `/language/{lang}/progress` - Progress page
- `/language/{lang}/achievements` - Achievements page

### Route Configuration
**File:** `routes/web.php`

The routing system uses a dynamic prefix that accepts any supported language ID:

```php
Route::prefix('language/{lang}')->group(function () {
    $allowed = ['japanese', 'chinese', 'korean', 'english', 'spanish'];
    // All routes validate language ID and pass to pages
});
```

## Adding a New Language

### 1. Add Language Configuration
Add to `languageConfig.js`:

```javascript
french: {
    id: 'french',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    themeColor: '#0055A4',
    // ... other configuration
}
```

### 2. Create Curriculum
Create curriculum data file and register it:

```javascript
import { frenchCurriculum } from './frenchCurriculum';
registerCurriculum('french', frenchCurriculum);
```

### 3. Add to Allowed Languages
Add to the allowed array in `routes/web.php`:

```php
$allowed = ['japanese', 'chinese', 'korean', 'english', 'spanish', 'french'];
```

### 4. Update Language Selection
Add to language selection UI (Languages page, etc.)

## Data Flow

1. **Route** → Passes `languageId` to page component
2. **Page Component** → Uses `languageId` to:
   - Load language configuration
   - Load language curriculum
   - Load language progress
3. **Components** → Receive `languageId` prop and render language-specific content
4. **Progress** → Stored per language using language-specific storage keys

## Storage Strategy

Progress is stored per language using localStorage keys:
- `linguanova.{languageId}.progress` - Main progress data
- `linguanova.{languageId}.partial.{lessonId}` - Partial lesson progress

## Benefits

1. **Single Codebase** - No duplicated pages for each language
2. **Easy Extensibility** - Add new languages by adding configuration
3. **Consistent UX** - All languages share the same UI patterns
4. **Maintainability** - Changes to components apply to all languages
5. **Type Safety** - Configuration provides structure for language data
6. **Performance** - Dynamic loading reduces bundle size

## Migration Notes

- Existing Japanese-specific pages remain functional
- Old routes redirect to new dynamic routes
- Japanese progress data automatically migrates to new system
- All existing Japanese components still work

## Future Enhancements

1. Add actual curriculum data for Chinese, Korean, English, Spanish
2. Implement language-specific speech synthesis
3. Add language-specific fonts and typography
4. Implement language-specific achievement logic
5. Add language comparison features
6. Implement cross-language vocabulary transfer
