/**
 * Language Progress System
 * Generic progress tracking for all languages
 */

import { getTotalLessonCount as getTotalLessonCountFromCurriculum } from '@/data/languageCurriculum';

const STORAGE_KEY_PREFIX = 'linguanova.';

/**
 * Load progress for a specific language
 */
export function loadLanguageProgress(languageId) {
    if (typeof window === 'undefined') {
        return { completed: [], lastLessonId: null, xp: 0 };
    }

    try {
        const raw = window.localStorage.getItem(`${STORAGE_KEY_PREFIX}${languageId}.progress`);
        if (!raw) {
            return { completed: [], lastLessonId: null, xp: 0 };
        }
        const parsed = JSON.parse(raw);
        return {
            completed: Array.isArray(parsed.completed) ? parsed.completed : [],
            lastLessonId: parsed.lastLessonId ?? null,
            xp: Number.isFinite(parsed.xp) ? parsed.xp : 0,
        };
    } catch {
        return { completed: [], lastLessonId: null, xp: 0 };
    }
}

/**
 * Save progress for a specific language
 */
export function saveLanguageProgress(languageId, progress) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(`${STORAGE_KEY_PREFIX}${languageId}.progress`, JSON.stringify(progress));
}

/**
 * Mark a lesson as complete for a specific language
 */
export function markLessonComplete(languageId, lessonId, xpAward = 50) {
    const progress = loadLanguageProgress(languageId);
    const alreadyCompleted = progress.completed.includes(lessonId);
    let xpAwarded = 0;

    if (!alreadyCompleted) {
        progress.completed = [...progress.completed, lessonId];
        xpAwarded = xpAward;
        progress.xp = (progress.xp || 0) + xpAwarded;
    }

    progress.lastLessonId = lessonId;
    saveLanguageProgress(languageId, progress);

    return {
        progress,
        xpAwarded,
        alreadyCompleted,
    };
}

/**
 * Set the last lesson for a specific language
 */
export function setLastLesson(languageId, lessonId) {
    const progress = loadLanguageProgress(languageId);
    progress.lastLessonId = lessonId;
    saveLanguageProgress(languageId, progress);
    return progress;
}

/**
 * Get lesson progress percentage for a specific language
 */
export function getLessonProgressPercent(languageId, lessonId, completedIds) {
    if (completedIds.includes(lessonId)) return 100;
    if (typeof window === 'undefined') return 0;
    try {
        const raw = window.localStorage.getItem(`${STORAGE_KEY_PREFIX}${languageId}.partial.${lessonId}`);
        const value = Number(raw);
        return Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
    } catch {
        return 0;
    }
}

/**
 * Set partial progress for a lesson in a specific language
 */
export function setLessonPartialProgress(languageId, lessonId, percent) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(
        `${STORAGE_KEY_PREFIX}${languageId}.partial.${lessonId}`,
        String(Math.min(100, Math.max(0, Math.round(percent))))
    );
}

/**
 * Get total XP across all languages
 */
export function getTotalXP() {
    if (typeof window === 'undefined') return 0;
    const languages = ['japanese', 'chinese', 'korean', 'english', 'spanish'];
    return languages.reduce((total, langId) => {
        const progress = loadLanguageProgress(langId);
        return total + (progress.xp || 0);
    }, 0);
}

/**
 * Reset progress for a specific language (for testing purposes)
 */
export function resetLanguageProgress(languageId) {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(`${STORAGE_KEY_PREFIX}${languageId}.progress`);
    // Also remove partial progress
    const keys = Object.keys(window.localStorage);
    keys.forEach(key => {
        if (key.startsWith(`${STORAGE_KEY_PREFIX}${languageId}.partial.`)) {
            window.localStorage.removeItem(key);
        }
    });
}

/**
 * Get total lesson count for a specific language
 * Delegates to the curriculum system
 */
export function getTotalLessonCount(languageId) {
    return getTotalLessonCountFromCurriculum(languageId);
}
    