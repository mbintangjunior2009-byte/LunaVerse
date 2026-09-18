import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, InteractiveCard } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { Play, Flame, Target } from 'lucide-react';
import { getAllLanguages } from '@/data/languageConfig';
import { loadLanguageProgress } from '@/lib/languageProgress';
import { getTotalLessonCount } from '@/data/languageCurriculum';

export default function Languages() {
    const { t } = useTranslation();
    const languages = getAllLanguages();

    const languagesWithProgress = languages.map((lang) => {
        const progress        = loadLanguageProgress(lang.id);
        const totalLessons    = getTotalLessonCount(lang.id);
        const completedLessons = progress.completed.length;
        const progressPercent  = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
        const levelIndex       = Math.floor(progressPercent / 33.33);
        const levelKeys        = ['beginner', 'intermediate', 'advanced'];
        const estimatedLevel   = progressPercent > 0 ? t(`levels.${levelKeys[Math.min(levelIndex, 2)]}`) : t('levels.notStarted');
        return { ...lang, level: estimatedLevel, progress: progressPercent, xp: progress.xp || 0, enrolled: progressPercent > 0 };
    });

    return (
        <DashboardLayout>
            <Head title={t('nav.languages')} />

            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">{t('nav.dashboard')}</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">{t('nav.languages')}</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl font-bold">{t('nav.languages')}</h1>
                <p className="text-gray-400 mt-2">{t('dashboard.chooseLanguage')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {languagesWithProgress.map((lang) => (
                    <Link key={lang.id} href={`/languages/${lang.id}`}>
                        <InteractiveCard className="h-full">
                            <div className="relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10"
                                    style={{ background: `linear-gradient(135deg, ${lang.themeColor} 0%, transparent 50%)`, filter: 'blur(20px)' }} />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <span className="text-5xl">{lang.flag}</span>
                                            <div>
                                                <h3 className="text-2xl font-bold">{lang.name}</h3>
                                                <p className="text-sm text-brand-300">{lang.nativeName}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Target className="w-4 h-4 text-brand-300" />
                                                <span className="text-xs text-gray-400">{t('stats.level')}</span>
                                            </div>
                                            <p className="font-bold">{lang.level}</p>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Flame className="w-4 h-4 text-orange-300" />
                                                <span className="text-xs text-gray-400">{t('stats.totalXP')}</span>
                                            </div>
                                            <p className="font-bold">{lang.xp.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">
                                                {lang.enrolled ? t('dashboard.courseProgress') : t('dashboard.startLearningLabel')}
                                            </span>
                                            <span className="font-bold">{lang.progress}%</span>
                                        </div>
                                        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full rounded-full transition-all duration-300 shadow-lg"
                                                style={{ width: `${lang.progress}%`, backgroundColor: lang.themeColor, boxShadow: `0 0 20px ${lang.themeColor}40` }} />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <Button variant={lang.enrolled ? 'primary' : 'outline'} size="sm" className="w-full gap-2">
                                            {lang.enrolled ? <><Play className="w-4 h-4" /> {t('buttons.continueLearning')}</> : <>{t('buttons.startLearning')}</>}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </InteractiveCard>
                    </Link>
                ))}
            </div>
        </DashboardLayout>
    );
}
