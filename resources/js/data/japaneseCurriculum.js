/**
 * Japanese study curriculum — authentic teaching content for LinguaNova.
 */

const hiraganaChart = {
    type: 'kana-grid',
    title: 'Hiragana chart (gojūon)',
    rows: [
        { label: '∅', cells: ['あ a', 'い i', 'う u', 'え e', 'お o'] },
        { label: 'k', cells: ['か ka', 'き ki', 'く ku', 'け ke', 'こ ko'] },
        { label: 's', cells: ['さ sa', 'し shi', 'す su', 'せ se', 'そ so'] },
        { label: 't', cells: ['た ta', 'ち chi', 'つ tsu', 'て te', 'と to'] },
        { label: 'n', cells: ['な na', 'に ni', 'ぬ nu', 'ね ne', 'の no'] },
        { label: 'h', cells: ['は ha', 'ひ hi', 'ふ fu', 'へ he', 'ほ ho'] },
        { label: 'm', cells: ['ま ma', 'み mi', 'む mu', 'め me', 'も mo'] },
        { label: 'y', cells: ['や ya', '—', 'ゆ yu', '—', 'よ yo'] },
        { label: 'r', cells: ['ら ra', 'り ri', 'る ru', 'れ re', 'ろ ro'] },
        { label: 'w', cells: ['わ wa', '—', '—', '—', 'を o'] },
        { label: 'n', cells: ['ん n', '—', '—', '—', '—'] },
    ],
};

const katakanaChart = {
    type: 'kana-grid',
    title: 'Katakana chart (gojūon)',
    rows: [
        { label: '∅', cells: ['ア a', 'イ i', 'ウ u', 'エ e', 'オ o'] },
        { label: 'k', cells: ['カ ka', 'キ ki', 'ク ku', 'ケ ke', 'コ ko'] },
        { label: 's', cells: ['サ sa', 'シ shi', 'ス su', 'セ se', 'ソ so'] },
        { label: 't', cells: ['タ ta', 'チ chi', 'ツ tsu', 'テ te', 'ト to'] },
        { label: 'n', cells: ['ナ na', 'ニ ni', 'ヌ nu', 'ネ ne', 'ノ no'] },
        { label: 'h', cells: ['ハ ha', 'ヒ hi', 'フ fu', 'ヘ he', 'ホ ho'] },
        { label: 'm', cells: ['マ ma', 'ミ mi', 'ム mu', 'メ me', 'モ mo'] },
        { label: 'y', cells: ['ヤ ya', '—', 'ユ yu', '—', 'ヨ yo'] },
        { label: 'r', cells: ['ラ ra', 'リ ri', 'ル ru', 'レ re', 'ロ ro'] },
        { label: 'w', cells: ['ワ wa', '—', '—', '—', 'ヲ o'] },
        { label: 'n', cells: ['ン n', '—', '—', '—', '—'] },
    ],
};

export const japaneseCurriculum = [
    {
        id: 'beginner',
        title: 'Beginner',
        description: 'Build the foundations: kana, numbers, greetings, core vocab, and starter grammar.',
        lessons: [
            {
                id: 'hiragana',
                title: 'Hiragana',
                estimatedTime: '45 min',
                difficulty: 'Beginner',
                explanation: [
                    'Hiragana (ひらがな) is one of the three Japanese writing systems. It represents every syllable in native Japanese words and grammatical endings.',
                    'There are 46 basic characters in the gojūon order. Each character maps to a consonant–vowel pair (or a vowel alone), such as か = ka.',
                    'You will see hiragana in almost every sentence: verb endings (ます), particles (は, を), and words without kanji (ありがとう).',
                    'Stroke order matters for legible handwriting and for recognizing characters quickly when reading.',
                ],
                examples: [
                    { jp: 'あいうえお', reading: 'a i u e o', en: 'The five vowels' },
                    { jp: 'こんにちは', reading: 'konnichiwa', en: 'Hello (daytime greeting)' },
                    { jp: 'ねこ', reading: 'neko', en: 'Cat' },
                    { jp: 'すし', reading: 'sushi', en: 'Sushi' },
                ],
                media: [hiraganaChart],
                audio: [
                    { label: 'Vowels', text: 'あいうえお' },
                    { label: 'Greeting', text: 'こんにちは' },
                    { label: 'Cat', text: 'ねこ' },
                ],
            },
            {
                id: 'dakuten',
                title: 'Dakuten',
                estimatedTime: '25 min',
                difficulty: 'Beginner',
                explanation: [
                    'Dakuten (゛), also called ten-ten, is a voicing mark added to certain kana to change the consonant.',
                    'か行 becomes が行: か→が (ka→ga). さ→ざ, た→だ, は→ば.',
                    'し with dakuten is usually romanized as ji (じ), and ち becomes ji/di (じ/ぢ) — in modern Japanese じ is far more common than ぢ.',
                    'Mastering dakuten doubles the syllables you can read without learning entirely new shapes.',
                ],
                examples: [
                    { jp: 'がっこう', reading: 'gakkō', en: 'School' },
                    { jp: 'すしざかな', reading: 'sushizakana', en: 'Sushi and fish (compound feel)' },
                    { jp: 'でんしゃ', reading: 'densha', en: 'Train' },
                    { jp: 'ばなな', reading: 'banana', en: 'Banana (loanword in hiragana)' },
                ],
                media: [{
                    type: 'pair-grid',
                    title: 'Dakuten pairs',
                    pairs: [
                        ['か ka', 'が ga'], ['き ki', 'ぎ gi'], ['く ku', 'ぐ gu'], ['け ke', 'げ ge'], ['こ ko', 'ご go'],
                        ['さ sa', 'ざ za'], ['し shi', 'じ ji'], ['す su', 'ず zu'], ['せ se', 'ぜ ze'], ['そ so', 'ぞ zo'],
                        ['た ta', 'だ da'], ['ち chi', 'ぢ ji'], ['つ tsu', 'づ zu'], ['て te', 'で de'], ['と to', 'ど do'],
                        ['は ha', 'ば ba'], ['ひ hi', 'び bi'], ['ふ fu', 'ぶ bu'], ['へ he', 'べ be'], ['ほ ho', 'ぼ bo'],
                    ],
                }],
                audio: [
                    { label: 'School', text: 'がっこう' },
                    { label: 'Train', text: 'でんしゃ' },
                ],
            },
            {
                id: 'handakuten',
                title: 'Handakuten',
                estimatedTime: '20 min',
                difficulty: 'Beginner',
                explanation: [
                    'Handakuten (゜), the maru or circle mark, appears only on the h-column and turns h into p.',
                    'は→ぱ (ha→pa), ひ→ぴ, ふ→ぷ, へ→ぺ, ほ→ぽ.',
                    'You will meet these sounds often in onomatopoeia and loanwords: ピアノ (piano), ペット (pet).',
                    'Together, dakuten and handakuten complete the voiced and p-sound sets for kana literacy.',
                ],
                examples: [
                    { jp: 'ぱん', reading: 'pan', en: 'Bread' },
                    { jp: 'えんぴつ', reading: 'enpitsu', en: 'Pencil' },
                    { jp: 'っぽい', reading: 'ppoi', en: 'Suffix meaning “-ish”' },
                    { jp: 'ぴかぴか', reading: 'pikapika', en: 'Sparkling / shiny (onomatopoeia)' },
                ],
                media: [{
                    type: 'pair-grid',
                    title: 'Handakuten (h → p)',
                    pairs: [
                        ['は ha', 'ぱ pa'], ['ひ hi', 'ぴ pi'], ['ふ fu', 'ぷ pu'], ['へ he', 'ぺ pe'], ['ほ ho', 'ぽ po'],
                    ],
                }],
                audio: [
                    { label: 'Bread', text: 'ぱん' },
                    { label: 'Pencil', text: 'えんぴつ' },
                    { label: 'Sparkling', text: 'ぴかぴか' },
                ],
            },
            {
                id: 'yoon',
                title: 'Yoon',
                estimatedTime: '30 min',
                difficulty: 'Beginner',
                explanation: [
                    'Yōon (拗音) are contracted sounds formed with a small ゃ/ゅ/ょ after an i-column kana.',
                    'き + ゃ = きゃ (kya). し + ゅ = しゅ (shu). ち + ょ = ちょ (cho).',
                    'The second kana must be written smaller; きや (kiya) is two full syllables, while きゃ (kya) is one.',
                    'Yōon appears constantly in names, verbs, and Sino-Japanese vocabulary (きょう, しゃしん).',
                ],
                examples: [
                    { jp: 'きょう', reading: 'kyō', en: 'Today' },
                    { jp: 'しゃしん', reading: 'shashin', en: 'Photograph' },
                    { jp: 'おちゃ', reading: 'ocha', en: 'Tea' },
                    { jp: 'りゅうがく', reading: 'ryūgaku', en: 'Studying abroad' },
                ],
                media: [{
                    type: 'pair-grid',
                    title: 'Common yōon',
                    pairs: [
                        ['きゃ kya', 'きゅ kyu'], ['きょ kyo', 'ぎゃ gya'],
                        ['しゃ sha', 'しゅ shu'], ['しょ sho', 'じゃ ja'],
                        ['ちゃ cha', 'ちゅ chu'], ['ちょ cho', 'にゃ nya'],
                        ['ひゃ hya', 'みゃ mya'], ['りゃ rya', 'びょう byō'],
                    ],
                }],
                audio: [
                    { label: 'Today', text: 'きょう' },
                    { label: 'Photo', text: 'しゃしん' },
                    { label: 'Tea', text: 'おちゃ' },
                ],
            },
            {
                id: 'katakana',
                title: 'Katakana',
                estimatedTime: '45 min',
                difficulty: 'Beginner',
                explanation: [
                    'Katakana (カタカナ) mirrors hiragana’s sounds but uses angular shapes. It marks loanwords, foreign names, onomatopoeia, and emphasis.',
                    'Reading katakana is essential for menus, tech terms, and brand names: コーヒー, スマホ, アメリカ.',
                    'The gojūon order is the same as hiragana, so your sound knowledge transfers directly.',
                    'Long vowels in katakana are often written with a chōonpu dash: コーヒー (kōhī).',
                ],
                examples: [
                    { jp: 'コーヒー', reading: 'kōhī', en: 'Coffee' },
                    { jp: 'アメリカ', reading: 'Amerika', en: 'America' },
                    { jp: 'パソコン', reading: 'pasokon', en: 'Personal computer' },
                    { jp: 'タクシー', reading: 'takushī', en: 'Taxi' },
                ],
                media: [katakanaChart],
                audio: [
                    { label: 'Coffee', text: 'コーヒー' },
                    { label: 'America', text: 'アメリカ' },
                    { label: 'Taxi', text: 'タクシー' },
                ],
            },
            {
                id: 'numbers',
                title: 'Numbers',
                estimatedTime: '35 min',
                difficulty: 'Beginner',
                explanation: [
                    'Japanese numbers use Sino-Japanese readings for counting (いち, に, さん) and native readings in some counters and set phrases.',
                    'Learn 1–10 thoroughly, then 11–99 by combining tens and ones: 二十三 = にじゅうさん (23).',
                    'Watch special readings before counters: 一人 (ひとり), 二人 (ふたり), 三つ (みっつ).',
                    'Zero is ゼロ or れい; phone numbers often use ゼロ and の for pauses.',
                ],
                examples: [
                    { jp: '一、二、三', reading: 'ichi, ni, san', en: '1, 2, 3' },
                    { jp: '十五', reading: 'jūgo', en: '15' },
                    { jp: '百', reading: 'hyaku', en: '100' },
                    { jp: '三千円', reading: 'sanzen-en', en: '3,000 yen' },
                ],
                media: [{
                    type: 'pair-grid',
                    title: 'Numbers 1–10',
                    pairs: [
                        ['1 一 いち', '2 二 に'], ['3 三 さん', '4 四 よん/し'],
                        ['5 五 ご', '6 六 ろく'], ['7 七 なな/しち', '8 八 はち'],
                        ['9 九 きゅう/く', '10 十 じゅう'],
                    ],
                }],
                audio: [
                    { label: '1–5', text: 'いち、に、さん、よん、ご' },
                    { label: '15', text: 'じゅうご' },
                    { label: '3000 yen', text: 'さんぜんえん' },
                ],
            },
            {
                id: 'greetings',
                title: 'Greetings',
                estimatedTime: '30 min',
                difficulty: 'Beginner',
                explanation: [
                    'Japanese greetings change with time of day and social distance. おはようございます is polite morning speech; おはよう is casual.',
                    'こんにちは covers late morning to evening. こんばんは is for night.',
                    'When leaving, さようなら is a fuller goodbye; じゃあね is casual among friends.',
                    'Always pair greetings with appropriate bowing depth in face-to-face Japanese culture.',
                ],
                examples: [
                    { jp: 'おはようございます', reading: 'ohayō gozaimasu', en: 'Good morning (polite)' },
                    { jp: 'こんにちは', reading: 'konnichiwa', en: 'Hello / Good afternoon' },
                    { jp: 'こんばんは', reading: 'konbanwa', en: 'Good evening' },
                    { jp: 'ありがとうございます', reading: 'arigatō gozaimasu', en: 'Thank you (polite)' },
                ],
                media: [],
                audio: [
                    { label: 'Good morning', text: 'おはようございます' },
                    { label: 'Hello', text: 'こんにちは' },
                    { label: 'Thank you', text: 'ありがとうございます' },
                ],
            },
            {
                id: 'basic-vocabulary',
                title: 'Basic Vocabulary',
                estimatedTime: '40 min',
                difficulty: 'Beginner',
                explanation: [
                    'Start with high-frequency nouns: people, places, food, and daily objects. Pair each word with its kana reading.',
                    'Learn words in small thematic sets rather than long alphabetical lists — retention improves with context.',
                    'Note that many everyday nouns appear in kana even when kanji exist (ごはん, まち).',
                    'Use the particle の early: にほんのたべもの = Japanese food.',
                ],
                examples: [
                    { jp: '水', reading: 'mizu', en: 'Water' },
                    { jp: '友達', reading: 'tomodachi', en: 'Friend' },
                    { jp: '電車', reading: 'densha', en: 'Train' },
                    { jp: '日本語', reading: 'nihongo', en: 'Japanese language' },
                ],
                media: [{
                    type: 'pair-grid',
                    title: 'Core beginner nouns',
                    pairs: [
                        ['人 ひと person', '本 ほん book'],
                        ['日 ひ / にち day', '国 くに country'],
                        ['食 たべ- eat', '見 み- see'],
                        ['行 い- go', '来 く- come'],
                    ],
                }],
                audio: [
                    { label: 'Water', text: 'みず' },
                    { label: 'Friend', text: 'ともだち' },
                    { label: 'Japanese', text: 'にほんご' },
                ],
            },
            {
                id: 'basic-grammar',
                title: 'Basic Grammar',
                estimatedTime: '50 min',
                difficulty: 'Beginner',
                explanation: [
                    'Japanese is SOV: subject–object–verb. Particles mark roles: は (topic), が (subject), を (object), に/で (time/place).',
                    'The polite present/future ending is 〜ます / 〜です. Example: 食べます (tabemasu) = eat / will eat.',
                    'Questions often end with か: これは何ですか。 = What is this?',
                    'Negation uses 〜ません / 〜じゃないです for polite speech.',
                ],
                examples: [
                    { jp: 'これは本です。', reading: 'Kore wa hon desu.', en: 'This is a book.' },
                    { jp: '私は水を飲みます。', reading: 'Watashi wa mizu o nomimasu.', en: 'I drink water.' },
                    { jp: 'どこに行きますか。', reading: 'Doko ni ikimasu ka.', en: 'Where are you going?' },
                    { jp: '学生ではありません。', reading: 'Gakusei dewa arimasen.', en: 'I am not a student.' },
                ],
                media: [],
                audio: [
                    { label: 'This is a book', text: 'これはほんです。' },
                    { label: 'I drink water', text: 'わたしはみずをのみます。' },
                ],
            },
            {
                id: 'basic-kanji',
                title: 'Basic Kanji',
                estimatedTime: '50 min',
                difficulty: 'Beginner',
                explanation: [
                    'Kanji are logographic characters borrowed from Chinese. Each has meanings and often multiple readings: on’yomi (Sino-Japanese) and kun’yomi (native).',
                    'Begin with the most frequent characters taught in grade 1: 一, 人, 日, 月, 水, 火, 木, 金, 土, 山, 川.',
                    'Learn kanji with vocabulary, not in isolation — 日本 (にほん) teaches 日 and 本 together.',
                    'Stroke count and radicals help you look characters up and remember structure.',
                ],
                examples: [
                    { jp: '日本', reading: 'Nihon / Nippon', en: 'Japan' },
                    { jp: '山川', reading: 'yamakawa', en: 'Mountains and rivers' },
                    { jp: '火水', reading: 'kasui (as compound idea)', en: 'Fire and water (elements)' },
                    { jp: '今日', reading: 'kyō', en: 'Today' },
                ],
                media: [{
                    type: 'pair-grid',
                    title: 'First kanji set',
                    pairs: [
                        ['一 one', '二 two'], ['三 three', '人 person'],
                        ['日 sun/day', '月 moon/month'], ['水 water', '火 fire'],
                        ['木 tree', '山 mountain'], ['川 river', '本 book/origin'],
                    ],
                }],
                audio: [
                    { label: 'Japan', text: 'にほん' },
                    { label: 'Today', text: 'きょう' },
                ],
            },
        ],
    },
    {
        id: 'intermediate',
        title: 'Intermediate',
        description: 'Expand toward JLPT N4 skills with vocabulary, grammar, kanji, reading, and listening.',
        lessons: [
            {
                id: 'jlpt-n4-vocabulary',
                title: 'JLPT N4 Vocabulary',
                estimatedTime: '60 min',
                difficulty: 'Intermediate',
                explanation: [
                    'JLPT N4 expects roughly 1,500 vocabulary items covering daily life, school, work basics, and travel.',
                    'Focus on verbs of change (なる), giving/receiving (あげる・もらう・くれる), and adjective pairs.',
                    'Learn collocates: 約束を守る, 気をつける, 時間がかかる.',
                    'Spaced review of N5 words while adding N4 items prevents gaps that block reading.',
                ],
                examples: [
                    { jp: '経験', reading: 'keiken', en: 'Experience' },
                    { jp: '都合', reading: 'tsugō', en: 'Circumstances / convenience' },
                    { jp: '足りる', reading: 'tariru', en: 'To be enough' },
                    { jp: '申し込む', reading: 'mōshikomu', en: 'To apply / to propose' },
                ],
                media: [],
                audio: [
                    { label: 'Experience', text: 'けいけん' },
                    { label: 'To apply', text: 'もうしこむ' },
                ],
            },
            {
                id: 'jlpt-n4-grammar',
                title: 'JLPT N4 Grammar',
                estimatedTime: '60 min',
                difficulty: 'Intermediate',
                explanation: [
                    'N4 grammar introduces intention (〜つもり), suggestions (〜たらどうですか), and appearance (〜そうだ).',
                    'Potential form (食べられる / 食べれる) and volitional (行こう) become essential for conversation.',
                    'Conditional patterns 〜と / 〜たら / 〜ば / 〜なら start to differentiate by nuance.',
                    'Practice transforming dictionary-form verbs into te-form, potential, and passive/causative starters.',
                ],
                examples: [
                    { jp: '明日行くつもりです。', reading: 'Ashita iku tsumori desu.', en: 'I intend to go tomorrow.' },
                    { jp: '日本語が話せます。', reading: 'Nihongo ga hanasemasu.', en: 'I can speak Japanese.' },
                    { jp: '雨が降りそうです。', reading: 'Ame ga furisō desu.', en: 'It looks like it will rain.' },
                    { jp: '早く寝たらどうですか。', reading: 'Hayaku netara dō desu ka.', en: 'How about going to bed early?' },
                ],
                media: [],
                audio: [
                    { label: 'Intention', text: 'あしたいくつもりです。' },
                    { label: 'Ability', text: 'にほんごがはなせます。' },
                ],
            },
            {
                id: 'jlpt-n4-kanji',
                title: 'JLPT N4 Kanji',
                estimatedTime: '60 min',
                difficulty: 'Intermediate',
                explanation: [
                    'N4 adds several hundred kanji beyond N5, including 建, 業, 質, 聞, 思, 持, 待, 発, 送.',
                    'Study compounds: 新聞 (しんぶん), 意味 (いみ), 特別 (とくべつ).',
                    'Pay attention to okurigana — the kana after a kanji stem (食べる, 大きい).',
                    'Read short paragraphs and mark every new kanji with reading and one example word.',
                ],
                examples: [
                    { jp: '新聞', reading: 'shinbun', en: 'Newspaper' },
                    { jp: '意味', reading: 'imi', en: 'Meaning' },
                    { jp: '特別', reading: 'tokubetsu', en: 'Special' },
                    { jp: '出発', reading: 'shuppatsu', en: 'Departure' },
                ],
                media: [{
                    type: 'pair-grid',
                    title: 'High-frequency N4 kanji compounds',
                    pairs: [
                        ['質問 question', '問題 problem'],
                        ['説明 explanation', '練習 practice'],
                        ['連絡 contact', '都合 convenience'],
                        ['経験 experience', '失敗 failure'],
                    ],
                }],
                audio: [
                    { label: 'Newspaper', text: 'しんぶん' },
                    { label: 'Departure', text: 'しゅっぱつ' },
                ],
            },
            {
                id: 'reading-practice',
                title: 'Reading Practice',
                estimatedTime: '45 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Intermediate reading trains you to parse particles and verb endings without translating word-by-word.',
                    'Read once for gist, once for detail, then aloud for rhythm.',
                    'Guess unknown words from kanji radicals and surrounding context before checking a dictionary.',
                    'Track time: aim to finish short N4 passages in a few minutes with solid comprehension.',
                ],
                examples: [
                    {
                        jp: '昨日、友達と映画館へ行きました。とても面白い映画でした。',
                        reading: 'Kinō, tomodachi to eigakan e ikimashita. Totemo omoshiroi eiga deshita.',
                        en: 'Yesterday I went to the movie theater with a friend. It was a very interesting film.',
                    },
                    {
                        jp: '日本では電車が時間どおりに来ることが多いです。',
                        reading: 'Nihon dewa densha ga jikan dōri ni kuru koto ga ōi desu.',
                        en: 'In Japan, trains often arrive on time.',
                    },
                ],
                media: [],
                audio: [
                    { label: 'Passage 1', text: 'きのう、ともだちとえいがかんへいきました。とてもおもしろいえいがでした。' },
                    { label: 'Passage 2', text: 'にほんではでんしゃがじかんどおりにくることがおおいです。' },
                ],
            },
            {
                id: 'listening-practice',
                title: 'Listening Practice',
                estimatedTime: '45 min',
                difficulty: 'Intermediate',
                explanation: [
                    'N4 listening features polite daily conversations: shopping, schedules, simple workplace talk.',
                    'Train to catch particles and endings — they often carry the question or negation.',
                    'Listen without text first, then with transcript, then shadow the audio line by line.',
                    'Use the audio controls below to replay each line at natural speed via speech synthesis.',
                ],
                examples: [
                    { jp: 'すみません、駅はどこですか。', reading: 'Sumimasen, eki wa doko desu ka.', en: 'Excuse me, where is the station?' },
                    { jp: 'まっすぐ行って、二つ目の角を右に曲がってください。', reading: 'Massugu itte, futatsume no kado o migi ni magatte kudasai.', en: 'Go straight and turn right at the second corner.' },
                    { jp: 'わかりました。ありがとうございます。', reading: 'Wakarimashita. Arigatō gozaimasu.', en: 'Understood. Thank you.' },
                ],
                media: [],
                audio: [
                    { label: 'Where is the station?', text: 'すみません、えきはどこですか。' },
                    { label: 'Directions', text: 'まっすぐいって、ふたつめのかどをみぎにまがってください。' },
                    { label: 'Thanks', text: 'わかりました。ありがとうございます。' },
                ],
            },
        ],
    },
    {
        id: 'advanced',
        title: 'Advanced',
        description: 'Push toward N3–N2, keigo, business Japanese, and fluent skills.',
        lessons: [
            {
                id: 'jlpt-n3',
                title: 'JLPT N3',
                estimatedTime: '70 min',
                difficulty: 'Advanced',
                explanation: [
                    'N3 bridges classroom Japanese and real media. Expect denser grammar (〜うちに, 〜わけではない) and broader vocabulary.',
                    'Reading passages introduce opinions, explanations, and short essays.',
                    'Kanji load rises; prioritize newspaper-frequency characters and abstract nouns (影響, 責任, 状況).',
                    'Build a weekly cycle: vocab → grammar drills → one reading → one listening set.',
                ],
                examples: [
                    { jp: '影響', reading: 'eikyō', en: 'Influence / effect' },
                    { jp: '責任', reading: 'sekinin', en: 'Responsibility' },
                    { jp: '勉強しているうちに、好きになりました。', reading: 'Benkyō shite iru uchi ni, suki ni narimashita.', en: 'While I was studying, I came to like it.' },
                    { jp: '必ずしもそうとは限らない。', reading: 'Kanarazu shimo sō towa kagiranai.', en: 'It is not necessarily the case.' },
                ],
                media: [],
                audio: [
                    { label: 'Influence', text: 'えいきょう' },
                    { label: 'Nuance line', text: 'かならずしもそうとはかぎらない。' },
                ],
            },
            {
                id: 'jlpt-n2',
                title: 'JLPT N2',
                estimatedTime: '80 min',
                difficulty: 'Advanced',
                explanation: [
                    'N2 targets professional and academic readiness: formal writing, nuanced conjunctions, and idiomatic expressions.',
                    'Grammar includes 〜かねない, 〜をめぐって, 〜にほかならない.',
                    'Listening features meetings, announcements, and multi-speaker discussions.',
                    'Read editorials and summarize each paragraph in Japanese to force productive control.',
                ],
                examples: [
                    { jp: 'この問題をめぐって議論が続いている。', reading: 'Kono mondai o megutte giron ga tsuzuite iru.', en: 'Debate continues surrounding this issue.' },
                    { jp: '彼の成功は努力の結果にほかならない。', reading: 'Kare no seikō wa doryoku no kekka ni hokanaranai.', en: 'His success is nothing other than the result of effort.' },
                    { jp: '誤解を招きかねない表現だ。', reading: 'Gokai o maneki kanenai hyōgen da.', en: 'It is an expression that could easily cause misunderstanding.' },
                ],
                media: [],
                audio: [
                    { label: 'Debate line', text: 'このもんだいをめぐってぎろんがつづいている。' },
                ],
            },
            {
                id: 'business-japanese',
                title: 'Business Japanese',
                estimatedTime: '60 min',
                difficulty: 'Advanced',
                explanation: [
                    'Business Japanese favors set phrases for email, meetings, and phone calls.',
                    'Use お世話になっております in ongoing client relationships and よろしくお願いいたします to close requests.',
                    'Meetings rely on softening: 〜かと存じます, 検討させていただきます.',
                    'Learn the difference between internal (社内) and external (社外) politeness levels.',
                ],
                examples: [
                    { jp: 'お世話になっております。', reading: 'Osewa ni natte orimasu.', en: 'Thank you for your continued support.' },
                    { jp: '添付ファイルをご確認ください。', reading: 'Tenpu fairu o gokakunin kudasai.', en: 'Please check the attached file.' },
                    { jp: '日程を調整いただけますでしょうか。', reading: 'Nittei o chōsei itadakemasu deshō ka.', en: 'Would you be able to adjust the schedule?' },
                    { jp: '検討のほど、よろしくお願いいたします。', reading: 'Kentō no hodo, yoroshiku onegai itashimasu.', en: 'We kindly ask for your consideration.' },
                ],
                media: [],
                audio: [
                    { label: 'Opening', text: 'おせわになっております。' },
                    { label: 'Request', text: 'にっていをちょうせいいだけますでしょうか。' },
                ],
            },
            {
                id: 'keigo',
                title: 'Keigo',
                estimatedTime: '70 min',
                difficulty: 'Advanced',
                explanation: [
                    'Keigo has three pillars: sonkeigo (尊敬語, elevate the other), kenjōgo (謙譲語, humble yourself), and teineigo (丁寧語, polite です/ます).',
                    'Example: 言う → おっしゃる (sonkeigo) / 申す (kenjōgo).',
                    'Never elevate yourself or humble the customer — directionality is the core rule.',
                    'Practice rewriting casual sentences into customer-facing keigo.',
                ],
                examples: [
                    { jp: '社長がおっしゃいました。', reading: 'Shachō ga osshaimashita.', en: 'The company president said… (honorific)' },
                    { jp: '私が申します。', reading: 'Watashi ga mōshimasu.', en: 'I will say… (humble)' },
                    { jp: 'いらっしゃいますか。', reading: 'Irasshaimasu ka.', en: 'Is (someone esteemed) here?' },
                    { jp: '拝見します。', reading: 'Haiken shimasu.', en: 'I will look / read (humble).' },
                ],
                media: [{
                    type: 'pair-grid',
                    title: 'Verb keigo pairs',
                    pairs: [
                        ['行く・来る → いらっしゃる', '行く → 参る'],
                        ['言う → おっしゃる', '言う → 申す'],
                        ['見る → ご覧になる', '見る → 拝見する'],
                        ['する → なさる', 'する → いたす'],
                    ],
                }],
                audio: [
                    { label: 'Honorific say', text: 'しゃちょうがおっしゃいました。' },
                    { label: 'Humble say', text: 'わたしがもうします。' },
                ],
            },
            {
                id: 'conversation',
                title: 'Conversation',
                estimatedTime: '50 min',
                difficulty: 'Advanced',
                explanation: [
                    'Advanced conversation balances fluency with repair strategies: つまり, というより, 例えば.',
                    'Use aizuchi (あいうち) naturally: はい, ええ, そうなんですか to show active listening.',
                    'Shift register: casual with friends (だね), polite with colleagues (ですね), keigo with clients.',
                    'Practice turn-taking — interrupt lightly with ちょっといいですか when needed.',
                ],
                examples: [
                    { jp: 'それで、どう思われますか。', reading: 'Sore de, dō omowaremasu ka.', en: 'So, what do you think?' },
                    { jp: '要するに、時間が足りないということです。', reading: 'Yōsuru ni, jikan ga tarinai to iu koto desu.', en: 'In short, it means there isn’t enough time.' },
                    { jp: 'なるほど、そういう意味でしたか。', reading: 'Naruhodo, sō iu imi deshita ka.', en: 'I see — so that’s what you meant.' },
                ],
                media: [],
                audio: [
                    { label: 'Opinion ask', text: 'それで、どうおもわれますか。' },
                    { label: 'Clarifying', text: 'なるほど、そういういみでしたか。' },
                ],
            },
            {
                id: 'reading',
                title: 'Reading',
                estimatedTime: '55 min',
                difficulty: 'Advanced',
                explanation: [
                    'Advanced reading focuses on cohesion: connectors like 一方, それに対して, したがって.',
                    'Identify the author’s claim early, then supporting evidence in each paragraph.',
                    'Skim for kanji compounds that carry abstract meaning before parsing every particle.',
                    'After reading, write a three-sentence Japanese summary from memory.',
                ],
                examples: [
                    {
                        jp: '近年、リモートワークが広がる一方で、対面のコミュニケーションの重要性も再認識されている。',
                        reading: 'Kinnen, rimōto wāku ga hirogaru ippō de, taimen no komyunikēshon no jūyōsei mo saininshiki sarete iru.',
                        en: 'In recent years, while remote work has spread, the importance of face-to-face communication is also being recognized again.',
                    },
                ],
                media: [],
                audio: [
                    { label: 'Sample sentence', text: 'きんねん、リモートワークがひろがるいっぽうで、たいめんのコミュニケーションのじゅうようせいもさいにんしきされている。' },
                ],
            },
            {
                id: 'listening',
                title: 'Listening',
                estimatedTime: '55 min',
                difficulty: 'Advanced',
                explanation: [
                    'Advanced listening includes overlapping speech, fillers (えーと, あのー), and implied meaning.',
                    'Train to note the speaker’s stance: agreement, hesitation, or soft disagreement.',
                    'Replay short segments and write dictation before checking the transcript.',
                    'Focus on pitch accent differences that separate otherwise similar words when possible.',
                ],
                examples: [
                    { jp: '正直なところ、もう少し検討が必要かと思います。', reading: 'Shōjiki na tokoro, mō sukoshi kentō ga hitsuyō ka to omoimasu.', en: 'Honestly, I think a bit more consideration is needed.' },
                    { jp: 'ご提案は魅力的ですが、予算の関係で難しいかもしれません。', reading: 'Goteian wa miryokuteki desu ga, yosan no kankei de muzukashii kamoshiremasen.', en: 'Your proposal is attractive, but it may be difficult due to budget.' },
                ],
                media: [],
                audio: [
                    { label: 'Hesitation', text: 'しょうじきなところ、もうすこしけんとうがひつようかとおもいます。' },
                    { label: 'Soft refusal', text: 'ごていあんはみりょくてきですが、よさんのかんけいでむずかしいかもしれません。' },
                ],
            },
        ],
    },
];

export function flattenLessons() {
    return japaneseCurriculum.flatMap((category, categoryIndex) =>
        category.lessons.map((lesson, lessonIndex) => ({
            ...lesson,
            categoryId: category.id,
            categoryTitle: category.title,
            categoryIndex,
            lessonIndex,
        }))
    );
}

export function getLessonById(lessonId) {
    return flattenLessons().find((lesson) => lesson.id === lessonId) ?? null;
}

export function getAdjacentLessons(lessonId) {
    const all = flattenLessons();
    const index = all.findIndex((lesson) => lesson.id === lessonId);
    if (index === -1) return { previous: null, next: null };
    return {
        previous: all[index - 1] ?? null,
        next: all[index + 1] ?? null,
    };
}

export function isLessonUnlocked(lessonId, completedIds) {
    const all = flattenLessons();
    const index = all.findIndex((lesson) => lesson.id === lessonId);
    if (index <= 0) return true;
    const previous = all[index - 1];
    return completedIds.includes(previous.id);
}

export function getCategoryProgress(category, completedIds) {
    if (!category.lessons.length) return 0;
    const done = category.lessons.filter((lesson) => completedIds.includes(lesson.id)).length;
    return Math.round((done / category.lessons.length) * 100);
}
