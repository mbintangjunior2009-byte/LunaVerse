import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getRandomHiraganaQuestions } from '@/data/quizData';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { ArrowLeft, RotateCcw, Star, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QUIZ_CONFIG = {
    'basic-hiragana': {
        title: 'Basic Hiragana',
        icon: 'あ',
        description: '46 basic Hiragana characters',
        storagePrefix: 'hiragana',
    },
    dakuten: {
        title: 'Dakuten',
        icon: 'が',
        description: 'Voiced characters (がぎぐげご, etc.)',
        storagePrefix: 'dakuten',
    },
    handakuten: {
        title: 'Handakuten',
        icon: 'ぱ',
        description: 'Semi-voiced characters (ぱぴぷぺぽ)',
        storagePrefix: 'handakuten',
    },
    mixed: {
        title: 'Mixed Challenge',
        icon: '🎯',
        description: 'All Hiragana characters mixed randomly',
        storagePrefix: 'mixed-hiragana',
    },
};

export default function QuizEngine({ quizType = 'basic-hiragana', autoStart = false, onExit }) {
    const config = QUIZ_CONFIG[quizType] || QUIZ_CONFIG['basic-hiragana'];

    const [quizState, setQuizState] = useState(autoStart ? 'quiz' : 'intro');
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [xpEarned, setXPEarned] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const [bestScore, setBestScore] = useState(0);
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const savedBest = localStorage.getItem(`${config.storagePrefix}-best-score`);
        const savedAttempts = localStorage.getItem(`${config.storagePrefix}-attempts`);
        setBestScore(savedBest ? parseInt(savedBest, 10) : 0);
        setAttempts(savedAttempts ? parseInt(savedAttempts, 10) : 0);
    }, [config.storagePrefix]);

    const startQuiz = useCallback(() => {
        const randomQuestions = getRandomHiraganaQuestions(quizType, 10);
        setQuestions(randomQuestions);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setXPEarned(0);
        setQuizState('quiz');
        setAttempts((prev) => {
            const next = prev + 1;
            if (typeof window !== 'undefined') {
                localStorage.setItem(`${config.storagePrefix}-attempts`, String(next));
            }
            return next;
        });
    }, [quizType, config.storagePrefix]);

    useEffect(() => {
        if (autoStart) {
            startQuiz();
        }
    }, [autoStart, startQuiz]);

    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = questions.length > 0 && currentQuestionIndex === questions.length - 1;

    const correctAnswers = useMemo(
        () => answers.filter((answer) => answer === true).length,
        [answers]
    );

    const score = questions.length ? Math.round((correctAnswers / questions.length) * 100) : 0;
    const isPerfect = score === 100;

    const handleAnswer = useCallback((answer) => {
        if (showFeedback || !currentQuestion) return;

        const correct = answer === currentQuestion.answer;
        setSelectedAnswer(answer);
        setIsCorrect(correct);
        setShowFeedback(true);

        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = correct;
        setAnswers(newAnswers);

        if (correct) {
            setXPEarned((prev) => prev + 10);
        }

        window.setTimeout(() => {
            setShowFeedback(false);
            setSelectedAnswer(null);

            if (isLastQuestion) {
                const finalScore = Math.round((newAnswers.filter(Boolean).length / questions.length) * 100);
                if (typeof window !== 'undefined') {
                    const storedBest = parseInt(localStorage.getItem(`${config.storagePrefix}-best-score`) || '0', 10);
                    if (finalScore > storedBest) {
                        localStorage.setItem(`${config.storagePrefix}-best-score`, String(finalScore));
                        setBestScore(finalScore);
                    }
                }
                setQuizState('result');
            } else {
                setCurrentQuestionIndex((prev) => prev + 1);
            }
        }, 900);
    }, [answers, config.storagePrefix, currentQuestion, currentQuestionIndex, isLastQuestion, questions.length, showFeedback]);

    if (quizState === 'intro') {
        return (
            <Card className="p-6 md:p-8 text-center">
                <div className="text-7xl mb-4">{config.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{config.title}</h2>
                <p className="text-gray-400 mb-6">{config.description}. 10 random questions per round.</p>
                <div className="grid grid-cols-2 gap-3 mb-6 max-w-sm mx-auto">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                        <p className="text-xl font-bold text-brand-300">{bestScore}%</p>
                        <p className="text-xs text-gray-400">Best Score</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                        <p className="text-xl font-bold text-brand-300">{attempts}</p>
                        <p className="text-xs text-gray-400">Attempts</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="primary" onClick={startQuiz}>Start Quiz</Button>
                    {onExit && (
                        <Button variant="outline" onClick={onExit} className="gap-2">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </Button>
                    )}
                </div>
            </Card>
        );
    }

    if (quizState === 'quiz' && currentQuestion) {
        return (
            <div>
                <div className="flex items-center justify-between mb-4">
                    <button
                        type="button"
                        onClick={onExit}
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-300 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Exit
                    </button>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-400">
                            Question {currentQuestionIndex + 1} / {questions.length}
                        </span>
                        <span className="font-bold text-brand-300">+{xpEarned} XP</span>
                    </div>
                </div>

                <div className="w-full h-2 bg-white/10 rounded-full mb-6">
                    <div
                        className="h-full bg-gradient-to-r from-brand-500 to-brand-300 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    />
                </div>

                <Card className="p-6 md:p-8 mb-4">
                    <div className="text-center">
                        <div className="text-7xl md:text-8xl font-bold mb-8">{currentQuestion.question}</div>
                        <div className="grid grid-cols-2 gap-3">
                            {currentQuestion.choices.map((choice) => {
                                let buttonClass = 'bg-white/5 hover:bg-white/10 border-white/20';
                                let icon = null;

                                if (showFeedback) {
                                    if (choice === currentQuestion.answer) {
                                        buttonClass = 'bg-emerald-500/20 border-emerald-500/50';
                                        icon = <Check className="w-5 h-5 text-emerald-300" />;
                                    } else if (choice === selectedAnswer && !isCorrect) {
                                        buttonClass = 'bg-red-500/20 border-red-500/50';
                                        icon = <X className="w-5 h-5 text-red-300" />;
                                    }
                                }

                                return (
                                    <button
                                        key={choice}
                                        type="button"
                                        onClick={() => handleAnswer(choice)}
                                        disabled={showFeedback}
                                        className={`relative p-5 rounded-xl border-2 font-bold text-lg transition-all ${buttonClass} ${!showFeedback ? 'hover:scale-[1.02]' : ''}`}
                                    >
                                        <div className="flex items-center justify-center gap-2">
                                            {choice}
                                            {icon}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </Card>

                <AnimatePresence>
                    {showFeedback && (
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            className={`text-center p-3 rounded-xl ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' : 'bg-red-500/10 border border-red-500/30 text-red-300'}`}
                        >
                            {isCorrect ? 'Correct!' : 'Incorrect'}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    if (quizState === 'result') {
        const wrongAnswers = questions.length - correctAnswers;
        const finalXP = xpEarned + (isPerfect ? 50 : 0);

        return (
            <Card className="p-6 md:p-8 text-center">
                {isPerfect && (
                    <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-4 py-2 mb-4">
                        <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                        <span className="font-bold text-yellow-300">Perfect Score!</span>
                    </div>
                )}
                <div className="text-5xl font-bold mb-1">{score}%</div>
                <p className="text-gray-400 mb-6">{config.title}</p>
                <div className="grid grid-cols-2 gap-3 mb-6 max-w-md mx-auto">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                        <p className="text-xl font-bold text-emerald-300">{correctAnswers}</p>
                        <p className="text-xs text-gray-400">Correct</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                        <p className="text-xl font-bold text-red-300">{wrongAnswers}</p>
                        <p className="text-xs text-gray-400">Wrong</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-3 col-span-2">
                        <p className="text-xl font-bold text-brand-300">+{finalXP}</p>
                        <p className="text-xs text-gray-400">XP Earned</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="primary" className="gap-2" onClick={startQuiz}>
                        <RotateCcw className="w-4 h-4" /> Retry
                    </Button>
                    {onExit && (
                        <Button variant="outline" className="gap-2" onClick={onExit}>
                            <ArrowLeft className="w-4 h-4" /> Back to Practice
                        </Button>
                    )}
                </div>
            </Card>
        );
    }

    return null;
}
