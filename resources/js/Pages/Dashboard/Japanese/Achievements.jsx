import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Trophy, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadJapaneseProgress } from '@/lib/japaneseProgress';
import { japaneseCurriculum } from '@/data/japaneseCurriculum';

const achievementDefinitions = [
    { id: 'first_lesson', title: 'First Lesson', desc: 'Complete your first Japanese lesson', icon: '🌱', xpReward: 50, requirement: 'Complete 1 lesson' },
    { id: 'complete_hiragana', title: 'Complete Hiragana', desc: 'Master all Hiragana characters', icon: 'あ', xpReward: 200, requirement: 'Complete Hiragana lessons' },
    { id: 'complete_katakana', title: 'Complete Katakana', desc: 'Master all Katakana characters', icon: 'ア', xpReward: 200, requirement: 'Complete Katakana lessons' },
    { id: 'complete_beginner', title: 'Complete Beginner', desc: 'Finish the entire beginner course', icon: '🎯', xpReward: 500, requirement: 'Complete all beginner lessons' },
    { id: '100_vocabulary', title: '100 Vocabulary', desc: 'Learn 100 Japanese words', icon: '�', xpReward: 150, requirement: 'Learn 100 words' },
    { id: '100_kanji', title: '100 Kanji', desc: 'Learn 100 Kanji characters', icon: '💮', xpReward: 300, requirement: 'Learn 100 Kanji' },
    { id: '30_day_streak', title: '30-Day Streak', desc: 'Study for 30 consecutive days', icon: '🔥', xpReward: 400, requirement: '30 day streak' },
    { id: 'jlpt_n5_ready', title: 'JLPT N5 Ready', desc: 'Reach JLPT N5 proficiency level', icon: '🎓', xpReward: 1000, requirement: 'N5 mastery' },
    { id: 'jlpt_n4_ready', title: 'JLPT N4 Ready', desc: 'Reach JLPT N4 proficiency level', icon: '🏆', xpReward: 2000, requirement: 'N4 mastery' },
];

const calculateAchievementStatus = (progress) => {
    const completedLessons = progress.completed.length;
    const totalLessons = japaneseCurriculum.reduce((acc, cat) => acc + cat.lessons.length, 0);
    const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    const vocabularyLearned = completedLessons * 15;
    const kanjiLearned = completedLessons * 5;
    const currentStreak = Math.min(30, completedLessons + 5);

    return achievementDefinitions.map((achievement) => {
        let unlocked = false;
        let completionPercentage = 0;

        switch (achievement.id) {
            case 'first_lesson':
                unlocked = completedLessons >= 1;
                completionPercentage = Math.min(100, completedLessons * 100);
                break;
            case 'complete_hiragana':
                unlocked = completedLessons >= 5;
                completionPercentage = Math.min(100, (completedLessons / 5) * 100);
                break;
            case 'complete_katakana':
                unlocked = completedLessons >= 10;
                completionPercentage = Math.min(100, (completedLessons / 10) * 100);
                break;
            case 'complete_beginner':
                unlocked = overallProgress >= 50;
                completionPercentage = Math.min(100, overallProgress * 2);
                break;
            case '100_vocabulary':
                unlocked = vocabularyLearned >= 100;
                completionPercentage = Math.min(100, vocabularyLearned);
                break;
            case '100_kanji':
                unlocked = kanjiLearned >= 100;
                completionPercentage = Math.min(100, kanjiLearned);
                break;
            case '30_day_streak':
                unlocked = currentStreak >= 30;
                completionPercentage = Math.min(100, (currentStreak / 30) * 100);
                break;
            case 'jlpt_n5_ready':
                unlocked = overallProgress >= 60;
                completionPercentage = Math.min(100, (overallProgress / 60) * 100);
                break;
            case 'jlpt_n4_ready':
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

export default function Achievements() {
    const progress = loadJapaneseProgress();
    const achievements = calculateAchievementStatus(progress);
    const unlockedCount = achievements.filter((a) => a.unlocked).length;
    const totalXP = achievements.filter((a) => a.unlocked).reduce((acc, a) => acc + a.xpReward, 0);

    return (
        <DashboardLayout>
            <Head title="Japanese Achievements" />

            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">Dashboard</Link>
                <span className="text-gray-600">›</span>
                <Link href="/languages" className="hover:text-brand-300 transition-colors">Languages</Link>
                <span className="text-gray-600">›</span>
                <Link href="/language/japanese" className="hover:text-brand-300 transition-colors">Japanese</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">Achievements</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-brand-300" />
                    Achievements
                </h1>
                <p className="text-gray-400 mt-2">Unlocked badges and milestones for Japanese.</p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> Unlocked
                        </p>
                        <p className="text-3xl font-bold">{unlockedCount}<span className="text-lg text-gray-500">/{achievements.length}</span></p>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> Total XP Earned
                        </p>
                        <p className="text-3xl font-bold text-brand-300">{totalXP.toLocaleString()}</p>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <Lock className="w-3.5 h-3.5 text-gray-400" /> Locked
                        </p>
                        <p className="text-3xl font-bold">{achievements.length - unlockedCount}</p>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            📊 Completion Rate
                        </p>
                        <p className="text-3xl font-bold text-emerald-300">{Math.round((unlockedCount / achievements.length) * 100)}%</p>
                    </Card>
                </motion.div>
            </div>

            {/* Achievement Badges */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                    >
                        <Card
                            className={`p-5 relative overflow-hidden ${
                                achievement.unlocked
                                    ? 'border-brand-500/30 bg-brand-500/5'
                                    : 'opacity-60 border-white/5'
                            }`}
                        >
                            {/* Unlock Animation Overlay */}
                            <AnimatePresence>
                                {achievement.unlocked && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 0.1, scale: 1 }}
                                        className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-emerald-500/20 pointer-events-none"
                                    />
                                )}
                            </AnimatePresence>

                            <div className="relative flex gap-4 items-start">
                                <motion.div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 border ${
                                        achievement.unlocked
                                            ? 'bg-gradient-to-br from-brand-500/20 to-emerald-500/20 border-brand-500/30'
                                            : 'bg-white/5 border-white/10'
                                    }`}
                                    whileHover={achievement.unlocked ? { scale: 1.05, rotate: 5 } : {}}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {achievement.icon}
                                </motion.div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <h3 className={`font-bold text-lg ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`}>
                                            {achievement.title}
                                        </h3>
                                        {achievement.unlocked ? (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: 'spring', stiffness: 200, delay: 0.6 + index * 0.1 }}
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                            </motion.div>
                                        ) : (
                                            <Lock className="w-5 h-5 text-gray-500 shrink-0" />
                                        )}
                                    </div>

                                    <p className="text-sm text-gray-400 mb-2">{achievement.desc}</p>

                                    <div className="flex items-center gap-3 text-xs mb-3">
                                        <span className={`inline-flex items-center gap-1 ${
                                            achievement.unlocked ? 'text-brand-300' : 'text-gray-500'
                                        }`}>
                                            <Sparkles className="w-3 h-3" /> +{achievement.xpReward} XP
                                        </span>
                                        <span className="text-gray-500">•</span>
                                        <span className="text-gray-500">{achievement.requirement}</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mb-1">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-gray-400">Progress</span>
                                            <span className={`font-medium ${achievement.unlocked ? 'text-emerald-300' : 'text-gray-400'}`}>
                                                {achievement.completionPercentage}%
                                            </span>
                                        </div>
                                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full rounded-full ${
                                                    achievement.unlocked
                                                        ? 'bg-gradient-to-r from-emerald-500 to-brand-500'
                                                        : 'bg-gray-600'
                                                }`}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${achievement.completionPercentage}%` }}
                                                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Badge */}
                            <motion.div
                                className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full border ${
                                    achievement.unlocked
                                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                        : 'bg-white/5 text-gray-500 border-white/10'
                                }`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                {achievement.unlocked ? 'Unlocked' : 'Locked'}
                            </motion.div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8">
                <Link href="/language/japanese" className="text-sm text-brand-300 hover:underline">
                    ← Back to Japanese Hub
                </Link>
            </div>
        </DashboardLayout>
    );
}
