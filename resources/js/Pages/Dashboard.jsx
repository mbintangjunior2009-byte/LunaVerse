import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card, InteractiveCard } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { Flame, Target, Trophy, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAllLanguages } from '@/data/languageConfig';

export default function Dashboard({ auth, backendProgress, languageProgresses }) {
    const { t } = useTranslation();
    const languages = getAllLanguages();

    const languagesWithProgress = languages.map((lang) => {
        const langProgress = languageProgresses?.[lang.id] || { xp: 0, completed_lessons: 0, completion_percentage: 0 };
        const progressPercent = langProgress.completion_percentage || 0;
        const levelIndex  = Math.floor(progressPercent / 33.33);
        const levelKeys   = ['beginner', 'intermediate', 'advanced'];
        const currentLevel = progressPercent > 0 ? t(`levels.${levelKeys[Math.min(levelIndex, 2)]}`) : t('levels.notStarted');
        return { ...lang, progress: progressPercent, xp: langProgress.xp || 0, level: currentLevel };
    });

    const activeLanguages  = languagesWithProgress.filter((l) => l.progress > 0);
    const exploreLanguages = languagesWithProgress.filter((l) => l.progress === 0);
    const primaryLanguage  = activeLanguages[0] || languagesWithProgress[0];

    const stats = [
        { labelKey: 'dashboard.totalXPLabel',  value: backendProgress?.xp || 0,                                icon: Trophy, color: 'text-brand-300',  bg: 'bg-brand-500/10'  },
        { labelKey: 'dashboard.weeklyStreak',   value: t('dashboard.weeklyStreakValue', { count: backendProgress?.streak || 0 }), icon: Flame,  color: 'text-orange-400', bg: 'bg-orange-400/10' },
        { labelKey: 'dashboard.completedLessons', value: t('dashboard.completedLessons', { count: backendProgress?.completed_lessons || 0 }), icon: Target, color: 'text-blue-400',   bg: 'bg-blue-400/10'   },
    ];

    return (
        <DashboardLayout>
            <Head title={t('nav.dashboard')} />

            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <span className="text-brand-300 font-medium">{t('nav.dashboard')}</span>
            </nav>

            {/* Welcome Banner */}
            <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-8 rounded-2xl bg-gradient-to-r from-brand-900/50 to-brand-700/50 border border-brand-500/20 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2">
                        {t('dashboard.welcomeBack', { name: auth.user.name })}
                    </h1>
                    <p className="text-gray-300 mb-4 max-w-lg">
                        {backendProgress?.streak > 0
                            ? t('dashboard.streakMessage', { count: backendProgress.streak })
                            : t('dashboard.startJourney')}
                    </p>
                    <Link href={`/languages/${primaryLanguage.id}`}>
                        <Button variant="primary" className="gap-2">
                            <Play className="w-4 h-4" /> {t('dashboard.continueLang', { name: primaryLanguage.name })}
                        </Button>
                    </Link>
                </div>
                <div className="hidden md:flex relative z-10 text-8xl opacity-80 mix-blend-overlay blur-[2px]">
                    {primaryLanguage.flag}
                </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, i) => (
                    <Card key={i} className="flex items-center gap-4 p-5">
                        <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 font-medium">{t(stat.labelKey)}</p>
                            <h3 className="text-2xl font-bold">{stat.value}</h3>
                        </div>
                    </Card>
                ))}
            </div>

            {/* My Languages */}
            <h2 className="text-xl font-bold mb-4">{t('sections.myLanguages')}</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {activeLanguages.map((lang) => (
                    <Link key={lang.id} href={`/languages/${lang.id}`}>
                        <InteractiveCard className="h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl">{lang.flag}</span>
                                    <div>
                                        <h3 className="text-xl font-bold">{lang.name}</h3>
                                        <p className="text-sm text-brand-300">{lang.level}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-400">{t('stats.totalXP')}</p>
                                    <p className="font-bold">{lang.xp.toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">{t('dashboard.courseProgress')}</span>
                                    <span className="font-bold">{lang.progress}%</span>
                                </div>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full rounded-full transition-all duration-300"
                                        style={{ width: `${lang.progress}%`, backgroundColor: lang.themeColor }} />
                                </div>
                            </div>
                        </InteractiveCard>
                    </Link>
                ))}
            </div>

            {/* Explore More */}
            {exploreLanguages.length > 0 && (
                <>
                    <h2 className="text-xl font-bold mb-4">{t('sections.exploreMore')}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {exploreLanguages.map((lang) => (
                            <Link key={lang.id} href={`/languages/${lang.id}`}>
                                <Card className="p-4 text-center hover:bg-white/10 transition-colors cursor-pointer border-dashed border-white/20">
                                    <span className="text-3xl block mb-2">{lang.flag}</span>
                                    <span className="font-medium">{lang.name}</span>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </DashboardLayout>
    );
}
