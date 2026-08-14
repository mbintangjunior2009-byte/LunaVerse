import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { TrendingUp, Clock, Target, Flame, Award, BookOpen, Headphones, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { loadJapaneseProgress } from '@/lib/japaneseProgress';
import { japaneseCurriculum } from '@/data/japaneseCurriculum';

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

const calculateStats = (progress) => {
    const totalLessons = japaneseCurriculum.reduce((acc, cat) => acc + cat.lessons.length, 0);
    const completedLessons = progress.completed.length;
    const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    
    // Simulated stats based on progress
    const vocabularyLearned = completedLessons * 15;
    const kanjiLearned = completedLessons * 5;
    const grammarCompletion = Math.min(100, overallProgress + 10);
    const listeningCompletion = Math.min(100, overallProgress - 5);
    const readingCompletion = Math.min(100, overallProgress - 10);
    const studyTime = completedLessons * 45; // minutes
    const accuracy = 92 + Math.floor(Math.random() * 6);
    const currentStreak = Math.min(30, completedLessons + 5);
    
    // JLPT Level estimation
    let estimatedJLPT = 'N5';
    if (overallProgress >= 80) estimatedJLPT = 'N4';
    else if (overallProgress >= 60) estimatedJLPT = 'N5 (接近 N4)';
    else if (overallProgress >= 40) estimatedJLPT = 'N5';
    else if (overallProgress >= 20) estimatedJLPT = 'N5 初级';
    else estimatedJLPT = '入门';
    
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
        estimatedJLPT,
        totalXP: progress.xp,
    };
};

export default function Progress() {
    const progress = loadJapaneseProgress();
    const stats = calculateStats(progress);
    
    const formatTime = (minutes) => {
        if (minutes < 60) return `${minutes}m`;
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    };

    return (
        <DashboardLayout>
            <Head title="Japanese Progress" />

            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">Dashboard</Link>
                <span className="text-gray-600">›</span>
                <Link href="/languages" className="hover:text-brand-300 transition-colors">Languages</Link>
                <span className="text-gray-600">›</span>
                <Link href="/language/japanese" className="hover:text-brand-300 transition-colors">Japanese</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">Progress</span>
            </nav>

            <div className="mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-brand-300" />
                    Progress
                </h1>
                <p className="text-gray-400 mt-2">Your Japanese learning statistics.</p>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1">Overall Progress</p>
                        <p className="text-3xl font-bold">{stats.overallProgress}%</p>
                        <div className="mt-2 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-brand-700 to-brand-300 rounded-full transition-all"
                                style={{ width: `${stats.overallProgress}%` }}
                            />
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-300" /> Lessons Completed
                        </p>
                        <p className="text-3xl font-bold">{stats.completedLessons}<span className="text-lg text-gray-500">/{stats.totalLessons}</span></p>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5 text-brand-300" /> Vocabulary Learned
                        </p>
                        <p className="text-3xl font-bold text-brand-300">{stats.vocabularyLearned}</p>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            💮 Kanji Learned
                        </p>
                        <p className="text-3xl font-bold">{stats.kanjiLearned}</p>
                    </Card>
                </motion.div>
            </div>

            {/* Secondary Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <MessageSquare className="w-3.5 h-3.5 text-blue-400" /> Grammar
                        </p>
                        <p className="text-3xl font-bold">{stats.grammarCompletion}%</p>
                        <div className="mt-2 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 rounded-full transition-all"
                                style={{ width: `${stats.grammarCompletion}%` }}
                            />
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <Headphones className="w-3.5 h-3.5 text-orange-400" /> Listening
                        </p>
                        <p className="text-3xl font-bold">{stats.listeningCompletion}%</p>
                        <div className="mt-2 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-orange-500 rounded-full transition-all"
                                style={{ width: `${stats.listeningCompletion}%` }}
                            />
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <Target className="w-3.5 h-3.5 text-emerald-400" /> Reading
                        </p>
                        <p className="text-3xl font-bold">{stats.readingCompletion}%</p>
                        <div className="mt-2 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-emerald-500 rounded-full transition-all"
                                style={{ width: `${stats.readingCompletion}%` }}
                            />
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-brand-300" /> Study Time
                        </p>
                        <p className="text-3xl font-bold">{formatTime(stats.studyTime)}</p>
                    </Card>
                </motion.div>
            </div>

            {/* Tertiary Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <Target className="w-3.5 h-3.5 text-emerald-300" /> Accuracy
                        </p>
                        <p className="text-3xl font-bold text-emerald-300">{stats.accuracy}%</p>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <Flame className="w-3.5 h-3.5 text-orange-300" /> Current Streak
                        </p>
                        <p className="text-3xl font-bold text-orange-300">{stats.currentStreak}<span className="text-lg text-gray-500"> days</span></p>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            <Award className="w-3.5 h-3.5 text-brand-300" /> Total XP
                        </p>
                        <p className="text-3xl font-bold text-brand-300">{stats.totalXP.toLocaleString()}</p>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <Card className="p-5">
                        <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                            🎓 Estimated JLPT
                        </p>
                        <p className="text-3xl font-bold text-yellow-300">{stats.estimatedJLPT}</p>
                    </Card>
                </motion.div>
            </div>

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

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold">Skill Breakdown</h2>
                        <Link href="/language/japanese/study" className="text-sm text-brand-300 hover:underline">
                            Resume study
                        </Link>
                    </div>
                    {[
                        { label: 'Vocabulary', value: Math.min(100, stats.overallProgress + 15), color: 'bg-brand-500' },
                        { label: 'Grammar', value: stats.grammarCompletion, color: 'bg-blue-500' },
                        { label: 'Listening', value: stats.listeningCompletion, color: 'bg-orange-500' },
                        { label: 'Reading', value: stats.readingCompletion, color: 'bg-emerald-500' },
                        { label: 'Kanji', value: Math.min(100, Math.round((stats.kanjiLearned / 100) * 100)), color: 'bg-purple-500' },
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
                                    className={`h-full ${skill.color} rounded-full`}
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
