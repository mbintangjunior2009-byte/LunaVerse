const STORAGE_KEY = 'linguanova.japanese.practice.progress';

export function loadJapaneseQuizProgress() {
    if (typeof window === 'undefined') {
        return { completed: {}, bestScores: {} };
    }

    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return { completed: {}, bestScores: {} };
        const parsed = JSON.parse(raw);
        return {
            completed: parsed.completed && typeof parsed.completed === 'object' ? parsed.completed : {},
            bestScores: parsed.bestScores && typeof parsed.bestScores === 'object' ? parsed.bestScores : {},
        };
    } catch {
        return { completed: {}, bestScores: {} };
    }
}

export function saveJapaneseQuizProgress(progress) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function isQuizCompleted(quizId, progress = loadJapaneseQuizProgress()) {
    return Boolean(progress.completed?.[quizId]);
}

export function markQuizComplete(quizId, score, total) {
    const progress = loadJapaneseQuizProgress();
    progress.completed = {
        ...progress.completed,
        [quizId]: {
            completedAt: new Date().toISOString(),
            score,
            total,
        },
    };
    const percent = total ? Math.round((score / total) * 100) : 0;
    const previous = progress.bestScores?.[quizId] ?? 0;
    progress.bestScores = {
        ...progress.bestScores,
        [quizId]: Math.max(previous, percent),
    };
    saveJapaneseQuizProgress(progress);
    return progress;
}
