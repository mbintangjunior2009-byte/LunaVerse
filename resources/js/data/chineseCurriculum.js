/**
 * Chinese Curriculum
 * Complete curriculum for learning Mandarin Chinese
 */

export const chineseCurriculum = [
    {
        id: 'beginner',
        title: 'Beginner',
        description: 'Master Pinyin, tones, basic characters, and everyday conversations.',
        lessons: [
            {
                id: 'pinyin-basics',
                title: 'Pinyin Basics',
                estimatedTime: '40 min',
                difficulty: 'Beginner',
                explanation: [
                    'Pinyin (拼音) is the official romanization system for Standard Chinese. It uses the Latin alphabet to represent the sounds of Mandarin Chinese.',
                    'Pinyin consists of initial consonants, final vowels, and tones. Each syllable in Chinese is represented by a combination of these elements.',
                    'The four main tones are: first tone (high level), second tone (rising), third tone (falling-rising), and fourth tone (falling). There is also a neutral tone.',
                    'Mastering Pinyin is essential for correct pronunciation and is the foundation for learning Chinese characters.',
                ],
                examples: [
                    { zh: 'nǐ hǎo', pinyin: 'nǐ hǎo', en: 'Hello' },
                    { zh: 'xiè xie', pinyin: 'xiè xie', en: 'Thank you' },
                    { zh: 'zài jiàn', pinyin: 'zài jiàn', en: 'Goodbye' },
                    { zh: 'duì bù qǐ', pinyin: 'duì bù qǐ', en: 'Sorry' },
                ],
                audio: [
                    { label: 'Hello', text: 'nǐ hǎo' },
                    { label: 'Thank you', text: 'xiè xie' },
                    { label: 'Goodbye', text: 'zài jiàn' },
                ],
                vocabulary: [
                    { term: '你好', reading: 'nǐ hǎo', meaning: 'Hello' },
                    { term: '谢谢', reading: 'xiè xie', meaning: 'Thank you' },
                    { term: '再见', reading: 'zài jiàn', meaning: 'Goodbye' },
                    { term: '对不起', reading: 'duì bù qǐ', meaning: 'Sorry' },
                ],
                sentences: [
                    { zh: '你好吗？', pinyin: 'nǐ hǎo ma?', en: 'How are you?' },
                    { zh: '我很好，谢谢。', pinyin: 'wǒ hěn hǎo, xiè xie.', en: 'I am very well, thank you.' },
                ],
                grammarNotes: [
                    { title: 'Basic Greetings', body: 'Chinese greetings often use the pattern "你好" (nǐ hǎo) for "hello". To ask "how are you?", add "吗" (ma) at the end: "你好吗？" (nǐ hǎo ma?)' },
                ],
            },
            {
                id: 'basic-tones',
                title: 'Basic Tones',
                estimatedTime: '35 min',
                difficulty: 'Beginner',
                explanation: [
                    'Mandarin Chinese has four main tones plus a neutral tone. Tones are essential for meaning - changing the tone can completely change the word.',
                    'First tone (¯): High level tone. Your voice stays high and flat. Example: mā (mother)',
                    'Second tone (ˊ): Rising tone. Your voice rises from middle to high. Example: má (hemp)',
                    'Third tone (ˇ): Falling-rising tone. Your voice falls then rises. Example: mǎ (horse)',
                    'Fourth tone (ˋ): Falling tone. Your voice falls from high to low. Example: mà (scold)',
                ],
                examples: [
                    { zh: 'mā', pinyin: 'mā', en: 'Mother (1st tone)' },
                    { zh: 'má', pinyin: 'má', en: 'Hemp (2nd tone)' },
                    { zh: 'mǎ', pinyin: 'mǎ', en: 'Horse (3rd tone)' },
                    { zh: 'mà', pinyin: 'mà', en: 'Scold (4th tone)' },
                ],
                audio: [
                    { label: 'Four tones', text: 'mā má mǎ mà' },
                    { label: 'First tone example', text: 'mā' },
                    { label: 'Second tone example', text: 'má' },
                ],
                vocabulary: [
                    { term: '妈', reading: 'mā', meaning: 'Mother' },
                    { term: '麻', reading: 'má', meaning: 'Hemp' },
                    { term: '马', reading: 'mǎ', meaning: 'Horse' },
                    { term: '骂', reading: 'mà', meaning: 'Scold' },
                ],
                grammarNotes: [
                    { title: 'Tone Rules', body: 'Tones are marked above vowels in Pinyin. The tone mark goes on the main vowel: a > o > e > i > u > ü. When i and u are together, the mark goes on the second one.' },
                ],
            },
            {
                id: 'numbers',
                title: 'Numbers',
                estimatedTime: '30 min',
                difficulty: 'Beginner',
                explanation: [
                    'Chinese numbers follow a logical pattern. Once you learn 1-10 and the words for tens, hundreds, thousands, etc., you can count to very high numbers.',
                    'Numbers 1-10: 一 (yī), 二 (èr), 三 (sān), 四 (sì), 五 (wǔ), 六 (liù), 七 (qī), 八 (bā), 九 (jiǔ), 十 (shí)',
                    'For numbers 11-19, combine 十 with the unit: 十一 (shí yī) = 11, 十二 (shí èr) = 12',
                    'For tens, combine the number with 十: 二十 (èr shí) = 20, 三十 (sān shí) = 30',
                ],
                examples: [
                    { zh: '一', pinyin: 'yī', en: 'One' },
                    { zh: '十', pinyin: 'shí', en: 'Ten' },
                    { zh: '一百', pinyin: 'yī bǎi', en: 'One hundred' },
                    { zh: '一千', pinyin: 'yī qiān', en: 'One thousand' },
                ],
                audio: [
                    { label: 'Numbers 1-10', text: 'yī èr sān sì wǔ liù qī bā jiǔ shí' },
                    { label: 'Eleven', text: 'shí yī' },
                    { label: 'Twenty', text: 'èr shí' },
                ],
                vocabulary: [
                    { term: '一', reading: 'yī', meaning: 'One' },
                    { term: '二', reading: 'èr', meaning: 'Two' },
                    { term: '十', reading: 'shí', meaning: 'Ten' },
                    { term: '百', reading: 'bǎi', meaning: 'Hundred' },
                ],
                sentences: [
                    { zh: '我有一个苹果。', pinyin: 'wǒ yǒu yī gè píng guǒ.', en: 'I have one apple.' },
                    { zh: '今年二十岁。', pinyin: 'jīn nián èr shí suì.', en: 'I am twenty years old this year.' },
                ],
            },
            {
                id: 'greetings',
                title: 'Greetings',
                estimatedTime: '25 min',
                difficulty: 'Beginner',
                explanation: [
                    'Chinese greetings vary depending on the time of day and the relationship between speakers.',
                    'Common greetings include 你好 (nǐ hǎo) for general use, 早上好 (zǎo shàng hǎo) for good morning, and 晚上好 (wǎn shàng hǎo) for good evening.',
                    'When addressing elders or superiors, use 您 (nín) instead of 你 (nǐ) for "you" to show respect.',
                    'Chinese people often ask about meals as a greeting: 吃了吗？ (chī le ma?) - "Have you eaten?"',
                ],
                examples: [
                    { zh: '早上好', pinyin: 'zǎo shàng hǎo', en: 'Good morning' },
                    { zh: '晚上好', pinyin: 'wǎn shàng hǎo', en: 'Good evening' },
                    { zh: '您好', pinyin: 'nín hǎo', en: 'Hello (polite)' },
                    { zh: '吃了吗？', pinyin: 'chī le ma?', en: 'Have you eaten?' },
                ],
                audio: [
                    { label: 'Good morning', text: 'zǎo shàng hǎo' },
                    { label: 'Good evening', text: 'wǎn shàng hǎo' },
                    { label: 'Polite hello', text: 'nín hǎo' },
                ],
                vocabulary: [
                    { term: '早上', reading: 'zǎo shàng', meaning: 'Morning' },
                    { term: '晚上', reading: 'wǎn shàng', meaning: 'Evening' },
                    { term: '您', reading: 'nín', meaning: 'You (polite)' },
                    { term: '吃', reading: 'chī', meaning: 'To eat' },
                ],
                sentences: [
                    { zh: '老师早上好！', pinyin: 'lǎo shī zǎo shàng hǎo!', en: 'Good morning, teacher!' },
                    { zh: '您身体好吗？', pinyin: 'nín shēn tǐ hǎo ma?', en: 'How is your health?' },
                ],
                grammarNotes: [
                    { title: 'Polite Forms', body: 'Use 您 (nín) instead of 你 (nǐ) when addressing elders, superiors, or strangers. This shows respect and politeness in Chinese culture.' },
                ],
            },
            {
                id: 'basic-vocabulary',
                title: 'Basic Vocabulary',
                estimatedTime: '45 min',
                difficulty: 'Beginner',
                explanation: [
                    'Building a strong vocabulary foundation is crucial for language learning. Start with the most common words used in daily life.',
                    'Essential categories include family members, common objects, food, and basic verbs.',
                    'Chinese characters (Hanzi) often have both meaning and sound components. Learning the most common characters first will help you recognize patterns.',
                    'Practice writing characters to remember stroke order and structure.',
                ],
                examples: [
                    { zh: '人', pinyin: 'rén', en: 'Person' },
                    { zh: '水', pinyin: 'shuǐ', en: 'Water' },
                    { zh: '饭', pinyin: 'fàn', en: 'Rice/Meal' },
                    { zh: '家', pinyin: 'jiā', en: 'Home/Family' },
                ],
                audio: [
                    { label: 'Person', text: 'rén' },
                    { label: 'Water', text: 'shuǐ' },
                    { label: 'Rice', text: 'fàn' },
                ],
                vocabulary: [
                    { term: '人', reading: 'rén', meaning: 'Person' },
                    { term: '水', reading: 'shuǐ', meaning: 'Water' },
                    { term: '饭', reading: 'fàn', meaning: 'Rice/Meal' },
                    { term: '家', reading: 'jiā', meaning: 'Home' },
                    { term: '书', reading: 'shū', meaning: 'Book' },
                    { term: '车', reading: 'chē', meaning: 'Car' },
                ],
                sentences: [
                    { zh: '我喜欢喝水。', pinyin: 'wǒ xǐ huan hē shuǐ.', en: 'I like to drink water.' },
                    { zh: '这是我的家。', pinyin: 'zhè shì wǒ de jiā.', en: 'This is my home.' },
                ],
            },
            {
                id: 'basic-grammar',
                title: 'Basic Grammar',
                estimatedTime: '40 min',
                difficulty: 'Beginner',
                explanation: [
                    'Chinese grammar is relatively simple compared to many other languages. There are no verb conjugations, no gendered nouns, and no plural forms.',
                    'Basic sentence structure is Subject-Verb-Object (SVO), similar to English: 我 (I) 吃 eat 饭 rice.',
                    'Questions are formed by adding 吗 (ma) at the end of a statement: 你好吗？',
                    'Negation uses 不 (bù) before verbs: 我不吃 (I not eat).',
                ],
                examples: [
                    { zh: '我是学生。', pinyin: 'wǒ shì xué shēng.', en: 'I am a student.' },
                    { zh: '他喜欢中国菜。', pinyin: 'tā xǐ huan zhōng guó cài.', en: 'He likes Chinese food.' },
                    { zh: '你不去吗？', pinyin: 'nǐ bú qù ma?', en: 'Are you not going?' },
                ],
                audio: [
                    { label: 'I am a student', text: 'wǒ shì xué shēng' },
                    { label: 'He likes Chinese food', text: 'tā xǐ huan zhōng guó cài' },
                ],
                vocabulary: [
                    { term: '是', reading: 'shì', meaning: 'To be' },
                    { term: '喜欢', reading: 'xǐ huan', meaning: 'To like' },
                    { term: '不', reading: 'bù', meaning: 'Not' },
                    { term: '去', reading: 'qù', meaning: 'To go' },
                ],
                sentences: [
                    { zh: '我是中国人。', pinyin: 'wǒ shì zhōng guó rén.', en: 'I am Chinese.' },
                    { zh: '她不喝茶。', pinyin: 'tā bù hē chá.', en: 'She does not drink tea.' },
                ],
                grammarNotes: [
                    { title: 'Subject-Verb-Object', body: 'Chinese uses SVO word order: Subject + Verb + Object. Example: 我 (I) + 吃 + 饭 = I eat rice.' },
                    { title: 'Questions with 吗', body: 'Add 吗 (ma) at the end of a statement to make it a yes/no question. 你好 + 吗 = 你好吗？' },
                    { title: 'Negation with 不', body: 'Place 不 (bù) before the verb to negate. 不 changes tone to second tone (bú) before fourth tones.' },
                ],
            },
            {
                id: 'basic-hanzi',
                title: 'Basic Hanzi',
                estimatedTime: '50 min',
                difficulty: 'Beginner',
                explanation: [
                    'Hanzi (汉字) are Chinese characters. Each character represents a syllable and has meaning.',
                    'Characters are composed of strokes. The order and direction of strokes is important for proper writing and recognition.',
                    'Many characters are composed of a radical (meaning component) and a phonetic component (sound hint).',
                    'Start with the most common characters. The top 100 characters cover about 50% of everyday text.',
                ],
                examples: [
                    { zh: '一', pinyin: 'yī', en: 'One (1 stroke)' },
                    { zh: '人', pinyin: 'rén', en: 'Person (2 strokes)' },
                    { zh: '大', pinyin: 'dà', en: 'Big (3 strokes)' },
                    { zh: '天', pinyin: 'tiān', en: 'Sky/Day (4 strokes)' },
                ],
                audio: [
                    { label: 'One', text: 'yī' },
                    { label: 'Person', text: 'rén' },
                    { label: 'Big', text: 'dà' },
                ],
                vocabulary: [
                    { term: '一', reading: 'yī', meaning: 'One' },
                    { term: '人', reading: 'rén', meaning: 'Person' },
                    { term: '大', reading: 'dà', meaning: 'Big' },
                    { term: '天', reading: 'tiān', meaning: 'Sky/Day' },
                    { term: '口', reading: 'kǒu', meaning: 'Mouth' },
                    { term: '日', reading: 'rì', meaning: 'Sun/Day' },
                ],
                sentences: [
                    { zh: '一个人', pinyin: 'yī gè rén', en: 'One person' },
                    { zh: '天很大', pinyin: 'tiān hěn dà', en: 'The sky is very big' },
                ],
                grammarNotes: [
                    { title: 'Stroke Order', body: 'Basic stroke order rules: top to bottom, left to right, horizontal before vertical, outside before inside. Practice writing characters following these rules.' },
                ],
            },
        ],
    },
    {
        id: 'intermediate',
        title: 'Intermediate',
        description: 'Build vocabulary, grammar patterns, and reading skills for HSK 3-4.',
        lessons: [
            {
                id: 'hsk4-vocabulary',
                title: 'HSK 4 Vocabulary',
                estimatedTime: '60 min',
                difficulty: 'Intermediate',
                explanation: [
                    'HSK 4 requires knowledge of approximately 1200 words. This lesson focuses on expanding your vocabulary with common intermediate words.',
                    'Topics include work, education, travel, health, and social interactions.',
                    'Learn words in context through example sentences to understand proper usage.',
                    'Review and practice regularly to retain new vocabulary.',
                ],
                examples: [
                    { zh: '机会', pinyin: 'jī huì', en: 'Opportunity' },
                    { zh: '经验', pinyin: 'jīng yàn', en: 'Experience' },
                    { zh: '环境', pinyin: 'huán jìng', en: 'Environment' },
                    { zh: '影响', pinyin: 'yǐng xiǎng', en: 'Influence' },
                ],
                audio: [
                    { label: 'Opportunity', text: 'jī huì' },
                    { label: 'Experience', text: 'jīng yàn' },
                ],
                vocabulary: [
                    { term: '机会', reading: 'jī huì', meaning: 'Opportunity' },
                    { term: '经验', reading: 'jīng yàn', meaning: 'Experience' },
                    { term: '环境', reading: 'huán jìng', meaning: 'Environment' },
                    { term: '影响', reading: 'yǐng xiǎng', meaning: 'Influence' },
                    { term: '发展', reading: 'fā zhǎn', meaning: 'Development' },
                    { term: '提高', reading: 'tí gāo', meaning: 'To improve' },
                ],
                sentences: [
                    { zh: '这是一个很好的机会。', pinyin: 'zhè shì yī gè hěn hǎo de jī huì.', en: 'This is a very good opportunity.' },
                    { zh: '工作经验很重要。', pinyin: 'gōng zuò jīng yàn hěn zhòng yào.', en: 'Work experience is very important.' },
                ],
            },
            {
                id: 'intermediate-grammar',
                title: 'Intermediate Grammar',
                estimatedTime: '55 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Intermediate grammar includes more complex sentence structures, aspect markers, and particle usage.',
                    'Learn the use of 了 (le), 着 (zhe), and 过 (guo) for aspect.',
                    'Practice complement structures like resultative and directional complements.',
                    'Understand the use of 把 (bǎ) structure for object manipulation.',
                ],
                examples: [
                    { zh: '我吃过饭了。', pinyin: 'wǒ chī guò fàn le.', en: 'I have eaten.' },
                    { zh: '他把书放在桌子上。', pinyin: 'tā bǎ shū fàng zài zhuō zi shàng.', en: 'He put the book on the table.' },
                    { zh: '门开着。', pinyin: 'mén kāi zhe.', en: 'The door is open.' },
                ],
                audio: [
                    { label: 'I have eaten', text: 'wǒ chī guò fàn le' },
                    { label: 'He put the book', text: 'tā bǎ shū fàng zài zhuō zi shàng' },
                ],
                vocabulary: [
                    { term: '过', reading: 'guò', meaning: 'Past experience marker' },
                    { term: '把', reading: 'bǎ', meaning: 'Ba-construction marker' },
                    { term: '着', reading: 'zhe', meaning: 'Continuous aspect marker' },
                    { term: '放', reading: 'fàng', meaning: 'To put/place' },
                ],
                sentences: [
                    { zh: '我去过中国。', pinyin: 'wǒ qù guò zhōng guó.', en: 'I have been to China.' },
                    { zh: '她穿着红色的衣服。', pinyin: 'tā chuān zhe hóng sè de yī fu.', en: 'She is wearing red clothes.' },
                ],
                grammarNotes: [
                    { title: 'Aspect Marker 过', body: '过 (guò) indicates past experience. Place it after the verb: 我去过 (I have been to). It emphasizes the experience, not when it happened.' },
                    { title: '把 Structure', body: '把 (bǎ) structure is used when the object is manipulated or affected. Structure: Subject + 把 + Object + Verb + Result. Example: 他把书放在桌子上.' },
                ],
            },
            {
                id: 'intermediate-reading',
                title: 'Reading',
                estimatedTime: '50 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Reading practice focuses on understanding longer texts and recognizing characters in context.',
                    'Read short articles, dialogues, and stories to improve comprehension.',
                    'Learn to guess meaning from context when encountering unfamiliar characters.',
                    'Practice reading both simplified and traditional characters if needed.',
                ],
                examples: [
                    { zh: '随着科技的发展，人们的生活发生了很大的变化。', pinyin: 'suí zhe kē jì de fā zhǎn, rén men de shēng huó fā shēng le hěn dà de biàn huà.', en: 'With the development of technology, people\'s lives have undergone great changes.' },
                    { zh: '学习中文需要时间和耐心。', pinyin: 'xué xí zhōng wén xū yào shí jiān hé nài xīn.', en: 'Learning Chinese requires time and patience.' },
                ],
                audio: [
                    { label: 'Technology development', text: 'suí zhe kē jì de fā zhǎn' },
                    { label: 'Learning Chinese', text: 'xué xí zhōng wén xū yào shí jiān hé nài xīn' },
                ],
                vocabulary: [
                    { term: '随着', reading: 'suí zhe', meaning: 'Along with' },
                    { term: '科技', reading: 'kē jì', meaning: 'Technology' },
                    { term: '发展', reading: 'fā zhǎn', meaning: 'Development' },
                    { term: '变化', reading: 'biàn huà', meaning: 'Change' },
                ],
                sentences: [
                    { zh: '这篇文章很有意思。', pinyin: 'zhè piān wén zhāng hěn yǒu yì si.', en: 'This article is very interesting.' },
                    { zh: '我喜欢读中文书。', pinyin: 'wǒ xǐ huan dú zhōng wén shū.', en: 'I like to read Chinese books.' },
                ],
            },
            {
                id: 'intermediate-listening',
                title: 'Listening',
                estimatedTime: '45 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Listening comprehension at the intermediate level involves understanding normal-speed speech on familiar topics.',
                    'Practice with dialogues, news reports, and conversations.',
                    'Focus on catching key information and understanding context.',
                    'Listen to different speakers to get used to various accents and speaking styles.',
                ],
                examples: [
                    { zh: '你听懂了吗？', pinyin: 'nǐ tīng dǒng le ma?', en: 'Did you understand?' },
                    { zh: '请再说一遍。', pinyin: 'qǐng zài shuō yī biàn.', en: 'Please say it again.' },
                ],
                audio: [
                    { label: 'Did you understand', text: 'nǐ tīng dǒng le ma' },
                    { label: 'Please say again', text: 'qǐng zài shuō yī biàn' },
                ],
                vocabulary: [
                    { term: '听', reading: 'tīng', meaning: 'To listen' },
                    { term: '懂', reading: 'dǒng', meaning: 'To understand' },
                    { term: '说', reading: 'shuō', meaning: 'To speak/say' },
                    { term: '遍', reading: 'biàn', meaning: 'Time/occurrence' },
                ],
                sentences: [
                    { zh: '我听懂了。', pinyin: 'wǒ tīng dǒng le.', en: 'I understood.' },
                    { zh: '他说得很快。', pinyin: 'tā shuō de hěn kuài.', en: 'He speaks very fast.' },
                ],
            },
        ],
    },
    {
        id: 'advanced',
        title: 'Advanced',
        description: 'Achieve HSK 5-6 proficiency with complex grammar and fluency.',
        lessons: [
            {
                id: 'hsk5',
                title: 'HSK 5 Preparation',
                estimatedTime: '70 min',
                difficulty: 'Advanced',
                explanation: [
                    'HSK 5 requires knowledge of approximately 2500 words. This level focuses on advanced vocabulary and complex grammar.',
                    'Topics include abstract concepts, professional language, and cultural references.',
                    'Practice reading longer texts and writing paragraphs.',
                    'Prepare for the HSK 5 exam format and timing.',
                ],
                examples: [
                    { zh: '这个决定具有重要意义。', pinyin: 'zhè ge jué dìng jù yǒu zhòng yào yì yì.', en: 'This decision has important significance.' },
                    { zh: '我们需要进一步讨论这个问题。', pinyin: 'wǒ men xū yào jìn yī bù tǎo lùn zhè ge wèn tí.', en: 'We need to discuss this issue further.' },
                ],
                audio: [
                    { label: 'Important significance', text: 'jù yǒu zhòng yào yì yì' },
                    { label: 'Discuss further', text: 'jìn yī bù tǎo lùn' },
                ],
                vocabulary: [
                    { term: '决定', reading: 'jué dìng', meaning: 'Decision' },
                    { term: '意义', reading: 'yì yì', meaning: 'Meaning/significance' },
                    { term: '进一步', reading: 'jìn yī bù', meaning: 'Further' },
                    { term: '讨论', reading: 'tǎo lùn', meaning: 'To discuss' },
                ],
                sentences: [
                    { zh: '这个项目具有重要意义。', pinyin: 'zhè ge xiàng mù jù yǒu zhòng yào yì yì.', en: 'This project has important significance.' },
                    { zh: '我们需要进一步合作。', pinyin: 'wǒ men xū yào jìn yī bù hé zuò.', en: 'We need to cooperate further.' },
                ],
            },
            {
                id: 'hsk6',
                title: 'HSK 6 Preparation',
                estimatedTime: '80 min',
                difficulty: 'Advanced',
                explanation: [
                    'HSK 6 is the highest level, requiring knowledge of 5000+ words and near-native proficiency.',
                    'This level includes formal writing, academic language, and complex literary expressions.',
                    'Practice with authentic materials like newspapers, academic papers, and literature.',
                    'Develop advanced reading and writing skills for professional and academic contexts.',
                ],
                examples: [
                    { zh: '随着经济的快速发展，城市化进程不断加快。', pinyin: 'suí zhe jīng jì de kuài sù fā zhǎn, chéng shì huà jìn chéng bú duàn jiā kuài.', en: 'With rapid economic development, the urbanization process continues to accelerate.' },
                    { zh: '这种现象反映了社会结构的深刻变化。', pinyin: 'zhè zhǒng xiàn xiàng fǎn yìng le shè huì jié gòu de shēn kè biàn huà.', en: 'This phenomenon reflects profound changes in social structure.' },
                ],
                audio: [
                    { label: 'Economic development', text: 'jīng jì de kuài sù fā zhǎn' },
                    { label: 'Urbanization process', text: 'chéng shì huà jìn chéng' },
                ],
                vocabulary: [
                    { term: '经济', reading: 'jīng jì', meaning: 'Economy' },
                    { term: '城市化', reading: 'chéng shì huà', meaning: 'Urbanization' },
                    { term: '进程', reading: 'jìn chéng', meaning: 'Process' },
                    { term: '现象', reading: 'xiàn xiàng', meaning: 'Phenomenon' },
                ],
                sentences: [
                    { zh: '经济全球化带来了机遇和挑战。', pinyin: 'jīng jì quán qiú huà dài lái le jī yù hé tiǎo zhàn.', en: 'Economic globalization has brought opportunities and challenges.' },
                    { zh: '我们需要深入研究这个问题。', pinyin: 'wǒ men xū yào shēn rù yán jiū zhè ge wèn tí.', en: 'We need to study this issue in depth.' },
                ],
            },
            {
                id: 'business-chinese',
                title: 'Business Chinese',
                estimatedTime: '60 min',
                difficulty: 'Advanced',
                explanation: [
                    'Business Chinese focuses on professional language used in corporate environments.',
                    'Learn business vocabulary, formal expressions, and etiquette.',
                    'Practice writing emails, reports, and business documents.',
                    'Understand Chinese business culture and communication styles.',
                ],
                examples: [
                    { zh: '我们很高兴与贵公司合作。', pinyin: 'wǒ men hěn gāo xìng yǔ guì gōng sī hé zuò.', en: 'We are very happy to cooperate with your company.' },
                    { zh: '请问您对这个问题有什么看法？', pinyin: 'qǐng wèn nín duì zhè ge wèn tí yǒu shén me kàn fǎ?', en: 'May I ask what your opinion is on this issue?' },
                ],
                audio: [
                    { label: 'Cooperate with your company', text: 'yǔ guì gōng sī hé zuò' },
                    { label: 'What is your opinion', text: 'yǒu shén me kàn fǎ' },
                ],
                vocabulary: [
                    { term: '公司', reading: 'gōng sī', meaning: 'Company' },
                    { term: '合作', reading: 'hé zuò', meaning: 'Cooperation' },
                    { term: '贵', reading: 'guì', meaning: 'Honorable (your)' },
                    { term: '看法', reading: 'kàn fǎ', meaning: 'Opinion/view' },
                ],
                sentences: [
                    { zh: '期待与您的合作。', pinyin: 'qī dài yǔ nín de hé zuò.', en: 'Look forward to cooperating with you.' },
                    { zh: '这个项目很有发展前景。', pinyin: 'zhè ge xiàng mù hěn yǒu fā zhǎn qián jǐng.', en: 'This project has good development prospects.' },
                ],
            },
            {
                id: 'conversation',
                title: 'Advanced Conversation',
                estimatedTime: '55 min',
                difficulty: 'Advanced',
                explanation: [
                    'Advanced conversation covers complex topics, abstract discussions, and nuanced expressions.',
                    'Practice discussing current events, cultural topics, and personal opinions.',
                    'Learn idioms, slang, and colloquial expressions used by native speakers.',
                    'Develop fluency in expressing complex ideas and emotions.',
                ],
                examples: [
                    { zh: '我觉得这个问题需要从多个角度来分析。', pinyin: 'wǒ jué de zhè ge wèn tí xū yào cóng duō gè jiǎo dù lái fēn xī.', en: 'I think this issue needs to be analyzed from multiple angles.' },
                    { zh: '这让我想起了一个有趣的故事。', pinyin: 'zhè ràng wǒ xiǎng qǐ le yī gè yǒu qù de gù shì.', en: 'This reminds me of an interesting story.' },
                ],
                audio: [
                    { label: 'Multiple angles', text: 'cóng duō gè jiǎo dù lái fēn xī' },
                    { label: 'Reminds me of', text: 'ràng wǒ xiǎng qǐ le' },
                ],
                vocabulary: [
                    { term: '角度', reading: 'jiǎo dù', meaning: 'Angle/perspective' },
                    { term: '分析', reading: 'fēn xī', meaning: 'To analyze' },
                    { term: '想起', reading: 'xiǎng qǐ', meaning: 'To recall/remind' },
                    { term: '有趣', reading: 'yǒu qù', meaning: 'Interesting' },
                ],
                sentences: [
                    { zh: '从长远来看，这是个好决定。', pinyin: 'cóng cháng yuǎn lái kàn, zhè shì gè hǎo jué dìng.', en: 'From a long-term perspective, this is a good decision.' },
                    { zh: '我对这个话题很感兴趣。', pinyin: 'wǒ duì zhè ge huà tí hěn gǎn xìng qù.', en: 'I am very interested in this topic.' },
                ],
            },
            {
                id: 'advanced-reading',
                title: 'Advanced Reading',
                estimatedTime: '50 min',
                difficulty: 'Advanced',
                explanation: [
                    'Advanced reading includes literary works, academic papers, and formal documents.',
                    'Practice reading newspapers, magazines, and books written for native speakers.',
                    'Learn to understand cultural references, idioms, and stylistic variations.',
                    'Develop speed reading skills while maintaining comprehension.',
                ],
                examples: [
                    { zh: '文学作品不仅是语言的载体，更是文化的结晶。', pinyin: 'wén xué zuò pǐn bù jǐn shì yǔ yán de zài tǐ, gèng shì wén huà de jié jīng.', en: 'Literary works are not only carriers of language, but also the crystallization of culture.' },
                    { zh: '通过阅读，我们可以了解不同的文化背景。', pinyin: 'tōng guò yuè dú, wǒ men kě yǐ liǎo jiě bù tóng de wén huà bèi jǐng.', en: 'Through reading, we can understand different cultural backgrounds.' },
                ],
                audio: [
                    { label: 'Literary works', text: 'wén xué zuò pǐn' },
                    { label: 'Cultural crystallization', text: 'wén huà de jié jīng' },
                ],
                vocabulary: [
                    { term: '文学', reading: 'wén xué', meaning: 'Literature' },
                    { term: '载体', reading: 'zài tǐ', meaning: 'Carrier' },
                    { term: '结晶', reading: 'jié jīng', meaning: 'Crystallization' },
                    { term: '背景', reading: 'bèi jǐng', meaning: 'Background' },
                ],
                sentences: [
                    { zh: '这本书很有深度。', pinyin: 'zhè běn shū hěn yǒu shēn dù.', en: 'This book has great depth.' },
                    { zh: '我喜欢读古典文学。', pinyin: 'wǒ xǐ huan dú gǔ diǎn wén xué.', en: 'I like to read classical literature.' },
                ],
            },
            {
                id: 'advanced-listening',
                title: 'Advanced Listening',
                estimatedTime: '45 min',
                difficulty: 'Advanced',
                explanation: [
                    'Advanced listening involves understanding fast-paced speech, accents, and colloquial expressions.',
                    'Practice with movies, TV shows, news broadcasts, and native speaker conversations.',
                    'Focus on catching details, understanding humor, and following complex discussions.',
                    'Train your ear to distinguish between similar sounds and understand rapid speech.',
                ],
                examples: [
                    { zh: '你能跟上他们的谈话速度吗？', pinyin: 'nǐ néng gēn shàng tā men de tán huà sù dù ma?', en: 'Can you keep up with their speaking speed?' },
                    { zh: '这个口音有点难懂。', pinyin: 'zhè ge kǒu yīn yǒu diǎn nán dǒng.', en: 'This accent is a bit hard to understand.' },
                ],
                audio: [
                    { label: 'Keep up with speed', text: 'gēn shàng sù dù' },
                    { label: 'Accent hard to understand', text: 'kǒ yīn nán dǒng' },
                ],
                vocabulary: [
                    { term: '跟上', reading: 'gēn shàng', meaning: 'To keep up with' },
                    { term: '速度', reading: 'sù dù', meaning: 'Speed' },
                    { term: '口音', reading: 'kǒu yīn', meaning: 'Accent' },
                    { term: '难懂', reading: 'nán dǒng', meaning: 'Hard to understand' },
                ],
                sentences: [
                    { zh: '他说得太快了，我没听清。', pinyin: 'tā shuō de tài kuài le, wǒ méi tīng qīng.', en: 'He spoke too fast, I didn\'t hear clearly.' },
                    { zh: '这个方言很有特色。', pinyin: 'zhè ge fāng yán hěn yǒu tè sè.', en: 'This dialect has unique characteristics.' },
                ],
            },
        ],
    },
];
