<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LessonSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed study lesson content for Japanese.
     * Safe to run multiple times — truncates first.
     *
     * Content shape stored in `content` JSON column:
     * {
     *   "type": "flashcard-set",
     *   "flashcards": [
     *     {
     *       "front": "日",
     *       "back":  "day / sun",
     *       "reading_on":  "nichi / jitsu",
     *       "reading_kun": "hi / -bi / -ka",
     *       "stroke_count": 4,
     *       "examples": [
     *         { "word": "日本", "reading": "nihon", "meaning": "Japan" }
     *       ]
     *     }
     *   ],
     *   "notes": [ "..." ]
     * }
     */
    public function run(): void
    {
        DB::table('lessons')->truncate();

        // ── Helpers ────────────────────────────────────────────────────────────
        $lesson = fn(string $language, string $category, string $lessonId, string $title, array $content) =>
            DB::table('lessons')->insert([
                'language'   => $language,
                'category'   => $category,
                'lesson_id'  => $lessonId,
                'title'      => $title,
                'content'    => json_encode($content, JSON_UNESCAPED_UNICODE),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

        // ══════════════════════════════════════════════════════════════════════
        // JAPANESE — KANJI
        // ══════════════════════════════════════════════════════════════════════
        $lesson('japanese', 'kanji', 'basic-kanji', 'Basic Kanji (N5)', [
            'type'  => 'flashcard-set',
            'notes' => [
                'Each kanji has at least one on\'yomi (Sino-Japanese) and one kun\'yomi (native Japanese) reading.',
                'Learn kanji in compounds — 日本 (nihon) teaches 日 and 本 together with real context.',
                'Stroke order runs top-to-bottom, left-to-right. Consistent stroke order improves speed and legibility.',
                'N5 requires roughly 100 kanji. The 11 characters below are the highest-frequency starting set.',
            ],
            'flashcards' => [
                [
                    'front'        => '日',
                    'back'         => 'day / sun',
                    'reading_on'   => 'nichi / jitsu',
                    'reading_kun'  => 'hi / -bi / -ka',
                    'stroke_count' => 4,
                    'examples'     => [
                        ['word' => '日本', 'reading' => 'nihon',   'meaning' => 'Japan'],
                        ['word' => '今日', 'reading' => 'kyō',     'meaning' => 'today'],
                        ['word' => '日曜日','reading' => 'nichiyōbi','meaning' => 'Sunday'],
                    ],
                ],
                [
                    'front'        => '月',
                    'back'         => 'moon / month',
                    'reading_on'   => 'getsu / gatsu',
                    'reading_kun'  => 'tsuki',
                    'stroke_count' => 4,
                    'examples'     => [
                        ['word' => '月曜日', 'reading' => 'getsuyōbi', 'meaning' => 'Monday'],
                        ['word' => '三月',   'reading' => 'sangatsu',  'meaning' => 'March'],
                        ['word' => '月',     'reading' => 'tsuki',     'meaning' => 'the moon'],
                    ],
                ],
                [
                    'front'        => '火',
                    'back'         => 'fire',
                    'reading_on'   => 'ka',
                    'reading_kun'  => 'hi / ho-',
                    'stroke_count' => 4,
                    'examples'     => [
                        ['word' => '火曜日', 'reading' => 'kayōbi',  'meaning' => 'Tuesday'],
                        ['word' => '火山',   'reading' => 'kazan',   'meaning' => 'volcano'],
                        ['word' => '花火',   'reading' => 'hanabi',  'meaning' => 'fireworks'],
                    ],
                ],
                [
                    'front'        => '水',
                    'back'         => 'water',
                    'reading_on'   => 'sui',
                    'reading_kun'  => 'mizu',
                    'stroke_count' => 4,
                    'examples'     => [
                        ['word' => '水曜日', 'reading' => 'suiyōbi', 'meaning' => 'Wednesday'],
                        ['word' => '水',     'reading' => 'mizu',    'meaning' => 'water'],
                        ['word' => '水泳',   'reading' => 'suiei',   'meaning' => 'swimming'],
                    ],
                ],
                [
                    'front'        => '木',
                    'back'         => 'tree / wood',
                    'reading_on'   => 'moku / boku',
                    'reading_kun'  => 'ki / ko-',
                    'stroke_count' => 4,
                    'examples'     => [
                        ['word' => '木曜日', 'reading' => 'mokuyōbi', 'meaning' => 'Thursday'],
                        ['word' => '木',     'reading' => 'ki',       'meaning' => 'tree'],
                        ['word' => '木造',   'reading' => 'mokuzō',   'meaning' => 'wooden structure'],
                    ],
                ],
                [
                    'front'        => '金',
                    'back'         => 'gold / money',
                    'reading_on'   => 'kin / kon',
                    'reading_kun'  => 'kane / kana-',
                    'stroke_count' => 8,
                    'examples'     => [
                        ['word' => '金曜日', 'reading' => 'kin\'yōbi', 'meaning' => 'Friday'],
                        ['word' => 'お金',   'reading' => 'okane',     'meaning' => 'money'],
                        ['word' => '金色',   'reading' => 'kin\'iro',  'meaning' => 'gold colour'],
                    ],
                ],
                [
                    'front'        => '土',
                    'back'         => 'earth / soil',
                    'reading_on'   => 'do / to',
                    'reading_kun'  => 'tsuchi',
                    'stroke_count' => 3,
                    'examples'     => [
                        ['word' => '土曜日', 'reading' => 'doyōbi', 'meaning' => 'Saturday'],
                        ['word' => '土地',   'reading' => 'tochi',  'meaning' => 'land'],
                        ['word' => '土',     'reading' => 'tsuchi', 'meaning' => 'soil / earth'],
                    ],
                ],
                [
                    'front'        => '山',
                    'back'         => 'mountain',
                    'reading_on'   => 'san',
                    'reading_kun'  => 'yama',
                    'stroke_count' => 3,
                    'examples'     => [
                        ['word' => '山',     'reading' => 'yama',     'meaning' => 'mountain'],
                        ['word' => '富士山', 'reading' => 'fujisan',  'meaning' => 'Mt. Fuji'],
                        ['word' => '山川',   'reading' => 'yamakawa', 'meaning' => 'mountains and rivers'],
                    ],
                ],
                [
                    'front'        => '川',
                    'back'         => 'river',
                    'reading_on'   => 'sen',
                    'reading_kun'  => 'kawa',
                    'stroke_count' => 3,
                    'examples'     => [
                        ['word' => '川',   'reading' => 'kawa',   'meaning' => 'river'],
                        ['word' => '川魚', 'reading' => 'kawazakana', 'meaning' => 'freshwater fish'],
                        ['word' => '小川', 'reading' => 'ogawa',  'meaning' => 'stream / brook'],
                    ],
                ],
                [
                    'front'        => '人',
                    'back'         => 'person',
                    'reading_on'   => 'jin / nin',
                    'reading_kun'  => 'hito',
                    'stroke_count' => 2,
                    'examples'     => [
                        ['word' => '人',   'reading' => 'hito',    'meaning' => 'person'],
                        ['word' => '日本人','reading' => 'nihonjin','meaning' => 'Japanese person'],
                        ['word' => '二人', 'reading' => 'futari',  'meaning' => 'two people'],
                    ],
                ],
                [
                    'front'        => '本',
                    'back'         => 'book / origin / counter for long objects',
                    'reading_on'   => 'hon / pon / bon',
                    'reading_kun'  => 'moto',
                    'stroke_count' => 5,
                    'examples'     => [
                        ['word' => '本',   'reading' => 'hon',    'meaning' => 'book'],
                        ['word' => '日本', 'reading' => 'nihon',  'meaning' => 'Japan'],
                        ['word' => '一本', 'reading' => 'ippon',  'meaning' => 'one (long object)'],
                    ],
                ],
                [
                    'front'        => '花',
                    'back'         => 'flower',
                    'reading_on'   => 'ka',
                    'reading_kun'  => 'hana',
                    'stroke_count' => 7,
                    'examples'     => [
                        ['word' => '花',   'reading' => 'hana',   'meaning' => 'flower'],
                        ['word' => '花火', 'reading' => 'hanabi', 'meaning' => 'fireworks'],
                        ['word' => '花見', 'reading' => 'hanami', 'meaning' => 'cherry-blossom viewing'],
                    ],
                ],
                [
                    'front'        => '雨',
                    'back'         => 'rain',
                    'reading_on'   => 'u',
                    'reading_kun'  => 'ame / ama-',
                    'stroke_count' => 8,
                    'examples'     => [
                        ['word' => '雨',   'reading' => 'ame',    'meaning' => 'rain'],
                        ['word' => '雨天', 'reading' => 'uten',   'meaning' => 'rainy weather'],
                        ['word' => '梅雨', 'reading' => 'tsuyu',  'meaning' => 'rainy season'],
                    ],
                ],
                [
                    'front'        => '空',
                    'back'         => 'sky / empty',
                    'reading_on'   => 'kū',
                    'reading_kun'  => 'sora / a(ku) / kara',
                    'stroke_count' => 8,
                    'examples'     => [
                        ['word' => '空',   'reading' => 'sora',    'meaning' => 'sky'],
                        ['word' => '空港', 'reading' => 'kūkō',    'meaning' => 'airport'],
                        ['word' => '空気', 'reading' => 'kūki',    'meaning' => 'air'],
                    ],
                ],
                [
                    'front'        => '風',
                    'back'         => 'wind / style',
                    'reading_on'   => 'fū / fū',
                    'reading_kun'  => 'kaze / kaza-',
                    'stroke_count' => 9,
                    'examples'     => [
                        ['word' => '風',   'reading' => 'kaze',   'meaning' => 'wind'],
                        ['word' => '風邪', 'reading' => 'kaze',   'meaning' => 'cold (illness)'],
                        ['word' => '台風', 'reading' => 'taifū',  'meaning' => 'typhoon'],
                    ],
                ],
            ],
        ]);

        // ── JLPT N4 Kanji highlights ───────────────────────────────────────────
        $lesson('japanese', 'kanji', 'jlpt-n4-kanji', 'JLPT N4 Kanji', [
            'type'  => 'flashcard-set',
            'notes' => [
                'N4 introduces kanji for abstract concepts, emotions, and common actions.',
                'Compounds are essential: 意味 (imi, meaning), 特別 (tokubetsu, special).',
                'Focus on okurigana (the kana after a kanji stem): 食べる, 大きい, 送る.',
            ],
            'flashcards' => [
                [
                    'front'        => '意',
                    'back'         => 'idea / mind / meaning',
                    'reading_on'   => 'i',
                    'reading_kun'  => '—',
                    'stroke_count' => 13,
                    'examples'     => [
                        ['word' => '意味',  'reading' => 'imi',      'meaning' => 'meaning'],
                        ['word' => '意見',  'reading' => 'iken',     'meaning' => 'opinion'],
                        ['word' => '注意',  'reading' => 'chūi',     'meaning' => 'attention / caution'],
                    ],
                ],
                [
                    'front'        => '特',
                    'back'         => 'special',
                    'reading_on'   => 'toku',
                    'reading_kun'  => '—',
                    'stroke_count' => 10,
                    'examples'     => [
                        ['word' => '特別',  'reading' => 'tokubetsu', 'meaning' => 'special'],
                        ['word' => '特急',  'reading' => 'tokkyū',    'meaning' => 'limited express'],
                        ['word' => '特に',  'reading' => 'toku ni',   'meaning' => 'especially'],
                    ],
                ],
                [
                    'front'        => '練',
                    'back'         => 'practice / train',
                    'reading_on'   => 'ren',
                    'reading_kun'  => 'ne(ru)',
                    'stroke_count' => 14,
                    'examples'     => [
                        ['word' => '練習',  'reading' => 'renshū',  'meaning' => 'practice'],
                        ['word' => '訓練',  'reading' => 'kunren',  'meaning' => 'training'],
                    ],
                ],
                [
                    'front'        => '説',
                    'back'         => 'theory / explanation',
                    'reading_on'   => 'setsu / zeī',
                    'reading_kun'  => 'to(ku)',
                    'stroke_count' => 14,
                    'examples'     => [
                        ['word' => '説明',  'reading' => 'setsumei', 'meaning' => 'explanation'],
                        ['word' => '小説',  'reading' => 'shōsetsu', 'meaning' => 'novel'],
                    ],
                ],
                [
                    'front'        => '質',
                    'back'         => 'quality / matter',
                    'reading_on'   => 'shitsu / shichi',
                    'reading_kun'  => '—',
                    'stroke_count' => 15,
                    'examples'     => [
                        ['word' => '質問',  'reading' => 'shitsumon', 'meaning' => 'question'],
                        ['word' => '品質',  'reading' => 'hinshitsu', 'meaning' => 'product quality'],
                    ],
                ],
                [
                    'front'        => '連',
                    'back'         => 'connect / take along',
                    'reading_on'   => 'ren',
                    'reading_kun'  => 'tsu(reru) / tsu(naru)',
                    'stroke_count' => 10,
                    'examples'     => [
                        ['word' => '連絡',  'reading' => 'renraku',  'meaning' => 'contact / liaison'],
                        ['word' => '連休',  'reading' => 'renkyū',   'meaning' => 'consecutive holidays'],
                    ],
                ],
                [
                    'front'        => '失',
                    'back'         => 'lose / miss',
                    'reading_on'   => 'shitsu',
                    'reading_kun'  => 'ushina(u)',
                    'stroke_count' => 5,
                    'examples'     => [
                        ['word' => '失敗',  'reading' => 'shippai',   'meaning' => 'failure'],
                        ['word' => '失礼',  'reading' => 'shitsurei', 'meaning' => 'rudeness / excuse me'],
                    ],
                ],
                [
                    'front'        => '経',
                    'back'         => 'pass / sutra / manage',
                    'reading_on'   => 'kei / kyō',
                    'reading_kun'  => 'へ(る)',
                    'stroke_count' => 11,
                    'examples'     => [
                        ['word' => '経験',  'reading' => 'keiken',   'meaning' => 'experience'],
                        ['word' => '経済',  'reading' => 'keizai',   'meaning' => 'economy'],
                    ],
                ],
            ],
        ]);

        // ══════════════════════════════════════════════════════════════════════
        // JAPANESE — HIRAGANA (overview flashcards for the kana rows)
        // ══════════════════════════════════════════════════════════════════════
        $lesson('japanese', 'hiragana', 'hiragana', 'Basic Hiragana', [
            'type'  => 'flashcard-set',
            'notes' => [
                '46 base characters arranged in the gojūon (50-sound) grid.',
                'Each character represents one mora (a syllable unit), never a single consonant alone.',
                'Learn the a-row (あいうえお) first — all vowels, no consonant cluster to memorize.',
            ],
            'flashcards' => [
                ['front' => 'あ', 'back' => 'a',   'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 3, 'examples' => [['word' => 'あさ',  'reading' => 'asa',     'meaning' => 'morning']]],
                ['front' => 'い', 'back' => 'i',   'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 2, 'examples' => [['word' => 'いぬ',  'reading' => 'inu',     'meaning' => 'dog']]],
                ['front' => 'う', 'back' => 'u',   'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 2, 'examples' => [['word' => 'うみ',  'reading' => 'umi',     'meaning' => 'sea']]],
                ['front' => 'え', 'back' => 'e',   'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 2, 'examples' => [['word' => 'えき',  'reading' => 'eki',     'meaning' => 'station']]],
                ['front' => 'お', 'back' => 'o',   'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 3, 'examples' => [['word' => 'おかあさん', 'reading' => 'okaasan', 'meaning' => 'mother']]],
                ['front' => 'か', 'back' => 'ka',  'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 3, 'examples' => [['word' => 'かわ',  'reading' => 'kawa',    'meaning' => 'river']]],
                ['front' => 'き', 'back' => 'ki',  'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 4, 'examples' => [['word' => 'きって', 'reading' => 'kitte',   'meaning' => 'postage stamp']]],
                ['front' => 'く', 'back' => 'ku',  'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 1, 'examples' => [['word' => 'くも',  'reading' => 'kumo',    'meaning' => 'cloud']]],
                ['front' => 'け', 'back' => 'ke',  'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 3, 'examples' => [['word' => 'けさ',  'reading' => 'kesa',    'meaning' => 'this morning']]],
                ['front' => 'こ', 'back' => 'ko',  'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 2, 'examples' => [['word' => 'こども','reading' => 'kodomo',  'meaning' => 'child']]],
                ['front' => 'さ', 'back' => 'sa',  'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 3, 'examples' => [['word' => 'さかな','reading' => 'sakana',  'meaning' => 'fish']]],
                ['front' => 'し', 'back' => 'shi', 'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 1, 'examples' => [['word' => 'しろ',  'reading' => 'shiro',   'meaning' => 'white / castle']]],
                ['front' => 'す', 'back' => 'su',  'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 2, 'examples' => [['word' => 'すし',  'reading' => 'sushi',   'meaning' => 'sushi']]],
                ['front' => 'せ', 'back' => 'se',  'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 3, 'examples' => [['word' => 'せんせい','reading' => 'sensei', 'meaning' => 'teacher']]],
                ['front' => 'そ', 'back' => 'so',  'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 2, 'examples' => [['word' => 'そら',  'reading' => 'sora',    'meaning' => 'sky']]],
            ],
        ]);

        // ══════════════════════════════════════════════════════════════════════
        // JAPANESE — GRAMMAR
        // ══════════════════════════════════════════════════════════════════════
        $lesson('japanese', 'grammar', 'basic-grammar', 'Basic Grammar', [
            'type'  => 'flashcard-set',
            'notes' => [
                'Japanese is SOV: subject → object → verb.',
                'Particles mark grammatical roles: は (topic), が (subject), を (object), に/で (place/time/instrument).',
                'Politeness is built into verb endings: 〜ます (polite present/future), 〜ました (polite past).',
            ],
            'flashcards' => [
                ['front' => 'は (wa)',  'back' => 'Topic marker — "As for X…"',                   'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '私は学生です', 'reading' => 'watashi wa gakusei desu', 'meaning' => 'I am a student']]],
                ['front' => 'が (ga)',  'back' => 'Subject marker — identifies doer or new info', 'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '猫が好きです', 'reading' => 'neko ga suki desu', 'meaning' => 'I like cats (lit. cats are liked)']]],
                ['front' => 'を (wo)',  'back' => 'Direct object marker',                         'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '水を飲みます', 'reading' => 'mizu wo nomimasu', 'meaning' => 'I drink water']]],
                ['front' => 'に (ni)',  'back' => 'Direction / time / indirect object',           'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '東京に行きます', 'reading' => 'tōkyō ni ikimasu', 'meaning' => 'I go to Tokyo']]],
                ['front' => 'で (de)',  'back' => 'Location of action / means / reason',          'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '図書館で読みます', 'reading' => 'toshokan de yomimasu', 'meaning' => 'I read at the library']]],
                ['front' => 'の (no)',  'back' => 'Possessive / noun modifier',                   'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '私の本', 'reading' => 'watashi no hon', 'meaning' => 'my book']]],
                ['front' => 'か (ka)',  'back' => 'Question marker (sentence-final)',              'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => 'これは何ですか', 'reading' => 'kore wa nan desu ka', 'meaning' => 'What is this?']]],
                ['front' => 'も (mo)',  'back' => 'Also / too / even',                            'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '私も学生です', 'reading' => 'watashi mo gakusei desu', 'meaning' => 'I am also a student']]],
                ['front' => 'と (to)',  'back' => 'And (exhaustive) / with / quotation',          'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '友達と行きます', 'reading' => 'tomodachi to ikimasu', 'meaning' => 'I go with a friend']]],
                ['front' => 'から (kara)', 'back' => 'From / because (after clause)',             'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '駅から歩きます', 'reading' => 'eki kara arukimasu', 'meaning' => 'I walk from the station']]],
            ],
        ]);

        // ── JLPT N4 Grammar highlights ─────────────────────────────────────────
        $lesson('japanese', 'grammar', 'jlpt-n4-grammar', 'JLPT N4 Grammar', [
            'type'  => 'flashcard-set',
            'notes' => [
                'N4 grammar introduces conditionals, potential form, and expressing intention.',
                'Conditional forms: 〜と (natural result), 〜たら (if/when completed), 〜ば (hypothetical), 〜なら (situational).',
                'Volitional 〜よう / 〜ましょう expresses "let\'s" or intention.',
            ],
            'flashcards' => [
                ['front' => '〜つもり',       'back' => 'Intend to / plan to',            'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '行くつもりです', 'reading' => 'iku tsumori desu', 'meaning' => 'I intend to go']]],
                ['front' => '〜たらどうですか','back' => 'How about doing…? (suggestion)', 'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '休んだらどうですか', 'reading' => 'yasundara dō desu ka', 'meaning' => 'How about taking a rest?']]],
                ['front' => '〜そうです',      'back' => 'It looks like… / seems…',       'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '雨が降りそうです', 'reading' => 'ame ga furisō desu', 'meaning' => 'It looks like it will rain']]],
                ['front' => '〜られる',        'back' => 'Can / able to (potential form)', 'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '食べられます', 'reading' => 'taberaremasu', 'meaning' => 'I can eat']]],
                ['front' => '〜ている',        'back' => 'Ongoing action / resultant state','reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '勉強しています', 'reading' => 'benkyō shite imasu', 'meaning' => 'I am studying']]],
                ['front' => '〜てもいいです',  'back' => 'It\'s OK to… / may I…?',        'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '入ってもいいですか', 'reading' => 'haitte mo ii desu ka', 'meaning' => 'May I come in?']]],
                ['front' => '〜てはいけません','back' => 'Must not… / you cannot…',        'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '入ってはいけません', 'reading' => 'haitte wa ikemasen', 'meaning' => 'You must not enter']]],
                ['front' => '〜なければなりません','back' => 'Must / have to',            'reading_on' => '', 'reading_kun' => '', 'stroke_count' => 0, 'examples' => [['word' => '行かなければなりません', 'reading' => 'ikanakereba narimasen', 'meaning' => 'I have to go']]],
            ],
        ]);

        // ══════════════════════════════════════════════════════════════════════
        // JAPANESE — VOCABULARY
        // ══════════════════════════════════════════════════════════════════════
        $lesson('japanese', 'vocabulary', 'basic-vocabulary', 'Basic Vocabulary', [
            'type'  => 'flashcard-set',
            'notes' => [
                'Start with high-frequency nouns in thematic groups — retention improves with context.',
                'Many everyday words appear in hiragana even when kanji exist (ごはん, まち).',
            ],
            'flashcards' => [
                ['front' => '水', 'back' => 'water',   'reading_on' => 'sui', 'reading_kun' => 'mizu',     'stroke_count' => 4, 'examples' => [['word' => '水を飲む', 'reading' => 'mizu wo nomu', 'meaning' => 'drink water']]],
                ['front' => '食べ物', 'back' => 'food', 'reading_on' => 'shoku',  'reading_kun' => 'tabemono','stroke_count' => 0, 'examples' => [['word' => '日本の食べ物', 'reading' => 'nihon no tabemono', 'meaning' => 'Japanese food']]],
                ['front' => '電車', 'back' => 'train',  'reading_on' => 'densha', 'reading_kun' => '',       'stroke_count' => 0, 'examples' => [['word' => '電車に乗る', 'reading' => 'densha ni noru', 'meaning' => 'ride the train']]],
                ['front' => '学校', 'back' => 'school', 'reading_on' => 'gakkō',  'reading_kun' => '',       'stroke_count' => 0, 'examples' => [['word' => '学校へ行く', 'reading' => 'gakkō e iku', 'meaning' => 'go to school']]],
                ['front' => '友達', 'back' => 'friend', 'reading_on' => 'yūjin',  'reading_kun' => 'tomodachi','stroke_count' => 0,'examples' => [['word' => '友達と話す', 'reading' => 'tomodachi to hanasu', 'meaning' => 'talk with a friend']]],
                ['front' => '仕事', 'back' => 'work / job','reading_on' => 'shigoto','reading_kun' => '',    'stroke_count' => 0, 'examples' => [['word' => '仕事をする', 'reading' => 'shigoto wo suru', 'meaning' => 'do work']]],
                ['front' => '時間', 'back' => 'time',   'reading_on' => 'jikan',  'reading_kun' => '',       'stroke_count' => 0, 'examples' => [['word' => '時間がない', 'reading' => 'jikan ga nai', 'meaning' => 'no time']]],
                ['front' => '言葉', 'back' => 'word / language','reading_on' => 'gengo','reading_kun' => 'kotoba','stroke_count' => 0, 'examples' => [['word' => '日本語の言葉', 'reading' => 'nihongo no kotoba', 'meaning' => 'Japanese words']]],
            ],
        ]);

        // ── Greetings ─────────────────────────────────────────────────────────
        $lesson('japanese', 'vocabulary', 'greetings', 'Greetings', [
            'type'  => 'flashcard-set',
            'notes' => [
                'Japanese greetings change with time of day and social distance.',
                'Add ございます (gozaimasu) to make おはよう or ありがとう polite.',
            ],
            'flashcards' => [
                ['front' => 'おはよう',          'back' => 'Good morning (casual)',    'reading_on' => '', 'reading_kun' => 'ohayō',             'stroke_count' => 0, 'examples' => []],
                ['front' => 'おはようございます',  'back' => 'Good morning (polite)',    'reading_on' => '', 'reading_kun' => 'ohayō gozaimasu',   'stroke_count' => 0, 'examples' => []],
                ['front' => 'こんにちは',          'back' => 'Hello / Good afternoon',  'reading_on' => '', 'reading_kun' => 'konnichiwa',         'stroke_count' => 0, 'examples' => []],
                ['front' => 'こんばんは',          'back' => 'Good evening',            'reading_on' => '', 'reading_kun' => 'konbanwa',           'stroke_count' => 0, 'examples' => []],
                ['front' => 'おやすみなさい',       'back' => 'Good night',              'reading_on' => '', 'reading_kun' => 'oyasumi nasai',      'stroke_count' => 0, 'examples' => []],
                ['front' => 'ありがとうございます', 'back' => 'Thank you (polite)',      'reading_on' => '', 'reading_kun' => 'arigatō gozaimasu',  'stroke_count' => 0, 'examples' => []],
                ['front' => 'すみません',           'back' => 'Excuse me / Sorry',       'reading_on' => '', 'reading_kun' => 'sumimasen',          'stroke_count' => 0, 'examples' => []],
                ['front' => 'どういたしまして',     'back' => 'You\'re welcome',         'reading_on' => '', 'reading_kun' => 'dō itashimashite',   'stroke_count' => 0, 'examples' => []],
                ['front' => 'はじめまして',         'back' => 'Nice to meet you',        'reading_on' => '', 'reading_kun' => 'hajimemashite',      'stroke_count' => 0, 'examples' => []],
                ['front' => 'よろしくお願いします', 'back' => 'Please treat me well',   'reading_on' => '', 'reading_kun' => 'yoroshiku onegaishimasu','stroke_count' => 0, 'examples' => []],
            ],
        ]);

        // ── Numbers ───────────────────────────────────────────────────────────
        $lesson('japanese', 'vocabulary', 'numbers', 'Numbers', [
            'type'  => 'flashcard-set',
            'notes' => [
                'Sino-Japanese readings (いち、に…) are used for most counting and compounds.',
                'Native readings (ひとつ、ふたつ…) are used for general counting up to 10.',
                'Special readings before certain counters: 一人 (hitori), 二人 (futari).',
            ],
            'flashcards' => [
                ['front' => '一', 'back' => '1 — one',   'reading_on' => 'ichi / ittsu', 'reading_kun' => 'hito(tsu)', 'stroke_count' => 1, 'examples' => [['word' => '一月', 'reading' => 'ichigatsu', 'meaning' => 'January']]],
                ['front' => '二', 'back' => '2 — two',   'reading_on' => 'ni',           'reading_kun' => 'futa(tsu)', 'stroke_count' => 2, 'examples' => [['word' => '二月', 'reading' => 'nigatsu',  'meaning' => 'February']]],
                ['front' => '三', 'back' => '3 — three', 'reading_on' => 'san',          'reading_kun' => 'mi(ttsu)', 'stroke_count' => 3, 'examples' => [['word' => '三月', 'reading' => 'sangatsu', 'meaning' => 'March']]],
                ['front' => '四', 'back' => '4 — four',  'reading_on' => 'shi / yon',    'reading_kun' => 'yo(ttsu)', 'stroke_count' => 5, 'examples' => [['word' => '四月', 'reading' => 'shigatsu', 'meaning' => 'April']]],
                ['front' => '五', 'back' => '5 — five',  'reading_on' => 'go',           'reading_kun' => 'itsu(tsu)','stroke_count' => 4, 'examples' => [['word' => '五月', 'reading' => 'gogatsu',  'meaning' => 'May']]],
                ['front' => '六', 'back' => '6 — six',   'reading_on' => 'roku',         'reading_kun' => 'mu(ttsu)', 'stroke_count' => 4, 'examples' => [['word' => '六月', 'reading' => 'rokugatsu','meaning' => 'June']]],
                ['front' => '七', 'back' => '7 — seven', 'reading_on' => 'shichi / nana','reading_kun' => 'nana(tsu)','stroke_count' => 2, 'examples' => [['word' => '七月', 'reading' => 'shichigatsu','meaning' => 'July']]],
                ['front' => '八', 'back' => '8 — eight', 'reading_on' => 'hachi',        'reading_kun' => 'ya(ttsu)', 'stroke_count' => 2, 'examples' => [['word' => '八月', 'reading' => 'hachigatsu','meaning' => 'August']]],
                ['front' => '九', 'back' => '9 — nine',  'reading_on' => 'ku / kyū',     'reading_kun' => 'kokono(tsu)','stroke_count' => 2,'examples' => [['word' => '九月', 'reading' => 'kugatsu',  'meaning' => 'September']]],
                ['front' => '十', 'back' => '10 — ten',  'reading_on' => 'jū / jit',     'reading_kun' => 'tō',        'stroke_count' => 2, 'examples' => [['word' => '十月', 'reading' => 'jūgatsu',  'meaning' => 'October']]],
                ['front' => '百', 'back' => '100 — hundred','reading_on' => 'hyaku',      'reading_kun' => '',          'stroke_count' => 6, 'examples' => [['word' => '三百円', 'reading' => 'sanbyaku-en', 'meaning' => '300 yen']]],
                ['front' => '千', 'back' => '1000 — thousand','reading_on' => 'sen / zen','reading_kun' => 'chi',       'stroke_count' => 3, 'examples' => [['word' => '二千円', 'reading' => 'nisen-en', 'meaning' => '2000 yen']]],
            ],
        ]);

        // ══════════════════════════════════════════════════════════════════════
        // JAPANESE — LISTENING
        // ══════════════════════════════════════════════════════════════════════
        $lesson('japanese', 'listening', 'listening-practice', 'Listening Practice', [
            'type'  => 'flashcard-set',
            'notes' => [
                'Listen without text first, then with transcript, then shadow line by line.',
                'Catch particles and verb endings — they carry the question or negation.',
                'N4 listening features daily conversations: shopping, schedules, simple directions.',
            ],
            'flashcards' => [
                ['front' => 'すみません、駅はどこですか。', 'back' => 'Excuse me, where is the station?',     'reading_on' => '', 'reading_kun' => 'sumimasen, eki wa doko desu ka', 'stroke_count' => 0, 'examples' => []],
                ['front' => 'まっすぐ行ってください。',     'back' => 'Please go straight.',                 'reading_on' => '', 'reading_kun' => 'massugu itte kudasai',          'stroke_count' => 0, 'examples' => []],
                ['front' => '右に曲がってください。',       'back' => 'Please turn right.',                  'reading_on' => '', 'reading_kun' => 'migi ni magatte kudasai',       'stroke_count' => 0, 'examples' => []],
                ['front' => 'いくらですか。',               'back' => 'How much is it?',                     'reading_on' => '', 'reading_kun' => 'ikura desu ka',                 'stroke_count' => 0, 'examples' => []],
                ['front' => '〜をください。',               'back' => 'Please give me… / I\'ll take…',      'reading_on' => '', 'reading_kun' => '〜 wo kudasai',                 'stroke_count' => 0, 'examples' => [['word' => 'これをください', 'reading' => 'kore wo kudasai', 'meaning' => 'I\'ll take this']]],
                ['front' => 'ちょっと待ってください。',     'back' => 'Please wait a moment.',               'reading_on' => '', 'reading_kun' => 'chotto matte kudasai',           'stroke_count' => 0, 'examples' => []],
                ['front' => 'わかりました。',               'back' => 'I understood. / Got it.',             'reading_on' => '', 'reading_kun' => 'wakarimashita',                 'stroke_count' => 0, 'examples' => []],
                ['front' => 'もう一度お願いします。',       'back' => 'Please say that once more.',          'reading_on' => '', 'reading_kun' => 'mō ichido onegai shimasu',      'stroke_count' => 0, 'examples' => []],
            ],
        ]);
    }
}
