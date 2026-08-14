import React from 'react';
import { Head } from '@inertiajs/react';
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
    const totalLessons = curriculum.reduce((acc, cat) => acc + cat.lessons.length, 0);
    const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    const vocabularyLearned = completedLessons * 15;
    const currentStreak = Math.min(30, completedLessons + 5);

    return achievements.map((achievement) => {
        let unlocked = false;
        let completionPercentage = 0;

        switch (achievement.id) {
            case 'first_lesson':
                unlocked = completedLessons >= 1;
                completionPercentage = Math.min(100, completedLessons * 100);
                break;
            case 'complete_beginner':
            case 'master_pinyin':
            case 'master_hangul':
            case 'grammar_master':
            case 'subjunctive_master':
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
            case 'jlpt_n5_ready':
            case 'hsk3_ready':
            case 'topik2_ready':
            case 'b2_ready':
                unlocked = overallProgress >= 60;
                completionPercentage = Math.min(100, (overallProgress / 60) * 100);
                break;
            case 'jlpt_n4_ready':
            case 'hsk4_ready':
            case 'topik3_ready':
            case 'c1_ready':
                unlocked = overallProgress >= 80;
                completionPercentage = overallProgress >= 80 ? 100 : Math.round((overallProgress / 80) * 100);
                break;
            default:
                completionPercentage = 0;
        }

        return {
            ...achievement,
            unlocked,
            completionPercentage,
        };
    });
};

/**
 * Dynamic Language Achievements Page
 * Works for any supported language
 */
export default function LanguageAchievements({ languageId }) {
    const config = getLanguageConfig(languageId);
    const curriculum = getLanguageCurriculum(languageId);
    const progress = loadLanguageProgress(languageId);
    const achievements = calculateAchievementStatus(progress, curriculum, config.achievements);
    const unlockedCount = achievements.filter((a) => a.unlocked).length;
    const totalXP = achievements.filter((a) => a.unlocked).reduce((acc, a) => acc + a.xpReward, 0);

    return (
        <DashboardLayout>
            <Head title={`${config.name} - Achievements`} />
            
            <LanguageHeader languageId={languageId} currentSection="achievements" />

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-brand-300" />
                    Achievements
                </h1>
                <p className="text-gray-400 mt-2">Unlocked badges and milestones for {config.name}.</p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <ProgressCard
                        label="Unlocked"
                        value={unlockedCount}
                        total={achievements.length}
                        icon={CheckCircle2}
                        color="emerald"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <ProgressCard
                        label="Total XP Earned"
                        value={totalXP.toLocaleString()}
                        icon={Sparkles}
                        color="yellow"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <ProgressCard
                        label="Locked"
                        value={achievements.length - unlockedCount}
                        icon={Lock}
                        color="brand"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <ProgressCard
                        label="Completion Rate"
                        value={Math.round((unlockedCount / achievements.length) * 100)}
                        icon={Trophy}
                        color="emerald"
                    />
                </motion.div>
            </div>

            {/* Achievement Badges */}
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
