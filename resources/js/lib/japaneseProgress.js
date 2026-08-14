const STORAGE_KEY = 'linguanova.japanese.study.progress';

export function loadJapaneseProgress() {
    if (typeof window === 'undefined') {
        return { completed: [], lastLessonId: null, xp: 0 };
    }

    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
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

export function saveJapaneseProgress(progress) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markLessonComplete(lessonId, xpAward = 50) {
    const progress = loadJapaneseProgress();
    const alreadyCompleted = progress.completed.includes(lessonId);
    let xpAwarded = 0;

    if (!alreadyCompleted) {
        progress.completed = [...progress.completed, lessonId];
        xpAwarded = xpAward;
        progress.xp = (progress.xp || 0) + xpAwarded;
    }

    progress.lastLessonId = lessonId;
    saveJapaneseProgress(progress);

    return {
        progress,
        xpAwarded,
        alreadyCompleted,
    };
}

export function setLastLesson(lessonId) {
    const progress = loadJapaneseProgress();
    progress.lastLessonId = lessonId;
    saveJapaneseProgress(progress);
    return progress;
}

export function getLessonProgressPercent(lessonId, completedIds) {
    if (completedIds.includes(lessonId)) return 100;
    if (typeof window === 'undefined') return 0;
    try {
        const raw = window.localStorage.getItem(`${STORAGE_KEY}.partial.${lessonId}`);
        const value = Number(raw);
        return Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
    } catch {
        return 0;
    }
}

export function setLessonPartialProgress(lessonId, percent) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(
        `${STORAGE_KEY}.partial.${lessonId}`,
        String(Math.min(100, Math.max(0, Math.round(percent))))
    );
}
