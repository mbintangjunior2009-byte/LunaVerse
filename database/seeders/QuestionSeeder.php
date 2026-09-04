<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database with practice questions.
     */
    public function run(): void
    {
        // Hiragana Questions (40)
        $hiraganaQuestions = [
            ['question' => 'あ', 'options' => ['a', 'i', 'u', 'e', 'o'], 'answer' => 'a'],
            ['question' => 'い', 'options' => ['a', 'i', 'u', 'e', 'o'], 'answer' => 'i'],
            ['question' => 'う', 'options' => ['a', 'i', 'u', 'e', 'o'], 'answer' => 'u'],
            ['question' => 'え', 'options' => ['a', 'i', 'u', 'e', 'o'], 'answer' => 'e'],
            ['question' => 'お', 'options' => ['a', 'i', 'u', 'e', 'o'], 'answer' => 'o'],
            ['question' => 'か', 'options' => ['ka', 'ki', 'ku', 'ke', 'ko'], 'answer' => 'ka'],
            ['question' => 'き', 'options' => ['ka', 'ki', 'ku', 'ke', 'ko'], 'answer' => 'ki'],
            ['question' => 'く', 'options' => ['ka', 'ki', 'ku', 'ke', 'ko'], 'answer' => 'ku'],
            ['question' => 'け', 'options' => ['ka', 'ki', 'ku', 'ke', 'ko'], 'answer' => 'ke'],
            ['question' => 'こ', 'options' => ['ka', 'ki', 'ku', 'ke', 'ko'], 'answer' => 'ko'],
            ['question' => 'さ', 'options' => ['sa', 'shi', 'su', 'se', 'so'], 'answer' => 'sa'],
            ['question' => 'し', 'options' => ['sa', 'shi', 'su', 'se', 'so'], 'answer' => 'shi'],
            ['question' => 'す', 'options' => ['sa', 'shi', 'su', 'se', 'so'], 'answer' => 'su'],
            ['question' => 'せ', 'options' => ['sa', 'shi', 'su', 'se', 'so'], 'answer' => 'se'],
            ['question' => 'そ', 'options' => ['sa', 'shi', 'su', 'se', 'so'], 'answer' => 'so'],
            ['question' => 'た', 'options' => ['ta', 'chi', 'tsu', 'te', 'to'], 'answer' => 'ta'],
            ['question' => 'ち', 'options' => ['ta', 'chi', 'tsu', 'te', 'to'], 'answer' => 'chi'],
            ['question' => 'つ', 'options' => ['ta', 'chi', 'tsu', 'te', 'to'], 'answer' => 'tsu'],
            ['question' => 'て', 'options' => ['ta', 'chi', 'tsu', 'te', 'to'], 'answer' => 'te'],
            ['question' => 'と', 'options' => ['ta', 'chi', 'tsu', 'te', 'to'], 'answer' => 'to'],
            ['question' => 'な', 'options' => ['na', 'ni', 'nu', 'ne', 'no'], 'answer' => 'na'],
            ['question' => 'に', 'options' => ['na', 'ni', 'nu', 'ne', 'no'], 'answer' => 'ni'],
            ['question' => 'ぬ', 'options' => ['na', 'ni', 'nu', 'ne', 'no'], 'answer' => 'nu'],
            ['question' => 'ね', 'options' => ['na', 'ni', 'nu', 'ne', 'no'], 'answer' => 'ne'],
            ['question' => 'の', 'options' => ['na', 'ni', 'nu', 'ne', 'no'], 'answer' => 'no'],
            ['question' => 'は', 'options' => ['ha', 'hi', 'fu', 'he', 'ho'], 'answer' => 'ha'],
            ['question' => 'ひ', 'options' => ['ha', 'hi', 'fu', 'he', 'ho'], 'answer' => 'hi'],
            ['question' => 'ふ', 'options' => ['ha', 'hi', 'fu', 'he', 'ho'], 'answer' => 'fu'],
            ['question' => 'へ', 'options' => ['ha', 'hi', 'fu', 'he', 'ho'], 'answer' => 'he'],
            ['question' => 'ほ', 'options' => ['ha', 'hi', 'fu', 'he', 'ho'], 'answer' => 'ho'],
            ['question' => 'ま', 'options' => ['ma', 'mi', 'mu', 'me', 'mo'], 'answer' => 'ma'],
            ['question' => 'み', 'options' => ['ma', 'mi', 'mu', 'me', 'mo'], 'answer' => 'mi'],
            ['question' => 'む', 'options' => ['ma', 'mi', 'mu', 'me', 'mo'], 'answer' => 'mu'],
            ['question' => 'め', 'options' => ['ma', 'mi', 'mu', 'me', 'mo'], 'answer' => 'me'],
            ['question' => 'も', 'options' => ['ma', 'mi', 'mu', 'me', 'mo'], 'answer' => 'mo'],
            ['question' => 'や', 'options' => ['ya', 'yu', 'yo'], 'answer' => 'ya'],
            ['question' => 'ゆ', 'options' => ['ya', 'yu', 'yo'], 'answer' => 'yu'],
            ['question' => 'よ', 'options' => ['ya', 'yu', 'yo'], 'answer' => 'yo'],
            ['question' => 'ら', 'options' => ['ra', 'ri', 'ru', 're', 'ro'], 'answer' => 'ra'],
            ['question' => 'り', 'options' => ['ra', 'ri', 'ru', 're', 'ro'], 'answer' => 'ri'],
        ];

        foreach ($hiraganaQuestions as $q) {
            Question::create([
                'category' => 'hiragana',
                'question_data' => [
                    'type' => 'multiple_choice',
                    'question' => $q['question'],
                    'options' => $q['options'],
                    'answer' => $q['answer'],
                ],
            ]);
        }

        // Katakana Questions (40)
        $katakanaQuestions = [
            ['question' => 'ア', 'options' => ['a', 'i', 'u', 'e', 'o'], 'answer' => 'a'],
            ['question' => 'イ', 'options' => ['a', 'i', 'u', 'e', 'o'], 'answer' => 'i'],
            ['question' => 'ウ', 'options' => ['a', 'i', 'u', 'e', 'o'], 'answer' => 'u'],
            ['question' => 'エ', 'options' => ['a', 'i', 'u', 'e', 'o'], 'answer' => 'e'],
            ['question' => 'オ', 'options' => ['a', 'i', 'u', 'e', 'o'], 'answer' => 'o'],
            ['question' => 'カ', 'options' => ['ka', 'ki', 'ku', 'ke', 'ko'], 'answer' => 'ka'],
            ['question' => 'キ', 'options' => ['ka', 'ki', 'ku', 'ke', 'ko'], 'answer' => 'ki'],
            ['question' => 'ク', 'options' => ['ka', 'ki', 'ku', 'ke', 'ko'], 'answer' => 'ku'],
            ['question' => 'ケ', 'options' => ['ka', 'ki', 'ku', 'ke', 'ko'], 'answer' => 'ke'],
            ['question' => 'コ', 'options' => ['ka', 'ki', 'ku', 'ke', 'ko'], 'answer' => 'ko'],
            ['question' => 'サ', 'options' => ['sa', 'shi', 'su', 'se', 'so'], 'answer' => 'sa'],
            ['question' => 'シ', 'options' => ['sa', 'shi', 'su', 'se', 'so'], 'answer' => 'shi'],
            ['question' => 'ス', 'options' => ['sa', 'shi', 'su', 'se', 'so'], 'answer' => 'su'],
            ['question' => 'セ', 'options' => ['sa', 'shi', 'su', 'se', 'so'], 'answer' => 'se'],
            ['question' => 'ソ', 'options' => ['sa', 'shi', 'su', 'se', 'so'], 'answer' => 'so'],
            ['question' => 'タ', 'options' => ['ta', 'chi', 'tsu', 'te', 'to'], 'answer' => 'ta'],
            ['question' => 'チ', 'options' => ['ta', 'chi', 'tsu', 'te', 'to'], 'answer' => 'chi'],
            ['question' => 'ツ', 'options' => ['ta', 'chi', 'tsu', 'te', 'to'], 'answer' => 'tsu'],
            ['question' => 'テ', 'options' => ['ta', 'chi', 'tsu', 'te', 'to'], 'answer' => 'te'],
            ['question' => 'ト', 'options' => ['ta', 'chi', 'tsu', 'te', 'to'], 'answer' => 'to'],
            ['question' => 'ナ', 'options' => ['na', 'ni', 'nu', 'ne', 'no'], 'answer' => 'na'],
            ['question' => 'ニ', 'options' => ['na', 'ni', 'nu', 'ne', 'no'], 'answer' => 'ni'],
            ['question' => 'ヌ', 'options' => ['na', 'ni', 'nu', 'ne', 'no'], 'answer' => 'nu'],
            ['question' => 'ネ', 'options' => ['na', 'ni', 'nu', 'ne', 'no'], 'answer' => 'ne'],
            ['question' => 'ノ', 'options' => ['na', 'ni', 'nu', 'ne', 'no'], 'answer' => 'no'],
            ['question' => 'ハ', 'options' => ['ha', 'hi', 'fu', 'he', 'ho'], 'answer' => 'ha'],
            ['question' => 'ヒ', 'options' => ['ha', 'hi', 'fu', 'he', 'ho'], 'answer' => 'hi'],
            ['question' => 'フ', 'options' => ['ha', 'hi', 'fu', 'he', 'ho'], 'answer' => 'fu'],
            ['question' => 'ヘ', 'options' => ['ha', 'hi', 'fu', 'he', 'ho'], 'answer' => 'he'],
            ['question' => 'ホ', 'options' => ['ha', 'hi', 'fu', 'he', 'ho'], 'answer' => 'ho'],
            ['question' => 'マ', 'options' => ['ma', 'mi', 'mu', 'me', 'mo'], 'answer' => 'ma'],
            ['question' => 'ミ', 'options' => ['ma', 'mi', 'mu', 'me', 'mo'], 'answer' => 'mi'],
            ['question' => 'ム', 'options' => ['ma', 'mi', 'mu', 'me', 'mo'], 'answer' => 'mu'],
            ['question' => 'メ', 'options' => ['ma', 'mi', 'mu', 'me', 'mo'], 'answer' => 'me'],
            ['question' => 'モ', 'options' => ['ma', 'mi', 'mu', 'me', 'mo'], 'answer' => 'mo'],
            ['question' => 'ヤ', 'options' => ['ya', 'yu', 'yo'], 'answer' => 'ya'],
            ['question' => 'ユ', 'options' => ['ya', 'yu', 'yo'], 'answer' => 'yu'],
            ['question' => 'ヨ', 'options' => ['ya', 'yu', 'yo'], 'answer' => 'yo'],
            ['question' => 'ラ', 'options' => ['ra', 'ri', 'ru', 're', 'ro'], 'answer' => 'ra'],
            ['question' => 'リ', 'options' => ['ra', 'ri', 'ru', 're', 'ro'], 'answer' => 'ri'],
        ];

        foreach ($katakanaQuestions as $q) {
            Question::create([
                'category' => 'katakana',
                'question_data' => [
                    'type' => 'multiple_choice',
                    'question' => $q['question'],
                    'options' => $q['options'],
                    'answer' => $q['answer'],
                ],
            ]);
        }

        // Kanji Questions (15) - N5 Level
        $kanjiQuestions = [
            ['question' => '日', 'meaning' => 'day/sun', 'reading' => 'nichi/hi'],
            ['question' => '本', 'meaning' => 'book', 'reading' => 'hon'],
            ['question' => '人', 'meaning' => 'person', 'reading' => 'jin/hito'],
            ['question' => '月', 'meaning' => 'month/moon', 'reading' => 'getsu/tsuki'],
            ['question' => '火', 'meaning' => 'fire', 'reading' => 'ka/hi'],
            ['question' => '水', 'meaning' => 'water', 'reading' => 'sui/mizu'],
            ['question' => '木', 'meaning' => 'tree', 'reading' => 'moku/ki'],
            ['question' => '金', 'meaning' => 'gold/money', 'reading' => 'kin/kane'],
            ['question' => '土', 'meaning' => 'earth/soil', 'reading' => 'do/tsuchi'],
            ['question' => '山', 'meaning' => 'mountain', 'reading' => 'san/yama'],
            ['question' => '川', 'meaning' => 'river', 'reading' => 'sen/kawa'],
            ['question' => '花', 'meaning' => 'flower', 'reading' => 'ka/hana'],
            ['question' => '雨', 'meaning' => 'rain', 'reading' => 'u/ame'],
            ['question' => '空', 'meaning' => 'sky', 'reading' => 'kuu/sora'],
            ['question' => '風', 'meaning' => 'wind', 'reading' => 'fuu/kaze'],
        ];

        foreach ($kanjiQuestions as $q) {
            Question::create([
                'category' => 'kanji',
                'question_data' => [
                    'type' => 'kanji_meaning',
                    'question' => $q['question'],
                    'meaning' => $q['meaning'],
                    'reading' => $q['reading'],
                ],
            ]);
        }

        // Vocabulary Questions (30)
        $vocabQuestions = [
            ['question' => 'こんにちは', 'meaning' => 'hello', 'options' => ['hello', 'goodbye', 'thank you', 'sorry'], 'answer' => 'hello'],
            ['question' => 'さようなら', 'meaning' => 'goodbye', 'options' => ['hello', 'goodbye', 'thank you', 'sorry'], 'answer' => 'goodbye'],
            ['question' => 'ありがとう', 'meaning' => 'thank you', 'options' => ['hello', 'goodbye', 'thank you', 'sorry'], 'answer' => 'thank you'],
            ['question' => 'すみません', 'meaning' => 'excuse me/sorry', 'options' => ['hello', 'excuse me', 'thank you', 'yes'], 'answer' => 'excuse me'],
            ['question' => 'はい', 'meaning' => 'yes', 'options' => ['yes', 'no', 'maybe', 'please'], 'answer' => 'yes'],
            ['question' => 'いいえ', 'meaning' => 'no', 'options' => ['yes', 'no', 'maybe', 'please'], 'answer' => 'no'],
            ['question' => 'おはよう', 'meaning' => 'good morning', 'options' => ['good morning', 'good afternoon', 'good evening', 'good night'], 'answer' => 'good morning'],
            ['question' => 'こんばんは', 'meaning' => 'good evening', 'options' => ['good morning', 'good afternoon', 'good evening', 'good night'], 'answer' => 'good evening'],
            ['question' => 'おやすみ', 'meaning' => 'good night', 'options' => ['good morning', 'good afternoon', 'good evening', 'good night'], 'answer' => 'good night'],
            ['question' => '先生', 'meaning' => 'teacher', 'options' => ['teacher', 'student', 'doctor', 'friend'], 'answer' => 'teacher'],
            ['question' => '学生', 'meaning' => 'student', 'options' => ['teacher', 'student', 'doctor', 'friend'], 'answer' => 'student'],
            ['question' => '友達', 'meaning' => 'friend', 'options' => ['teacher', 'student', 'enemy', 'friend'], 'answer' => 'friend'],
            ['question' => '家族', 'meaning' => 'family', 'options' => ['family', 'friend', 'house', 'school'], 'answer' => 'family'],
            ['question' => '学校', 'meaning' => 'school', 'options' => ['family', 'friend', 'house', 'school'], 'answer' => 'school'],
            ['question' => '家', 'meaning' => 'house/home', 'options' => ['family', 'friend', 'house', 'school'], 'answer' => 'house'],
            ['question' => '食べる', 'meaning' => 'to eat', 'options' => ['to eat', 'to drink', 'to sleep', 'to run'], 'answer' => 'to eat'],
            ['question' => '飲む', 'meaning' => 'to drink', 'options' => ['to eat', 'to drink', 'to sleep', 'to run'], 'answer' => 'to drink'],
            ['question' => '寝る', 'meaning' => 'to sleep', 'options' => ['to eat', 'to drink', 'to sleep', 'to run'], 'answer' => 'to sleep'],
            ['question' => '走る', 'meaning' => 'to run', 'options' => ['to eat', 'to drink', 'to sleep', 'to run'], 'answer' => 'to run'],
            ['question' => '見る', 'meaning' => 'to see/watch', 'options' => ['to see', 'to hear', 'to speak', 'to write'], 'answer' => 'to see'],
            ['question' => '聞く', 'meaning' => 'to hear/listen', 'options' => ['to see', 'to hear', 'to speak', 'to write'], 'answer' => 'to hear'],
            ['question' => '話す', 'meaning' => 'to speak', 'options' => ['to see', 'to hear', 'to speak', 'to write'], 'answer' => 'to speak'],
            ['question' => '書く', 'meaning' => 'to write', 'options' => ['to see', 'to hear', 'to speak', 'to write'], 'answer' => 'to write'],
            ['question' => '読む', 'meaning' => 'to read', 'options' => ['to read', 'to write', 'to speak', 'to listen'], 'answer' => 'to read'],
            ['question' => '行く', 'meaning' => 'to go', 'options' => ['to go', 'to come', 'to return', 'to stay'], 'answer' => 'to go'],
            ['question' => '来る', 'meaning' => 'to come', 'options' => ['to go', 'to come', 'to return', 'to stay'], 'answer' => 'to come'],
            ['question' => '帰る', 'meaning' => 'to return', 'options' => ['to go', 'to come', 'to return', 'to stay'], 'answer' => 'to return'],
            ['question' => '大きい', 'meaning' => 'big', 'options' => ['big', 'small', 'tall', 'short'], 'answer' => 'big'],
            ['question' => '小さい', 'meaning' => 'small', 'options' => ['big', 'small', 'tall', 'short'], 'answer' => 'small'],
            ['question' => '新しい', 'meaning' => 'new', 'options' => ['new', 'old', 'young', 'ancient'], 'answer' => 'new'],
        ];

        foreach ($vocabQuestions as $q) {
            Question::create([
                'category' => 'vocabulary',
                'question_data' => [
                    'type' => 'multiple_choice',
                    'question' => $q['question'],
                    'options' => $q['options'],
                    'answer' => $q['answer'],
                    'meaning' => $q['meaning'],
                ],
            ]);
        }

        // Grammar Questions (20)
        $grammarQuestions = [
            ['question' => '私は学生です。', 'translation' => 'I am a student.', 'options' => ['I am a student.', 'You are a student.', 'He is a student.', 'She is a student.'], 'answer' => 'I am a student.'],
            ['question' => 'これは本です。', 'translation' => 'This is a book.', 'options' => ['This is a book.', 'That is a book.', 'That book over there.', 'These are books.'], 'answer' => 'This is a book.'],
            ['question' => '日本語を勉強します。', 'translation' => 'I study Japanese.', 'options' => ['I study Japanese.', 'I studied Japanese.', 'I will study Japanese.', 'I am studying Japanese.'], 'answer' => 'I study Japanese.'],
            ['question' => '東京に行きます。', 'translation' => 'I go to Tokyo.', 'options' => ['I go to Tokyo.', 'I went to Tokyo.', 'I will go to Tokyo.', 'I am going to Tokyo.'], 'answer' => 'I go to Tokyo.'],
            ['question' => 'ご飯を食べました。', 'translation' => 'I ate rice.', 'options' => ['I eat rice.', 'I ate rice.', 'I will eat rice.', 'I am eating rice.'], 'answer' => 'I ate rice.'],
            ['question' => '映画を見ました。', 'translation' => 'I watched a movie.', 'options' => ['I watch a movie.', 'I watched a movie.', 'I will watch a movie.', 'I am watching a movie.'], 'answer' => 'I watched a movie.'],
            ['question' => '友達と話します。', 'translation' => 'I talk with a friend.', 'options' => ['I talk with a friend.', 'I talked with a friend.', 'I will talk with a friend.', 'I am talking with a friend.'], 'answer' => 'I talk with a friend.'],
            ['question' => '日本は大きい国です。', 'translation' => 'Japan is a big country.', 'options' => ['Japan is a big country.', 'Japan is a small country.', 'Japan is an old country.', 'Japan is a new country.'], 'answer' => 'Japan is a big country.'],
            ['question' => 'この部屋は明るいです。', 'translation' => 'This room is bright.', 'options' => ['This room is bright.', 'This room is dark.', 'This room is small.', 'This room is big.'], 'answer' => 'This room is bright.'],
            ['question' => '彼は医者です。', 'translation' => 'He is a doctor.', 'options' => ['He is a doctor.', 'She is a doctor.', 'He is a teacher.', 'She is a teacher.'], 'answer' => 'He is a doctor.'],
            ['question' => '彼女は先生です。', 'translation' => 'She is a teacher.', 'options' => ['He is a doctor.', 'She is a doctor.', 'He is a teacher.', 'She is a teacher.'], 'answer' => 'She is a teacher.'],
            ['question' => '私たちは友達です。', 'translation' => 'We are friends.', 'options' => ['We are friends.', 'We are enemies.', 'We are family.', 'We are colleagues.'], 'answer' => 'We are friends.'],
            ['question' => '猫が好きです。', 'translation' => 'I like cats.', 'options' => ['I like cats.', 'I like dogs.', 'I hate cats.', 'I hate dogs.'], 'answer' => 'I like cats.'],
            ['question' => '水が欲しいです。', 'translation' => 'I want water.', 'options' => ['I want water.', 'I need water.', 'I like water.', 'I hate water.'], 'answer' => 'I want water.'],
            ['question' => '日本語が分かります。', 'translation' => 'I understand Japanese.', 'options' => ['I understand Japanese.', 'I speak Japanese.', 'I write Japanese.', 'I read Japanese.'], 'answer' => 'I understand Japanese.'],
            ['question' => '車を持っています。', 'translation' => 'I have a car.', 'options' => ['I have a car.', 'I had a car.', 'I will have a car.', 'I need a car.'], 'answer' => 'I have a car.'],
            ['question' => '時間がありません。', 'translation' => 'I have no time.', 'options' => ['I have no time.', 'I have time.', 'I need time.', 'I want time.'], 'answer' => 'I have no time.'],
            ['question' => '雨が降っています。', 'translation' => 'It is raining.', 'options' => ['It is raining.', 'It rained.', 'It will rain.', 'It is sunny.'], 'answer' => 'It is raining.'],
            ['question' => '風が吹いています。', 'translation' => 'The wind is blowing.', 'options' => ['The wind is blowing.', 'The wind blew.', 'The wind will blow.', 'There is no wind.'], 'answer' => 'The wind is blowing.'],
            ['question' => '花が咲いています。', 'translation' => 'The flowers are blooming.', 'options' => ['The flowers are blooming.', 'The flowers bloomed.', 'The flowers will bloom.', 'The flowers died.'], 'answer' => 'The flowers are blooming.'],
        ];

        foreach ($grammarQuestions as $q) {
            Question::create([
                'category' => 'grammar',
                'question_data' => [
                    'type' => 'translation',
                    'question' => $q['question'],
                    'translation' => $q['translation'],
                    'options' => $q['options'],
                    'answer' => $q['answer'],
                ],
            ]);
        }

        // Listening Questions (20)
        $listeningQuestions = [
            ['question' => 'Listen to: "Arigatou"', 'audio' => 'arigatou', 'meaning' => 'thank you', 'options' => ['thank you', 'hello', 'goodbye', 'sorry'], 'answer' => 'thank you'],
            ['question' => 'Listen to: "Sumimasen"', 'audio' => 'sumimasen', 'meaning' => 'excuse me', 'options' => ['excuse me', 'hello', 'thank you', 'sorry'], 'answer' => 'excuse me'],
            ['question' => 'Listen to: "Ohayou"', 'audio' => 'ohayou', 'meaning' => 'good morning', 'options' => ['good morning', 'good afternoon', 'good evening', 'good night'], 'answer' => 'good morning'],
            ['question' => 'Listen to: "Konnichiwa"', 'audio' => 'konnichiwa', 'meaning' => 'hello', 'options' => ['hello', 'goodbye', 'thank you', 'sorry'], 'answer' => 'hello'],
            ['question' => 'Listen to: "Sayounara"', 'audio' => 'sayounara', 'meaning' => 'goodbye', 'options' => ['hello', 'goodbye', 'thank you', 'sorry'], 'answer' => 'goodbye'],
            ['question' => 'Listen to: "Hai"', 'audio' => 'hai', 'meaning' => 'yes', 'options' => ['yes', 'no', 'maybe', 'please'], 'answer' => 'yes'],
            ['question' => 'Listen to: "Iie"', 'audio' => 'iie', 'meaning' => 'no', 'options' => ['yes', 'no', 'maybe', 'please'], 'answer' => 'no'],
            ['question' => 'Listen to: "Gomen"', 'audio' => 'gomen', 'meaning' => 'sorry', 'options' => ['sorry', 'thank you', 'hello', 'goodbye'], 'answer' => 'sorry'],
            ['question' => 'Listen to: "Oishii"', 'audio' => 'oishii', 'meaning' => 'delicious', 'options' => ['delicious', 'bad', 'good', 'terrible'], 'answer' => 'delicious'],
            ['question' => 'Listen to: "Muzukashii"', 'audio' => 'muzukashii', 'meaning' => 'difficult', 'options' => ['difficult', 'easy', 'simple', 'hard'], 'answer' => 'difficult'],
            ['question' => 'Listen to: "Yasashii"', 'audio' => 'yasashii', 'meaning' => 'easy/gentle', 'options' => ['easy', 'difficult', 'hard', 'complex'], 'answer' => 'easy'],
            ['question' => 'Listen to: "Tanoshii"', 'audio' => 'tanoshii', 'meaning' => 'fun/enjoyable', 'options' => ['fun', 'boring', 'sad', 'angry'], 'answer' => 'fun'],
            ['question' => 'Listen to: "Samui"', 'audio' => 'samui', 'meaning' => 'cold', 'options' => ['cold', 'hot', 'warm', 'cool'], 'answer' => 'cold'],
            ['question' => 'Listen to: "Atsui"', 'audio' => 'atsui', 'meaning' => 'hot', 'options' => ['cold', 'hot', 'warm', 'cool'], 'answer' => 'hot'],
            ['question' => 'Listen to: "Ureshii"', 'audio' => 'ureshii', 'meaning' => 'happy', 'options' => ['happy', 'sad', 'angry', 'tired'], 'answer' => 'happy'],
            ['question' => 'Listen to: "Kanashii"', 'audio' => 'kanashii', 'meaning' => 'sad', 'options' => ['happy', 'sad', 'angry', 'tired'], 'answer' => 'sad'],
            ['question' => 'Listen to: "Ikimasu"', 'audio' => 'ikimasu', 'meaning' => 'I go', 'options' => ['I go', 'I come', 'I return', 'I stay'], 'answer' => 'I go'],
            ['question' => 'Listen to: "Kimasu"', 'audio' => 'kimasu', 'meaning' => 'I come', 'options' => ['I go', 'I come', 'I return', 'I stay'], 'answer' => 'I come'],
            ['question' => 'Listen to: "Kaerimasu"', 'audio' => 'kaerimasu', 'meaning' => 'I return', 'options' => ['I go', 'I come', 'I return', 'I stay'], 'answer' => 'I return'],
            ['question' => 'Listen to: "Tabemasu"', 'audio' => 'tabemasu', 'meaning' => 'I eat', 'options' => ['I eat', 'I drink', 'I sleep', 'I run'], 'answer' => 'I eat'],
        ];

        foreach ($listeningQuestions as $q) {
            Question::create([
                'category' => 'listening',
                'question_data' => [
                    'type' => 'listening',
                    'question' => $q['question'],
                    'audio' => $q['audio'],
                    'meaning' => $q['meaning'],
                    'options' => $q['options'],
                    'answer' => $q['answer'],
                ],
            ]);
        }
    }
}
