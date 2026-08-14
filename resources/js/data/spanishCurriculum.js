/**
 * Spanish Curriculum
 * Complete curriculum for learning Spanish
 */

export const spanishCurriculum = [
    {
        id: 'beginner',
        title: 'Beginner',
        description: 'Learn basic grammar, vocabulary, and essential conversation skills.',
        lessons: [
            {
                id: 'spanish-alphabet',
                title: 'The Alphabet',
                estimatedTime: '30 min',
                difficulty: 'Beginner',
                explanation: [
                    'The Spanish alphabet has 27 letters, including the unique letter ñ (eñe).',
                    'The letters are: a, b, c, ch, d, e, f, g, h, i, j, k, l, ll, m, n, ñ, o, p, q, r, rr, s, t, u, v, w, x, y, z.',
                    'Each letter has a specific name and sound that you need to learn.',
                    'Spanish pronunciation is more consistent than English - letters generally have one sound.',
                ],
                examples: [
                    { es: 'A B C D E', phonetic: 'a be ce de e', en: 'First five letters' },
                    { es: 'F G H I J', phonetic: 'efe ge hache iota jota', en: 'Next five letters' },
                    { es: 'manzana', phonetic: '/man.ˈθa.na/', en: 'Apple' },
                    { es: 'niño', phonetic: '/ˈni.ɲo/', en: 'Child (boy)' },
                ],
                audio: [
                    { label: 'A B C', text: 'A B C' },
                    { label: 'manzana', text: 'manzana' },
                    { label: 'niño', text: 'niño' },
                ],
                vocabulary: [
                    { term: 'alfabeto', reading: '/al.fa.ˈbe.to/', meaning: 'Alphabet' },
                    { term: 'letra', reading: '/ˈle.tɾa/', meaning: 'Letter' },
                    { term: 'eñe', reading: '/ˈe.ɲe/', meaning: 'The letter ñ' },
                    { term: 'pronunciación', reading: '/pɾo.nun.θi.a.ˈθjon/', meaning: 'Pronunciation' },
                ],
                sentences: [
                    { es: 'El alfabeto español tiene 27 letras.', phonetic: '/el al.fa.ˈbe.to es.pa.ˈɲol ˈtje.ne ˈbjen.ti ˈsje.te ˈle.tɾas/', en: 'The Spanish alphabet has 27 letters' },
                    { es: 'Puedo escribir mi nombre.', phonetic: '/ˈpwe.do es.ˈkɾiβ mi ˈnom.bɾe/', en: 'I can write my name' },
                ],
                grammarNotes: [
                    { title: 'Letter Names', body: 'Each letter has a name: A (a), B (be), C (ce), CH (che), D (de), E (e), F (efe), G (ge), H (hache), I (i), J (jota), K (ka), L (ele), LL (elle), M (eme), N (ene), Ñ (eñe), O (o), P (pe), Q (cu), R (erre), RR (erre fuerte), S (ese), T (te), U (u), V (uve), W (uve doble), X (equis), Y (i griega), Z (zeta).' },
                ],
            },
            {
                id: 'spanish-pronunciation',
                title: 'Basic Pronunciation',
                estimatedTime: '35 min',
                difficulty: 'Beginner',
                explanation: [
                    'Spanish pronunciation is phonetic - words are pronounced as they are written.',
                    'Vowels are always pronounced the same way: a (ah), e (eh), i (ee), o (oh), u (oo).',
                    'The letter ñ produces a ny sound like in "canyon".',
                    'The rolled R (rr) is a distinctive Spanish sound that takes practice.',
                ],
                examples: [
                    { es: 'gato', phonetic: '/ˈɡa.to/', en: 'Cat' },
                    { es: 'perro', phonetic: '/ˈpe.ɾo/', en: 'Dog' },
                    { es: 'casa', phonetic: '/ˈka.sa/', en: 'House' },
                    { es: 'agua', phonetic: '/ˈa.ɣwa/', en: 'Water' },
                ],
                audio: [
                    { label: 'gato', text: 'gato' },
                    { label: 'perro', text: 'perro' },
                    { label: 'casa', text: 'casa' },
                ],
                vocabulary: [
                    { term: 'pronunciación', reading: '/pɾo.nun.θi.a.ˈθjon/', meaning: 'Pronunciation' },
                    { term: 'vocal', reading: '/bo.ˈkal/', meaning: 'Vowel' },
                    { term: 'consonante', reading: '/kon.so.ˈnan.te/', meaning: 'Consonant' },
                    { term: 'sonido', reading: '/so.ˈni.ðo/', meaning: 'Sound' },
                ],
                grammarNotes: [
                    { title: 'Vowel Sounds', body: 'Spanish vowels are pure and consistent: A (ah as in father), E (eh as in met), I (ee as in see), O (oh as in more), U (oo as in moon). Never diphthongize them.' },
                    { title: 'The Ñ Sound', body: 'The ñ is pronounced like the "ny" in "canyon" or "onion". Practice saying "señor" (seh-NYOR) and "niño" (NEE-nyo).' },
                ],
            },
            {
                id: 'spanish-greetings',
                title: 'Greetings',
                estimatedTime: '25 min',
                difficulty: 'Beginner',
                explanation: [
                    'Spanish greetings vary based on time of day and formality.',
                    'Common informal greetings include "Hola" (Hello) and "¿Qué tal?" (How are you?).',
                    'Formal greetings include "Buenos días" (Good morning), "Buenas tardes" (Good afternoon), and "Buenas noches" (Good evening).',
                    'Learn to use formal "usted" vs informal "tú" appropriately.',
                ],
                examples: [
                    { es: '¡Hola!', phonetic: '/ˈo.la/', en: 'Hello' },
                    { es: 'Buenos días', phonetic: '/ˈbwe.nos ˈdi.as/', en: 'Good morning' },
                    { es: '¿Cómo está?', phonetic: '/ˈko.mo es.ˈta/', en: 'How are you? (formal)' },
                    { es: 'Mucho gusto', phonetic: '/ˈmu.tʃo ˈɣus.to/', en: 'Nice to meet you' },
                ],
                audio: [
                    { label: 'Hola', text: 'Hola' },
                    { label: 'Buenos días', text: 'Buenos días' },
                    { label: 'Cómo está', text: '¿Cómo está?' },
                ],
                vocabulary: [
                    { term: 'saludo', reading: '/sa.ˈlu.ðo/', meaning: 'Greeting' },
                    { term: 'formal', reading: '/foɾ.ˈmal/', meaning: 'Formal' },
                    { term: 'informal', reading: '/in.foɾ.ˈmal/', meaning: 'Informal' },
                    { term: 'usted', reading: '/us.ˈted/', meaning: 'You (formal)' },
                ],
                sentences: [
                    { es: '¡Hola! ¿Cómo estás hoy?', phonetic: '/ˈo.la ˈko.mo es.ˈtas oi/', en: 'Hello! How are you today?' },
                    { es: 'Mucho gusto en conocerte.', phonetic: '/ˈmu.tʃo ˈɣus.to en ko.no.ˈθeɾ.te/', en: 'Nice to meet you (informal)' },
                ],
                grammarNotes: [
                    { title: 'Tú vs Usted', body: 'Use "tú" with friends, family, and people your age. Use "usted" with elders, superiors, and strangers. Usted conjugations are the same as él/ella (he/she).' },
                ],
            },
            {
                id: 'spanish-numbers',
                title: 'Numbers',
                estimatedTime: '30 min',
                difficulty: 'Beginner',
                explanation: [
                    'Spanish numbers follow a consistent pattern once you learn 1-15 and the tens.',
                    'Numbers 1-10: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez',
                    'Numbers 11-15 have unique names: once, doce, trece, catorce, quince',
                    'For 16+, combine "diez" with the unit: dieciséis (16), diecisiete (17), etc.',
                ],
                examples: [
                    { es: 'uno', phonetic: '/ˈu.no/', en: 'One' },
                    { es: 'diez', phonetic: '/ˈdjes/', en: 'Ten' },
                    { es: 'veinte', phonetic: '/ˈbejn.te/', en: 'Twenty' },
                    { es: 'cien', phonetic: '/ˈdjen/', en: 'One hundred' },
                ],
                audio: [
                    { label: 'Numbers 1-10', text: 'uno dos tres cuatro cinco seis siete ocho nueve diez' },
                    { label: 'veinte', text: 'veinte' },
                    { label: 'cien', text: 'cien' },
                ],
                vocabulary: [
                    { term: 'número', reading: '/ˈnu.me.ɾo/', meaning: 'Number' },
                    { term: 'contar', reading: '/kon.ˈtaɾ/', meaning: 'To count' },
                    { term: 'sumar', reading: '/su.ˈmaɾ/', meaning: 'To add' },
                    { term: 'restar', reading: '/ɾes.ˈtaɾ/', meaning: 'To subtract' },
                ],
                sentences: [
                    { es: 'Tengo un hermano.', phonetic: '/ˈteŋ.go un eɾ.ˈma.no/', en: 'I have one brother' },
                    { es: 'Ella tiene veinte años.', phonetic: '/ˈe.ʎa ˈtje.ne ˈbejn.te ˈa.ɲos/', en: 'She is twenty years old' },
                ],
            },
            {
                id: 'spanish-vocabulary',
                title: 'Basic Vocabulary',
                estimatedTime: '45 min',
                difficulty: 'Beginner',
                explanation: [
                    'Building a strong vocabulary is essential for effective communication.',
                    'Learn common words for family, food, places, and daily activities.',
                    'Spanish has many cognates with English - words that look and sound similar.',
                    'Practice using new words in sentences to remember them better.',
                ],
                examples: [
                    { es: 'familia', phonetic: '/fa.ˈmi.lja/', en: 'Family' },
                    { es: 'comida', phonetic: '/ko.ˈmi.ða/', en: 'Food' },
                    { es: 'casa', phonetic: '/ˈka.sa/', en: 'House' },
                    { es: 'escuela', phonetic: '/es.ˈkwe.la/', en: 'School' },
                ],
                audio: [
                    { label: 'familia', text: 'familia' },
                    { label: 'comida', text: 'comida' },
                    { label: 'casa', text: 'casa' },
                ],
                vocabulary: [
                    { term: 'persona', reading: '/peɾ.ˈso.na/', meaning: 'Person' },
                    { term: 'agua', reading: '/ˈa.ɣwa/', meaning: 'Water' },
                    { term: 'comida', reading: '/ko.ˈmi.ða/', meaning: 'Food' },
                    { term: 'hogar', reading: '/o.ˈɣaɾ/', meaning: 'Home' },
                    { term: 'libro', reading: '/ˈli.βɾo/', meaning: 'Book' },
                    { term: 'coche', reading: '/ˈko.tʃe/', meaning: 'Car' },
                ],
                sentences: [
                    { es: 'Amo a mi familia.', phonetic: '/ˈa.mo a mi fa.ˈmi.lja/', en: 'I love my family' },
                    { es: 'Esta es mi casa.', phonetic: '/ˈes.ta es mi ˈka.sa/', en: 'This is my house' },
                ],
            },
            {
                id: 'spanish-grammar',
                title: 'Basic Grammar',
                estimatedTime: '40 min',
                difficulty: 'Beginner',
                explanation: [
                    'Spanish grammar follows Subject-Verb-Object (SVO) word order, similar to English.',
                    'Verbs are conjugated based on the subject (yo, tú, él/ella, nosotros, ellos/ellas).',
                    'Learn basic sentence structures: "Yo soy..." (I am...), "Tengo..." (I have...), "Voy a..." (I go to...).',
                    'Spanish has two verbs for "to be": ser (permanent) and estar (temporary/location).',
                ],
                examples: [
                    { es: 'Yo soy estudiante.', phonetic: '/jo soi es.tu.ˈðjan.te/', en: 'I am a student' },
                    { es: 'Ella le gusta el café.', phonetic: '/ˈe.ʎa le ˈɣus.ta el ka.ˈfe/', en: 'She likes coffee' },
                    { es: 'Vamos a la escuela.', phonetic: '/ˈba.mos a la es.ˈkwe.la/', en: 'We go to school' },
                    { es: '¿Te gusta la pizza?', phonetic: '/te ˈɣus.ta la ˈpi.sa/', en: 'Do you like pizza?' },
                ],
                audio: [
                    { label: 'Yo soy estudiante', text: 'Yo soy estudiante' },
                    { label: 'Ella le gusta el café', text: 'Ella le gusta el café' },
                ],
                vocabulary: [
                    { term: 'sujeto', reading: '/su.ˈxe.to/', meaning: 'Subject' },
                    { term: 'verbo', reading: '/ˈbeɾ.bo/', meaning: 'Verb' },
                    { term: 'ser', reading: '/seɾ/', meaning: 'To be (permanent)' },
                    { term: 'estar', reading: '/es.ˈtaɾ/', meaning: 'To be (temporary)' },
                ],
                sentences: [
                    { es: 'Soy español.', phonetic: '/soj es.pa.ˈɲol/', en: 'I am Spanish' },
                    { es: 'Ella no bebe té.', phonetic: '/ˈe.ʎa no ˈbe.be te/', en: 'She does not drink tea' },
                ],
                grammarNotes: [
                    { title: 'Ser vs Estar', body: 'Use SER for permanent characteristics: identity, origin, profession, time. Example: Yo soy médico (I am a doctor). Use ESTAR for temporary states, emotions, and location: Estoy en casa (I am at home).' },
                    { title: 'Verb Conjugation', body: 'Regular -AR verbs (hablar): yo hablo, tú hablas, él habla, nosotros hablamos, ellos hablan. Each subject has a different ending.' },
                ],
            },
        ],
    },
    {
        id: 'intermediate',
        title: 'Intermediate',
        description: 'Master subjunctive, expand vocabulary, and improve fluency.',
        lessons: [
            {
                id: 'spanish-conversation',
                title: 'Conversation Skills',
                estimatedTime: '50 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Effective conversation involves listening, speaking, and understanding cultural context.',
                    'Learn common phrases for starting, maintaining, and ending conversations.',
                    'Practice asking follow-up questions to show interest and keep the conversation flowing.',
                    'Understand cultural nuances in Spanish-speaking countries.',
                ],
                examples: [
                    { es: '¿Cómo te fue hoy?', phonetic: '/ˈko.mo te ˈfwe oi/', en: 'How was your day?' },
                    { es: '¡Qué interesante!', phonetic: '/ke in.te.ˈɾe.san.te/', en: 'How interesting!' },
                    { es: 'Estoy de acuerdo contigo.', phonetic: '/es.ˈtoi de a.ˈkweɾ.do kon.ˈti.ɣo/', en: 'I agree with you' },
                    { es: '¿Qué piensas tú?', phonetic: '/ke ˈpjen.tas tu/', en: 'What do you think?' },
                ],
                audio: [
                    { label: 'Cómo te fue', text: '¿Cómo te fue hoy?' },
                    { label: 'Qué interesante', text: '¡Qué interesante!' },
                ],
                vocabulary: [
                    { term: 'conversación', reading: '/kon.beɾ.sa.ˈθjon/', meaning: 'Conversation' },
                    { term: 'opinión', reading: '/o.pi.ˈnjon/', meaning: 'Opinion' },
                    { term: 'acuerdo', reading: '/a.ˈkweɾ.do/', meaning: 'Agreement' },
                    { term: 'desacuerdo', reading: '/des.a.ˈkweɾ.do/', meaning: 'Disagreement' },
                ],
                sentences: [
                    { es: 'Tuve un gran día en el trabajo.', phonetic: '/ˈtu.be un ɡɾan ˈdi.a en el tɾa.ˈba.xo/', en: 'I had a great day at work' },
                    { es: '¿Qué opinas sobre esto?', phonetic: '/ke o.ˈpi.nas ˈso.bɾe ˈes.to/', en: 'What do you think about this?' },
                ],
            },
            {
                id: 'intermediate-grammar',
                title: 'Intermediate Grammar',
                estimatedTime: '55 min',
                difficulty: 'Intermediate',
                explanation: [
                    'Intermediate grammar includes the subjunctive mood, perfect tenses, and complex sentences.',
                    'Learn present subjunctive, past subjunctive, and when to use them.',
                    'Practice conditional sentences: si clauses and result clauses.',
                    'Understand the difference between por and para (both mean "for" but are used differently).',
                ],
                examples: [
                    { es: 'Espero que vengas.', phonetic: '/es.ˈpe.ɾo ke ˈben.ɡas/', en: 'I hope you come (subjunctive)' },
                    { es: 'Si llueve, me quedaré en casa.', phonetic: '/si ˈʎwe.be me ke.da.ˈɾe en ˈka.sa/', en: 'If it rains, I will stay home' },
                    { es: 'El libro fue escrito por ella.', phonetic: '/el ˈli.βɾo ˈfwe es.ˈkɾi.to poɾ ˈe.ʎa/', en: 'The book was written by her' },
                    { es: 'Ojalá pudiera hablar mejor.', phonetic: '/o.xa.ˈla pu.ˈdje.ɾa a.ˈβlaɾ me.ˈxoɾ/', en: 'I wish I could speak better' },
                ],
                audio: [
                    { label: 'Espero que vengas', text: 'Espero que vengas' },
                    { label: 'Si llueve', text: 'Si llueve, me quedaré en casa' },
                ],
                vocabulary: [
                    { term: 'subjuntivo', reading: '/sub.xun.ˈti.bo/', meaning: 'Subjunctive mood' },
                    { term: 'condicional', reading: '/kon.di.θjo.ˈnal/', meaning: 'Conditional' },
                    { term: 'voz pasiva', reading: '/bos pa.ˈsi.βa/', meaning: 'Passive voice' },
                    { term: 'oración', reading: '/o.ɾa.ˈθjon/', meaning: 'Sentence/clause' },
                ],
                sentences: [
                    { es: 'He vivido aquí por cinco años.', phonetic: '/e bi.ˈβi.ðo a.ˈki poɾ ˈsin.ko ˈa.ɲos/', en: 'I have lived here for five years' },
                    { es: 'Si hubiera sabido, te habría ayudado.', phonetic: '/si u.ˈbie.ɾa sa.ˈβi.do te a.ˈbɾi.a a.ˈju.ða.do/', en: 'If I had known, I would have helped you' },
                ],
                grammarNotes: [
                    { title: 'Subjunctive', body: 'Use subjunctive after expressions of doubt, desire, or emotion: Espero que vengas (I hope you come). Subjunctive endings: -AR verbs: e, es, e, emos, éis, en. -ER/-IR verbs: a, as, a, amos, áis, an.' },
                    { title: 'Por vs Para', body: 'POR: cause, exchange, duration, means of travel. PARA: destination, purpose, deadline, recipient. Example: Voy por comida (I\'m going for food) vs Voy para la casa (I\'m going to the house).' },
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
                    { es: 'La tecnología ha transformado cómo nos comunicamos y trabajamos en la sociedad moderna.', phonetic: '/la tek.no.ˈlo.ɡi.a a tɾans.foɾ.ˈma.do ko nos ko.mu.ni.ˈka.mos i tɾa.ˈba.xamos en la so.θje.ˈdad mo.ˈdeɾ.na/', en: 'Technology has transformed how we communicate and work in modern society' },
                    { es: 'Aprender un nuevo idioma requiere paciencia y práctica constante.', phonetic: '/a.pɾen.ˈdeɾ un ˈnwe.bo i.ˈdi.o.ma ɾe.ˈkje.ɾe pa.ˈsjen.θja i pɾak.ˈti.ka kons.ˈtan.te/', en: 'Learning a new language requires patience and constant practice' },
                ],
                audio: [
                    { label: 'Tecnología transformado', text: 'La tecnología ha transformado cómo nos comunicamos' },
                    { label: 'Aprender nuevo idioma', text: 'Aprender un nuevo idioma requiere paciencia' },
                ],
                vocabulary: [
                    { term: 'transformar', reading: '/tɾans.foɾ.ˈmaɾ/', meaning: 'To transform' },
                    { term: 'comunicar', reading: '/ko.mu.ni.ˈkaɾ/', meaning: 'To communicate' },
                    { term: 'constante', reading: '/kon.ˈstan.te/', meaning: 'Constant' },
                    { term: 'comprensión', reading: '/kom.pɾen.ˈsjon/', meaning: 'Comprehension' },
                ],
                sentences: [
                    { es: 'Este artículo discute el cambio climático.', phonetic: '/ˈes.te aɾ.ˈti.ku.lo dis.ˈku.te el ˈkam.bjo kli.ˈma.ti.ko/', en: 'This article discusses climate change' },
                    { es: 'Disfruto leer novelas en mi tiempo libre.', phonetic: '/dis.ˈfɾu.to leˈeɾ no.ˈbe.las en mi ˈtjem.po ˈli.bɾe/', en: 'I enjoy reading novels in my free time' },
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
                    'Listen to different accents (Spain, Latin America) to improve flexibility.',
                ],
                examples: [
                    { es: '¿Podría repetir eso, por favor?', phonetic: '/po.ˈdɾi.a ɾe.pe.ˈtiɾ ˈes.to poɾ fa.ˈvoɾ/', en: 'Could you repeat that, please?' },
                    { es: 'No entendí la última parte.', phonetic: '/no en.ten.ˈdi la ˈul.ti.ma ˈpaɾ.te/', en: 'I didn\'t understand the last part' },
                ],
                audio: [
                    { label: 'Podría repetir', text: '¿Podría repetir eso, por favor?' },
                    { label: 'No entendí', text: 'No entendí la última parte' },
                ],
                vocabulary: [
                    { term: 'comprender', reading: '/kom.pɾen.ˈdeɾ/', meaning: 'To understand' },
                    { term: 'acento', reading: '/a.ˈsen.to/', meaning: 'Accent' },
                    { term: 'expresión', reading: '/eks.pɾe.ˈsjon/', meaning: 'Expression' },
                    { term: 'aclarar', reading: '/a.kla.ˈɾaɾ/', meaning: 'To clarify' },
                ],
                sentences: [
                    { es: 'Entendí la mayor parte de lo que dijiste.', phonetic: '/en.ten.ˈdi la ma.ˈjoɾ ˈpaɾ.te de lo ke di.ˈxis.te/', en: 'I understood most of what you said' },
                    { es: 'Ella habla muy rápido.', phonetic: '/ˈe.ʎa ˈa.βla mwi ˈɾa.pi.do/', en: 'She speaks very fast' },
                ],
            },
        ],
    },
    {
        id: 'advanced',
        title: 'Advanced',
        description: 'Achieve fluency with complex grammar and cultural nuances.',
        lessons: [
            {
                id: 'business-spanish',
                title: 'Business Spanish',
                estimatedTime: '60 min',
                difficulty: 'Advanced',
                explanation: [
                    'Business Spanish focuses on professional communication in corporate environments.',
                    'Learn formal vocabulary, email etiquette, and presentation skills.',
                    'Practice writing reports, proposals, and business correspondence.',
                    'Understand cultural differences in international business communication.',
                ],
                examples: [
                    { es: 'Espero nuestra colaboración con gusto.', phonetic: '/es.ˈpe.ɾo ˈnues. tɾa ko.la.bo.ɾa.ˈsjon kon ˈɣus.to/', en: 'I look forward to our collaboration' },
                    { es: '¿Podría proporcionar más detalles?', phonetic: '/po.ˈdɾi.a pɾo.poɾ.θjo.ˈnaɾ mas de.ˈta.yes/', en: 'Could you provide more details?' },
                    { es: 'Programemos una reunión para discutir esto.', phonetic: '/pɾo.ɡɾa.ˈme.mos u.na ɾe.u.ˈnjon pa.ɾa dis.ˈku.tiɾ ˈes.to/', en: 'Let\'s schedule a meeting to discuss this' },
                ],
                audio: [
                    { label: 'Espero colaboración', text: 'Espero nuestra colaboración con gusto' },
                    { label: 'Proporcionar detalles', text: '¿Podría proporcionar más detalles?' },
                ],
                vocabulary: [
                    { term: 'colaboración', reading: '/ko.la.bo.ɾa.ˈsjon/', meaning: 'Collaboration' },
                    { term: 'propuesta', reading: '/pɾo.ˈpues.ta/', meaning: 'Proposal' },
                    { term: 'correspondencia', reading: '/ko.ɾɾes.ˈpon.den.θja/', meaning: 'Correspondence' },
                    { term: 'negociación', reading: '/ne.ɡo.θja.ˈsjon/', meaning: 'Negotiation' },
                ],
                sentences: [
                    { es: 'Gracias por considerar nuestra propuesta.', phonetic: '/ˈɡɾa.θjas poɾ kon.si.de.ˈɾaɾ ˈnues. tɾa pɾo.ˈpues.ta/', en: 'Thank you for considering our proposal' },
                    { es: 'Este proyecto tiene gran potencial.', phonetic: '/ˈes.te pɾo.ˈjek.to ˈtje.ne ɡɾan po.ten.ˈsjal/', en: 'This project has great potential' },
                ],
            },
            {
                id: 'dele',
                title: 'DELE Preparation',
                estimatedTime: '70 min',
                difficulty: 'Advanced',
                explanation: [
                    'DELE (Diploma de Español como Lengua Extranjera) is the official Spanish proficiency test.',
                    'The test covers reading, writing, listening, and speaking skills.',
                    'Learn test-taking strategies and practice with sample questions.',
                    'Focus on academic vocabulary and formal writing structures.',
                ],
                examples: [
                    { es: 'El gráfico ilustra un aumento significativo en las ventas.', phonetic: '/el ˈɡɾa.fi.ko ilus.ˈtɾa un au.ˈmen.to siɲi.fi.ˈka.ti.vo en las ˈben.tas/', en: 'The graph illustrates a significant increase in sales' },
                    { es: 'Hay varios factores a considerar.', phonetic: '/aɪ ˈba.ɾjos ˈfak.to.ɾes a kon.si.de.ˈɾaɾ/', en: 'There are several factors to consider' },
                ],
                audio: [
                    { label: 'Gráfico ilustra', text: 'El gráfico ilustra un aumento significativo' },
                    { label: 'Varios factores', text: 'Hay varios factores a considerar' },
                ],
                vocabulary: [
                    { term: 'ilustrar', reading: '/ilus.ˈtɾaɾ/', meaning: 'To illustrate' },
                    { term: 'significativo', reading: '/siɲi.fi.ˈka.ti.bo/', meaning: 'Significant' },
                    { term: 'factor', reading: '/ˈfak.toɾ/', meaning: 'Factor' },
                    { term: 'demostrar', reading: '/de.mos.ˈtɾaɾ/', meaning: 'To demonstrate' },
                ],
                sentences: [
                    { es: 'Los datos muestran una tendencia clara.', phonetic: '/los ˈda.tos ˈmues. tɾan u.na ten.ˈden.θja ˈkla.ɾa/', en: 'The data shows a clear trend' },
                    { es: 'Este ensayo discutirá ambas perspectivas.', phonetic: '/ˈes.te en.ˈsa.jo dis.ku.ˈti.ɾa ˈam.bas peɾ.spek.ˈti.vas/', en: 'This essay will discuss both perspectives' },
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
                    'Learn idioms, colloquial expressions, and regional variations used by native speakers.',
                    'Develop fluency in expressing complex ideas and emotions naturally.',
                ],
                examples: [
                    { es: 'Esa es una perspectiva que invita a la reflexión.', phonetic: '/ˈe.sa es u.na peɾ.spek.ˈti.βa ke in.ˈbi.ta a la ɾe.flek.ˈsjon/', en: 'That\'s a perspective that invites reflection' },
                    { es: 'Entiendo de dónde vienes.', phonetic: '/en.tjen.ˈdo de ˈdon.ˈdje ˈbjenes/', en: 'I see where you\'re coming from' },
                    { es: 'Estemos de acuerdo en estar en desacuerdo.', phonetic: '/es.ˈte.mos de a.ˈkweɾ.do en es.ˈtaɾ en des.a.ˈkweɾ.do/', en: 'Let\'s agree to disagree' },
                ],
                audio: [
                    { label: 'Perspectiva reflexión', text: 'Esa es una perspectiva que invita a la reflexión' },
                    { label: 'Entiendo de dónde', text: 'Entiendo de dónde vienes' },
                ],
                vocabulary: [
                    { term: 'perspectiva', reading: '/peɾ.spek.ˈti.βa/', meaning: 'Perspective' },
                    { term: 'matiz', reading: '/ma.ˈtiθ/', meaning: 'Nuance' },
                    { term: 'expresión idiomática', reading: '/eks.pɾe.ˈsjon i.djo.ˈma.ti.ka/', meaning: 'Idiomatic expression' },
                    { term: 'regionalismo', reading: '/ɾe.xjo.ˈna.lis.mo/', meaning: 'Regional expression' },
                ],
                sentences: [
                    { es: 'Desde mi perspectiva, esto tiene sentido.', phonetic: '/ˈdes.de mi peɾ.spek.ˈti.βa ˈes.to ˈtje.ne ˈsen.ti.do/', en: 'From my perspective, this makes sense' },
                    { es: 'Estoy indeciso sobre este tema.', phonetic: '/es.ˈtoi in.de.ˈsi.so ˈso.bɾe ˈes.te ˈte.ma/', en: 'I\'m undecided about this issue' },
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
                    { es: 'La novela explora temas de identidad y pertenencia.', phonetic: '/la no.ˈbe.la eks.ˈplo.ɾa ˈte.mas de i.den.ˈti.ðad i peɾ.te.ˈnen.θja/', en: 'The novel explores themes of identity and belonging' },
                    { es: 'La investigación sugiere una correlación entre dieta y salud.', phonetic: '/la in.ves.ti.ɣa.ˈsjon su.ˈxje.ɾe u.na ko.ɾɾe.la.ˈsjon en.ˈtɾe ˈdje.ta.θja i sa.ˈluð/', en: 'The research suggests a correlation between diet and health' },
                ],
                audio: [
                    { label: 'Novela explora temas', text: 'La novela explora temas de identidad y pertenencia' },
                    { label: 'Investigación sugiere', text: 'La investigación sugiere una correlación' },
                ],
                vocabulary: [
                    { term: 'tema', reading: '/ˈte.ma/', meaning: 'Theme' },
                    { term: 'identidad', reading: '/i.den.ˈti.ðad/', meaning: 'Identity' },
                    { term: 'correlación', reading: '/ko.ɾɾe.la.ˈsjon/', meaning: 'Correlation' },
                    { term: 'analizar', reading: '/a.na.ˈli.θaɾ/', meaning: 'To analyze' },
                ],
                sentences: [
                    { es: 'Este libro tiene ideas profundas.', phonetic: '/ˈes.te ˈli.βɾo ˈtje.ne i.ˈde.as pɾo.ˈfun.das/', en: 'This book has profound ideas' },
                    { es: 'Disfruto leer revistas académicas.', phonetic: '/dis.ˈfɾu.to leˈeɾ re.ˈbis.tas a.ka.ˈde.mi.kas/', en: 'I enjoy reading academic journals' },
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
                    { es: '¿Puedes seguir su conversación?', phonetic: '/ˈpwe.des se.ˈɣiɾ su kon.beɾ.sa.ˈsjon/', en: 'Can you keep up with their conversation?' },
                    { es: 'Ese acento es difícil de entender.', phonetic: '/ˈe.se a.ˈsen.to es di.ˈfi.kil de en.ten.ˈdeɾ/', en: 'That accent is hard to understand' },
                ],
                audio: [
                    { label: 'Puedes seguir', text: '¿Puedes seguir su conversación?' },
                    { label: 'Acento difícil', text: 'Ese acento es difícil de entender' },
                ],
                vocabulary: [
                    { term: 'jerga', reading: '/ˈxeɾ.ɣa/', meaning: 'Slang' },
                    { term: 'sarcasmo', reading: '/saɾ.ˈkas.mo/', meaning: 'Sarcasm' },
                    { term: 'implícito', reading: '/im.ˈpli.ci.to/', meaning: 'Implied' },
                    { term: 'matiz', reading: '/ma.ˈtiθ/', meaning: 'Nuance' },
                ],
                sentences: [
                    { es: 'Hablaban demasiado rápido para mí.', phonetic: '/a.ˈβla.βan de.ma.ˈsia.do ˈɾa.pi.do pa.ɾa mi/', en: 'They were speaking too fast for me' },
                    { es: 'Me encanta el humor español.', phonetic: '/me en.ˈkan.θa el u.ˈmoɾ es.pa.ˈɲol/', en: 'I love Spanish humor' },
                ],
            },
        ],
    },
];
