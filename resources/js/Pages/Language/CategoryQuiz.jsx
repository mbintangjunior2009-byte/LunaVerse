import React, { useState, useEffect, useCallback } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import LanguageHeader from '@/Components/language/LanguageHeader';
import { getLanguageConfig } from '@/data/languageConfig';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import {
    ArrowLeft, RotateCcw, Trophy, X, Check, Star,
    BookOpen, Volume2, Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Generic Category Quiz Page
 * Handles: kanji, vocabulary, grammar, listening (and any future backend-driven category)
 * Fetches questions from GET /api/practice/questions?category={category}
 * Submits results to POST /practice/submit
 */
export default function CategoryQuiz({ languageId, category }) {
    const config = getLanguageConfig(languageId);

    // Derive display metadata from languageConfig practiceCategories
    const categoryMeta = config.practiceCategories.find((c) => c.id === category) ?? {
        id: category,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        icon: '📝',
        description: '',
        xpReward: 100,
    };

    // ── State ──────────────────────────────────────────────────────────────────
    const [quizState, setQuizState] = useState('intro'); // intro | loading | quiz | result | error
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]); // true/false per question
    const [xpEarned, setXpEarned] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Persisted stats (localStorage per language+category)
    const storageKey = `quiz-${languageId}-${category}`;
    const [bestScore, setBestScore] = useState(
        () => parseInt(localStorage.getItem(`${storageKey}-best`) ?? '0')
    );
    const [attempts, setAttempts] = useState(
        () => parseInt(localStorage.getItem(`${storageKey}-attempts`) ?? '0')
    );
    const [totalXp, setTotalXp] = useState(
        () => parseInt(localStorage.getItem(`${storageKey}-totalxp`) ?? '0')
    );

    // ── Derived ────────────────────────────────────────────────────────────────
    const currentQuestion = questions[currentIndex];
    const isLastQuestion = currentIndex === questions.length - 1;
    const correctCount = answers.filter(Boolean).length;
    const wrongCount = answers.filter((a) => a === false).length;
    const score = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
    const isPerfect = score === 100;
    const passed = score >= 70;

    // ── Fetch questions ────────────────────────────────────────────────────────
    const fetchAndStart = useCallback(async () => {
        setQuizState('loading');
        setErrorMsg('');
        try {
            const res = await fetch(`/api/practice/questions?category=${encodeURIComponent(category)}`, {
                headers: { Accept: 'application/json' },
                credentials: 'same-origin',
            });
            if (!res.ok) throw new Error(`Server returned ${res.status}`);
            const data = await res.json();
            const qs = data.questions ?? [];
            if (qs.length === 0) {
                setErrorMsg(`No questions available for "${categoryMeta.name}" yet. Check back soon!`);
                setQuizState('error');
                return;
            }
            setQuestions(qs);
            setCurrentIndex(0);
            setAnswers([]);
            setXpEarned(0);
            setShowFeedback(false);
            setSelectedAnswer(null);
            // increment attempts
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            localStorage.setItem(`${storageKey}-attempts`, newAttempts);
            setQuizState('quiz');
        } catch (err) {
            setErrorMsg('Could not load questions. Please check your connection and try again.');
            setQuizState('error');
        }
    }, [category, categoryMeta.name, attempts, storageKey]);

    // ── Answer handler ─────────────────────────────────────────────────────────
    const handleAnswer = useCallback(
        (chosenAnswer) => {
            if (showFeedback || !currentQuestion) return;

            // Normalise the stored answer field — different question types use different keys
            const qd = currentQuestion.question_data ?? currentQuestion;
            const correctAnswer = qd.answer ?? qd.meaning ?? '';
            const correct = chosenAnswer === correctAnswer;

            setSelectedAnswer(chosenAnswer);
            setIsCorrect(correct);
            setShowFeedback(true);

            const newAnswers = [...answers];
            newAnswers[currentIndex] = correct;
            setAnswers(newAnswers);

            const questionXp = correct ? 10 : 0;
            setXpEarned((prev) => prev + questionXp);

            setTimeout(() => {
                setShowFeedback(false);
                setSelectedAnswer(null);

                if (isLastQuestion) {
                    // Add perfect-score bonus
                    const bonusXp = isPerfect ? 50 : 0;
                    const finalXp = xpEarned + questionXp + bonusXp;
                    setXpEarned(finalXp);

                    // Persist stats
                    if (score >= bestScore) {
                        setBestScore(score);
                        localStorage.setItem(`${storageKey}-best`, score);
                    }
                    const newTotal = totalXp + finalXp;
                    setTotalXp(newTotal);
                    localStorage.setItem(`${storageKey}-totalxp`, newTotal);

                    setQuizState('result');
                } else {
                    setCurrentIndex((i) => i + 1);
                }
            }, 1100);
        },
        [
            showFeedback, currentQuestion, answers, currentIndex,
            isLastQuestion, xpEarned, isPerfect, score, bestScore,
            totalXp, storageKey,
        ]
    );

    // ── Submit results to backend ──────────────────────────────────────────────
    const submitResults = useCallback(() => {
        if (isSubmitting) return;
        setIsSubmitting(true);
        router.post(
            '/practice/submit',
            { category, score, completed: passed },
            {
                preserveState: true,
                onFinish: () => setIsSubmitting(false),
            }
        );
    }, [category, score, passed, isSubmitting]);

    // Auto-submit once results screen is shown
    useEffect(() => {
        if (quizState === 'result') {
            submitResults();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quizState]);

    // ── Question renderer ──────────────────────────────────────────────────────
    const renderQuestion = () => {
        if (!currentQuestion) return null;
        const qd = currentQuestion.question_data ?? currentQuestion;
        const type = qd.type ?? 'multiple_choice';
        const correctAnswer = qd.answer ?? qd.meaning ?? '';
        const options = qd.options ?? [];

        // Prompt text differs per type
        const prompt = (() => {
            if (type === 'kanji_meaning') return 'What is the meaning of this kanji?';
            if (type === 'translation')    return 'Translate this sentence into English:';
            if (type === 'listening')      return 'What does this word mean?';
            return 'Choose the correct reading:';
        })();

        // Main stimulus (the big display in the card)
        const stimulus = (() => {
            if (type === 'listening') {
                return (
                    <div className="flex flex-col items-center gap-3">
                        <Volume2 className="w-12 h-12 text-brand-300 opacity-60" />
                        <p className="text-xl font-medium text-gray-300">{qd.question}</p>
                        <p className="text-xs text-gray-500">(Audio playback coming soon)</p>
                    </div>
                );
            }
            return (
                <div
                    className={
                        type === 'translation'
                            ? 'text-2xl font-bold text-center leading-relaxed'
                            : 'text-7xl font-bold text-center'
                    }
                >
                    {qd.question}
                </div>
            );
        })();

        // Reading hint for kanji
        const hint = type === 'kanji_meaning' && qd.reading ? (
            <p className="text-sm text-gray-400 text-center mt-3">Reading: {qd.reading}</p>
        ) : null;

        return (
            <>
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                    <Link
                        href={`/languages/${languageId}/practice`}
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-300 transition-colors text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" /> Exit
                    </Link>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-400">
                            {currentIndex + 1} / {questions.length}
                        </span>
                        <span className="font-bold text-brand-300">+{xpEarned} XP</span>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-white/10 rounded-full mb-7 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-brand-700 to-brand-300 rounded-full"
                        animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {/* Question card */}
                <Card className="p-8 mb-5">
                    <p className="text-sm text-gray-400 text-center mb-6">{prompt}</p>
                    {stimulus}
                    {hint}
                </Card>

                {/* Answer grid */}
                <div
                    className={`grid gap-3 ${
                        options.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2'
                    }`}
                >
                    {options.map((opt, idx) => {
                        const isThisCorrect = opt === correctAnswer;
                        const isThisSelected = opt === selectedAnswer;
                        let btnCls = 'bg-white/5 hover:bg-white/10 border-white/20 hover:border-brand-500/40';
                        let Icon = null;

                        if (showFeedback) {
                            if (isThisCorrect) {
                                btnCls = 'bg-emerald-500/20 border-emerald-500/50';
                                Icon = <Check className="w-4 h-4 text-emerald-300 shrink-0" />;
                            } else if (isThisSelected && !isCorrect) {
                                btnCls = 'bg-red-500/20 border-red-500/50';
                                Icon = <X className="w-4 h-4 text-red-300 shrink-0" />;
                            }
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(opt)}
                                disabled={showFeedback}
                                className={`
                                    flex items-center justify-center gap-2 p-4 rounded-xl border-2
                                    font-medium text-base transition-all
                                    ${btnCls}
                                    ${!showFeedback ? 'hover:scale-[1.02] active:scale-[0.98]' : ''}
                                `}
                            >
                                {opt}
                                {Icon}
                            </button>
                        );
                    })}
                </div>

                {/* Feedback banner */}
                <AnimatePresence>
                    {showFeedback && (
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            className={`mt-5 text-center p-3 rounded-xl text-sm font-bold ${
                                isCorrect
                                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                                    : 'bg-red-500/10 border border-red-500/30 text-red-300'
                            }`}
                        >
                            {isCorrect ? '✓ Correct!' : `✗ The answer is: ${correctAnswer}`}
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        );
    };

    // ── Screens ────────────────────────────────────────────────────────────────
    const renderIntro = () => (
        <div className="max-w-lg mx-auto">
            <Card className="p-8 text-center">
                <div className="text-7xl mb-5">{categoryMeta.icon}</div>
                <h1 className="text-3xl font-bold mb-2">{categoryMeta.name} Quiz</h1>
                <p className="text-gray-400 mb-8">
                    {categoryMeta.description || `Test your ${categoryMeta.name.toLowerCase()} knowledge.`}
                    {' '}Questions are selected randomly each session.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-8">
                    {[
                        { label: 'Best Score', value: `${bestScore}%`, color: 'text-brand-300' },
                        { label: 'Attempts',   value: attempts,         color: 'text-brand-300' },
                        { label: 'Total XP',   value: `+${totalXp}`,   color: 'text-yellow-300' },
                    ].map(({ label, value, color }) => (
                        <div key={label} className="bg-white/5 rounded-xl p-4">
                            <div className={`text-2xl font-bold ${color}`}>{value}</div>
                            <div className="text-xs text-gray-400 mt-1">{label}</div>
                        </div>
                    ))}
                </div>

                <Button variant="primary" size="lg" onClick={fetchAndStart} className="w-full">
                    Start Quiz
                </Button>
            </Card>
        </div>
    );

    const renderLoading = () => (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-gray-400">
            <Loader2 className="w-10 h-10 animate-spin text-brand-300" />
            <p>Loading questions…</p>
        </div>
    );

    const renderError = () => (
        <div className="max-w-lg mx-auto">
            <Card className="p-8 text-center">
                <div className="text-5xl mb-4">😅</div>
                <h2 className="text-xl font-bold mb-3">Couldn't Load Quiz</h2>
                <p className="text-gray-400 mb-6 text-sm">{errorMsg}</p>
                <div className="flex gap-3">
                    <Link href={`/languages/${languageId}/practice`} className="flex-1">
                        <Button variant="outline" className="w-full gap-2">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </Button>
                    </Link>
                    <Button variant="primary" onClick={fetchAndStart} className="flex-1 gap-2">
                        <RotateCcw className="w-4 h-4" /> Retry
                    </Button>
                </div>
            </Card>
        </div>
    );

    const renderResult = () => (
        <div className="max-w-lg mx-auto">
            <Card className="p-8 text-center">
                {isPerfect && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                        className="mb-5"
                    >
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-2">
                            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                            <span className="font-bold text-yellow-300 text-sm">Perfect Score!</span>
                        </div>
                    </motion.div>
                )}

                <Trophy
                    className={`w-12 h-12 mx-auto mb-3 ${
                        passed ? 'text-yellow-300' : 'text-gray-500'
                    }`}
                />
                <div className="text-6xl font-bold mb-1">{score}%</div>
                <p className={`text-sm font-medium mb-7 ${passed ? 'text-emerald-300' : 'text-red-300'}`}>
                    {passed ? '✓ Passed (≥ 70%)' : '✗ Not passed — try again!'}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                        { label: 'Correct',  value: correctCount, color: 'text-emerald-300' },
                        { label: 'Wrong',    value: wrongCount,   color: 'text-red-300'     },
                        { label: 'Accuracy', value: `${score}%`,  color: 'text-brand-300'   },
                        { label: 'XP Earned',value: `+${xpEarned}`, color: 'text-yellow-300'},
                    ].map(({ label, value, color }) => (
                        <div key={label} className="bg-white/5 rounded-xl p-4">
                            <div className={`text-2xl font-bold ${color}`}>{value}</div>
                            <div className="text-xs text-gray-400 mt-1">{label}</div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-3">
                    <Link href={`/languages/${languageId}/practice`} className="flex-1">
                        <Button variant="outline" className="w-full gap-2">
                            <ArrowLeft className="w-4 h-4" /> All Categories
                        </Button>
                    </Link>
                    <Button
                        variant="primary"
                        onClick={() => setQuizState('intro')}
                        className="flex-1 gap-2"
                    >
                        <RotateCcw className="w-4 h-4" /> Try Again
                    </Button>
                </div>
            </Card>
        </div>
    );

    // ── Page shell ─────────────────────────────────────────────────────────────
    return (
        <DashboardLayout>
            <Head title={`${categoryMeta.name} Quiz — ${config.name}`} />

            {/* Show full language header only on intro/error; hide during active quiz for focus */}
            {(quizState === 'intro' || quizState === 'error') && (
                <LanguageHeader languageId={languageId} />
            )}

            {quizState === 'intro'   && renderIntro()}
            {quizState === 'loading' && renderLoading()}
            {quizState === 'quiz'    && (
                <div className="max-w-2xl mx-auto">
                    {renderQuestion()}
                </div>
            )}
            {quizState === 'result'  && renderResult()}
            {quizState === 'error'   && renderError()}
        </DashboardLayout>
    );
}
