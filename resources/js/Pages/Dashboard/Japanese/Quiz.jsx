import React, { useMemo, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Clock, Coins, Signal, Sparkles, HelpCircle } from 'lucide-react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { getQuizById } from '@/data/japaneseQuizzes';
import { markQuizComplete } from '@/lib/japaneseQuizProgress';
import JapaneseStudyBreadcrumb from '@/Components/japanese/JapaneseStudyBreadcrumb';
import QuizQuestion from '@/Components/japanese/QuizQuestion';
import QuizResults from '@/Components/japanese/QuizResults';

export default function Quiz({ quizId }) {
    const quiz = getQuizById(quizId);
    const [started, setStarted] = useState(false);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [locked, setLocked] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [finished, setFinished] = useState(false);

    const score = useMemo(
        () => answers.filter((entry) => entry.isCorrect).length,
        [answers]
    );

    const earnedXp = useMemo(() => {
        if (!quiz || !finished) return 0;
        const ratio = quiz.questions.length ? score / quiz.questions.length : 0;
        return Math.round(quiz.xpReward * ratio);
    }, [quiz, score, finished]);

    const earnedCoins = useMemo(() => {
        if (!quiz || !finished) return 0;
        const ratio = quiz.questions.length ? score / quiz.questions.length : 0;
        return Math.round(quiz.coinsReward * ratio);
    }, [quiz, score, finished]);

    if (!quiz) {
        return (
            <DashboardLayout>
                <Head title="Quiz not found" />
                <JapaneseStudyBreadcrumb current="Practice" section="practice" />
                <Card className="p-8 text-center">
                    <h1 className="text-2xl font-bold mb-2">Quiz not found</h1>
                    <p className="text-gray-400 mb-6">This practice quiz does not exist.</p>
                    <Button variant="primary" onClick={() => router.visit('/language/japanese/practice')}>
                        Back to Practice
                    </Button>
                </Card>
            </DashboardLayout>
        );
    }

    const question = quiz.questions[index];
    const total = quiz.questions.length;

    const resetQuiz = () => {
        setStarted(true);
        setIndex(0);
        setSelected(null);
        setLocked(false);
        setAnswers([]);
        setFinished(false);
    };

    const confirmAnswer = () => {
        if (selected === null || locked) return;
        const isCorrect = selected === question.answer;
        const nextAnswers = [...answers, { selected, isCorrect }];
        setAnswers(nextAnswers);
        setLocked(true);

        window.setTimeout(() => {
            if (index + 1 >= total) {
                markQuizComplete(quiz.id, nextAnswers.filter((a) => a.isCorrect).length, total);
                setFinished(true);
                return;
            }
            setIndex((value) => value + 1);
            setSelected(null);
            setLocked(false);
        }, 650);
    };

    return (
        <DashboardLayout>
            <Head title={`${quiz.title} · Practice`} />
            <JapaneseStudyBreadcrumb lessonTitle={quiz.title} section="practice" />

            {!started && !finished && (
                <Card className="p-6 md:p-8">
                    <p className="text-sm text-brand-300 mb-2">{quiz.categoryTitle}</p>
                    <h1 className="text-3xl font-bold mb-3">{quiz.title}</h1>
                    <p className="text-gray-400 mb-6 max-w-2xl">{quiz.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                        <Meta icon={Signal} label="Difficulty" value={quiz.difficulty} />
                        <Meta icon={HelpCircle} label="Questions" value={String(quiz.questionCount)} />
                        <Meta icon={Clock} label="Time" value={quiz.estimatedTime} />
                        <Meta icon={Sparkles} label="XP Reward" value={String(quiz.xpReward)} />
                        <Meta icon={Coins} label="Coins" value={String(quiz.coinsReward)} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="primary" onClick={resetQuiz}>Start Quiz</Button>
                        <Link href="/language/japanese/practice">
                            <Button variant="outline" className="w-full sm:w-auto">Back to Practice</Button>
                        </Link>
                    </div>
                </Card>
            )}

            {started && !finished && (
                <Card className="p-6 md:p-8">
                    <QuizQuestion
                        question={question}
                        index={index}
                        total={total}
                        selected={selected}
                        onSelect={setSelected}
                        locked={locked}
                    />
                    <div className="mt-6 flex justify-end">
                        <Button
                            variant="primary"
                            disabled={selected === null || locked}
                            onClick={confirmAnswer}
                        >
                            {index + 1 >= total ? 'Finish' : 'Check Answer'}
                        </Button>
                    </div>
                </Card>
            )}

            {finished && (
                <QuizResults
                    quiz={quiz}
                    score={score}
                    total={total}
                    earnedXp={earnedXp}
                    earnedCoins={earnedCoins}
                    onRetry={resetQuiz}
                />
            )}
        </DashboardLayout>
    );
}

function Meta({ icon: Icon, label, value }) {
    return (
        <div className="rounded-xl bg-white/5 border border-white/10 p-3">
            <p className="text-[11px] text-gray-400 mb-1 inline-flex items-center gap-1">
                <Icon className="w-3.5 h-3.5 text-brand-300" />
                {label}
            </p>
            <p className="font-bold text-sm">{value}</p>
        </div>
    );
}
