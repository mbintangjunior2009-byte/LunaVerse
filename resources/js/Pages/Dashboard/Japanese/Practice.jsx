import React, { useEffect, useMemo, useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Gamepad2 } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { japaneseQuizzes } from '@/data/japaneseQuizzes';
import { loadJapaneseQuizProgress } from '@/lib/japaneseQuizProgress';
import JapaneseStudyBreadcrumb from '@/Components/japanese/JapaneseStudyBreadcrumb';
import QuizCategory from '@/Components/japanese/QuizCategory';
import HiraganaQuizModal from '@/Components/japanese/HiraganaQuizModal';
import QuizEngine from '@/Components/japanese/QuizEngine';

export default function Practice() {
    const [progress, setProgress] = useState({ completed: {}, bestScores: {} });
    const [hiraganaModalOpen, setHiraganaModalOpen] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    useEffect(() => {
        setProgress(loadJapaneseQuizProgress());
    }, []);

    const overall = useMemo(() => {
        const total = japaneseQuizzes.reduce((sum, category) => sum + category.quizzes.length, 0);
        const done = Object.keys(progress.completed || {}).length;
        return {
            total,
            done,
            percent: total ? Math.round((done / total) * 100) : 0,
        };
    }, [progress]);

    const handleHiraganaPlay = () => {
        setHiraganaModalOpen(true);
    };

    const handleHiraganaSelect = (quizType) => {
        setHiraganaModalOpen(false);
        setSelectedQuiz(quizType);
    };

    const handleExitQuiz = () => {
        setSelectedQuiz(null);
    };

    return (
        <DashboardLayout>
            <Head title="Japanese Practice" />
            <JapaneseStudyBreadcrumb current="Practice" section="practice" />

            <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Gamepad2 className="w-8 h-8 text-brand-300" />
                        Practice
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Quizzes for Beginner, Intermediate, and Advanced Japanese skills.
                    </p>
                </div>
                {!selectedQuiz && (
                    <Card className="p-4 min-w-[200px]">
                        <p className="text-xs text-gray-400 mb-1">Quizzes completed</p>
                        <p className="text-2xl font-bold text-brand-300">{overall.percent}%</p>
                        <p className="text-xs text-gray-500 mt-1">{overall.done} / {overall.total} quizzes</p>
                    </Card>
                )}
            </div>

            {selectedQuiz ? (
                <QuizEngine
                    quizType={selectedQuiz}
                    autoStart
                    onExit={handleExitQuiz}
                />
            ) : (
                <div className="space-y-5">
                    {japaneseQuizzes.map((category, index) => (
                        <QuizCategory
                            key={category.id}
                            category={category}
                            progress={progress}
                            defaultOpen={index === 0}
                            onQuizPlay={(quiz) => {
                                if (quiz.id === 'beginner-hiragana') {
                                    handleHiraganaPlay();
                                }
                            }}
                        />
                    ))}
                </div>
            )}

            <HiraganaQuizModal
                open={hiraganaModalOpen}
                onClose={() => setHiraganaModalOpen(false)}
                onSelect={handleHiraganaSelect}
            />
        </DashboardLayout>
    );
}
