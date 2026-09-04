import React, { useState, useEffect, useCallback } from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getRandomHiraganaQuestions } from '@/data/quizData';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { ArrowLeft, RotateCcw, Trophy, X, Check, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Hiragana Quiz Component
 * Supports: basic-hiragana, dakuten, handakuten, mixed
 */
export default function BasicHiraganaQuiz({ quizType = 'basic-hiragana', standalone = true, onBack }) {
    const [quizState, setQuizState] = useState('intro'); // intro, quiz, result
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [xpEarned, setXPEarned] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    // Quiz configuration
    const quizConfig = {
        'basic-hiragana': {
            title: 'Basic Hiragana Quiz',
            icon: 'あ',
            description: '46 basic Hiragana characters',
            storagePrefix: 'hiragana'
        },
        'dakuten': {
            title: 'Dakuten Quiz',
            icon: 'が',
            description: 'Voiced characters (がぎぐげご, etc.)',
            storagePrefix: 'dakuten'
        },
        'handakuten': {
            title: 'Handakuten Quiz',
            icon: 'ぱ',
            description: 'Semi-voiced characters (ぱぴぷぺぽ)',
            storagePrefix: 'handakuten'
        },
        'mixed': {
            title: 'Mixed Hiragana Challenge',
            icon: '🎯',
            description: 'All Hiragana characters mixed randomly',
            storagePrefix: 'mixed-hiragana'
        }
    };

    const currentConfig = quizConfig[quizType] || quizConfig['basic-hiragana'];

    // Load saved progress
    const [bestScore, setBestScore] = useState(() => {
        const saved = localStorage.getItem(`${currentConfig.storagePrefix}-best-score`);
        return saved ? parseInt(saved) : 0;
    });
    const [attempts, setAttempts] = useState(() => {
        const saved = localStorage.getItem(`${currentConfig.storagePrefix}-attempts`);
        return saved ? parseInt(saved) : 0;
    });
    const [totalXPEarned, setTotalXPEarned] = useState(() => {
        const saved = localStorage.getItem(`${currentConfig.storagePrefix}-total-xp`);
        return saved ? parseInt(saved) : 0;
    });
    const [completionPercent, setCompletionPercent] = useState(() => {
        const saved = localStorage.getItem(`${currentConfig.storagePrefix}-completion`);
        return saved ? parseInt(saved) : 0;
    });

    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const correctAnswers = answers.filter(a => a === true).length;
    const wrongAnswers = answers.filter(a => a === false).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    const accuracy = score;
    const isPerfect = score === 100;

    const startQuiz = useCallback(() => {
        const randomQuestions = getRandomHiraganaQuestions(quizType, 10);
        setQuestions(randomQuestions);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setXPEarned(0);
        setQuizState('quiz');
        setAttempts(prev => prev + 1);
        localStorage.setItem(`${currentConfig.storagePrefix}-attempts`, attempts + 1);
    }, [attempts, currentConfig.storagePrefix, quizType]);

    const handleAnswer = useCallback((answer) => {
        if (showFeedback) return;

        const correct = answer === currentQuestion.answer;
        setSelectedAnswer(answer);
        setIsCorrect(correct);
        setShowFeedback(true);

        // Update answers
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = correct;
        setAnswers(newAnswers);

        // Calculate XP
        let questionXP = 0;
        if (correct) {
            questionXP = 10;
            setXPEarned(prev => prev + questionXP);
        }

        // Auto-continue after 1 second
        setTimeout(() => {
            setShowFeedback(false);
            setSelectedAnswer(null);

            if (isLastQuestion) {
                // Calculate final results
                const finalXP = questionXP + (isPerfect ? 50 : 0);
                setXPEarned(prev => prev + (isPerfect ? 50 : 0));
                
                // Update best score
                if (score > bestScore) {
                    setBestScore(score);
                    localStorage.setItem(`${currentConfig.storagePrefix}-best-score`, score);
                }
                
                // Update total XP
                const newTotalXP = totalXPEarned + finalXP;
                setTotalXPEarned(newTotalXP);
                localStorage.setItem(`${currentConfig.storagePrefix}-total-xp`, newTotalXP);
                
                // Update completion percentage
                const newCompletion = Math.min(100, completionPercent + 10);
                setCompletionPercent(newCompletion);
                localStorage.setItem(`${currentConfig.storagePrefix}-completion`, newCompletion);
                
                setQuizState('result');
            } else {
                setCurrentQuestionIndex(prev => prev + 1);
            }
        }, 1000);
    }, [currentQuestion, currentQuestionIndex, answers, showFeedback, isLastQuestion, bestScore, totalXPEarned, completionPercent, score, isPerfect]);

    const handleRetry = () => {
        setQuizState('intro');
    };

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            setQuizState('intro');
        }
    };

    // Intro screen
    if (quizState === 'intro') {
        const introContent = (
            <>
                <Card className="p-8 text-center">
                    <div className="text-8xl mb-6">{currentConfig.icon}</div>
                    <h1 className="text-3xl font-bold mb-4">{currentConfig.title}</h1>
                    <p className="text-gray-400 mb-8">
                        {currentConfig.description}. 
                        10 random questions per game.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-white/5 rounded-lg p-4">
                            <div className="text-2xl font-bold text-brand-300">{bestScore}%</div>
                            <div className="text-sm text-gray-400">Best Score</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                            <div className="text-2xl font-bold text-brand-300">{completionPercent}%</div>
                            <div className="text-sm text-gray-400">Completion</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                            <div className="text-2xl font-bold text-brand-300">{attempts}</div>
                            <div className="text-sm text-gray-400">Attempts</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                            <div className="text-2xl font-bold text-brand-300">{totalXPEarned}</div>
                            <div className="text-sm text-gray-400">Total XP</div>
                        </div>
                    </div>

                    <Button variant="primary" size="lg" onClick={startQuiz} className="w-full">
                        Start Quiz
                    </Button>
                </Card>
            </>
        );

        if (standalone) {
            return (
                <DashboardLayout>
                    <Head title={currentConfig.title} />
                    <div className="max-w-2xl mx-auto">
                        <Link href="/language/japanese/practice" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-300 transition-colors mb-6">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Practice
                        </Link>
                        {introContent}
                    </div>
                </DashboardLayout>
            );
        }

        return introContent;
    }

    // Quiz screen
    if (quizState === 'quiz') {
        const quizContent = (
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    {standalone ? (
                        <Link href="/language/japanese/practice" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-300 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Exit
                        </Link>
                    ) : (
                        <button onClick={onBack} className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-300 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Exit
                        </button>
                    )}
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-400">
                            Question {currentQuestionIndex + 1} / {questions.length}
                        </div>
                        <div className="text-sm font-bold text-brand-300">
                            +{xpEarned} XP
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full mb-8">
                    <div 
                        className="h-full bg-gradient-to-r from-brand-500 to-brand-300 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    />
                </div>

                {/* Question */}
                <Card className="p-8 mb-6">
                    <div className="text-center">
                        <div className="text-8xl font-bold mb-8">{currentQuestion.question}</div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            {currentQuestion.choices.map((choice, index) => {
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
                                        key={index}
                                        onClick={() => handleAnswer(choice)}
                                        disabled={showFeedback}
                                        className={`
                                            relative p-6 rounded-xl border-2 font-bold text-xl transition-all
                                            ${buttonClass}
                                            ${!showFeedback ? 'hover:scale-[1.02]' : ''}
                                        `}
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            {choice}
                                            {icon}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </Card>

                {/* Feedback */}
                <AnimatePresence>
                    {showFeedback && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={`text-center p-4 rounded-xl ${
                                isCorrect 
                                    ? 'bg-emerald-500/10 border border-emerald-500/30' 
                                    : 'bg-red-500/10 border border-red-500/30'
                            }`}
                        >
                            <div className={`font-bold text-lg ${isCorrect ? 'text-emerald-300' : 'text-red-300'}`}>
                                {isCorrect ? 'Correct!' : 'Incorrect'}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );

        if (standalone) {
            return (
                <DashboardLayout>
                    <Head title={currentConfig.title} />
                    {quizContent}
                </DashboardLayout>
            );
        }

        return quizContent;
    }

    // Result screen
    if (quizState === 'result') {
        const finalXP = xpEarned;

        const resultContent = (
            <Card className="p-8 text-center">
                {isPerfect && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mb-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-4 py-2">
                            <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                            <span className="font-bold text-yellow-300">Perfect Score!</span>
                        </div>
                    </motion.div>
                )}

                <div className="text-6xl font-bold mb-2">{score}%</div>
                <div className="text-gray-400 mb-8">Final Score</div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-emerald-300">{correctAnswers}</div>
                        <div className="text-sm text-gray-400">Correct</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-red-300">{wrongAnswers}</div>
                        <div className="text-sm text-gray-400">Wrong</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-brand-300">{accuracy}%</div>
                        <div className="text-sm text-gray-400">Accuracy</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-brand-300">+{finalXP}</div>
                        <div className="text-sm text-gray-400">XP Earned</div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button variant="outline" onClick={handleBack} className="flex-1 gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </Button>
                    <Button variant="primary" onClick={handleRetry} className="flex-1 gap-2">
                        <RotateCcw className="w-4 h-4" />
                        Retry
                    </Button>
                </div>
            </Card>
        );

        if (standalone) {
            return (
                <DashboardLayout>
                    <Head title="Quiz Results" />
                    <div className="max-w-2xl mx-auto">
                        {resultContent}
                    </div>
                </DashboardLayout>
            );
        }

        return resultContent;
    }
}
