import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { getLanguageConfig } from '@/data/languageConfig';
import { getLanguageCurriculum } from '@/data/languageCurriculum';
import { loadLanguageProgress } from '@/lib/languageProgress';
import LanguageHeader from '@/Components/language/LanguageHeader';
import ProgressCard from '@/Components/language/ProgressCard';
import { Card } from '@/Components/ui/Card';
import { TrendingUp, Clock, Target, Flame, Award, BookOpen, Headphones, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const weekly = [
    { day: 'Mon', xp: 120 },
    { day: 'Tue', xp: 80 },
    { day: 'Wed', xp: 150 },
    { day: 'Thu', xp: 95 },
    { day: 'Fri', xp: 200 },
    { day: 'Sat', xp: 60 },
    { day: 'Sun', xp: 140 },
];

const maxXp = Math.max(...weekly.map((d) => d.xp));

const calculateStats = (progress, totalLessons) => {
    const completedLessons = progress.completed.length;
    const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    
    // Simulated stats based on progress
    const vocabularyLearned = completedLessons * 15;
    const kanjiLearned = completedLessons * 5;
    const grammarCompletion = Math.min(100, overallProgress + 10);
    const listeningCompletion = Math.min(100, overallProgress - 5);
    const readingCompletion = Math.min(100, overallProgress - 10);
    const studyTime = completedLessons * 45;
    const accuracy = 92 + Math.floor(Math.random() * 6);
    const currentStreak = Math.min(30, completedLessons + 5);
    
    // Proficiency level estimation based on language
    let estimatedLevel = 'Beginner';
    if (overallProgress >= 80) estimatedLevel = 'Advanced';
    else if (overallProgress >= 50) estimatedLevel = 'Intermediate';
    
    return {
        overallProgress,
        completedLessons,
        totalLessons,
        vocabularyLearned,
        kanjiLearned,
        grammarCompletion,
        listeningCompletion,
        readingCompletion,
        studyTime,
        accuracy,
        currentStreak,
        estimatedLevel,
        totalXP: progress.xp,
    };
};

/**
 * Dynamic Language Progress Page
 * Works for any supported language
 */
export default function LanguageProgress({ languageId }) {
    const config = getLanguageConfig(languageId);
    const curriculum = getLanguageCurriculum(languageId);
    const progress = loadLanguageProgress(languageId);
    const totalLessons = curriculum.reduce((acc, cat) => acc + cat.lessons.length, 0);
    const stats = calculateStats(progress, totalLessons);
    
    const formatTime = (minutes) => {
        if (minutes < 60) return `${minutes}m`;
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    };

    return (
        <DashboardLayout>
            <Head title={`${config.name} - Progress`} />
            
            <LanguageHeader languageId={languageId} currentSection="progress" />

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-brand-300" />
                    Progress
                </h1>
                <p className="text-gray-400 mt-2">Your {config.name} learning statistics.</p>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <ProgressCard
                        label="Overall Progress"
                        value={stats.overallProgress}
                        icon={CheckCircle2}
                        color="brand"
                        showProgress
                        percentage={stats.overallProgress}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <ProgressCard
                        label="Lessons Completed"
                        value={stats.completedLessons}
                        total={stats.totalLessons}
                        icon={BookOpen}
                        color="brand"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <ProgressCard
                        label="Vocabulary Learned"
                        value={stats.vocabularyLearned}
                        icon={BookOpen}
                        color="brand"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <ProgressCard
                        label="Characters Learned"
                        value={stats.kanjiLearned}
                        icon={Award}
                        color="brand"
                    />
                </motion.div>
            </div>

            {/* Secondary Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <ProgressCard
                        label="Grammar"
                        value={stats.grammarCompletion}
                        icon={MessageSquare}
                        color="blue"
                        showProgress
                        percentage={stats.grammarCompletion}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <ProgressCard
                        label="Listening"
                        value={stats.listeningCompletion}
                        icon={Headphones}
                        color="orange"
                        showProgress
                        percentage={stats.listeningCompletion}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <ProgressCard
                        label="Reading"
                        value={stats.readingCompletion}
                        icon={Target}
                        color="emerald"
                        showProgress
                        percentage={stats.readingCompletion}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <ProgressCard
                        label="Study Time"
                        value={formatTime(stats.studyTime)}
                        icon={Clock}
                        color="brand"
                    />
                </motion.div>
            </div>

            {/* Tertiary Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <ProgressCard
                        label="Accuracy"
                        value={stats.accuracy}
                        icon={Target}
                        color="emerald"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                >
                    <ProgressCard
                        label="Current Streak"
                        value={stats.currentStreak}
                        icon={Flame}
                        color="orange"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                >
                    <ProgressCard
                        label="Total XP"
                        value={stats.totalXP.toLocaleString()}
                        icon={Award}
                        color="brand"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <ProgressCard
                        label="Estimated Level"
                        value={stats.estimatedLevel}
                        icon={Award}
                        color="yellow"
                    />
                </motion.div>
            </div>

            {/* Weekly XP Chart */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
            >
                <Card className="p-6 mb-6">
                    <h2 className="text-xl font-bold mb-6">Weekly XP</h2>
                    <div className="flex items-end justify-between gap-2 h-40">
                        {weekly.map((d, index) => (
                            <motion.div
                                key={d.day}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 + index * 0.1 }}
                                className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
                            >
                                <div
                                    className="w-full rounded-t-lg bg-gradient-to-t from-brand-700 to-brand-300 min-h-[8px] hover:from-brand-600 hover:to-brand-200 transition-all cursor-pointer"
                                    style={{ height: `${(d.xp / maxXp) * 100}%` }}
                                    title={`${d.xp} XP`}
                                />
                                <span className="text-xs text-gray-500">{d.day}</span>
                            </motion.div>
                        ))}
                    </div>
                </Card>
            </motion.div>

            {/* Skill Breakdown */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4">Skill Breakdown</h2>
                    {[
                        { label: 'Vocabulary', value: Math.min(100, stats.overallProgress + 15), color: 'brand' },
                        { label: 'Grammar', value: stats.grammarCompletion, color: 'blue' },
                        { label: 'Listening', value: stats.listeningCompletion, color: 'orange' },
                        { label: 'Reading', value: stats.readingCompletion, color: 'emerald' },
                    ].map((skill, index) => (
                        <motion.div
                            key={skill.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6 + index * 0.1 }}
                            className="mb-4 last:mb-0"
                        >
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-300">{skill.label}</span>
                                <span className="font-bold">{skill.value}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full bg-${skill.color}-500 rounded-full`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.value}%` }}
                                    transition={{ delay: 1.8 + index * 0.1, duration: 0.8 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </Card>
            </motion.div>
        </DashboardLayout>
    );
}
