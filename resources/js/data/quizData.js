/**
 * Quiz Data Structure
 * Database-driven quiz system for all languages
 */

// 46 Basic Hiragana Characters with their romaji
const basicHiragana = [
    { char: 'あ', romaji: 'a' },
    { char: 'い', romaji: 'i' },
    { char: 'う', romaji: 'u' },
    { char: 'え', romaji: 'e' },
    { char: 'お', romaji: 'o' },
    { char: 'か', romaji: 'ka' },
    { char: 'き', romaji: 'ki' },
    { char: 'く', romaji: 'ku' },
    { char: 'け', romaji: 'ke' },
    { char: 'こ', romaji: 'ko' },
    { char: 'さ', romaji: 'sa' },
    { char: 'し', romaji: 'shi' },
    { char: 'す', romaji: 'su' },
    { char: 'せ', romaji: 'se' },
    { char: 'そ', romaji: 'so' },
    { char: 'た', romaji: 'ta' },
    { char: 'ち', romaji: 'chi' },
    { char: 'つ', romaji: 'tsu' },
    { char: 'て', romaji: 'te' },
    { char: 'と', romaji: 'to' },
    { char: 'な', romaji: 'na' },
    { char: 'に', romaji: 'ni' },
    { char: 'ぬ', romaji: 'nu' },
    { char: 'ね', romaji: 'ne' },
    { char: 'の', romaji: 'no' },
    { char: 'は', romaji: 'ha' },
    { char: 'ひ', romaji: 'hi' },
    { char: 'ふ', romaji: 'fu' },
    { char: 'へ', romaji: 'he' },
    { char: 'ほ', romaji: 'ho' },
    { char: 'ま', romaji: 'ma' },
    { char: 'み', romaji: 'mi' },
    { char: 'む', romaji: 'mu' },
    { char: 'め', romaji: 'me' },
    { char: 'も', romaji: 'mo' },
    { char: 'や', romaji: 'ya' },
    { char: 'ゆ', romaji: 'yu' },
    { char: 'よ', romaji: 'yo' },
    { char: 'ら', romaji: 'ra' },
    { char: 'り', romaji: 'ri' },
    { char: 'る', romaji: 'ru' },
    { char: 'れ', romaji: 're' },
    { char: 'ろ', romaji: 'ro' },
    { char: 'わ', romaji: 'wa' },
    { char: 'を', romaji: 'wo' },
    { char: 'ん', romaji: 'n' },
];

const dakutenHiragana = [
    { char: 'が', romaji: 'ga' }, { char: 'ぎ', romaji: 'gi' }, { char: 'ぐ', romaji: 'gu' },
    { char: 'げ', romaji: 'ge' }, { char: 'ご', romaji: 'go' }, { char: 'ざ', romaji: 'za' },
    { char: 'じ', romaji: 'ji' }, { char: 'ず', romaji: 'zu' }, { char: 'ぜ', romaji: 'ze' },
    { char: 'ぞ', romaji: 'zo' }, { char: 'だ', romaji: 'da' }, { char: 'ぢ', romaji: 'ji' },
    { char: 'づ', romaji: 'zu' }, { char: 'で', romaji: 'de' }, { char: 'ど', romaji: 'do' },
    { char: 'ば', romaji: 'ba' }, { char: 'び', romaji: 'bi' }, { char: 'ぶ', romaji: 'bu' },
    { char: 'べ', romaji: 'be' }, { char: 'ぼ', romaji: 'bo' },
];

const handakutenHiragana = [
    { char: 'ぱ', romaji: 'pa' }, { char: 'ぴ', romaji: 'pi' }, { char: 'ぷ', romaji: 'pu' },
    { char: 'ぺ', romaji: 'pe' }, { char: 'ぽ', romaji: 'po' },
];

const mixedHiragana = [...basicHiragana, ...dakutenHiragana, ...handakutenHiragana];

function buildReadingQuestions(characters, prefix) {
    const romajiPool = characters.map((h) => h.romaji);
    return characters.map((h, index) => ({
        id: `${prefix}-r-${index + 1}`,
        type: 'multiple-choice',
        question: h.char,
        choices: generateChoices(h.romaji, romajiPool),
        answer: h.romaji,
        xp: 10,
        timeLimit: 10,
    }));
}

// Generate random choices for a question
function generateChoices(correctRomaji, allRomaji) {
    const choices = [correctRomaji];
    const otherRomaji = allRomaji.filter(r => r !== correctRomaji);
    
    // Shuffle other romaji and pick 3
    const shuffled = otherRomaji.sort(() => Math.random() - 0.5);
    choices.push(...shuffled.slice(0, 3));
    
    // Shuffle all choices
    return choices.sort(() => Math.random() - 0.5);
}

export const quizData = {
    japanese: {
        hiragana: {
            'basic-hiragana': {
                title: 'Basic Hiragana',
                description: '46 basic Hiragana characters',
                icon: 'あ',
                modes: {
                    reading: {
                        title: 'Reading Quiz',
                        description: 'Identify the correct romaji',
                        questions: buildReadingQuestions(basicHiragana, 'h-basic'),
                    },
                },
            },
            dakuten: {
                title: 'Dakuten',
                description: 'Voiced Hiragana characters',
                icon: 'が',
                modes: {
                    reading: {
                        title: 'Reading Quiz',
                        description: 'Identify voiced kana readings',
                        questions: buildReadingQuestions(dakutenHiragana, 'h-daku'),
                    },
                },
            },
            handakuten: {
                title: 'Handakuten',
                description: 'Semi-voiced Hiragana characters',
                icon: 'ぱ',
                modes: {
                    reading: {
                        title: 'Reading Quiz',
                        description: 'Identify p-sound kana readings',
                        questions: buildReadingQuestions(handakutenHiragana, 'h-hand'),
                    },
                },
            },
            mixed: {
                title: 'Mixed Challenge',
                description: 'All Hiragana characters mixed randomly',
                icon: '🎯',
                modes: {
                    reading: {
                        title: 'Reading Quiz',
                        description: 'Identify readings across all kana',
                        questions: buildReadingQuestions(mixedHiragana, 'h-mixed'),
                    },
                },
            },
        },
        katakana: {
            beginner: [],
            intermediate: []
        },
        kanji: {
            beginner: [],
            intermediate: []
        },
        vocabulary: {
            beginner: [],
            intermediate: []
        },
        grammar: {
            beginner: [],
            intermediate: []
        },
        listening: {
            beginner: [],
            intermediate: []
        },
        sentence: {
            beginner: [],
            intermediate: []
        },
        typing: {
            beginner: [],
            intermediate: []
        },
        flashcards: {
            beginner: [],
            intermediate: []
        }
    }
};

/**
 * Get quiz data for a specific language, category, and mode
 */
export function getQuizData(languageId, category, mode) {
    return quizData[languageId]?.[category]?.modes?.[mode]?.questions || [];
}

/**
 * Get quiz category info
 */
export function getQuizCategoryInfo(languageId, category) {
    return quizData[languageId]?.[category] || null;
}

/**
 * Get all quiz categories for a language
 */
export function getQuizCategories(languageId) {
    return Object.keys(quizData[languageId] || {});
}

/**
 * Get available modes for a category
 */
export function getQuizModes(languageId, category) {
    const categoryData = quizData[languageId]?.[category];
    if (categoryData?.modes) {
        return Object.keys(categoryData.modes);
    }
    return [];
}

/**
 * Get quiz by ID
 */
export function getQuizById(languageId, category, mode, quizId) {
    const quizzes = getQuizData(languageId, category, mode);
    return quizzes.find(q => q.id === quizId);
}

/**
 * Get random questions for a Hiragana quiz type
 */
export function getRandomHiraganaQuestions(quizType = 'basic-hiragana', count = 10) {
    const allQuestions = quizData.japanese?.hiragana?.[quizType]?.modes?.reading?.questions || [];
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

/** @deprecated Use getRandomHiraganaQuestions */
export function getRandomBasicHiraganaQuestions(count = 10) {
    return getRandomHiraganaQuestions('basic-hiragana', count);
}
