/**
 * Language Curriculum Loader
 * Dynamic curriculum loading for all supported languages
 */

import { japaneseCurriculum } from './japaneseCurriculum';
import { chineseCurriculum } from './chineseCurriculum';
import { koreanCurriculum } from './koreanCurriculum';
import { englishCurriculum } from './englishCurriculum';
import { spanishCurriculum } from './spanishCurriculum';

/**
 * Curriculum registry for all languages
 */
const curriculumRegistry = {
    japanese: japaneseCurriculum,
    chinese: chineseCurriculum,
    korean: koreanCurriculum,
    english: englishCurriculum,
    spanish: spanishCurriculum,
};

/**
 * Get curriculum for a specific language
 */
export function getLanguageCurriculum(languageId) {
    return curriculumRegistry[languageId] || [];
}

/**
 * Get a specific lesson by ID for a language
 */
export function getLessonById(languageId, lessonId) {
    const curriculum = getLanguageCurriculum(languageId);
    for (const category of curriculum) {
        const lesson = category.lessons.find((l) => l.id === lessonId);
        if (lesson) {
            return {
                ...lesson,
                categoryId: category.id,
                categoryTitle: category.title,
            };
        }
    }
    return null;
}

/**
 * Get adjacent lessons (previous and next) for a given lesson
 */
export function getAdjacentLessons(languageId, lessonId) {
    const curriculum = getLanguageCurriculum(languageId);
    const allLessons = [];

    curriculum.forEach((category) => {
        category.lessons.forEach((lesson) => {
            allLessons.push({
                ...lesson,
                categoryId: category.id,
                categoryTitle: category.title,
            });
        });
    });

    const currentIndex = allLessons.findIndex((l) => l.id === lessonId);

    return {
        previous: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
        next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
    };
}

/**
 * Check if a lesson is unlocked based on completed lessons
 */
export function isLessonUnlocked(languageId, lessonId, completedIds) {
    const curriculum = getLanguageCurriculum(languageId);
    const allLessons = [];

    curriculum.forEach((category) => {
        category.lessons.forEach((lesson) => {
            allLessons.push(lesson.id);
        });
    });

    const lessonIndex = allLessons.indexOf(lessonId);

    // First lesson is always unlocked
    if (lessonIndex === 0) return true;

    // Lesson is unlocked if the previous lesson is completed
    const previousLessonId = allLessons[lessonIndex - 1];
    return completedIds.includes(previousLessonId);
}

/**
 * Get total lesson count for a language
 */
export function getTotalLessonCount(languageId) {
    const curriculum = getLanguageCurriculum(languageId);
    return curriculum.reduce((total, category) => total + category.lessons.length, 0);
}

/**
 * Register a curriculum for a language (for extensibility)
 */
export function registerCurriculum(languageId, curriculum) {
    curriculumRegistry[languageId] = curriculum;
}
