/**
 * Japanese practice quizzes — authentic question banks for LinguaNova.
 */

function q(prompt, options, answer, meta = {}) {
    return { prompt, options, answer, ...meta };
}

export const japaneseQuizzes = [
    {
        id: 'beginner',
        title: 'Beginner',
        description: 'Build fluency with kana, starter kanji, vocabulary, and core grammar drills.',
        quizzes: [
            {
                id: 'beginner-hiragana',
                title: 'Hiragana Quiz',
                difficulty: 'Beginner',
                questionCount: 8,
                estimatedTime: '8 min',
                xpReward: 40,
                coinsReward: 15,
                description: 'Match hiragana characters to their readings.',
                questions: [
                    q('What is the reading of あ?', ['a', 'i', 'u', 'e'], 0),
                    q('What is the reading of き?', ['sa', 'ki', 'chi', 'mi'], 1),
                    q('Which character is “su”?', ['せ', 'す', 'そ', 'さ'], 1),
                    q('What is the reading of ね?', ['nu', 'no', 'ne', 'na'], 2),
                    q('Which character is “mo”?', ['ま', 'み', 'む', 'も'], 3),
                    q('What is the reading of り?', ['ra', 'ri', 'ru', 're'], 1),
                    q('Which character is “wa”?', ['を', 'ん', 'わ', 'ら'], 2),
                    q('What is the reading of ん?', ['n', 'mu', 'nu', 'u'], 0),
                ],
            },
            {
                id: 'beginner-dakuten',
                title: 'Dakuten Quiz',
                difficulty: 'Beginner',
                questionCount: 6,
                estimatedTime: '6 min',
                xpReward: 35,
                coinsReward: 12,
                description: 'Practice voiced kana with dakuten marks.',
                questions: [
                    q('か with dakuten becomes…', ['が', 'ぎ', 'ぐ', 'げ'], 0),
                    q('What is the reading of ざ?', ['sa', 'za', 'ja', 'da'], 1),
                    q('Which is “de”?', ['て', 'で', 'ど', 'だ'], 1),
                    q('は with dakuten becomes…', ['ぱ', 'ば', 'び', 'ぷ'], 1),
                    q('What is the reading of ご?', ['ko', 'go', 'ge', 'gu'], 1),
                    q('Which reading matches じ?', ['shi', 'chi', 'ji', 'zi only'], 2),
                ],
            },
            {
                id: 'beginner-handakuten',
                title: 'Handakuten Quiz',
                difficulty: 'Beginner',
                questionCount: 5,
                estimatedTime: '5 min',
                xpReward: 30,
                coinsReward: 10,
                description: 'Identify p-sounds created with handakuten.',
                questions: [
                    q('は with handakuten becomes…', ['ば', 'ぱ', 'ぴ', 'ぷ'], 1),
                    q('What is the reading of ぴ?', ['hi', 'bi', 'pi', 'mi'], 2),
                    q('Which character is “pu”?', ['ふ', 'ぶ', 'ぷ', 'ほ'], 2),
                    q('ぺ is read as…', ['he', 'be', 'pe', 'me'], 2),
                    q('ぽ comes from which base kana?', ['ほ', 'ぼ', 'も', 'と'], 0),
                ],
            },
            {
                id: 'beginner-yoon',
                title: 'Yoon Quiz',
                difficulty: 'Beginner',
                questionCount: 6,
                estimatedTime: '6 min',
                xpReward: 35,
                coinsReward: 12,
                description: 'Read contracted sounds like きゃ and しゅ.',
                questions: [
                    q('What is the reading of きゃ?', ['kiya', 'kya', 'kyā', 'ka'], 1),
                    q('Which writing is “shu”?', ['しゆ', 'しゅ', 'すゆ', 'しょ'], 1),
                    q('ちょ is read as…', ['chio', 'cho', 'chiyo', 'to'], 1),
                    q('What does きょう mean as a common word?', ['Yesterday', 'Today', 'Tomorrow', 'Weekend'], 1),
                    q('Which is “nya”?', ['にや', 'にゃ', 'ねや', 'にょ'], 1),
                    q('りゅう is an example of…', ['dakuten', 'handakuten', 'yōon', 'sokuon'], 2),
                ],
            },
            {
                id: 'beginner-katakana',
                title: 'Katakana Quiz',
                difficulty: 'Beginner',
                questionCount: 7,
                estimatedTime: '7 min',
                xpReward: 40,
                coinsReward: 15,
                description: 'Read katakana used in loanwords and names.',
                questions: [
                    q('What is the reading of ア?', ['a', 'i', 'u', 'o'], 0),
                    q('Which katakana is “ka”?', ['キ', 'カ', 'ク', 'コ'], 1),
                    q('コーヒー is…', ['Tea', 'Coffee', 'Cocoa', 'Water'], 1),
                    q('What is the reading of ス?', ['shi', 'su', 'se', 'so'], 1),
                    q('アメリカ refers to…', ['England', 'Africa', 'America', 'Australia'], 2),
                    q('Which character is “n”?', ['ソ', 'ノ', 'ン', 'ム'], 2),
                    q('タクシー means…', ['Bus', 'Train', 'Taxi', 'Ticket'], 2),
                ],
            },
            {
                id: 'beginner-basic-kanji',
                title: 'Basic Kanji Quiz',
                difficulty: 'Beginner',
                questionCount: 7,
                estimatedTime: '8 min',
                xpReward: 45,
                coinsReward: 18,
                description: 'Recognize essential beginner kanji and compounds.',
                questions: [
                    q('What does 人 mean?', ['Tree', 'Person', 'Fire', 'Water'], 1),
                    q('日 can mean…', ['Moon', 'Sun / day', 'Mountain', 'River'], 1),
                    q('日本 is read…', ['nichi-hon', 'Nihon / Nippon', 'hi-moto', 'nichi-pon'], 1),
                    q('山 means…', ['River', 'Mountain', 'Forest', 'Island'], 1),
                    q('水 means…', ['Fire', 'Water', 'Ice', 'Rain'], 1),
                    q('木 means…', ['Tree / wood', 'Grass', 'Flower', 'Leaf'], 0),
                    q('川 means…', ['Bridge', 'Sea', 'River', 'Lake'], 2),
                ],
            },
            {
                id: 'beginner-vocabulary',
                title: 'Vocabulary Quiz',
                difficulty: 'Beginner',
                questionCount: 8,
                estimatedTime: '8 min',
                xpReward: 45,
                coinsReward: 18,
                description: 'Check high-frequency beginner vocabulary.',
                questions: [
                    q('水 means…', ['Tea', 'Water', 'Milk', 'Soup'], 1),
                    q('ともだち means…', ['Teacher', 'Friend', 'Family', 'Student'], 1),
                    q('でんしゃ means…', ['Car', 'Bicycle', 'Train', 'Airplane'], 2),
                    q('にほんご means…', ['Japan', 'Japanese language', 'Chinese', 'English'], 1),
                    q('本 usually means…', ['Book', 'Tree', 'Person', 'Door'], 0),
                    q('ごはん can mean…', ['Water', 'Meal / rice', 'Fish', 'Fruit'], 1),
                    q('まち means…', ['Town / city', 'Station', 'School', 'Park'], 0),
                    q('ねこ means…', ['Dog', 'Bird', 'Cat', 'Fish'], 2),
                ],
            },
            {
                id: 'beginner-grammar',
                title: 'Grammar Quiz',
                difficulty: 'Beginner',
                questionCount: 7,
                estimatedTime: '9 min',
                xpReward: 50,
                coinsReward: 20,
                description: 'Particles, です/ます, and basic sentence patterns.',
                questions: [
                    q('Japanese basic word order is…', ['SVO', 'SOV', 'VSO', 'OSV'], 1),
                    q('In 「これは本です」, は marks the…', ['Object', 'Topic', 'Location', 'Time'], 1),
                    q('を often marks the…', ['Topic', 'Direct object', 'Subject', 'Reason'], 1),
                    q('Polite present “eat” is…', ['食べる', '食べます', '食べた', '食べない'], 1),
                    q('Questions often end with…', ['ね', 'よ', 'か', 'な'], 2),
                    q('「学生ではありません」 means…', ['I am a student', 'I was a student', 'I am not a student', 'Are you a student?'], 2),
                    q('に can mark…', ['Only the object', 'Time / destination', 'Only the topic', 'Only adjectives'], 1),
                ],
            },
        ],
    },
    {
        id: 'intermediate',
        title: 'Intermediate',
        description: 'Strengthen N4-level kanji, vocabulary, particles, reading, and listening.',
        quizzes: [
            {
                id: 'intermediate-kanji',
                title: 'Kanji Quiz',
                difficulty: 'Intermediate',
                questionCount: 7,
                estimatedTime: '10 min',
                xpReward: 60,
                coinsReward: 25,
                description: 'Read common N4 kanji compounds.',
                questions: [
                    q('新聞 is read…', ['atarashibun', 'shinbun', 'shinmon', 'kibun'], 1),
                    q('意味 means…', ['Opinion', 'Meaning', 'Intention', 'Memory'], 1),
                    q('特別 means…', ['Normal', 'Special', 'Difficult', 'Popular'], 1),
                    q('出発 means…', ['Arrival', 'Departure', 'Meeting', 'Cancel'], 1),
                    q('質問 means…', ['Answer', 'Question', 'Homework', 'Exam'], 1),
                    q('練習 means…', ['Practice', 'Lesson', 'Review', 'Lecture'], 0),
                    q('連絡 means…', ['Travel', 'Contact / getting in touch', 'Schedule', 'Permission'], 1),
                ],
            },
            {
                id: 'intermediate-vocabulary',
                title: 'Vocabulary Quiz',
                difficulty: 'Intermediate',
                questionCount: 7,
                estimatedTime: '10 min',
                xpReward: 60,
                coinsReward: 25,
                description: 'N4 vocabulary for daily and practical situations.',
                questions: [
                    q('経験 means…', ['Experiment', 'Experience', 'Expert', 'Explanation'], 1),
                    q('都合 means…', ['Convenience / circumstances', 'Traffic', 'Temperature', 'Tradition'], 0),
                    q('足りる means…', ['To increase', 'To be enough', 'To decrease', 'To borrow'], 1),
                    q('申し込む means…', ['To refuse', 'To apply / propose', 'To apologize', 'To introduce'], 1),
                    q('約束を守る means…', ['Break a promise', 'Keep a promise', 'Make a schedule', 'Forget a meeting'], 1),
                    q('気をつける means…', ['To relax', 'To be careful', 'To remember', 'To decide'], 1),
                    q('時間がかかる means…', ['Time is free', 'It takes time', 'Time is short', 'Time flies'], 1),
                ],
            },
            {
                id: 'intermediate-particles',
                title: 'Particles Quiz',
                difficulty: 'Intermediate',
                questionCount: 8,
                estimatedTime: '10 min',
                xpReward: 65,
                coinsReward: 28,
                description: 'Choose the correct particle for each sentence.',
                questions: [
                    q('私___学生です。', ['を', 'は', 'へ', 'で'], 1),
                    q('水___飲みます。', ['が', 'を', 'に', 'と'], 1),
                    q('学校___行きます。', ['を', 'が', 'に', 'で'], 2),
                    q('バス___会社へ行きます。', ['で', 'に', 'を', 'へ'], 0),
                    q('友達___話します。', ['を', 'と', 'が', 'へ'], 1),
                    q('机の上___本があります。', ['を', 'に', 'へ', 'と'], 1),
                    q('日本___来ました。', ['を', 'が', 'から', 'で'], 2),
                    q('これは誰___傘ですか。', ['が', 'の', 'を', 'に'], 1),
                ],
            },
            {
                id: 'intermediate-reading',
                title: 'Reading Quiz',
                difficulty: 'Intermediate',
                questionCount: 5,
                estimatedTime: '12 min',
                xpReward: 70,
                coinsReward: 30,
                description: 'Comprehension questions on short Japanese passages.',
                questions: [
                    q(
                        '「昨日、友達と映画館へ行きました。」 Where did the speaker go?',
                        ['School', 'Movie theater', 'Library', 'Station'],
                        1
                    ),
                    q(
                        '「とても面白い映画でした。」 How was the movie?',
                        ['Boring', 'Scary', 'Interesting', 'Long'],
                        2
                    ),
                    q(
                        '「日本では電車が時間どおりに来ることが多いです。」 What is often true?',
                        ['Trains are expensive', 'Trains arrive on time', 'Trains are crowded only', 'Buses are faster'],
                        1
                    ),
                    q(
                        'In the sentence above, 多いです describes…',
                        ['Rare events', 'Frequent situations', 'Impossible events', 'Past habits only'],
                        1
                    ),
                    q(
                        '「友達と」 tells us the speaker went…',
                        ['Alone', 'With a friend', 'By car', 'By invitation of a teacher'],
                        1
                    ),
                ],
            },
            {
                id: 'intermediate-listening',
                title: 'Listening Quiz',
                difficulty: 'Intermediate',
                questionCount: 5,
                estimatedTime: '10 min',
                xpReward: 70,
                coinsReward: 30,
                description: 'Listen to lines (speech audio) and choose the meaning.',
                questions: [
                    q(
                        'Audio: すみません、駅はどこですか。',
                        ['Where is the station?', 'What time is it?', 'How much is the ticket?', 'Is this the exit?'],
                        0,
                        { audio: 'すみません、えきはどこですか。' }
                    ),
                    q(
                        'Audio: まっすぐ行ってください。',
                        ['Please turn left', 'Please go straight', 'Please stop here', 'Please wait'],
                        1,
                        { audio: 'まっすぐいってください。' }
                    ),
                    q(
                        'Audio: 二つ目の角を右に曲がってください。',
                        ['Turn left at the first corner', 'Turn right at the second corner', 'Go past two stations', 'Enter the second building'],
                        1,
                        { audio: 'ふたつめのかどをみぎにまがってください。' }
                    ),
                    q(
                        'Audio: わかりました。ありがとうございます。',
                        ['I don’t understand', 'Understood. Thank you.', 'Please repeat that', 'Sorry for the wait'],
                        1,
                        { audio: 'わかりました。ありがとうございます。' }
                    ),
                    q(
                        'Audio: 電車はなんじですか。',
                        ['Where is the train?', 'What time is the train?', 'Which train is this?', 'Is the train late?'],
                        1,
                        { audio: 'でんしゃはなんじですか。' }
                    ),
                ],
            },
        ],
    },
    {
        id: 'advanced',
        title: 'Advanced',
        description: 'Challenge N3–N2 skills across JLPT, conversation, listening, reading, and grammar.',
        quizzes: [
            {
                id: 'advanced-jlpt',
                title: 'JLPT Quiz',
                difficulty: 'Advanced',
                questionCount: 7,
                estimatedTime: '12 min',
                xpReward: 90,
                coinsReward: 40,
                description: 'Mixed JLPT-style vocabulary and expressions.',
                questions: [
                    q('影響 means…', ['Influence / effect', 'Impression', 'Intention', 'Income'], 0),
                    q('責任 means…', ['Ability', 'Responsibility', 'Permission', 'Reputation'], 1),
                    q('「必ずしも〜とは限らない」 means…', ['Always true', 'Not necessarily the case', 'Completely wrong', 'Only sometimes polite'], 1),
                    q('状況 means…', ['Condition / situation', 'Solution', 'Suggestion', 'Schedule'], 0),
                    q('「〜うちに」 often means…', ['After finishing', 'While / before a change', 'Instead of', 'Because of'], 1),
                    q('議論 means…', ['Agreement', 'Debate / discussion', 'Decision', 'Delay'], 1),
                    q('誤解 means…', ['Understanding', 'Misunderstanding', 'Translation', 'Greeting'], 1),
                ],
            },
            {
                id: 'advanced-conversation',
                title: 'Conversation Quiz',
                difficulty: 'Advanced',
                questionCount: 6,
                estimatedTime: '10 min',
                xpReward: 85,
                coinsReward: 35,
                description: 'Choose natural responses and discourse markers.',
                questions: [
                    q('A natural aizuchi is…', ['さようなら', 'なるほど', 'いただきます only', 'すみません always'], 1),
                    q('「要するに」 is used to…', ['Apologize', 'Summarize', 'Introduce yourself', 'Ask permission'], 1),
                    q('「それで、どう思われますか。」 asks for…', ['A location', 'An opinion', 'A price', 'A schedule only'], 1),
                    q('「ちょっといいですか。」 is used to…', ['End a call', 'Politely interrupt / ask for a moment', 'Refuse food', 'Order tea'], 1),
                    q('Casual speech among friends may use…', ['でございます', 'だね', 'お申し込みください', '拝見します'], 1),
                    q('「そういう意味でしたか。」 shows…', ['Anger', 'Clarified understanding', 'Farewell', 'Ordering'], 1),
                ],
            },
            {
                id: 'advanced-listening',
                title: 'Listening Quiz',
                difficulty: 'Advanced',
                questionCount: 5,
                estimatedTime: '12 min',
                xpReward: 95,
                coinsReward: 40,
                description: 'Interpret polite and nuanced spoken Japanese.',
                questions: [
                    q(
                        'Audio: 正直なところ、もう少し検討が必要かと思います。',
                        ['They fully agree', 'They want more consideration', 'They are finished', 'They are greeting someone'],
                        1,
                        { audio: 'しょうじきなところ、もうすこしけんとうがひつようかとおもいます。' }
                    ),
                    q(
                        'Audio: ご提案は魅力的ですが、予算の関係で難しいかもしれません。',
                        ['Strong acceptance', 'Soft refusal due to budget', 'Asking for directions', 'Confirming attendance'],
                        1,
                        { audio: 'ごていあんはみりょくてきですが、よさんのかんけいでむずかしいかもしれません。' }
                    ),
                    q(
                        'Audio: お世話になっております。',
                        ['Casual hello to friends', 'Business greeting for ongoing relations', 'Apology for lateness', 'Order at a restaurant'],
                        1,
                        { audio: 'おせわになっております。' }
                    ),
                    q(
                        'What stance does soft language like 「かもしれません」 often show?',
                        ['Absolute certainty', 'Softened / tentative claim', 'Anger', 'Past completed action'],
                        1
                    ),
                    q(
                        'Audio: 日程を調整いただけますでしょうか。',
                        ['Can you adjust the schedule?', 'Please send the invoice', 'Where is the meeting room?', 'How was the trip?'],
                        0,
                        { audio: 'にっていをちょうせいいだけますでしょうか。' }
                    ),
                ],
            },
            {
                id: 'advanced-reading',
                title: 'Reading Quiz',
                difficulty: 'Advanced',
                questionCount: 5,
                estimatedTime: '14 min',
                xpReward: 100,
                coinsReward: 45,
                description: 'Parse connectors and claims in advanced sentences.',
                questions: [
                    q(
                        '「一方で」 often introduces…',
                        ['A contrasting side', 'A greeting', 'A shopping list', 'A phone number'],
                        0
                    ),
                    q(
                        '「したがって」 signals…',
                        ['Contrast', 'A result / conclusion', 'A question tag', 'An apology'],
                        1
                    ),
                    q(
                        'In 「リモートワークが広がる一方で、対面の重要性も再認識されている」, the author…',
                        ['Rejects remote work entirely', 'Notes both remote growth and renewed face-to-face value', 'Talks only about salary', 'Describes a recipe'],
                        1
                    ),
                    q(
                        '「再認識されている」 means something is…',
                        ['Being forgotten', 'Being recognized again', 'Being translated', 'Being deleted'],
                        1
                    ),
                    q(
                        'A good advanced reading strategy is to…',
                        ['Ignore connectors', 'Find the claim then supporting evidence', 'Translate every particle first only', 'Skip abstract nouns'],
                        1
                    ),
                ],
            },
            {
                id: 'advanced-grammar',
                title: 'Grammar Quiz',
                difficulty: 'Advanced',
                questionCount: 7,
                estimatedTime: '12 min',
                xpReward: 95,
                coinsReward: 40,
                description: 'Advanced patterns used in N3–N2 Japanese.',
                questions: [
                    q('「〜をめぐって」 means…', ['Because of hunger', 'Concerning / surrounding an issue', 'Instead of', 'As soon as'], 1),
                    q('「〜にほかならない」 means…', ['Nothing other than', 'Not at all', 'Possibly', 'Rarely'], 0),
                    q('「〜かねない」 expresses…', ['Strong prohibition', 'Possibility of a negative outcome', 'Completed past only', 'Humble request'], 1),
                    q('「ご覧になる」 is…', ['Humble for “see”', 'Honorific for “see”', 'Casual for “see”', 'Negative for “see”'], 1),
                    q('「申す」 is…', ['Honorific for “say”', 'Humble for “say”', 'Potential for “say”', 'Passive for “say”'], 1),
                    q('「〜かと存じます」 softens…', ['An order to leave', 'A judgment / thought in business speech', 'A weather report only', 'A children’s song'], 1),
                    q('Keigo directionality means you should…', ['Elevate yourself', 'Elevate the other / humble yourself appropriately', 'Always use casual form', 'Avoid all verbs'], 1),
                ],
            },
        ],
    },
];

export function flattenQuizzes() {
    return japaneseQuizzes.flatMap((category) =>
        category.quizzes.map((quiz) => ({
            ...quiz,
            categoryId: category.id,
            categoryTitle: category.title,
        }))
    );
}

export function getQuizById(quizId) {
    return flattenQuizzes().find((quiz) => quiz.id === quizId) ?? null;
}
