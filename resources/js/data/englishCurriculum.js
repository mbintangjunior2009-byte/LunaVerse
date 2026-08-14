/**
 * English Curriculum
 * Complete curriculum for learning English
 */

export const englishCurriculum = [
    {
        id: 'beginner',
        title: 'Beginner',
        description: 'Build foundational grammar, vocabulary, and basic conversation skills.',
        lessons: [
            {
                id: 'alphabet',
                title: 'The Alphabet',
                estimatedTime: '30 min',
                difficulty: 'Beginner',
                explanation: [
                    'The English alphabet has 26 letters, each with uppercase and lowercase forms.',
                    'Letters are divided into vowels (A, E, I, O, U) and consonants (all other letters).',
                    'Each letter has a specific name and sound that you need to learn.',
                    'Mastering the alphabet is the foundation for reading and writing in English.',
                ],
                examples: [
                    { en: 'A B C D E', phonetic: 'ay bee see dee ee', meaning: 'First five letters' },
                    { en: 'F G H I J', phonetic: 'ef gee aitch eye jay', meaning: 'Next five letters' },
                    { en: 'apple', phonetic: 'ˈæp.əl', meaning: 'A fruit' },
                    { en: 'banana', phonetic: 'bəˈnæn.ə', meaning: 'A yellow fruit' },
                ],
                audio: [
                    { label: 'A B C', text: 'A B C' },
                    { label: 'apple', text: 'apple' },
                    { label: 'banana', text: 'banana' },
                ],
                vocabulary: [
                    { term: 'alphabet', reading: 'ˈæl.fə.bet', meaning: 'The set of letters in a language' },
                    { term: 'vowel', reading: 'vaʊ.əl', meaning: 'A, E, I, O, U' },
                    { term: 'consonant', reading: 'ˈkɒn.sə.nənt', meaning: 'Letters that are not vowels' },
                    { term: 'letter', reading: 'ˈlet.ər', meaning: 'A character in the alphabet' },
                ],
                sentences: [
                    { en: 'The English alphabet has 26 letters.', phonetic: 'ðə ˈɪŋ.ɡlɪʃ ˈæl.fə.bet hæz ˈtwen.ti ˈsɪks ˈlet.ərz.', meaning: 'Fact about the alphabet' },
                    { en: 'I can write my name.', phonetic: 'aɪ kæn raɪt maɪ neɪm.', meaning: 'Basic ability' },
                ],
                grammarNotes: [
                    { title: 'Letter Names', body: 'Each letter has a name: A (ay), B (bee), C (see), D (dee), E (ee), etc. These are different from the sounds the letters make in words.' },
                ],
            },
            {
                id: 'pronunciation',
                title: 'Basic Pronunciation',
                estimatedTime: '35 min',
                difficulty: 'Beginner',
                explanation: [
                    'English pronunciation can be tricky because letters can have multiple sounds.',
                    'Learn the basic sounds of each letter and common letter combinations.',
                    'Stress is important in English - some syllables are emphasized more than others.',
                    'Practice listening to native speakers to improve your pronunciation.',
                ],
                examples: [
                    { en: 'cat', phonetic: '/kæt/', meaning: 'A small animal' },
                    { en: 'dog', phonetic: '/dɒɡ/', meaning: 'A common pet' },
                    { en: 'house', phonetic: '/haʊs/', meaning: 'A place to live' },
                    { en: 'water', phonetic: '/ˈwɔː.tər/', meaning: 'Essential liquid' },
                ],
                audio: [
                    { label: 'cat', text: 'cat' },
                    { label: 'dog', text: 'dog' },
                    { label: 'house', text: 'house' },
                ],
                vocabulary: [
                    { term: 'pronunciation', reading: '/prəˌnʌn.siˈeɪ.ʃən/', meaning: 'How words are spoken' },
                    { term: 'stress', reading: '/stres/', meaning: 'Emphasis on a syllable' },
                    { term: 'syllable', reading: '/ˈsɪl.ə.bəl/', meaning: 'A unit of sound' },
                    { term: 'sound', reading: '/saʊnd/', meaning: 'Something you hear' },
                ],
                grammarNotes: [
                    { title: 'Stress Patterns', body: 'In English, stress is often on the first syllable for nouns (WAT-er) and second syllable for verbs (re-CEIVE). Learning stress patterns helps with fluency.' },
                ],
            },
            {
                id: 'english-greetings',
                title: 'Greetings',
                estimatedTime: '25 min',
                difficulty: 'Beginner',
                explanation: [
                    'English greetings vary based on formality and time of day.',
                    'Common informal greetings include "Hi", "Hello", and "Hey".',
                    'Formal greetings include "Good morning", "Good afternoon", and "Good evening".',
                    'Learn to respond appropriately to different greetings.',
                ],
                examples: [
                    { en: 'Hello!', phonetic: '/həˈloʊ/', meaning: 'Standard greeting' },
                    { en: 'Good morning', phonetic: '/ɡʊd ˈmɔːr.nɪŋ/', meaning: 'Morning greeting' },
                    { en: 'How are you?', phonetic: '/haʊ ɑːr juː/', meaning: 'Asking about well-being' },
                    { en: 'Nice to meet you', phonetic: '/naɪs tuː miːt juː/', meaning: 'First meeting' },
                ],
                audio: [
                    { label: 'Hello', text: 'Hello' },
                    { label: 'Good morning', text: 'Good morning' },
                    { label: 'How are you', text: 'How are you' },
                ],
                vocabulary: [
                    { term: 'greeting', reading: '/ˈɡriː.tɪŋ/', meaning: 'Words used when meeting someone' },
                    { term: 'formal', reading: '/ˈfɔːr.məl/', meaning: 'Official or proper' },
                    { term: 'informal', reading: '/ɪnˈfɔːr.məl/', meaning: 'Casual or relaxed' },
                    { term: 'response', reading: '/rɪˈspɑːns/', meaning: 'An answer or reaction' },
                ],
                sentences: [
                    { en: 'Hello, how are you today?', phonetic: '/həˈloʊ haʊ ɑːr juː təˈdeɪ/', meaning: 'Friendly greeting' },
                    { en: 'Nice to meet you too.', phonetic: '/naɪs tuː miːt juː tuː/', meaning: 'Response to introduction' },
                ],
                grammarNotes: [
                    { title: 'Formal vs Informal', body: 'Use "Hi" or "Hey" with friends and family. Use "Hello", "Good morning", etc. in formal situations or with people you don\'t know well.' },
                ],
            },
            {
                id: 'english-vocabulary',
                title: 'Basic Vocabulary',
                estimatedTime: '45 min',
                difficulty: 'Beginner',
                explanation: [
                    'Building a strong vocabulary is essential for effective communication.',
                    'Start with the most common words used in daily life.',
                    'Learn words in categories: family, food, places, actions, and descriptions.',
                    'Practice using new words in sentences to remember them better.',
                ],
                examples: [
                    { en: 'family', phonetic: '/ˈfæm.əl.i/', meaning: 'Related people' },
                    { en: 'food', phonetic: '/fuːd/', meaning: 'Things we eat' },
                    { en: 'house', phonetic: '/haʊs/', meaning: 'A building to live in' },
                    { en: 'school', phonetic: '/skuːl/', meaning: 'Place for learning' },
                ],
                audio: [
                    { label: 'family', text: 'family' },
                    { label: 'food', text: 'food' },
                    { label: 'house', text: 'house' },
                ],
                vocabulary: [
                    { term: 'person', reading: '/ˈpɜːr.sən/', meaning: 'A human being' },
                    { term: 'water', reading: '/ˈwɔː.tər/', meaning: 'Clear liquid' },
                    { term: 'food', reading: '/fuːd/', meaning: 'Things people eat' },
                    { term: 'home', reading: '/hoʊm/', meaning: 'Where someone lives' },
                    { term: 'book', reading: '/bʊk/', meaning: 'Written work' },
                    { term: 'car', reading: '/kɑːr/', meaning: 'Vehicle' },
                ],
                sentences: [
                    { en: 'I love my family.', phonetic: '/aɪ lʌv maɪ ˈfæm.əl.i/', meaning: 'Expressing affection' },
                    { en: 'This is my home.', phonetic: '/ðɪs ɪz maɪ hoʊm/', meaning: 'Showing where you live' },
                ],
            },
            {
                id: 'english-grammar',
                title: 'Basic Grammar',
                estimatedTime: '40 min',
                difficulty: 'Beginner',
                explanation: [
                    'English grammar follows Subject-Verb-Object (SVO) word order.',
                    'Verbs change based on tense (past, present, future) and subject.',
                    'Learn basic sentence structures: "I am...", "I have...", "I go..."',
                    'Articles (a, an, the) are used before nouns to specify or generalize.',
                ],
                examples: [
                    { en: 'I am a student.', phonetic: '/aɪ æm ə ˈstuː.dənt/', meaning: 'Identifying yourself' },
                    { en: 'She likes coffee.', phonetic: '/ʃiː laɪks ˈkɔː.fi/', meaning: 'Expressing preference' },
                    { en: 'They go to school.', phonetic: '/ðeɪ ɡoʊ tuː skuːl/', meaning: 'Daily activity' },
                    { en: 'Do you like pizza?', phonetic: '/duː juː laɪk ˈpiːt.sə/', meaning: 'Asking a question' },
                ],
                audio: [
                    { label: 'I am a student', text: 'I am a student' },
                    { label: 'She likes coffee', text: 'She likes coffee' },
                ],
                vocabulary: [
                    { term: 'subject', reading: '/ˈsʌb.dʒekt/', meaning: 'Person or thing doing the action' },
                    { term: 'verb', reading: '/vɜːrb/', meaning: 'Action word' },
                    { term: 'object', reading: '/ˈɑːb.dʒekt/', meaning: 'Thing receiving the action' },
                    { term: 'article', reading: '/ˈɑːr.tɪ.kəl/', meaning: 'a, an, the' },
                ],
                sentences: [
                    { en: 'I am English.', phonetic: '/aɪ æm ˈɪŋ.ɡlɪʃ/', meaning: 'Nationality' },
                    { en: 'She does not drink tea.', phonetic: '/ʃiː dʌz nɑːt drɪŋk tiː/', meaning: 'Negative statement' },
                ],
                grammarNotes: [
                    { title: 'Subject-Verb-Object', body: 'English uses SVO order: Subject + Verb + Object. Example: I (subject) + eat (verb) + apple (object).' },
                    { title: 'Verb Conjugation', body: 'Verbs change based on subject: I am, you are, he/she/it is. Regular verbs add -s for third person: I like, she likes.' },
                ],
            },
            {
                id: 'english-numbers',
                title: 'Numbers',
                estimatedTime: '30 min',
                difficulty: 'Beginner',
                explanation: [
                    'English numbers follow a logical pattern once you learn 1-19 and the tens.',
                    'Numbers 1-10: one, two, three, four, five, six, seven, eight, nine, ten',
                    'Numbers 11-19 have unique names: eleven, twelve, thirteen, etc.',
                    'For 20+, combine the tens with units: twenty-one, twenty-two, etc.',
                ],
                examples: [
                    { en: 'one', phonetic: '/wʌn/', meaning: '1' },
                    { en: 'ten', phonetic: '/ten/', meaning: '10' },
                    { en: 'twenty', phonetic: '/ˈtwen.ti/', meaning: '20' },
                    { en: 'one hundred', phonetic: '/wʌn ˈhʌn.drəd/', meaning: '100' },
                ],
                audio: [
                    { label: 'Numbers 1-10', text: 'one two three four five six seven eight nine ten' },
                    { label: 'Twenty', text: 'twenty' },
                    { label: 'One hundred', text: 'one hundred' },
                ],
                vocabulary: [
                    { term: 'number', reading: '/ˈnʌm.bər/', meaning: 'Mathematical symbol' },
                    { term: 'count', reading: '/kaʊnt/', meaning: 'To say numbers in order' },
                    { term: 'add', reading: '/æd/', meaning: 'To combine numbers' },
                    { term: 'subtract', reading: '/səbˈtrækt/', meaning: 'To take away' },
                ],
                sentences: [
                    { en: 'I have one brother.', phonetic: '/aɪ hæv wʌn ˈbrʌð.ər/', meaning: 'Family information' },
                    { en: 'She is twenty years old.', phonetic: '/ʃiː ɪz ˈtwen.ti jɪrz oʊld/', meaning: 'Age' },
                ],
            },
        ],
    },
    {
        id: 'intermediate',
        title: 'Intermediate',
        description: 'Expand vocabulary, master complex grammar, and improve fluency.',
        lessons: [
            {
                id: 'conversation',
                title: 'Conversation Skills',
                estimatedTime: '50 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Effective conversation involves listening, speaking, and understanding context.',
                    'Learn common phrases for starting, maintaining, and ending conversations.',
                    'Practice asking follow-up questions to show interest.',
                    'Understand cultural nuances in English-speaking countries.',
                ],
                examples: [
                    { en: 'How was your day?', phonetic: '/haʊ wʌz jʊr deɪ/', meaning: 'Asking about someone\'s day' },
                    { en: 'That\'s interesting!', phonetic: '/ðæts ˈɪn.tər.əs.tɪŋ/', meaning: 'Showing interest' },
                    { en: 'I agree with you.', phonetic: '/aɪ əˈɡriː wɪð juː/', meaning: 'Expressing agreement' },
                    { en: 'What do you think?', phonetic: '/wʌt duː juː θɪŋk/', meaning: 'Asking for opinion' },
                ],
                audio: [
                    { label: 'How was your day', text: 'How was your day' },
                    { label: 'That\'s interesting', text: 'That\'s interesting' },
                ],
                vocabulary: [
                    { term: 'conversation', reading: '/ˌkɑːn.vərˈseɪ.ʃən/', meaning: 'Informal talk' },
                    { term: 'opinion', reading: '/əˈpɪn.jən/', meaning: 'Personal belief' },
                    { term: 'agreement', reading: '/əˈɡriː.mənt/', meaning: 'Shared view' },
                    { term: 'disagreement', reading: '/ˌdɪs.əˈɡriː.mənt/', meaning: 'Different view' },
                ],
                sentences: [
                    { en: 'I had a great day at work.', phonetic: '/aɪ hæd ə ɡreɪt deɪ æt wɜːrk/', meaning: 'Sharing experience' },
                    { en: 'What do you think about this?', phonetic: '/wʌt duː juː θɪŋk əˈbaʊt ðɪs/', meaning: 'Asking opinion' },
                ],
            },
            {
                id: 'intermediate-grammar',
                title: 'Intermediate Grammar',
                estimatedTime: '55 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Intermediate grammar includes perfect tenses, conditionals, and complex sentences.',
                    'Learn present perfect, past perfect, and future perfect tenses.',
                    'Practice conditional sentences: if clauses and result clauses.',
                    'Understand passive voice and when to use it.',
                ],
                examples: [
                    { en: 'I have finished my work.', phonetic: '/aɪ hæv ˈfɪn.ɪʃt maɪ wɜːrk/', meaning: 'Present perfect' },
                    { en: 'If it rains, I will stay home.', phonetic: '/ɪf ɪt reɪnz aɪ wɪl steɪ hoʊm/', meaning: 'First conditional' },
                    { en: 'The book was written by her.', phonetic: '/ðə bʊk wʌz ˈrɪt.ən baɪ hɜːr/', meaning: 'Passive voice' },
                    { en: 'I wish I could speak better.', phonetic: '/aɪ wɪʃ aɪ kʊd spiːk ˈbet.ər/', meaning: 'Wish clause' },
                ],
                audio: [
                    { label: 'I have finished', text: 'I have finished my work' },
                    { label: 'If it rains', text: 'If it rains, I will stay home' },
                ],
                vocabulary: [
                    { term: 'perfect tense', reading: '/ˈpɜːr.fekt tens/', meaning: 'Completed action with present relevance' },
                    { term: 'conditional', reading: '/kənˈdɪʃ.ən.əl/', meaning: 'If-then structure' },
                    { term: 'passive voice', reading: '/ˈpæs.ɪv vɔɪs/', meaning: 'Subject receives action' },
                    { term: 'clause', reading: '/klɔːz/', meaning: 'Part of a sentence' },
                ],
                sentences: [
                    { en: 'I have lived here for five years.', phonetic: '/aɪ hæv lɪvd hɪr fɔːr faɪv jɪrz/', meaning: 'Duration with present perfect' },
                    { en: 'If I had known, I would have helped.', phonetic: '/ɪf aɪ hæd noʊn aɪ wʊd hæv helpt/', meaning: 'Third conditional' },
                ],
                grammarNotes: [
                    { title: 'Present Perfect', body: 'Present perfect (have/has + past participle) connects past to present. Example: I have lived here (and still live here). Use with "for" and "since" for duration.' },
                    { title: 'Conditionals', body: 'First conditional: If + present, will + verb (likely). Second conditional: If + past, would + verb (unlikely). Third conditional: If + past perfect, would have + verb (past hypothetical).' },
                ],
            },
            {
                id: 'intermediate-reading',
                title: 'Reading',
                estimatedTime: '50 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Reading practice focuses on understanding longer texts and various writing styles.',
                    'Read articles, stories, and informational texts to improve comprehension.',
                    'Learn to identify main ideas, supporting details, and author\'s purpose.',
                    'Practice skimming for main points and scanning for specific information.',
                ],
                examples: [
                    { en: 'Technology has transformed how we communicate and work in modern society.', phonetic: '/tekˈnɑː.lə.dʒi hæz trænsˈfɔːrmd haʊ wiː kəˈmjuː.nɪ.keɪt ænd wɜːrk ɪn ˈmɑː.dərn səˈsaɪ.ə.ti/', meaning: 'Impact of technology' },
                    { en: 'Learning a new language requires patience and consistent practice.', phonetic: '/ˈlɜːr.nɪŋ ə nuː ˈlæŋ.ɡwɪdʒ rɪˈkwaɪərz ˈpeɪ.ʃəns ænd kənˈsɪs.tənt ˈpræk.tɪs/', meaning: 'Language learning advice' },
                ],
                audio: [
                    { label: 'Technology transformation', text: 'Technology has transformed how we communicate' },
                    { label: 'Language learning', text: 'Learning a new language requires patience' },
                ],
                vocabulary: [
                    { term: 'transform', reading: '/trænsˈfɔːrm/', meaning: 'To change completely' },
                    { term: 'communicate', reading: '/kəˈmjuː.nɪ.keɪt/', meaning: 'To exchange information' },
                    { term: 'consistent', reading: '/kənˈsɪs.tənt/', meaning: 'Happening all the time' },
                    { term: 'comprehension', reading: '/ˌkɑːm.prəˈhen.ʃən/', meaning: 'Understanding' },
                ],
                sentences: [
                    { en: 'This article discusses climate change.', phonetic: '/ðɪs ˈɑːr.tɪ.kəl dɪˈskʌs.ɪz ˈklaɪ.mət tʃeɪndʒ/', meaning: 'Reading topic' },
                    { en: 'I enjoy reading novels in my free time.', phonetic: '/aɪ ɪnˈdʒɔɪ ˈriː.dɪŋ ˈnɑː.vəlz ɪn maɪ friː taɪm/', meaning: 'Reading preference' },
                ],
            },
            {
                id: 'intermediate-listening',
                title: 'Listening',
                estimatedTime: '45 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Listening comprehension at intermediate level involves understanding normal-speed speech.',
                    'Practice with podcasts, news, videos, and conversations.',
                    'Focus on catching key information, understanding idioms, and following discussions.',
                    'Listen to different accents (American, British, Australian) to improve flexibility.',
                ],
                examples: [
                    { en: 'Could you please repeat that?', phonetic: '/kʊd juː pliːz rɪˈpiːt ðæt/', meaning: 'Asking for repetition' },
                    { en: 'I didn\'t catch that last part.', phonetic: '/aɪ ˈdɪd.ənt kætʃ ðæt læst pɑːrt/', meaning: 'Admitting not understanding' },
                ],
                audio: [
                    { label: 'Could you repeat', text: 'Could you please repeat that' },
                    { label: 'I didn\'t catch', text: 'I didn\'t catch that last part' },
                ],
                vocabulary: [
                    { term: 'comprehend', reading: '/ˌkɑːm.prɪˈhend/', meaning: 'To understand' },
                    { term: 'accent', reading: '/ˈæk.sent/', meaning: 'Way of pronouncing words' },
                    { term: 'idiom', reading: '/ˈɪd.i.əm/', meaning: 'Expression with special meaning' },
                    { term: 'clarify', reading: '/ˈkler.ə.faɪ/', meaning: 'To make clear' },
                ],
                sentences: [
                    { en: 'I understood most of what you said.', phonetic: '/aɪ ˌʌn.dərˈstʊd moʊst ʌv wʌt juː sed/', meaning: 'Confirming understanding' },
                    { en: 'She speaks very fast.', phonetic: '/ʃiː spiːks ˈver.i fæst/', meaning: 'Comment on speed' },
                ],
            },
        ],
    },
    {
        id: 'advanced',
        title: 'Advanced',
        description: 'Achieve near-native fluency with idioms and nuanced expression.',
        lessons: [
            {
                id: 'business-english',
                title: 'Business English',
                estimatedTime: '60 min',
                difficulty: 'Advanced',
                explanation: [
                    'Business English focuses on professional communication in corporate environments.',
                    'Learn formal vocabulary, email etiquette, and presentation skills.',
                    'Practice writing reports, proposals, and business correspondence.',
                    'Understand cultural differences in international business communication.',
                ],
                examples: [
                    { en: 'I look forward to our collaboration.', phonetic: '/aɪ lʊk ˈfɔːrwərd tuː aʊr kəˌlæb.əˈreɪ.ʃən/', meaning: 'Professional closing' },
                    { en: 'Could you please provide more details?', phonetic: '/kʊd juː pliːz prəˈvaɪd mɔːr ˈdiː.teɪlz/', meaning: 'Requesting information' },
                    { en: 'Let\'s schedule a meeting to discuss this.', phonetic: '/lets ˈskedʒ.uːl ə ˈmiː.tɪŋ tuː dɪˈskʌs ðɪs/', meaning: 'Proposing action' },
                ],
                audio: [
                    { label: 'Look forward to collaboration', text: 'I look forward to our collaboration' },
                    { label: 'Provide more details', text: 'Could you please provide more details' },
                ],
                vocabulary: [
                    { term: 'collaboration', reading: '/kəˌlæb.əˈreɪ.ʃən/', meaning: 'Working together' },
                    { term: 'proposal', reading: '/prəˈpoʊ.zəl/', meaning: 'Suggested plan' },
                    { term: 'correspondence', reading: '/ˌkɔː.rəˈspɑːn.dəns/', meaning: 'Written communication' },
                    { term: 'negotiation', reading: '/nɪˌɡoʊ.ʃiˈeɪ.ʃən/', meaning: 'Discussion to reach agreement' },
                ],
                sentences: [
                    { en: 'Thank you for considering our proposal.', phonetic: '/θæŋk juː fɔːr kənˈsɪd.ər.ɪŋ aʊr prəˈpoʊ.zəl/', meaning: 'Formal thanks' },
                    { en: 'This project has great potential.', phonetic: '/ðɪs ˈprɑː.dʒekt hæz ɡreɪt pəˈten.ʃəl/', meaning: 'Business assessment' },
                ],
            },
            {
                id: 'ielts',
                title: 'IELTS Preparation',
                estimatedTime: '70 min',
                difficulty: 'Advanced',
                explanation: [
                    'IELTS (International English Language Testing System) is a standardized test for English proficiency.',
                    'The test covers four skills: Listening, Reading, Writing, and Speaking.',
                    'Learn test-taking strategies and practice with sample questions.',
                    'Focus on academic vocabulary and formal writing structures.',
                ],
                examples: [
                    { en: 'The graph illustrates a significant increase in sales.', phonetic: '/ðə ɡræf ˈɪl.ə.streɪts ə sɪɡˈnɪf.ə.kənt ˈɪn.kriːs ɪn seɪlz/', meaning: 'Describing data' },
                    { en: 'There are several factors to consider.', phonetic: '/ðer ɑːr ˈsev.rəl ˈfæk.tərz tuː kənˈsɪd.ər/', meaning: 'Academic expression' },
                ],
                audio: [
                    { label: 'Graph illustrates', text: 'The graph illustrates a significant increase' },
                    { label: 'Factors to consider', text: 'There are several factors to consider' },
                ],
                vocabulary: [
                    { term: 'illustrate', reading: '/ˈɪl.ə.streɪt/', meaning: 'To show or explain' },
                    { term: 'significant', reading: '/sɪɡˈnɪf.ə.kənt/', meaning: 'Important or large' },
                    { term: 'factor', reading: '/ˈfæk.tər/', meaning: 'Element that influences' },
                    { term: 'demonstrate', reading: '/ˈdem.ən.streɪt/', meaning: 'To show clearly' },
                ],
                sentences: [
                    { en: 'The data shows a clear trend.', phonetic: '/ðə ˈdeɪ.tə ʃoʊz ə klɪr trend/', meaning: 'Data description' },
                    { en: 'This essay will discuss both perspectives.', phonetic: '/ðɪs ˈes.eɪ wɪl dɪˈskʌs boʊθ pərˈspek.tɪvz/', meaning: 'Essay introduction' },
                ],
            },
            {
                id: 'toefl',
                title: 'TOEFL Preparation',
                estimatedTime: '70 min',
                difficulty: 'Advanced',
                explanation: [
                    'TOEFL (Test of English as a Foreign Language) measures academic English skills.',
                    'Focus on academic vocabulary, note-taking, and integrated skills tasks.',
                    'Practice reading academic texts and listening to lectures.',
                    'Learn to write well-structured essays and speak clearly on academic topics.',
                ],
                examples: [
                    { en: 'The professor argues that technology enhances learning.', phonetic: '/ðə prəˈfes.ər ˈɑːr.ɡjuːz ðæt tekˈnɑː.lə.dʒi ɪnˈhæns.ɪz ˈlɜːr.nɪŋ/', meaning: 'Summarizing lecture' },
                    { en: 'According to the passage, climate change is accelerating.', phonetic: '/əˈkɔːr.dɪŋ tuː ðə ˈpæs.ɪdʒ ˈklaɪ.mət tʃeɪndʒ ɪz əkˈsel.ə.reɪ.tɪŋ/', meaning: 'Referencing text' },
                ],
                audio: [
                    { label: 'Professor argues', text: 'The professor argues that technology enhances learning' },
                    { label: 'According to passage', text: 'According to the passage, climate change is accelerating' },
                ],
                vocabulary: [
                    { term: 'academic', reading: '/ˌæk.əˈdem.ɪk/', meaning: 'Related to education' },
                    { term: 'enhance', reading: '/ɪnˈhæns/', meaning: 'To improve or increase' },
                    { term: 'accelerate', reading: '/əkˈsel.ə.reɪt/', meaning: 'To speed up' },
                    { term: 'perspective', reading: '/pərˈspek.tɪv/', meaning: 'Point of view' },
                ],
                sentences: [
                    { en: 'The lecture discusses the impact of globalization.', phonetic: '/ðə ˈlek.tʃər dɪˈskʌs.ɪz ðə ˈɪm.pækt ʌv ˌɡloʊ.bəl.əˈzeɪ.ʃən/', meaning: 'Lecture topic' },
                    { en: 'Both the reading and listening support this view.', phonetic: '/boʊθ ðə ˈriː.dɪŋ ænd ˈlɪs.ənɪŋ səˈpɔːrt ðɪs vjuː/', meaning: 'Integrated task response' },
                ],
            },
            {
                id: 'advanced-conversation',
                title: 'Advanced Conversation',
                estimatedTime: '55 min',
                difficulty: 'Advanced',
                explanation: [
                    'Advanced conversation covers complex topics, abstract discussions, and nuanced expressions.',
                    'Practice discussing current events, cultural topics, and personal opinions in depth.',
                    'Learn idioms, phrasal verbs, and colloquial expressions used by native speakers.',
                    'Develop fluency in expressing complex ideas and emotions naturally.',
                ],
                examples: [
                    { en: 'That\'s a thought-provoking perspective.', phonetic: '/ðæts ə ˈθɔːt prəˈvoʊ.kɪŋ pərˈspek.tɪv/', meaning: 'Responding to opinion' },
                    { en: 'I see where you\'re coming from.', phonetic: '/aɪ siː wer jʊr ˈkʌm.ɪŋ frʌm/', meaning: 'Understanding viewpoint' },
                    { en: 'Let\'s agree to disagree.', phonetic: '/lets əˈɡriː tuː ˌdɪs.əˈɡriː/', meaning: 'Ending disagreement politely' },
                ],
                audio: [
                    { label: 'Thought-provoking', text: 'That\'s a thought-provoking perspective' },
                    { label: 'See where coming from', text: 'I see where you\'re coming from' },
                ],
                vocabulary: [
                    { term: 'perspective', reading: '/pərˈspek.tɪv/', meaning: 'Point of view' },
                    { term: 'nuance', reading: '/ˈnuː.ɑːns/', meaning: 'Subtle difference' },
                    { term: 'idiom', reading: '/ˈɪd.i.əm/', meaning: 'Expression with figurative meaning' },
                    { term: 'phrasal verb', reading: '/ˈfreɪ.zəl vɜːrb/', meaning: 'Verb + particle combination' },
                ],
                sentences: [
                    { en: 'From my perspective, this makes sense.', phonetic: '/frʌm maɪ pərˈspek.tɪv ðɪs meɪks sens/', meaning: 'Giving opinion' },
                    { en: 'I\'m on the fence about this issue.', phonetic: '/aɪm ɑːn ðə fens əˈbaʊt ðɪs ˈɪʃ.uː/', meaning: 'Undecided' },
                ],
            },
            {
                id: 'advanced-reading',
                title: 'Advanced Reading',
                estimatedTime: '50 min',
                difficulty: 'Advanced',
                explanation: [
                    'Advanced reading includes literary works, academic papers, and complex texts.',
                    'Practice reading novels, newspapers, academic journals, and professional documents.',
                    'Learn to understand literary devices, rhetorical strategies, and complex arguments.',
                    'Develop critical reading skills to analyze and evaluate texts.',
                ],
                examples: [
                    { en: 'The novel explores themes of identity and belonging.', phonetic: '/ðə ˈnɑː.vəl ɪkˈsplɔːrz θiːmz ʌv aɪˈden.tə.ti ænd bɪˈlɔŋ.ɪŋ/', meaning: 'Literary analysis' },
                    { en: 'The research suggests a correlation between diet and health.', phonetic: '/ðə ˈriˌsɜːrtʃ səˈdʒests ə ˌkɔː.rəˈleɪ.ʃən bɪˈtwiːn daɪət ænd helθ/', meaning: 'Academic finding' },
                ],
                audio: [
                    { label: 'Novel explores themes', text: 'The novel explores themes of identity and belonging' },
                    { label: 'Research suggests', text: 'The research suggests a correlation' },
                ],
                vocabulary: [
                    { term: 'theme', reading: '/θiːm/', meaning: 'Main idea or topic' },
                    { term: 'identity', reading: '/aɪˈden.tə.ti/', meaning: 'Who someone is' },
                    { term: 'correlation', reading: '/ˌkɔː.rəˈleɪ.ʃən/', meaning: 'Relationship between things' },
                    { term: 'analyze', reading: '/ˈæn.ə.laɪz/', meaning: 'To examine in detail' },
                ],
                sentences: [
                    { en: 'This book has profound insights.', phonetic: '/ðɪs bʊk hæz prəˈfaʊnd ˈɪn.saɪts/', meaning: 'Book review' },
                    { en: 'I enjoy reading academic journals.', phonetic: '/aɪ ɪnˈdʒɔɪ ˈriː.dɪŋ ˌæk.əˈdem.ɪk ˈdʒɜːr.nəlz/', meaning: 'Reading preference' },
                ],
            },
            {
                id: 'advanced-listening',
                title: 'Advanced Listening',
                estimatedTime: '45 min',
                difficulty: 'Advanced',
                explanation: [
                    'Advanced listening involves understanding fast-paced speech, slang, and cultural references.',
                    'Practice with movies, TV shows, podcasts, and native speaker conversations.',
                    'Focus on catching details, understanding humor, sarcasm, and implied meanings.',
                    'Train your ear to understand different accents and speaking styles.',
                ],
                examples: [
                    { en: 'Can you keep up with their conversation?', phonetic: '/kæn juː kiːp ʌp wɪð ðer ˌkɑːn.vərˈseɪ.ʃən/', meaning: 'About speed' },
                    { en: 'That accent is hard to understand.', phonetic: '/ðæt ˈæk.sent ɪz hɑːrd tuː ˌʌn.dərˈstænd/', meaning: 'About accent' },
                ],
                audio: [
                    { label: 'Keep up with conversation', text: 'Can you keep up with their conversation' },
                    { label: 'Accent hard to understand', text: 'That accent is hard to understand' },
                ],
                vocabulary: [
                    { term: 'slang', reading: '/slæŋ/', meaning: 'Informal language' },
                    { term: 'sarcasm', reading: '/ˈsɑːr.kæz.əm/', meaning: 'Saying opposite of what is meant' },
                    { term: 'implied', reading: '/ɪmˈplaɪd/', meaning: 'Suggested but not stated' },
                    { term: 'nuance', reading: '/ˈnuː.ɑːns/', meaning: 'Subtle difference' },
                ],
                sentences: [
                    { en: 'They were speaking too fast for me.', phonetic: '/ðeɪ wɜːr ˈspiː.kɪŋ tuː fæst fɔːr miː/', meaning: 'Difficulty understanding' },
                    { en: 'I love British humor.', phonetic: '/aɪ lʌv ˈbrɪt.ɪʃ ˈhjuː.mər/', meaning: 'Cultural preference' },
                ],
            },
        ],
    },
];
