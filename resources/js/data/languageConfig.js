/**
 * Language Configuration System
 * Centralized configuration for all supported languages in the LinguaNova platform.
 */

export const languageConfig = {
    japanese: {
        id: 'japanese',
        name: 'Japanese',
        nativeName: '日本語',
        flag: '🇯🇵',
        themeColor: '#B95FFF',
        themeColorLight: '#D9A3FF',
        rtl: false,
        certification: {
            name: 'JLPT',
            levels: ['N5', 'N4', 'N3', 'N2', 'N1'],
            currentLevel: 'N5',
        },
        levels: [
            {
                id: 'beginner',
                name: 'Beginner',
                description: 'Build the foundations: kana, numbers, greetings, core vocab, and starter grammar.',
                estimatedHours: 120,
                order: 1,
            },
            {
                id: 'intermediate',
                name: 'Intermediate',
                description: 'Expand toward JLPT N4 skills with vocabulary, grammar, kanji, reading, and listening.',
                estimatedHours: 350,
                order: 2,
            },
            {
                id: 'advanced',
                name: 'Advanced',
                description: 'Push toward N3–N2, keigo, business Japanese, and fluent skills.',
                estimatedHours: 600,
                order: 3,
            },
        ],
        studyCategories: [
            { 
                id: 'hiragana', 
                name: 'Hiragana', 
                icon: 'あ', 
                description: 'Japanese phonetic script',
                lessons: [
                    { id: 'hiragana',   title: 'Basic Hiragana',       difficulty: 'Beginner', time: '45 min' },
                    { id: 'dakuten',    title: 'Dakuten',               difficulty: 'Beginner', time: '25 min' },
                    { id: 'handakuten', title: 'Handakuten',            difficulty: 'Beginner', time: '20 min' },
                    { id: 'yoon',       title: 'Combination Kana (Yoon)', difficulty: 'Beginner', time: '30 min' },
                ]
            },
            { 
                id: 'katakana', 
                name: 'Katakana', 
                icon: 'ア', 
                description: 'Script for foreign words',
                lessons: [
                    { id: 'katakana', title: 'Katakana Basics', difficulty: 'Beginner', time: '45 min' },
                ]
            },
            { 
                id: 'kanji', 
                name: 'Kanji', 
                icon: '漢', 
                description: 'Chinese characters',
                lessons: [
                    { id: 'basic-kanji',    title: 'Basic Kanji (N5)',  difficulty: 'Beginner',      time: '50 min' },
                    { id: 'jlpt-n4-kanji',  title: 'JLPT N4 Kanji',    difficulty: 'Intermediate',  time: '60 min' },
                ]
            },
            { 
                id: 'grammar', 
                name: 'Grammar', 
                icon: '📝', 
                description: 'Sentence structure and patterns',
                lessons: [
                    { id: 'basic-grammar',    title: 'Basic Grammar',     difficulty: 'Beginner',     time: '50 min' },
                    { id: 'jlpt-n4-grammar',  title: 'JLPT N4 Grammar',  difficulty: 'Intermediate', time: '60 min' },
                ]
            },
            { 
                id: 'vocabulary', 
                name: 'Vocabulary', 
                icon: '語', 
                description: 'Essential words and phrases',
                lessons: [
                    { id: 'greetings',          title: 'Greetings',          difficulty: 'Beginner',      time: '30 min' },
                    { id: 'numbers',            title: 'Numbers',            difficulty: 'Beginner',      time: '35 min' },
                    { id: 'basic-vocabulary',   title: 'Basic Vocabulary',   difficulty: 'Beginner',      time: '40 min' },
                    { id: 'jlpt-n4-vocabulary', title: 'JLPT N4 Vocabulary', difficulty: 'Intermediate',  time: '60 min' },
                ]
            },
            { 
                id: 'listening', 
                name: 'Listening', 
                icon: '🎧', 
                description: 'Audio comprehension',
                lessons: [
                    { id: 'listening-practice', title: 'Listening Practice', difficulty: 'Intermediate', time: '45 min' },
                    { id: 'listening',          title: 'Advanced Listening', difficulty: 'Advanced',     time: '55 min' },
                ]
            },
        ],
        practiceCategories: [
            { 
                id: 'hiragana', 
                name: 'Hiragana', 
                icon: 'あ', 
                description: 'Master Hiragana characters',
                questions: 80,
                xpReward: 200,
                difficulty: 'Beginner'
            },
            { 
                id: 'katakana', 
                name: 'Katakana', 
                icon: 'ア', 
                description: 'Test katakana recognition',
                questions: 20,
                xpReward: 50,
                difficulty: 'Beginner'
            },
            { 
                id: 'kanji', 
                name: 'Kanji', 
                icon: '💮', 
                description: 'Character recognition',
                questions: 15,
                xpReward: 75,
                difficulty: 'Intermediate'
            },
            { 
                id: 'vocabulary', 
                name: 'Vocabulary', 
                icon: '🔤', 
                description: 'Test your word knowledge',
                questions: 25,
                xpReward: 60,
                difficulty: 'Beginner'
            },
            { 
                id: 'grammar', 
                name: 'Grammar', 
                icon: '📝', 
                description: 'Practice sentence patterns',
                questions: 20,
                xpReward: 70,
                difficulty: 'Intermediate'
            },
            { 
                id: 'listening', 
                name: 'Listening', 
                icon: '🎧', 
                description: 'Audio comprehension tests',
                questions: 15,
                xpReward: 80,
                difficulty: 'Intermediate'
            }
        ],
        achievements: [
            { id: 'first_lesson', title: 'First Lesson', desc: 'Complete your first lesson', icon: '🌱', xpReward: 50 },
            { id: 'complete_beginner', title: 'Complete Beginner', desc: 'Finish the beginner course', icon: '🎯', xpReward: 500 },
            { id: '100_vocabulary', title: '100 Vocabulary', desc: 'Learn 100 words', icon: '📚', xpReward: 150 },
            { id: '30_day_streak', title: '30-Day Streak', desc: 'Study for 30 consecutive days', icon: '🔥', xpReward: 400 },
            { id: 'jlpt_n5_ready', title: 'JLPT N5 Ready', desc: 'Reach JLPT N5 proficiency', icon: '🎓', xpReward: 1000 },
            { id: 'jlpt_n4_ready', title: 'JLPT N4 Ready', desc: 'Reach JLPT N4 proficiency', icon: '🏆', xpReward: 2000 },
        ],
    },
    chinese: {
        id: 'chinese',
        name: 'Chinese',
        nativeName: '中文',
        flag: '🇨🇳',
        themeColor: '#E53935',
        themeColorLight: '#FF6B6B',
        rtl: false,
        certification: {
            name: 'HSK',
            levels: ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'],
            currentLevel: 'HSK 1',
        },
        levels: [
            {
                id: 'beginner',
                name: 'Beginner',
                description: 'Master Pinyin, tones, basic characters, and everyday conversations.',
                estimatedHours: 100,
                order: 1,
            },
            {
                id: 'intermediate',
                name: 'Intermediate',
                description: 'Build vocabulary, grammar patterns, and reading skills for HSK 3-4.',
                estimatedHours: 300,
                order: 2,
            },
            {
                id: 'advanced',
                name: 'Advanced',
                description: 'Achieve HSK 5-6 proficiency with complex grammar and fluency.',
                estimatedHours: 500,
                order: 3,
            },
        ],
        studyCategories: [
            { 
                id: 'pinyin', 
                name: 'Pinyin', 
                icon: 'a', 
                description: 'Romanization and tones',
                lessons: [
                    { id: 'pinyin-basics', title: 'Pinyin Basics', difficulty: 'Beginner', time: '40 min' },
                    { id: 'basic-tones', title: 'Basic Tones', difficulty: 'Beginner', time: '35 min' },
                    { id: 'numbers', title: 'Numbers', difficulty: 'Beginner', time: '30 min' },
                ]
            },
            { 
                id: 'vocabulary', 
                name: 'Vocabulary', 
                icon: '📚', 
                description: 'Essential words and phrases',
                lessons: [
                    { id: 'greetings', title: 'Greetings', difficulty: 'Beginner', time: '25 min' },
                    { id: 'family', title: 'Family', difficulty: 'Beginner', time: '30 min' },
                    { id: 'food', title: 'Food', difficulty: 'Beginner', time: '35 min' },
                ]
            },
            { 
                id: 'grammar', 
                name: 'Grammar', 
                icon: '📝', 
                description: 'Sentence structure',
                lessons: [
                    { id: 'basic-sentence-structure', title: 'Basic Sentence Structure', difficulty: 'Beginner', time: '30 min' },
                    { id: 'questions', title: 'Questions', difficulty: 'Beginner', time: '25 min' },
                ]
            },
            { 
                id: 'hanzi', 
                name: 'Hanzi', 
                icon: '漢', 
                description: 'Chinese characters',
                lessons: [
                    { id: 'basic-characters', title: 'Basic Characters', difficulty: 'Beginner', time: '40 min' },
                    { id: 'stroke-order', title: 'Stroke Order', difficulty: 'Beginner', time: '30 min' },
                ]
            },
        ],
        practiceCategories: [
            { id: 'vocabulary-quiz', name: 'Vocabulary Quiz', icon: '🔤', description: 'Test your word knowledge' },
            { id: 'grammar-quiz', name: 'Grammar Quiz', icon: '📝', description: 'Practice sentence patterns' },
            { id: 'listening-quiz', name: 'Listening Quiz', icon: '🎧', description: 'Audio comprehension tests' },
            { id: 'reading-quiz', name: 'Reading Quiz', icon: '📖', description: 'Reading comprehension' },
            { id: 'hanzi-quiz', name: 'Hanzi Quiz', icon: '漢', description: 'Character recognition' },
        ],
        achievements: [
            { id: 'first_lesson', title: 'First Lesson', desc: 'Complete your first lesson', icon: '🌱', xpReward: 50 },
            { id: 'master_pinyin', title: 'Master Pinyin', desc: 'Complete all Pinyin lessons', icon: 'a', xpReward: 200 },
            { id: '100_vocabulary', title: '100 Vocabulary', desc: 'Learn 100 words', icon: '📚', xpReward: 150 },
            { id: '30_day_streak', title: '30-Day Streak', desc: 'Study for 30 consecutive days', icon: '🔥', xpReward: 400 },
            { id: 'hsk3_ready', title: 'HSK 3 Ready', desc: 'Reach HSK 3 proficiency', icon: '🎓', xpReward: 1000 },
            { id: 'hsk4_ready', title: 'HSK 4 Ready', desc: 'Reach HSK 4 proficiency', icon: '🏆', xpReward: 2000 },
        ],
    },
    korean: {
        id: 'korean',
        name: 'Korean',
        nativeName: '한국어',
        flag: '🇰🇷',
        themeColor: '#1E88E5',
        themeColorLight: '#64B5F6',
        rtl: false,
        certification: {
            name: 'TOPIK',
            levels: ['TOPIK 1', 'TOPIK 2', 'TOPIK 3', 'TOPIK 4', 'TOPIK 5', 'TOPIK 6'],
            currentLevel: 'TOPIK 1',
        },
        levels: [
            {
                id: 'beginner',
                name: 'Beginner',
                description: 'Learn Hangul, basic grammar, and essential vocabulary.',
                estimatedHours: 80,
                order: 1,
            },
            {
                id: 'intermediate',
                name: 'Intermediate',
                description: 'Develop conversational skills and intermediate grammar.',
                estimatedHours: 250,
                order: 2,
            },
            {
                id: 'advanced',
                name: 'Advanced',
                description: 'Achieve fluency with advanced grammar and cultural nuances.',
                estimatedHours: 450,
                order: 3,
            },
        ],
        studyCategories: [
            { 
                id: 'hangul', 
                name: 'Hangul', 
                icon: '가', 
                description: 'Korean alphabet',
                lessons: [
                    { id: 'hangul-basics', title: 'Hangul Basics', difficulty: 'Beginner', time: '40 min' },
                    { id: 'double-consonants', title: 'Double Consonants', difficulty: 'Beginner', time: '35 min' },
                    { id: 'batchim', title: 'Batchim', difficulty: 'Beginner', time: '45 min' },
                ]
            },
            { 
                id: 'vocabulary', 
                name: 'Vocabulary', 
                icon: '📚', 
                description: 'Essential words and phrases',
                lessons: [
                    { id: 'korean-greetings', title: 'Greetings', difficulty: 'Beginner', time: '25 min' },
                    { id: 'numbers', title: 'Numbers', difficulty: 'Beginner', time: '30 min' },
                    { id: 'family', title: 'Family', difficulty: 'Beginner', time: '30 min' },
                ]
            },
            { 
                id: 'grammar', 
                name: 'Grammar', 
                icon: '�', 
                description: 'Sentence structure',
                lessons: [
                    { id: 'basic-sentence-structure', title: 'Basic Sentence Structure', difficulty: 'Beginner', time: '30 min' },
                    { id: 'particles', title: 'Particles', difficulty: 'Beginner', time: '25 min' },
                ]
            },
        ],
        practiceCategories: [
            { id: 'vocabulary-quiz', name: 'Vocabulary Quiz', icon: '🔤', description: 'Test your word knowledge' },
            { id: 'grammar-quiz', name: 'Grammar Quiz', icon: '📝', description: 'Practice sentence patterns' },
            { id: 'listening-quiz', name: 'Listening Quiz', icon: '🎧', description: 'Audio comprehension tests' },
            { id: 'reading-quiz', name: 'Reading Quiz', icon: '📖', description: 'Reading comprehension' },
            { id: 'honorifics-quiz', name: 'Honorifics Quiz', icon: '🙏', description: 'Politeness practice' },
        ],
        achievements: [
            { id: 'first_lesson', title: 'First Lesson', desc: 'Complete your first lesson', icon: '🌱', xpReward: 50 },
            { id: 'master_hangul', title: 'Master Hangul', desc: 'Complete all Hangul lessons', icon: '가', xpReward: 200 },
            { id: '100_vocabulary', title: '100 Vocabulary', desc: 'Learn 100 words', icon: '📚', xpReward: 150 },
            { id: '30_day_streak', title: '30-Day Streak', desc: 'Study for 30 consecutive days', icon: '🔥', xpReward: 400 },
            { id: 'topik2_ready', title: 'TOPIK 2 Ready', desc: 'Reach TOPIK 2 proficiency', icon: '🎓', xpReward: 1000 },
            { id: 'topik3_ready', title: 'TOPIK 3 Ready', desc: 'Reach TOPIK 3 proficiency', icon: '🏆', xpReward: 2000 },
        ],
    },
    english: {
        id: 'english',
        name: 'English',
        nativeName: 'English',
        flag: '🇺🇸',
        themeColor: '#43A047',
        themeColorLight: '#81C784',
        rtl: false,
        certification: {
            name: 'CEFR',
            levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
            currentLevel: 'A1',
        },
        levels: [
            {
                id: 'beginner',
                name: 'Beginner',
                description: 'Build foundational grammar, vocabulary, and basic conversation skills.',
                estimatedHours: 60,
                order: 1,
            },
            {
                id: 'intermediate',
                name: 'Intermediate',
                description: 'Expand vocabulary, master complex grammar, and improve fluency.',
                estimatedHours: 200,
                order: 2,
            },
            {
                id: 'advanced',
                name: 'Advanced',
                description: 'Achieve near-native fluency with idioms and nuanced expression.',
                estimatedHours: 400,
                order: 3,
            },
        ],
        studyCategories: [
            { 
                id: 'alphabet', 
                name: 'Alphabet', 
                icon: 'A', 
                description: 'English alphabet',
                lessons: [
                    { id: 'alphabet', title: 'The Alphabet', difficulty: 'Beginner', time: '30 min' },
                    { id: 'pronunciation', title: 'Basic Pronunciation', difficulty: 'Beginner', time: '35 min' },
                ]
            },
            { 
                id: 'vocabulary', 
                name: 'Vocabulary', 
                icon: '📚', 
                description: 'Essential words and phrases',
                lessons: [
                    { id: 'english-greetings', title: 'Greetings', difficulty: 'Beginner', time: '25 min' },
                    { id: 'common-words', title: 'Common Words', difficulty: 'Beginner', time: '30 min' },
                ]
            },
            { 
                id: 'grammar', 
                name: 'Grammar', 
                icon: '�', 
                description: 'Sentence structure and rules',
                lessons: [
                    { id: 'basic-grammar', title: 'Basic Grammar', difficulty: 'Beginner', time: '30 min' },
                    { id: 'sentence-structure', title: 'Sentence Structure', difficulty: 'Beginner', time: '25 min' },
                ]
            },
        ],
        practiceCategories: [
            { id: 'vocabulary-quiz', name: 'Vocabulary Quiz', icon: '🔤', description: 'Test your word knowledge' },
            { id: 'grammar-quiz', name: 'Grammar Quiz', icon: '📝', description: 'Practice sentence patterns' },
            { id: 'listening-quiz', name: 'Listening Quiz', icon: '🎧', description: 'Audio comprehension tests' },
            { id: 'reading-quiz', name: 'Reading Quiz', icon: '📖', description: 'Reading comprehension' },
            { id: 'idioms-quiz', name: 'Idioms Quiz', icon: '💬', description: 'Expression practice' },
        ],
        achievements: [
            { id: 'first_lesson', title: 'First Lesson', desc: 'Complete your first lesson', icon: '🌱', xpReward: 50 },
            { id: 'grammar_master', title: 'Grammar Master', desc: 'Complete all grammar lessons', icon: '📝', xpReward: 200 },
            { id: '100_vocabulary', title: '100 Vocabulary', desc: 'Learn 100 words', icon: '📚', xpReward: 150 },
            { id: '30_day_streak', title: '30-Day Streak', desc: 'Study for 30 consecutive days', icon: '🔥', xpReward: 400 },
            { id: 'b2_ready', title: 'B2 Ready', desc: 'Reach B2 proficiency level', icon: '🎓', xpReward: 1000 },
            { id: 'c1_ready', title: 'C1 Ready', desc: 'Reach C1 proficiency level', icon: '🏆', xpReward: 2000 },
        ],
    },
    spanish: {
        id: 'spanish',
        name: 'Spanish',
        nativeName: 'Español',
        flag: '🇪🇸',
        themeColor: '#FB8C00',
        themeColorLight: '#FFB74D',
        rtl: false,
        certification: {
            name: 'CEFR',
            levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
            currentLevel: 'A1',
        },
        levels: [
            {
                id: 'beginner',
                name: 'Beginner',
                description: 'Learn basic grammar, vocabulary, and essential conversation skills.',
                estimatedHours: 70,
                order: 1,
            },
            {
                id: 'intermediate',
                name: 'Intermediate',
                description: 'Master subjunctive, expand vocabulary, and improve fluency.',
                estimatedHours: 220,
                order: 2,
            },
            {
                id: 'advanced',
                name: 'Advanced',
                description: 'Achieve fluency with complex grammar and cultural nuances.',
                estimatedHours: 420,
                order: 3,
            },
        ],
        studyCategories: [
            { 
                id: 'alphabet', 
                name: 'Alphabet', 
                icon: 'A', 
                description: 'Spanish alphabet',
                lessons: [
                    { id: 'spanish-alphabet', title: 'The Alphabet', difficulty: 'Beginner', time: '30 min' },
                    { id: 'spanish-pronunciation', title: 'Basic Pronunciation', difficulty: 'Beginner', time: '35 min' },
                ]
            },
            { 
                id: 'vocabulary', 
                name: 'Vocabulary', 
                icon: '📚', 
                description: 'Essential words and phrases',
                lessons: [
                    { id: 'spanish-greetings', title: 'Greetings', difficulty: 'Beginner', time: '25 min' },
                    { id: 'common-words', title: 'Common Words', difficulty: 'Beginner', time: '30 min' },
                ]
            },
            { 
                id: 'grammar', 
                name: 'Grammar', 
                icon: '�', 
                description: 'Sentence structure and rules',
                lessons: [
                    { id: 'basic-grammar', title: 'Basic Grammar', difficulty: 'Beginner', time: '30 min' },
                    { id: 'conjugation', title: 'Conjugation', difficulty: 'Beginner', time: '35 min' },
                ]
            },
        ],
        practiceCategories: [
            { id: 'vocabulary-quiz', name: 'Vocabulary Quiz', icon: '🔤', description: 'Test your word knowledge' },
            { id: 'grammar-quiz', name: 'Grammar Quiz', icon: '📝', description: 'Practice sentence patterns' },
            { id: 'listening-quiz', name: 'Listening Quiz', icon: '🎧', description: 'Audio comprehension tests' },
            { id: 'reading-quiz', name: 'Reading Quiz', icon: '📖', description: 'Reading comprehension' },
            { id: 'conjugation-quiz', name: 'Conjugation Quiz', icon: '🔄', description: 'Verb tense practice' },
        ],
        achievements: [
            { id: 'first_lesson', title: 'First Lesson', desc: 'Complete your first lesson', icon: '🌱', xpReward: 50 },
            { id: 'subjunctive_master', title: 'Subjunctive Master', desc: 'Master subjunctive mood', icon: '📝', xpReward: 200 },
            { id: '100_vocabulary', title: '100 Vocabulary', desc: 'Learn 100 words', icon: '📚', xpReward: 150 },
            { id: '30_day_streak', title: '30-Day Streak', desc: 'Study for 30 consecutive days', icon: '🔥', xpReward: 400 },
            { id: 'b2_ready', title: 'B2 Ready', desc: 'Reach B2 proficiency level', icon: '🎓', xpReward: 1000 },
            { id: 'c1_ready', title: 'C1 Ready', desc: 'Reach C1 proficiency level', icon: '🏆', xpReward: 2000 },
        ],
    },
};

/**
 * Get language configuration by ID
 */
export function getLanguageConfig(languageId) {
    return languageConfig[languageId] || languageConfig.japanese;
}

/**
 * Get all supported languages
 */
export function getAllLanguages() {
    return Object.values(languageConfig);
}

/**
 * Check if a language ID is supported
 */
export function isLanguageSupported(languageId) {
    return languageId in languageConfig;
}

/**
 * Get language theme color
 */
export function getLanguageThemeColor(languageId) {
    return getLanguageConfig(languageId)?.themeColor || '#B95FFF';
}
