import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import {
    BookOpen,
    Gamepad2,
    TrendingUp,
    Trophy,
    Flame,
    Star,
    Zap,
    Award,
    ChevronRight,
    Play,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const hubCards = [
    {
        title: 'Study',
        description: 'Learn theory and lesson materials.',
        icon: BookOpen,
        emoji: '📚',
        href: '/languages/japanese/study',
        accent: 'from-brand-700/40 to-brand-500/10',
        iconColor: 'text-brand-300',
        iconBg: 'bg-brand-500/15 border-brand-500/30',
    },
    {
        title: 'Practice',
        description: 'Interactive quizzes and exercises.',
        icon: Gamepad2,
        emoji: '🎮',
        href: '/languages/japanese/practice',
        accent: 'from-blue-600/30 to-brand-500/10',
        iconColor: 'text-blue-300',
        iconBg: 'bg-blue-500/15 border-blue-500/30',
    },
    {
        title: 'Progress',
        description: 'View learning statistics.',
        icon: TrendingUp,
        emoji: '📈',
        href: '/languages/japanese/progress',
        accent: 'from-emerald-600/30 to-brand-500/10',
        iconColor: 'text-emerald-300',
        iconBg: 'bg-emerald-500/15 border-emerald-500/30',
    },
    {
        title: 'Achievements',
        description: 'View unlocked badges and milestones.',
        icon: Trophy,
        emoji: '🏆',
        href: '/languages/japanese/achievements',
        accent: 'from-amber-500/30 to-brand-500/10',
        iconColor: 'text-amber-300',
        iconBg: 'bg-amber-500/15 border-amber-500/30',
    },
];

const stats = [
    { label: 'Current Level', value: '12', sub: 'Beginner Path', icon: Star, color: 'text-brand-300' },
    { label: 'Current XP', value: '4,250', sub: '750 to Level 13', icon: Zap, color: 'text-yellow-300' },
    { label: 'Current Streak', value: '14', sub: 'Days in a row', icon: Flame, color: 'text-orange-400' },
    { label: 'Estimated JLPT', value: 'N5', sub: 'On track for N4', icon: Award, color: 'text-emerald-300' },
];

function HubCard({ card }) {
    const Icon = card.icon;

    return (
        <Link href={card.href} className="block h-full">
            <motion.div
                whileHover={{ scale: 1.03, y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className={cn(
                    'glass-card relative h-full p-8 cursor-pointer overflow-hidden group',
                    'border border-white/10 hover:border-brand-500/40',
                    'shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(185,95,255,0.25)]'
                )}
            >
                <div className={cn('absolute inset-0 bg-gradient-to-br opacity-80 pointer-events-none', card.accent)} />
                <div className="absolute -right-6 -top-6 text-8xl opacity-[0.07] group-hover:opacity-[0.12] transition-opacity select-none pointer-events-none">
                    {card.emoji}
                </div>

                <div className="relative z-10 flex flex-col h-full min-h-[200px]">
                    <div className={cn('w-14 h-14 rounded-2xl border flex items-center justify-center mb-6', card.iconBg)}>
                        <Icon className={cn('w-7 h-7', card.iconColor)} />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl" aria-hidden="true">{card.emoji}</span>
                        <h3 className="text-2xl font-bold tracking-tight">{card.title}</h3>
                    </div>

                    <p className="text-gray-400 text-base leading-relaxed flex-1">
                        {card.description}
                    </p>

                    <div className={cn('mt-6 flex items-center gap-1 text-sm font-medium', card.iconColor)}>
                        Open {card.title}
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

export default function Hub() {
    const lastLesson = {
        title: 'Lesson 14 · Te-form Basics',
        unit: 'Beginner · Grammar Unit 3',
        progress: 60,
        href: '/languages/japanese/learn',
    };

    return (
        <DashboardLayout>
            <Head title="Japanese" />

            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href="/dashboard" className="hover:text-brand-300 transition-colors">Dashboard</Link>
                <span className="text-gray-600">›</span>
                <Link href="/languages" className="hover:text-brand-300 transition-colors">Languages</Link>
                <span className="text-gray-600">›</span>
                <span className="text-brand-300 font-medium">Japanese</span>
            </nav>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-brand-900/50 to-brand-700/40 border border-brand-500/20 relative overflow-hidden"
            >
                <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-7xl md:text-9xl opacity-20 select-none pointer-events-none">
                    🇯🇵
                </div>
                <div className="relative z-10">
                    <p className="text-brand-300 text-sm font-medium mb-2">Language Hub</p>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Japanese</h1>
                    <p className="text-gray-300 max-w-xl">
                        Master Hiragana, Katakana, and essential Kanji through structured study, practice, and review.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                    <Card key={stat.label} className="p-4 md:p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <stat.icon className={cn('w-4 h-4', stat.color)} />
                            <p className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</p>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                        <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
                    </Card>
                ))}
            </div>

            <Card className="mb-8 p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-brand-300 font-medium mb-1">Continue Learning</p>
                        <h2 className="text-xl md:text-2xl font-bold mb-1 truncate">{lastLesson.title}</h2>
                        <p className="text-sm text-gray-400 mb-4">{lastLesson.unit}</p>
                        <div className="space-y-2 max-w-md">
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>Lesson progress</span>
                                <span className="font-bold text-white">{lastLesson.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-brand-700 to-brand-300 rounded-full"
                                    style={{ width: `${lastLesson.progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                    <Link href={lastLesson.href} className="shrink-0 w-full md:w-auto">
                        <motion.span
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="glass-button-primary inline-flex w-full md:w-auto items-center justify-center gap-2 h-12 px-8 rounded-xl text-base font-semibold"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            Continue Lesson
                        </motion.span>
                    </Link>
                </div>
            </Card>

            <h2 className="text-xl font-bold mb-4">Learning Paths</h2>
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                {hubCards.map((card) => (
                    <HubCard key={card.title} card={card} />
                ))}
            </div>
        </DashboardLayout>
    );
}
