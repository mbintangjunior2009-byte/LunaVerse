import React, { useEffect, useMemo, useState } from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { BookOpen } from 'lucide-react';
import { japaneseCurriculum, isLessonUnlocked } from '@/data/japaneseCurriculum';
import {
    getLessonProgressPercent,
    loadJapaneseProgress,
} from '@/lib/japaneseProgress';
import JapaneseStudyBreadcrumb from '@/Components/japanese/JapaneseStudyBreadcrumb';
import LessonCategory from '@/Components/japanese/LessonCategory';
import { Card } from '@/Components/ui/Card';

export default function Study() {
    const [progress, setProgress] = useState({ completed: [], lastLessonId: null });

    useEffect(() => {
        setProgress(loadJapaneseProgress());
    }, []);

    const completedIds = progress.completed;

    const overall = useMemo(() => {
        const total = japaneseCurriculum.reduce((sum, category) => sum + category.lessons.length, 0);
        const done = completedIds.length;
        return {
            total,
            done,
            percent: total ? Math.round((done / total) * 100) : 0,
        };
    }, [completedIds]);

    const getStatus = (lessonId) => {
        if (completedIds.includes(lessonId)) return 'completed';
        if (!isLessonUnlocked(lessonId, completedIds)) return 'locked';
        return 'available';
    };

    const getProgress = (lessonId) => {
        if (completedIds.includes(lessonId)) return 100;
        return getLessonProgressPercent(lessonId, completedIds);
    };

    return (
        <DashboardLayout>
            <Head title="Japanese Study" />
            <JapaneseStudyBreadcrumb />

            <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <BookOpen className="w-8 h-8 text-brand-300" />
                        Study
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Collapsible learning paths from Beginner kana through Advanced fluency skills.
                    </p>
                </div>
                <Card className="p-4 min-w-[200px]">
                    <p className="text-xs text-gray-400 mb-1">Overall progress</p>
                    <p className="text-2xl font-bold text-brand-300">{overall.percent}%</p>
                    <p className="text-xs text-gray-500 mt-1">{overall.done} / {overall.total} lessons</p>
                </Card>
            </div>

            <div className="space-y-5">
                {japaneseCurriculum.map((category, index) => (
                    <LessonCategory
                        key={category.id}
                        category={category}
                        completedIds={completedIds}
                        getStatus={getStatus}
                        getProgress={getProgress}
                        defaultOpen={index === 0}
                    />
                ))}
            </div>
        </DashboardLayout>
    );
}
