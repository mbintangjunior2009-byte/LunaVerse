import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Target } from 'lucide-react';
import { getAllLanguages } from '@/data/languageConfig';
import { loadLanguageProgress } from '@/lib/languageProgress';
import { getTotalLessonCount } from '@/data/languageCurriculum';

export default function Progress() {
    const languages = getAllLanguages();

    // Calculate progress for each language
    const languagesWithProgress = languages.map((lang) => {
        const progress = loadLanguageProgress(lang.id);
        const totalLessons = getTotalLessonCount(lang.id);
        const completedLessons = progress.completed.length;
        const progressPercent = totalLessons > 0
            ? Math.round((completedLessons / totalLessons) * 100)
            : 0;

        return {
            ...lang,
            progress: progressPercent,
            xp: progress.xp || 0,
            goal: '5 lessons / week',
        };
    });

    const totalXP = languagesWithProgress.reduce((sum, lang) => sum + lang.xp, 0);

    return (
        <DashboardLayout>
            <Head title="Progress" />

            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">Dashboard</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">Progress</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Target className="w-8 h-8 text-brand-300" /> Progress
                </h1>
                <p className="text-gray-400 mt-2">See how far you've come and what's next.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <p className="text-sm text-gray-400 mb-1">Total XP</p>
                    <p className="text-3xl font-bold text-brand-300">{totalXP.toLocaleString()}</p>
                </Card>
                <Card>
                    <p className="text-sm text-gray-400 mb-1">Weekly Streak</p>
                    <p className="text-3xl font-bold">14 Days</p>
                </Card>
                <Card>
                    <p className="text-sm text-gray-400 mb-1">Lessons This Week</p>
                    <p className="text-3xl font-bold">3 / 5</p>
                </Card>
            </div>

            <div className="space-y-4">
                {languagesWithProgress.map((lang) => (
                    <Link key={lang.id} href={`/languages/${lang.id}/progress`}>
                        <Card className="hover:bg-white/5 transition-colors mb-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">{lang.flag}</span>
                                    <div>
                                        <h3 className="text-xl font-bold">{lang.name}</h3>
                                        <p className="text-sm text-gray-400">Goal: {lang.goal}</p>
                                    </div>
                                </div>
                                <p className="font-bold">{lang.xp.toLocaleString()} XP</p>
                            </div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">Course Progress</span>
                                <span className="font-bold">{lang.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-300"
                                    style={{
                                        width: `${lang.progress}%`,
                                        backgroundColor: lang.themeColor
                                    }}
                                />
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </DashboardLayout>
    );
}
