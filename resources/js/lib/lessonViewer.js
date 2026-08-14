import { getAdjacentLessons } from '@/data/japaneseCurriculum';

export function getLessonXpReward(lesson) {
    if (lesson?.xpReward) return lesson.xpReward;
    if (lesson?.difficulty === 'Advanced') return 120;
    if (lesson?.difficulty === 'Intermediate') return 80;
    return 50;
}

/**
 * Detect language from lesson data structure
 */
function detectLanguage(lesson) {
    if (lesson.examples && lesson.examples.length > 0) {
        const firstExample = lesson.examples[0];
        if (firstExample.ko) return 'korean';
        if (firstExample.zh) return 'chinese';
        if (firstExample.es && firstExample.phonetic) return 'spanish';
        if (firstExample.en && firstExample.phonetic) return 'english';
        if (firstExample.jp) return 'japanese';
    }
    return 'japanese'; // Default to Japanese
}

/**
 * Get language-specific field names
 */
function getLanguageFields(language) {
    if (language === 'korean') {
        return {
            native: 'ko',
            reading: 'romanization',
            translation: 'en',
        };
    }
    if (language === 'chinese') {
        return {
            native: 'zh',
            reading: 'pinyin',
            translation: 'en',
        };
    }
    if (language === 'spanish') {
        return {
            native: 'es',
            reading: 'phonetic',
            translation: 'en',
        };
    }
    if (language === 'english') {
        return {
            native: 'en',
            reading: 'phonetic',
            translation: 'meaning',
        };
    }
    return {
        native: 'jp',
        reading: 'reading',
        translation: 'en',
    };
}

/**
 * Builds all Lesson Viewer sections from curriculum data.
 * Uses explicit lesson fields when present; otherwise derives from examples/audio/explanation.
 * Works for both Japanese and Chinese curricula.
 */
export function buildLessonViewerContent(lesson) {
    if (!lesson) return null;

    const language = detectLanguage(lesson);
    const fields = getLanguageFields(language);
    
    const examples = lesson.examples || [];
    const audio = lesson.audio || [];

    const pronunciation = lesson.pronunciation || examples.map((item) => ({
        text: item[fields.native],
        reading: item[fields.reading],
        tip: item[fields.translation],
    }));

    const vocabulary = lesson.vocabulary || examples.map((item) => ({
        term: item[fields.native],
        reading: item[fields.reading],
        meaning: item[fields.translation],
    }));

    const sentences = lesson.sentences || examples
        .filter((item) => item[fields.native].includes('。') || item[fields.native].length >= 4)
        .map((item) => ({
            [fields.native]: item[fields.native],
            reading: item[fields.reading],
            en: item[fields.translation],
        }));

    const grammarNotes = lesson.grammarNotes || (lesson.explanation || []).slice(0, 3).map((text, index) => ({
        title: `Note ${index + 1}`,
        body: text,
    }));

    const interactive = lesson.interactive || examples.map((item) => ({
        prompt: item[fields.native],
        reading: item[fields.reading],
        answer: item[fields.translation],
        audio: item[fields.native],
    }));

    const audioClips = audio.length
        ? audio
        : pronunciation.slice(0, 4).map((item, index) => ({
            label: item.tip || `Clip ${index + 1}`,
            text: item.text,
        }));

    return {
        explanation: lesson.explanation || [],
        examples,
        pronunciation,
        audioClips,
        vocabulary,
        sentences: sentences.length ? sentences : examples.map((item) => ({
            [fields.native]: item[fields.native],
            reading: item[fields.reading],
            en: item[fields.translation],
        })),
        grammarNotes,
        interactive,
        media: lesson.media || [],
        xpReward: getLessonXpReward(lesson),
        nextLesson: getAdjacentLessons(lesson.id).next,
        previousLesson: getAdjacentLessons(lesson.id).previous,
    };
}
