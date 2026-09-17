import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getLanguageConfig } from '@/data/languageConfig';
import { loadLanguageProgress } from '@/lib/languageProgress';
import LanguageHeader from '@/Components/language/LanguageHeader';
import LessonCard from '@/Components/language/LessonCard';
import { Card } from '@/Components/ui/Card';
import { BookOpen, Clock, Signal } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Dynamic Language Study Page
 * Works for any supported language
 */
export default function LanguageStudy({ languageId }) {
    const config = getLanguageConfig(languageId);
    const progress = loadLanguageProgress(languageId);

    return (
        <DashboardLayout>
            <Head title={`${config.name} - Study`} />

            <LanguageHeader languageId={languageId} currentSection="study" />

            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Study Lessons</h1>
                <p className="text-gray-400">Master {config.name} step by step with structured lessons.</p>
            </div>

            {config.studyCategories.map((category) => {
                const categoryLessons = category.lessons || [];
                const categoryCompleted = categoryLessons.filter((lesson) =>
                    progress.completed.includes(lesson.id)
                ).length;
                const categoryProgress = categoryLessons.length > 0 ? Math.round((categoryCompleted / categoryLessons.length) * 100) : 0;

                return (
                    <div key={category.id} className="mb-8">
                        <Card className="p-6 mb-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl border border-white/10 bg-white/5">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold mb-1">{category.name}</h2>
                                        <p className="text-sm text-gray-400">{category.description}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold">{categoryProgress}%</p>
                                    <p className="text-xs text-gray-400">{categoryCompleted}/{categoryLessons.length} lessons</p>
                                </div>
                            </div>
                            <div className="mt-3 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-300"
                                    style={{
                                        width: `${categoryProgress}%`,
                                        backgroundColor: config.themeColor
                                    }}
                                />
                            </div>
                        </Card>

                        {categoryLessons.length > 0 ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {categoryLessons.map((lesson, index) => {
                                    const isCompleted = progress.completed.includes(lesson.id);
                                    const isUnlocked = index === 0 || progress.completed.includes(categoryLessons[index - 1].id);
                                    const lessonProgress = isCompleted ? 100 : isUnlocked ? 0 : 0;

                                    return (
                                        <Link key={lesson.id} href={`/languages/${languageId}/study/${lesson.id}`} className="block">
                                            <Card className={cn(
                                                'p-5 border transition-all hover:scale-[1.02] cursor-pointer',
                                                isUnlocked ? 'border-white/10 hover:border-brand-500/40' : 'border-white/5 opacity-60'
                                            )}>
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex-1">
                                                        <h3 className="font-bold mb-1">{lesson.title}</h3>
                                                        <div className="flex items-center gap-3 text-xs text-gray-400">
                                                            <span className="inline-flex items-center gap-1">
                                                                <Signal className="w-3 h-3" />
                                                                {lesson.difficulty}
                                                            </span>
                                                            <span className="inline-flex items-center gap-1">
                                                                <Clock className="w-3 h-3" />
                                                                {lesson.time}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {isCompleted && (
                                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex-1 mr-4">
                                                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                            <div
                                                                className={cn('h-full rounded-full', isCompleted ? 'bg-emerald-400' : 'bg-brand-500')}
                                                                style={{ width: `${lessonProgress}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className={cn(
                                                        'text-xs font-medium px-2 py-1 rounded-full',
                                                        isCompleted ? 'text-emerald-300 bg-emerald-500/10' :
                                                            isUnlocked ? 'text-brand-300 bg-brand-500/10' : 'text-gray-400 bg-white/5'
                                                    )}>
                                                        {isCompleted ? 'Completed' : isUnlocked ? 'Continue' : 'Locked'}
                                                    </span>
                                                </div>
                                            </Card>
                                        </Link>
                                    );
                                })}
                            </div>
                        ) : (
                            <Card className="p-8 text-center border-dashed border-white/20">
                                <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                                <p className="text-gray-400">Lessons coming soon</p>
                            </Card>
                        )}
                    </div>
                );
            })}
        </DashboardLayout>
    );
}
