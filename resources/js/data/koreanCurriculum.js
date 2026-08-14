/**
 * Korean Curriculum
 * Complete curriculum for learning Korean
 */

export const koreanCurriculum = [
    {
        id: 'beginner',
        title: 'Beginner',
        description: 'Learn Hangul, basic grammar, and essential vocabulary.',
        lessons: [
            {
                id: 'hangul-basics',
                title: 'Hangul Basics',
                estimatedTime: '40 min',
                difficulty: 'Beginner',
                explanation: [
                    'Hangul (한글) is the Korean alphabet, created in the 15th century by King Sejong the Great. It is one of the most scientific and logical writing systems in the world.',
                    'Hangul consists of 14 basic consonants and 10 basic vowels. These are combined to form syllable blocks.',
                    'The basic consonants are: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ',
                    'The basic vowels are: ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ',
                ],
                examples: [
                    { ko: '안녕하세요', romanization: 'annyeonghaseyo', en: 'Hello' },
                    { ko: '감사합니다', romanization: 'gamsahamnida', en: 'Thank you' },
                    { ko: '안녕히 가세요', romanization: 'annyeonghi gaseyo', en: 'Goodbye' },
                    { ko: '죄송합니다', romanization: 'joesonghamnida', en: 'Sorry' },
                ],
                audio: [
                    { label: 'Hello', text: '안녕하세요' },
                    { label: 'Thank you', text: '감사합니다' },
                    { label: 'Goodbye', text: '안녕히 가세요' },
                ],
                vocabulary: [
                    { term: '안녕하세요', reading: 'annyeonghaseyo', meaning: 'Hello' },
                    { term: '감사합니다', reading: 'gamsahamnida', meaning: 'Thank you' },
                    { term: '안녕히 가세요', reading: 'annyeonghi gaseyo', meaning: 'Goodbye' },
                    { term: '죄송합니다', reading: 'joesonghamnida', meaning: 'Sorry' },
                ],
                sentences: [
                    { ko: '안녕하세요?', romanization: 'annyeonghaseyo?', en: 'Hello?' },
                    { ko: '잘 지내셨어요?', romanization: 'jal jinaesyeosseoyo?', en: 'Have you been well?' },
                ],
                grammarNotes: [
                    { title: 'Basic Greetings', body: '안녕하세요 (annyeonghaseyo) is the standard polite greeting used during the day. It literally means "Are you at peace?"' },
                ],
            },
            {
                id: 'double-consonants',
                title: 'Double Consonants',
                estimatedTime: '35 min',
                difficulty: 'Beginner',
                explanation: [
                    'Korean has five double consonants (쌍자음): ㄲ, ㄸ, ㅃ, ㅆ, ㅉ',
                    'Double consonants are pronounced with more tension and force than their single counterparts.',
                    'ㄲ (kk) - tense g/k sound, ㄸ (tt) - tense d/t sound, ㅃ (pp) - tense b/p sound',
                    'ㅆ (ss) - tense s sound, ㅉ (jj) - tense j sound',
                ],
                examples: [
                    { ko: '까다', romanization: 'kkada', en: 'To be difficult' },
                    { ko: '또', romanization: 'tto', en: 'Again' },
                    { ko: '빨리', romanization: 'ppalli', en: 'Quickly' },
                    { ko: '씨', romanization: 'ssi', en: 'Mr./Ms. (honorific)' },
                ],
                audio: [
                    { label: 'Difficult', text: '까다' },
                    { label: 'Again', text: '또' },
                    { label: 'Quickly', text: '빨리' },
                ],
                vocabulary: [
                    { term: '까다', reading: 'kkada', meaning: 'To be difficult' },
                    { term: '또', reading: 'tto', meaning: 'Again' },
                    { term: '빨리', reading: 'ppalli', meaning: 'Quickly' },
                    { term: '씨', reading: 'ssi', meaning: 'Mr./Ms.' },
                ],
                grammarNotes: [
                    { title: 'Pronunciation', body: 'Double consonants are pronounced with glottal tension. Exhale more air and tense your throat muscles when pronouncing them.' },
                ],
            },
            {
                id: 'batchim',
                title: 'Batchim',
                estimatedTime: '45 min',
                difficulty: 'Beginner',
                explanation: [
                    'Batchim (받침) refers to the final consonant in a Korean syllable block.',
                    'Not all consonants can appear in the final position. The 7 possible batchim sounds are: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ',
                    'Some consonants change their pronunciation when in the final position.',
                    'Understanding batchim is crucial for correct pronunciation and reading.',
                ],
                examples: [
                    { ko: '한국', romanization: 'hanguk', en: 'Korea' },
                    { ko: '있다', romanization: 'itda', en: 'To exist' },
                    { ko: '많다', romanization: 'manta', en: 'To be many' },
                    { ko: '읽다', romanization: 'ikda', en: 'To read' },
                ],
                audio: [
                    { label: 'Korea', text: '한국' },
                    { label: 'To exist', text: '있다' },
                    { label: 'To be many', text: '많다' },
                ],
                vocabulary: [
                    { term: '한국', reading: 'hanguk', meaning: 'Korea' },
                    { term: '있다', reading: 'itda', meaning: 'To exist' },
                    { term: '많다', reading: 'manta', meaning: 'To be many' },
                    { term: '읽다', reading: 'ikda', meaning: 'To read' },
                ],
                sentences: [
                    { ko: '한국 사람입니다.', romanization: 'hanguk saramimnida.', en: 'I am Korean.' },
                    { ko: '책이 많습니다.', romanization: 'chaeki manseumnida.', en: 'There are many books.' },
                ],
                grammarNotes: [
                    { title: 'Batchim Rules', body: 'When ㄱ, ㄲ, ㅋ, ㄳ, ㄺ are in final position, they are pronounced as ㄱ (k). When ㄷ, ㅅ, ㅆ, ㅈ, ㅊ, ㅌ, ㅎ are final, they are pronounced as ㄷ (t).' },
                ],
            },
            {
                id: 'korean-numbers',
                title: 'Numbers',
                estimatedTime: '30 min',
                difficulty: 'Beginner',
                explanation: [
                    'Korean uses two number systems: Native Korean (하나, 둘, 셋) and Sino-Korean (일, 이, 삼).',
                    'Native Korean numbers are used for counting objects, age, and hours.',
                    'Sino-Korean numbers are used for dates, money, phone numbers, and minutes.',
                    'It is important to know which system to use in different contexts.',
                ],
                examples: [
                    { ko: '하나', romanization: 'hana', en: 'One (native)' },
                    { ko: '일', romanization: 'il', en: 'One (Sino-Korean)' },
                    { ko: '둘', romanization: 'dul', en: 'Two (native)' },
                    { ko: '이', romanization: 'i', en: 'Two (Sino-Korean)' },
                ],
                audio: [
                    { label: 'One native', text: '하나' },
                    { label: 'One Sino-Korean', text: '일' },
                    { label: 'Two native', text: '둘' },
                ],
                vocabulary: [
                    { term: '하나', reading: 'hana', meaning: 'One (native)' },
                    { term: '둘', reading: 'dul', meaning: 'Two (native)' },
                    { term: '셋', reading: 'set', meaning: 'Three (native)' },
                    { term: '일', reading: 'il', meaning: 'One (Sino-Korean)' },
                ],
                sentences: [
                    { ko: '사람이 한 명 있습니다.', romanization: 'sarami han myeom itseumnida.', en: 'There is one person.' },
                    { ko: '삼 시입니다.', romanization: 'sam siimnida.', en: 'It is three o\'clock.' },
                ],
            },
            {
                id: 'korean-greetings',
                title: 'Greetings',
                estimatedTime: '25 min',
                difficulty: 'Beginner',
                explanation: [
                    'Korean greetings vary based on time of day and social relationship.',
                    'Common greetings include 안녕하세요 (hello), 안녕히 가세요 (goodbye when leaving), and 안녕히 계세요 (goodbye when staying).',
                    'Korean uses honorifics to show respect to elders and superiors.',
                    'Polite speech (존댓말) is used in most formal situations.',
                ],
                examples: [
                    { ko: '좋은 아침입니다', romanization: 'joeun achimimnida', en: 'Good morning' },
                    { ko: '안녕히 주무셨어요?', romanization: 'annyeonghi jumusyeosseoyo?', en: 'Did you sleep well?' },
                    { ko: '만나서 반갑습니다', romanization: 'mannaseo bangapseumnida', en: 'Nice to meet you' },
                    { ko: '안녕히 계세요', romanization: 'annyeonghi gyeseyo', en: 'Goodbye (staying)' },
                ],
                audio: [
                    { label: 'Good morning', text: '좋은 아침입니다' },
                    { label: 'Did you sleep well', text: '안녕히 주무셨어요?' },
                    { label: 'Nice to meet you', text: '만나서 반갑습니다' },
                ],
                vocabulary: [
                    { term: '아침', reading: 'achim', meaning: 'Morning' },
                    { term: '자다', reading: 'jada', meaning: 'To sleep' },
                    { term: '만나다', reading: 'mannada', meaning: 'To meet' },
                    { term: '반갑다', reading: 'bangapda', meaning: 'To be glad/pleased' },
                ],
                sentences: [
                    { ko: '선생님, 좋은 아침입니다!', romanization: 'seonsaengnim, joeun achimimnida!', en: 'Teacher, good morning!' },
                    { ko: '만나서 반갑습니다.', romanization: 'mannaseo bangapseumnida.', en: 'Nice to meet you.' },
                ],
                grammarNotes: [
                    { title: 'Honorifics', body: 'Use honorific endings like -세요 (-seyo) and -습니다 (-seumnida) when speaking to elders or in formal situations. These show respect and politeness.' },
                ],
            },
            {
                id: 'korean-vocabulary',
                title: 'Basic Vocabulary',
                estimatedTime: '45 min',
                difficulty: 'Beginner',
                explanation: [
                    'Building a strong vocabulary foundation is essential for learning Korean.',
                    'Learn common words used in daily life: family, food, places, and basic verbs.',
                    'Korean words are often composed of Sino-Korean roots, making it easier to learn related vocabulary.',
                    'Practice writing and pronouncing words to remember them better.',
                ],
                examples: [
                    { ko: '사람', romanization: 'saram', en: 'Person' },
                    { ko: '물', romanization: 'mul', en: 'Water' },
                    { ko: '밥', romanization: 'bap', en: 'Rice/Meal' },
                    { ko: '집', romanization: 'jip', en: 'Home' },
                ],
                audio: [
                    { label: 'Person', text: '사람' },
                    { label: 'Water', text: '물' },
                    { label: 'Rice', text: '밥' },
                ],
                vocabulary: [
                    { term: '사람', reading: 'saram', meaning: 'Person' },
                    { term: '물', reading: 'mul', meaning: 'Water' },
                    { term: '밥', reading: 'bap', meaning: 'Rice/Meal' },
                    { term: '집', reading: 'jip', meaning: 'Home' },
                    { term: '책', reading: 'chaek', meaning: 'Book' },
                    { term: '차', reading: 'cha', meaning: 'Car/Tea' },
                ],
                sentences: [
                    { ko: '물을 마십니다.', romanization: 'mureul masimnida.', en: 'I drink water.' },
                    { ko: '이것은 제 집입니다.', romanization: 'igeoseun je jipimnida.', en: 'This is my home.' },
                ],
            },
            {
                id: 'korean-grammar',
                title: 'Basic Grammar',
                estimatedTime: '40 min',
                difficulty: 'Beginner',
                explanation: [
                    'Korean grammar follows Subject-Object-Verb (SOV) word order, different from English.',
                    'The verb always comes at the end of the sentence.',
                    'Particles are used to mark the grammatical function of words (subject, object, etc.).',
                    'Basic sentence structure: Subject + Object + Verb. Example: 저 (I) + 사과를 + 먹어요 = I eat an apple.',
                ],
                examples: [
                    { ko: '저는 학생입니다.', romanization: 'jeoneun haksaengimnida.', en: 'I am a student.' },
                    { ko: '한국 음식을 좋아해요.', romanization: 'hanguk eumsigeul joahaeyo.', en: 'I like Korean food.' },
                    { ko: '학교에 가요.', romanization: 'hakgyoe gayo.', en: 'I go to school.' },
                ],
                audio: [
                    { label: 'I am a student', text: '저는 학생입니다' },
                    { label: 'I like Korean food', text: '한국 음식을 좋아해요' },
                ],
                vocabulary: [
                    { term: '이다', reading: 'ida', meaning: 'To be' },
                    { term: '좋아하다', reading: 'joahada', meaning: 'To like' },
                    { term: '가다', reading: 'gada', meaning: 'To go' },
                    { term: '학교', reading: 'hakgyo', meaning: 'School' },
                ],
                sentences: [
                    { ko: '저는 한국 사람입니다.', romanization: 'jeoneun hanguk saramimnida.', en: 'I am Korean.' },
                    { ko: '커피를 안 마셔요.', romanization: 'keopireul an masyeoyo.', en: 'I don\'t drink coffee.' },
                ],
                grammarNotes: [
                    { title: 'Subject-Object-Verb', body: 'Korean uses SOV word order: Subject + Object + Verb. Example: 저 (I) + 사과를 + 먹어요 = I eat an apple.' },
                    { title: 'Particles', body: 'Particles mark grammatical roles: 이/가 (subject marker), 을/를 (object marker), 은/는 (topic marker). Choose based on whether the word ends in a consonant or vowel.' },
                ],
            },
        ],
    },
    {
        id: 'intermediate',
        title: 'Intermediate',
        description: 'Develop conversational skills and intermediate grammar.',
        lessons: [
            {
                id: 'topik-vocabulary',
                title: 'TOPIK Vocabulary',
                estimatedTime: '60 min',
                difficulty: 'Intermediate',
                explanation: [
                    'TOPIK (Test of Proficiency in Korean) is the official Korean language proficiency test.',
                    'TOPIK I covers beginner levels (1-2), while TOPIK II covers intermediate to advanced (3-6).',
                    'This lesson focuses on vocabulary commonly found in TOPIK I and II exams.',
                    'Learn words related to daily life, society, culture, and abstract concepts.',
                ],
                examples: [
                    { ko: '발전', romanization: 'baljeon', en: 'Development' },
                    { ko: '경험', romanization: 'gyeongheom', en: 'Experience' },
                    { ko: '환경', romanization: 'hwangyeong', en: 'Environment' },
                    { ko: '영향', romanization: 'yeonghyang', en: 'Influence' },
                ],
                audio: [
                    { label: 'Development', text: '발전' },
                    { label: 'Experience', text: '경험' },
                ],
                vocabulary: [
                    { term: '발전', reading: 'baljeon', meaning: 'Development' },
                    { term: '경험', reading: 'gyeongheom', meaning: 'Experience' },
                    { term: '환경', reading: 'hwangyeong', meaning: 'Environment' },
                    { term: '영향', reading: 'yeonghyang', meaning: 'Influence' },
                    { term: '발달', reading: 'baldal', meaning: 'Development/Progress' },
                    { term: '향상', reading: 'hyangang', meaning: 'Improvement' },
                ],
                sentences: [
                    { ko: '이 프로젝트는 발전 가능성이 큽니다.', romanization: 'i peurojekteuneun baljeon ganeungseongi keumnida.', en: 'This project has great development potential.' },
                    { ko: '다양한 경험을 쌓는 것이 중요합니다.', romanization: 'dayanghan gyeongheomeul ssanneun geosi jungyohamnida.', en: 'Accumulating various experiences is important.' },
                ],
            },
            {
                id: 'intermediate-grammar',
                title: 'Intermediate Grammar',
                estimatedTime: '55 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Intermediate grammar includes more complex sentence structures and connective endings.',
                    'Learn causative, passive, and honorific forms.',
                    'Practice using various conjunctions and sentence-final endings.',
                    'Understand the nuances between similar grammatical forms.',
                ],
                examples: [
                    { ko: '공부를 했어요.', romanization: 'gongbureul haesseoyo.', en: 'I studied.' },
                    { ko: '공부를 했어야 했어요.', romanization: 'gongbureul haesseoya haesseoyo.', en: 'I should have studied.' },
                    { ko: '공부를 하게 되었어요.', romanization: 'gongbureul hage doeesseoyo.', en: 'I ended up studying.' },
                ],
                audio: [
                    { label: 'I studied', text: '공부를 했어요' },
                    { label: 'I should have studied', text: '공부를 했어야 했어요' },
                ],
                vocabulary: [
                    { term: '하게 되다', reading: 'hage doeda', meaning: 'To end up doing' },
                    { term: '-아/어야 하다', reading: '-a/eoya hada', meaning: 'Must/should have' },
                    { term: '시키다', reading: 'sikida', meaning: 'To make someone do (causative)' },
                ],
                sentences: [
                    { ko: '한국어를 공부하게 되었어요.', romanization: 'hangugeoreul gongbuhage doeesseoyo.', en: 'I ended up studying Korean.' },
                    { ko: '더 일찍 와야 했어요.', romanization: 'deo iljjik waya haesseoyo.', en: 'I should have come earlier.' },
                ],
                grammarNotes: [
                    { title: 'Causative Forms', body: 'Causative forms indicate making someone do something. Common patterns: -시키다, -게 하다, -이/히/리/기다. Example: 먹다 → 먹이다 (to make someone eat).' },
                    { title: 'Regret', body: 'The pattern -았/었어야 했어요 expresses regret about not doing something. Example: 공부를 했어야 했어요 (I should have studied).' },
                ],
            },
            {
                id: 'intermediate-reading',
                title: 'Reading',
                estimatedTime: '50 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Reading practice focuses on understanding longer texts and recognizing vocabulary in context.',
                    'Read short articles, dialogues, and stories to improve comprehension.',
                    'Learn to guess meaning from context when encountering unfamiliar words.',
                    'Practice reading both formal and informal styles of writing.',
                ],
                examples: [
                    { ko: '기술의 발달로 인해 사람들의 생활이 많이 변했습니다.', romanization: 'gisureul baldeuro inhae saramdeurui saenghuali mani byeonhaetsseumnida.', en: 'Due to the development of technology, people\'s lives have changed a lot.' },
                    { ko: '한국어를 공부하려면 시간과 인내가 필요합니다.', romanization: 'hangugeoreul gongbuharyeomyeon sigangwa innaega piryohamnida.', en: 'To study Korean, time and patience are needed.' },
                ],
                audio: [
                    { label: 'Technology development', text: '기술의 발달로 인해' },
                    { label: 'Studying Korean', text: '한국어를 공부하려면' },
                ],
                vocabulary: [
                    { term: '기술', reading: 'gisul', meaning: 'Technology' },
                    { term: '발달', reading: 'baldal', meaning: 'Development' },
                    { term: '변하다', reading: 'byeonhada', meaning: 'To change' },
                    { term: '인내', reading: 'innae', meaning: 'Patience' },
                ],
                sentences: [
                    { ko: '이 기사는 아주 흥미로워요.', romanization: 'i gisaneun aju heungmirowoyo.', en: 'This article is very interesting.' },
                    { ko: '한국어 책을 읽는 것을 좋아해요.', romanization: 'hangugeo chaegeul inneun geoseul joahaeyo.', en: 'I like reading Korean books.' },
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
                    { ko: '이해했어요?', romanization: 'ihaehaesseoyo?', en: 'Did you understand?' },
                    { ko: '다시 한 번 말해 주세요.', romanization: 'dasi han beon malhae juseyo.', en: 'Please say it again.' },
                ],
                audio: [
                    { label: 'Did you understand', text: '이해했어요?' },
                    { label: 'Please say again', text: '다시 한 번 말해 주세요' },
                ],
                vocabulary: [
                    { term: '이해하다', reading: 'ihaehada', meaning: 'To understand' },
                    { term: '다시', reading: 'dasi', meaning: 'Again' },
                    { term: '말하다', reading: 'malhada', meaning: 'To speak/say' },
                    { term: '번', reading: 'beon', meaning: 'Time/occurrence' },
                ],
                sentences: [
                    { ko: '이해했어요.', romanization: 'ihaehaesseoyo.', en: 'I understood.' },
                    { ko: '그분이 말하는 속도가 빨라요.', romanization: 'geubuni malhaneun sokdoga ppallayo.', en: 'That person speaks fast.' },
                ],
            },
        ],
    },
    {
        id: 'advanced',
        title: 'Advanced',
        description: 'Achieve fluency with advanced grammar and cultural nuances.',
        lessons: [
            {
                id: 'topik-ii',
                title: 'TOPIK II Preparation',
                estimatedTime: '70 min',
                difficulty: 'Advanced',
                explanation: [
                    'TOPIK II covers levels 3-6, from intermediate to advanced proficiency.',
                    'This level requires understanding complex texts, abstract concepts, and formal language.',
                    'Practice with authentic materials like newspapers, academic papers, and literature.',
                    'Develop advanced reading and writing skills for professional and academic contexts.',
                ],
                examples: [
                    { ko: '이 결정은 중요한 의미를 가집니다.', romanization: 'i gyeoljeoneun jungyohan uimireul gajimnida.', en: 'This decision has important meaning.' },
                    { ko: '이 문제에 대해 더 논의해야 합니다.', romanization: 'i munje daehae deo nonuihaya hamnida.', en: 'We need to discuss this issue further.' },
                ],
                audio: [
                    { label: 'Important meaning', text: '중요한 의미를 가집니다' },
                    { label: 'Discuss further', text: '더 논의해야 합니다' },
                ],
                vocabulary: [
                    { term: '결정', reading: 'gyeoljeong', meaning: 'Decision' },
                    { term: '의미', reading: 'uimi', meaning: 'Meaning' },
                    { term: '논의하다', reading: 'nonuihada', meaning: 'To discuss' },
                    { term: '문제', reading: 'munje', meaning: 'Problem/Issue' },
                ],
                sentences: [
                    { ko: '이 프로젝트는 중요한 의미를 가집니다.', romanization: 'i peurojekteuneun jungyohan uimireul gajimnida.', en: 'This project has important meaning.' },
                    { ko: '우리는 더 협력해야 합니다.', romanization: 'urineun deo hyeongnyeokhaya hamnida.', en: 'We need to cooperate more.' },
                ],
            },
            {
                id: 'business-korean',
                title: 'Business Korean',
                estimatedTime: '60 min',
                difficulty: 'Advanced',
                explanation: [
                    'Business Korean focuses on professional language used in corporate environments.',
                    'Learn business vocabulary, formal expressions, and workplace etiquette.',
                    'Practice writing emails, reports, and business documents.',
                    'Understand Korean business culture and communication styles.',
                ],
                examples: [
                    { ko: '귀사와 협력하게 되어 기쁩니다.', romanization: 'gisawa hyeongnyeokhage doeeo gippeumnida.', en: 'We are pleased to cooperate with your company.' },
                    { ko: '이 문제에 대해 어떻게 생각하십니까?', romanization: 'i munje daehae eotteoke saenggakhasimnikka?', en: 'What do you think about this issue?' },
                ],
                audio: [
                    { label: 'Cooperate with your company', text: '귀사와 협력하게 되어' },
                    { label: 'What do you think', text: '어떻게 생각하십니까?' },
                ],
                vocabulary: [
                    { term: '회사', reading: 'hoesa', meaning: 'Company' },
                    { term: '협력', reading: 'hyeongnyeok', meaning: 'Cooperation' },
                    { term: '귀사', reading: 'gisa', meaning: 'Your company (honorific)' },
                    { term: '생각하다', reading: 'saenggakhada', meaning: 'To think' },
                ],
                sentences: [
                    { ko: '귀사와의 협력을 기대합니다.', romanization: 'gisawaui hyeongnyeogeul gidaehamnida.', en: 'We look forward to cooperating with your company.' },
                    { ko: '이 프로젝트는 발전 가능성이 큽니다.', romanization: 'i peurojekteuneun baljeon ganeungseongi keumnida.', en: 'This project has great development potential.' },
                ],
            },
            {
                id: 'advanced-conversation',
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
                    { ko: '이 문제는 여러 각도에서 분석해야 해요.', romanization: 'i munjeneun yeoreo gakdoseo bunseokhaeya haeyo.', en: 'This issue needs to be analyzed from multiple angles.' },
                    { ko: '이것이 재미있는 이야기를 생각나게 해요.', romanization: 'igeosi jaemiitneun iyagireul saenggannage haeyo.', en: 'This reminds me of an interesting story.' },
                ],
                audio: [
                    { label: 'Multiple angles', text: '여러 각도에서 분석해야 해요' },
                    { label: 'Reminds me of', text: '생각나게 해요' },
                ],
                vocabulary: [
                    { term: '각도', reading: 'gakdo', meaning: 'Angle/perspective' },
                    { term: '분석하다', reading: 'bunseokhada', meaning: 'To analyze' },
                    { term: '생각나다', reading: 'saenggannada', meaning: 'To recall/remind' },
                    { term: '재미있다', reading: 'jaemitda', meaning: 'To be interesting' },
                ],
                sentences: [
                    { ko: '장기적으로 보면 좋은 결정이에요.', romanization: 'janggijeokeuro bomyeon joeun gyeoljeongieyo.', en: 'From a long-term perspective, it\'s a good decision.' },
                    { ko: '이 주제에 관심이 많아요.', romanization: 'i jujee gwansimi manayo.', en: 'I am very interested in this topic.' },
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
                    { ko: '문학 작품은 언어의 매개체일 뿐만 아니라 문화의 결정체입니다.', romanization: 'munhak jakpumeun eoneoui maegaechel ppunman ara munhawaui gyeoljeongcheimnida.', en: 'Literary works are not only carriers of language, but also the crystallization of culture.' },
                    { ko: '독서를 통해 다른 문화적 배경을 이해할 수 있습니다.', romanization: 'dokseoreul tonghae dareun munhwajeok baegyeongeul ihaehal su itseumnida.', en: 'Through reading, we can understand different cultural backgrounds.' },
                ],
                audio: [
                    { label: 'Literary works', text: '문학 작품은' },
                    { label: 'Cultural crystallization', text: '문화의 결정체입니다' },
                ],
                vocabulary: [
                    { term: '문학', reading: 'munhak', meaning: 'Literature' },
                    { term: '매개체', reading: 'maegaechae', meaning: 'Medium/carrier' },
                    { term: '결정체', reading: 'gyeoljeongche', meaning: 'Crystallization' },
                    { term: '배경', reading: 'baegyeong', meaning: 'Background' },
                ],
                sentences: [
                    { ko: '이 책은 깊이가 있어요.', romanization: 'i chaekeun gigiga isseoyo.', en: 'This book has depth.' },
                    { ko: '고전 문학을 읽는 것을 좋아해요.', romanization: 'gojeon munhageul inneun geoseul joahaeyo.', en: 'I like reading classical literature.' },
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
                    { ko: '그들의 말하는 속도를 따라갈 수 있어요?', romanization: 'geudeurui malhaneun sokdoreul ttaragal su isseoyo?', en: 'Can you keep up with their speaking speed?' },
                    { ko: '이 사투리는 이해하기 좀 어려워요.', romanization: 'i satureuneun ihaehagi jom eoryeowoyo.', en: 'This dialect is a bit hard to understand.' },
                ],
                audio: [
                    { label: 'Keep up with speed', text: '속도를 따라갈 수 있어요?' },
                    { label: 'Dialect hard to understand', text: '사투리는 이해하기 좀 어려워요' },
                ],
                vocabulary: [
                    { term: '따라가다', reading: 'ttaragada', meaning: 'To keep up with' },
                    { term: '속도', reading: 'sokdo', meaning: 'Speed' },
                    { term: '사투리', reading: 'saturi', meaning: 'Dialect' },
                    { term: '어렵다', reading: 'eoryeopda', meaning: 'To be difficult' },
                ],
                sentences: [
                    { ko: '그분이 말하는 게 너무 빨라서 못 들었어요.', romanization: 'geubuni malhaneun ge neomu ppallaseo mot deureosseoyo.', en: 'That person spoke too fast, I couldn\'t hear.' },
                    { ko: '이 사투리는 특색이 있어요.', romanization: 'i satureuneun teukseogi isseoyo.', en: 'This dialect has unique characteristics.' },
                ],
            },
        ],
    },
];
