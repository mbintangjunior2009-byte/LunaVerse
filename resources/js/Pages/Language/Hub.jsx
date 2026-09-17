import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getLanguageConfig } from '@/data/languageConfig';
import { getLanguageCurriculum } from '@/data/languageCurriculum';
import { loadLanguageProgress } from '@/lib/languageProgress';
import LanguageHeader from '@/Components/language/LanguageHeader';
import StudyCard from '@/Components/language/StudyCard';
import PracticeCard from '@/Components/language/PracticeCard';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { Play, TrendingUp, BookOpen, Flame, Award, Target, Zap } from 'lucide-react';

/**
 * Dynamic Language Hub Page
 * Works for any supported language
 */
export default function LanguageHub({ languageId }) {
    const config = getLanguageConfig(languageId);
    const curriculum = getLanguageCurriculum(languageId);
    const progress = loadLanguageProgress(languageId);

    const totalLessons = curriculum.reduce((acc, cat) => acc + cat.lessons.length, 0);
    const completedLessons = progress.completed.length;
    const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    // Calculate current level based on progress
    const currentLevelIndex = config.levels.findIndex((level, index) => {
        const levelProgress = ((index + 1) / config.levels.length) * 100;
        return overallProgress < levelProgress;
    });
    const currentLevel = config.levels[Math.max(0, currentLevelIndex)] || config.levels[0];

    return (
        <DashboardLayout>
            <Head title={`${config.name} - Hub`} />

            <LanguageHeader languageId={languageId} currentSection="hub" />

            {/* Language Banner */}
            <div
                className="relative rounded-2xl p-8 mb-8 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${config.themeColor}22 0%, ${config.themeColor}11 100%)`,
                    border: `1px solid ${config.themeColor}33`
                }}
            >
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-6xl">{config.flag}</span>
                        <div>
                            <h1 className="text-4xl font-bold mb-1">{config.name}</h1>
                            <p className="text-lg text-gray-300">{config.nativeName}</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6 mt-6">
                        <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-brand-300" />
                            <span className="text-gray-300">Level: <span className="text-white font-bold">{currentLevel.name}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-brand-300" />
                            <span className="text-gray-300">{config.certification.name}: <span className="text-white font-bold">{config.certification.currentLevel}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-brand-300" />
                            <span className="text-gray-300">XP: <span className="text-white font-bold">{progress.xp.toLocaleString()}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Flame className="w-5 h-5 text-orange-300" />
                            <span className="text-gray-300">Streak: <span className="text-white font-bold">5 days</span></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Link href={`/languages/${languageId}/study`}>
                    <Card className="p-5 hover:border-brand-500/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-brand-300" />
                            </div>
                            <span className="font-bold">Study</span>
                        </div>
                        <p className="text-sm text-gray-400">Continue learning</p>
                    </Card>
                </Link>

                <Link href={`/languages/${languageId}/practice`}>
                    <Card className="p-5 hover:border-brand-500/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                <Play className="w-5 h-5 text-emerald-300" />
                            </div>
                            <span className="font-bold">Practice</span>
                        </div>
                        <p className="text-sm text-gray-400">Test your skills</p>
                    </Card>
                </Link>

                <Link href={`/languages/${languageId}/progress`}>
                    <Card className="p-5 hover:border-brand-500/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-blue-300" />
                            </div>
                            <span className="font-bold">Progress</span>
                        </div>
                        <p className="text-sm text-gray-400">View statistics</p>
                    </Card>
                </Link>

                <Link href={`/languages/${languageId}/achievements`}>
                    <Card className="p-5 hover:border-brand-500/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                                <Award className="w-5 h-5 text-yellow-300" />
                            </div>
                            <span className="font-bold">Achievements</span>
                        </div>
                        <p className="text-sm text-gray-400">View badges</p>
                    </Card>
                </Link>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card className="p-5">
                    <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-brand-300" /> Overall Progress
                    </p>
                    <p className="text-3xl font-bold">{overallProgress}%</p>
                    <div className="mt-2 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                                width: `${overallProgress}%`,
                                backgroundColor: config.themeColor
                            }}
                        />
                    </div>
                </Card>

                <Card className="p-5">
                    <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                        <Play className="w-3.5 h-3.5 text-brand-300" /> Lessons Completed
                    </p>
                    <p className="text-3xl font-bold">{completedLessons}<span className="text-lg text-gray-500">/{totalLessons}</span></p>
                </Card>

                <Card className="p-5">
                    <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-orange-300" /> Total XP
                    </p>
                    <p className="text-3xl font-bold text-brand-300">{progress.xp.toLocaleString()}</p>
                </Card>

                <Card className="p-5">
                    <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-300" /> Current Streak
                    </p>
                    <p className="text-3xl font-bold text-orange-300">5<span className="text-lg text-gray-500"> days</span></p>
                </Card>
            </div>

            {/* Study Categories */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Study</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {config.studyCategories.map((category, index) => {
                        const categoryLessons = category.lessons?.length || 0;
                        const categoryCompleted = progress.completed.filter(l => l.startsWith(category.id)).length;
                        const categoryProgress = categoryLessons > 0 ? Math.round((categoryCompleted / categoryLessons) * 100) : 0;

                        return (
                            <StudyCard
                                key={category.id}
                                languageId={languageId}
                                category={category}
                                // href intentionally omitted — StudyCard default:
                                //   /languages/{languageId}/study/{category.id}
                                // which now resolves to the StudyCategory overview page.
                                status={index === 0 ? 'available' : index <= completedLessons ? 'available' : 'locked'}
                                progress={categoryProgress}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Practice Categories */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Practice</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {config.practiceCategories.map((category) => (
                        <PracticeCard
                            key={category.id}
                            languageId={languageId}
                            category={category}
                            status="available"
                            questionCount={category.questions}
                        />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
