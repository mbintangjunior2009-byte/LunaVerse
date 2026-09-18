import React from 'react';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getLanguageConfig } from '@/data/languageConfig';
import { getLanguageCurriculum } from '@/data/languageCurriculum';
import { loadLanguageProgress } from '@/lib/languageProgress';
import LanguageHeader from '@/Components/language/LanguageHeader';
import ProgressCard from '@/Components/language/ProgressCard';
import { Card } from '@/Components/ui/Card';
import { TrendingUp, Clock, Target, Flame, Award, BookOpen, Headphones, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const maxXp = 200;

const calculateStats = (progress, totalLessons) => {
    const completedLessons    = progress.completed.length;
    const overallProgress     = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    const vocabularyLearned   = completedLessons * 15;
    const kanjiLearned        = completedLessons * 5;
    const grammarCompletion   = Math.min(100, overallProgress + 10);
    const listeningCompletion = Math.min(100, overallProgress - 5);
    const readingCompletion   = Math.min(100, overallProgress - 10);
    const studyTime           = completedLessons * 45;
    const accuracy            = 92 + Math.floor(Math.random() * 6);
    const currentStreak       = Math.min(30, completedLessons + 5);
    let estimatedLevel        = 'beginner';
    if (overallProgress >= 80) estimatedLevel = 'advanced';
    else if (overallProgress >= 50) estimatedLevel = 'intermediate';
    return { overallProgress, completedLessons, totalLessons, vocabularyLearned, kanjiLearned,
             grammarCompletion, listeningCompletion, readingCompletion, studyTime, accuracy,
             currentStreak, estimatedLevel, totalXP: progress.xp };
};

export default function LanguageProgress({ languageId }) {
    const { t } = useTranslation();
    const config     = getLanguageConfig(languageId);
    const curriculum = getLanguageCurriculum(languageId);
    const progress   = loadLanguageProgress(languageId);
    const totalLessons = curriculum.reduce((acc, cat) => acc + cat.lessons.length, 0);
    const stats        = calculateStats(progress, totalLessons);

    const weekly = [
        { day: t('days.mon'), xp: 120 },
        { day: t('days.tue'), xp: 80  },
        { day: t('days.wed'), xp: 150 },
        { day: t('days.thu'), xp: 95  },
        { day: t('days.fri'), xp: 200 },
        { day: t('days.sat'), xp: 60  },
        { day: t('days.sun'), xp: 140 },
    ];
    const weeklyMax = Math.max(...weekly.map((d) => d.xp));

    const formatTime = (minutes) => {
        if (minutes < 60) return `${minutes}${t('common.minutes')}`;
        const hours = Math.floor(minutes / 60);
        const mins  = minutes % 60;
        return mins > 0 ? `${hours}${t('common.hours')} ${mins}${t('common.minutes')}` : `${hours}${t('common.hours')}`;
    };

    const skillRows = [
        { label: t('sections.vocabulary'),  value: Math.min(100, stats.overallProgress + 15), color: 'brand' },
        { label: t('stats.grammar'),         value: stats.grammarCompletion,                   color: 'blue'  },
        { label: t('stats.listening'),       value: stats.listeningCompletion,                  color: 'orange'},
        { label: t('stats.reading'),         value: stats.readingCompletion,                    color: 'emerald'},
    ];

    return (
        <DashboardLayout>
            <Head title={`${config.name} - ${t('sections.progress')}`} />

            <LanguageHeader languageId={languageId} />

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-brand-300" />
                    {t('sections.progress')}
                </h1>
                <p className="text-gray-400 mt-2">{t('language.progressDesc', { name: config.name })}</p>
            </div>

            {/* Main stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                    { label: t('stats.overallProgress'),   value: stats.overallProgress,     icon: CheckCircle2, color: 'brand',   showProgress: true, percentage: stats.overallProgress },
                    { label: t('stats.lessonsCompleted'),  value: stats.completedLessons,    total: stats.totalLessons, icon: BookOpen, color: 'brand' },
                    { label: t('stats.vocabularyLearned'), value: stats.vocabularyLearned,   icon: BookOpen,  color: 'brand' },
                    { label: t('stats.charactersLearned'), value: stats.kanjiLearned,        icon: Award,     color: 'brand' },
                ].map(({ label, value, total, icon, color, showProgress, percentage }, i) => (
                    <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (i + 1) }}>
                        <ProgressCard label={label} value={value} total={total} icon={icon} color={color} showProgress={showProgress} percentage={percentage} />
                    </motion.div>
                ))}
            </div>

            {/* Skill stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                    { label: t('stats.grammar'),   value: stats.grammarCompletion,   icon: MessageSquare, color: 'blue',    showProgress: true, percentage: stats.grammarCompletion },
                    { label: t('stats.listening'), value: stats.listeningCompletion, icon: Headphones,    color: 'orange',  showProgress: true, percentage: stats.listeningCompletion },
                    { label: t('stats.reading'),   value: stats.readingCompletion,   icon: Target,        color: 'emerald', showProgress: true, percentage: stats.readingCompletion },
                    { label: t('stats.studyTime'), value: formatTime(stats.studyTime), icon: Clock,       color: 'brand' },
                ].map(({ label, value, icon, color, showProgress, percentage }, i) => (
                    <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (i + 5) }}>
                        <ProgressCard label={label} value={value} icon={icon} color={color} showProgress={showProgress} percentage={percentage} />
                    </motion.div>
                ))}
            </div>

            {/* Tertiary stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                    { label: t('stats.accuracy'),       value: stats.accuracy,                          icon: Target,  color: 'emerald' },
                    { label: t('stats.currentStreak'),  value: stats.currentStreak,                     icon: Flame,   color: 'orange'  },
                    { label: t('stats.totalXP'),        value: stats.totalXP.toLocaleString(),          icon: Award,   color: 'brand'   },
                    { label: t('stats.estimatedLevel'), value: t(`levels.${stats.estimatedLevel}`),     icon: Award,   color: 'yellow'  },
                ].map(({ label, value, icon, color }, i) => (
                    <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * (i + 9) }}>
                        <ProgressCard label={label} value={value} icon={icon} color={color} />
                    </motion.div>
                ))}
            </div>

            {/* Weekly XP chart */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}>
                <Card className="p-6 mb-6">
                    <h2 className="text-xl font-bold mb-6">{t('sections.weeklyXP')}</h2>
                    <div className="flex items-end justify-between gap-2 h-40">
                        {weekly.map((d, i) => (
                            <motion.div
                                key={d.day}
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 + i * 0.1 }}
                                className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
                            >
                                <div
                                    className="w-full rounded-t-lg bg-gradient-to-t from-brand-700 to-brand-300 min-h-[8px] hover:from-brand-600 hover:to-brand-200 transition-all cursor-pointer"
                                    style={{ height: `${(d.xp / weeklyMax) * 100}%` }}
                                    title={`${d.xp} XP`}
                                />
                                <span className="text-xs text-gray-500">{d.day}</span>
                            </motion.div>
                        ))}
                    </div>
                </Card>
            </motion.div>

            {/* Skill breakdown */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4">{t('sections.skillBreakdown')}</h2>
                    {skillRows.map((skill, i) => (
                        <motion.div key={skill.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6 + i * 0.1 }} className="mb-4 last:mb-0">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-300">{skill.label}</span>
                                <span className="font-bold">{skill.value}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full bg-${skill.color}-500 rounded-full`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.value}%` }}
                                    transition={{ delay: 1.8 + i * 0.1, duration: 0.8 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </Card>
            </motion.div>
        </DashboardLayout>
    );
}
