import React from 'react';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getLanguageConfig } from '@/data/languageConfig';
import { getLanguageCurriculum } from '@/data/languageCurriculum';
import { loadLanguageProgress } from '@/lib/languageProgress';
import LanguageHeader from '@/Components/language/LanguageHeader';
import AchievementCard from '@/Components/language/AchievementCard';
import ProgressCard from '@/Components/language/ProgressCard';
import { Trophy, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const calculateAchievementStatus = (progress, curriculum, achievements) => {
    const completedLessons = progress.completed.length;
    const totalLessons     = curriculum.reduce((acc, cat) => acc + cat.lessons.length, 0);
    const overallProgress  = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    const vocabularyLearned = completedLessons * 15;
    const currentStreak     = Math.min(30, completedLessons + 5);

    return achievements.map((achievement) => {
        let unlocked = false;
        let completionPercentage = 0;
        switch (achievement.id) {
            case 'first_lesson':
                unlocked = completedLessons >= 1;
                completionPercentage = Math.min(100, completedLessons * 100);
                break;
            case 'complete_beginner': case 'master_pinyin': case 'master_hangul':
            case 'grammar_master': case 'subjunctive_master':
                unlocked = overallProgress >= 50;
                completionPercentage = Math.min(100, overallProgress * 2);
                break;
            case '100_vocabulary':
                unlocked = vocabularyLearned >= 100;
                completionPercentage = Math.min(100, vocabularyLearned);
                break;
            case '30_day_streak':
                unlocked = currentStreak >= 30;
                completionPercentage = Math.min(100, (currentStreak / 30) * 100);
                break;
            case 'jlpt_n5_ready': case 'hsk3_ready': case 'topik2_ready': case 'b2_ready':
                unlocked = overallProgress >= 60;
                completionPercentage = Math.min(100, (overallProgress / 60) * 100);
                break;
            case 'jlpt_n4_ready': case 'hsk4_ready': case 'topik3_ready': case 'c1_ready':
                unlocked = overallProgress >= 80;
                completionPercentage = overallProgress >= 80 ? 100 : Math.round((overallProgress / 80) * 100);
                break;
            default:
                completionPercentage = 0;
        }
        return { ...achievement, unlocked, completionPercentage };
    });
};

export default function LanguageAchievements({ languageId }) {
    const { t } = useTranslation();
    const config       = getLanguageConfig(languageId);
    const curriculum   = getLanguageCurriculum(languageId);
    const progress     = loadLanguageProgress(languageId);
    const achievements = calculateAchievementStatus(progress, curriculum, config.achievements);
    const unlockedCount = achievements.filter((a) => a.unlocked).length;
    const totalXP       = achievements.filter((a) => a.unlocked).reduce((acc, a) => acc + a.xpReward, 0);

    return (
        <DashboardLayout>
            <Head title={`${config.name} - ${t('sections.achievements')}`} />

            <LanguageHeader languageId={languageId} />

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-brand-300" />
                    {t('sections.achievements')}
                </h1>
                <p className="text-gray-400 mt-2">{t('language.achievementsDesc', { name: config.name })}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                    { label: t('stats.unlocked'),       value: unlockedCount,              total: achievements.length, icon: CheckCircle2, color: 'emerald', delay: 0.1 },
                    { label: t('stats.totalXPEarned'),  value: totalXP.toLocaleString(),   icon: Sparkles,  color: 'yellow',  delay: 0.2 },
                    { label: t('stats.locked'),         value: achievements.length - unlockedCount, icon: Lock, color: 'brand', delay: 0.3 },
                    { label: t('stats.completionRate'), value: Math.round((unlockedCount / achievements.length) * 100), icon: Trophy, color: 'emerald', delay: 0.4 },
                ].map(({ label, value, total, icon, color, delay }) => (
                    <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
                        <ProgressCard label={label} value={value} total={total} icon={icon} color={color} />
                    </motion.div>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                    <AchievementCard
                        key={achievement.id}
                        achievement={achievement}
                        unlocked={achievement.unlocked}
                        completionPercentage={achievement.completionPercentage}
                        index={index}
                    />
                ))}
            </div>
        </DashboardLayout>
    );
}
