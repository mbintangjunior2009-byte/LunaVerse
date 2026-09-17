import React, { useMemo, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/Layouts/DashboardLayout';
import LanguageHeader from '@/Components/language/LanguageHeader';
import { getLanguageConfig } from '@/data/languageConfig';
import { getLanguageCurriculum } from '@/data/languageCurriculum';
import { loadLanguageProgress, markLessonComplete } from '@/lib/languageProgress';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { cn } from '@/lib/utils';
import {
    BookOpen, Clock, Signal, Lock, ChevronRight,
    CheckCircle2, TrendingUp, Play, ArrowLeft, Zap,
} from 'lucide-react';

// ── Difficulty badge colour ────────────────────────────────────────────────────
const difficultyColor = {
    Beginner:     'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    Intermediate: 'text-yellow-300  bg-yellow-500/10  border-yellow-500/20',
    Advanced:     'text-red-300     bg-red-500/10     border-red-500/20',
};

// ── Kana grid renderer ────────────────────────────────────────────────────────
function KanaGrid({ chart }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-center text-sm">
                <tbody>
                    {chart.rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-white/5 last:border-0">
                            <td className="pr-3 py-2 text-gray-500 font-mono text-xs w-6">{row.label}</td>
                            {row.cells.map((cell, ci) => (
                                <td key={ci} className="px-2 py-3 text-lg font-bold text-white/80">
                                    {cell === '—' ? (
                                        <span className="text-white/20">—</span>
                                    ) : (
                                        <span>{cell}</span>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// ── Pair grid renderer ────────────────────────────────────────────────────────
function PairGrid({ pairs }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {pairs.map(([a, b], i) => (
                <div key={i} className="flex gap-1">
                    <span className="flex-1 text-center px-2 py-2 rounded-lg bg-white/5 text-sm font-medium">
                        {a}
                    </span>
                    {b && (
                        <>
                            <span className="text-gray-600 self-center">→</span>
                            <span className="flex-1 text-center px-2 py-2 rounded-lg bg-brand-500/10 border border-brand-500/20 text-sm font-medium text-brand-200">
                                {b}
                            </span>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

// ── Media block renderer ──────────────────────────────────────────────────────
function MediaBlock({ media }) {
    if (!media?.length) return null;
    return (
        <div className="space-y-6">
            {media.map((block, i) => {
                if (block.type === 'kana-grid') {
                    return (
                        <Card key={i} className="p-5">
                            <h3 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider">
                                {block.title}
                            </h3>
                            <KanaGrid chart={block} />
                        </Card>
                    );
                }
                if (block.type === 'pair-grid') {
                    return (
                        <Card key={i} className="p-5">
                            <h3 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider">
                                {block.title}
                            </h3>
                            <PairGrid pairs={block.pairs} />
                        </Card>
                    );
                }
                return null;
            })}
        </div>
    );
}

/**
 * Study Category Page
 *
 * Shows:
 *  1. Category header with progress bar
 *  2. All lessons as clickable cards  →  /languages/{lang}/study/{category}/{lesson.id}
 *  3. Rich study material from the curriculum (overview lesson if present)
 *  4. A "Go to Practice Quiz" CTA at the bottom
 *
 * Props (from Laravel):
 *   languageId  – e.g. 'japanese'
 *   categoryId  – e.g. 'kanji'
 */
export default function StudyCategory({ languageId, categoryId }) {
    const config   = useLanguageConfig(languageId);
    const progress = loadLanguageProgress(languageId);

    // ── Category metadata from languageConfig ──────────────────────────────────
    const categoryMeta = config.studyCategories.find((c) => c.id === categoryId) ?? {
        id: categoryId,
        name: categoryId.charAt(0).toUpperCase() + categoryId.slice(1),
        icon: '📖',
        description: '',
        lessons: [],
    };

    const lessons      = categoryMeta.lessons ?? [];
    const completedIds = progress.completed ?? [];

    const completedCount = lessons.filter((l) => completedIds.includes(l.id)).length;
    const categoryProgress = lessons.length > 0
        ? Math.round((completedCount / lessons.length) * 100)
        : 0;

    // ── Pull rich content from the curriculum ──────────────────────────────────
    // The curriculum is organised into beginner/intermediate/advanced buckets.
    // Find any lesson whose id matches the category id or whose title text matches.
    const curriculum = getLanguageCurriculum(languageId);
    const overviewLesson = useMemo(() => {
        for (const bucket of curriculum) {
            const found = bucket.lessons.find(
                (l) => l.id === categoryId ||
                       l.id.includes(categoryId) ||
                       categoryId.includes(l.id)
            );
            if (found) return found;
        }
        return null;
    }, [curriculum, categoryId]);

    // ── Practice CTA meta ──────────────────────────────────────────────────────
    const practiceMeta = config.practiceCategories.find((c) => c.id === categoryId);

    return (
        <DashboardLayout>
            <Head title={`${categoryMeta.name} — ${config.name} Study`} />

            <LanguageHeader languageId={languageId} />

            {/* ── Breadcrumb ── */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                <Link href={`/languages/${languageId}/study`} className="hover:text-brand-300 transition-colors">
                    Study
                </Link>
                <span className="text-gray-600">›</span>
                <span className="text-white font-medium">{categoryMeta.name}</span>
            </nav>

            {/* ── Category header ── */}
            <Card className="p-6 mb-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl border border-white/10 bg-white/5"
                            style={{ boxShadow: `0 0 20px ${config.themeColor}33` }}
                        >
                            {categoryMeta.icon}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-1">{categoryMeta.name}</h1>
                            <p className="text-gray-400 text-sm">{categoryMeta.description}</p>
                        </div>
                    </div>
                    <div className="text-right shrink-0">
                        <p className="text-3xl font-bold">{categoryProgress}%</p>
                        <p className="text-xs text-gray-400 mt-0.5">
                            {completedCount}/{lessons.length} lessons
                        </p>
                    </div>
                </div>

                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: config.themeColor }}
                        initial={{ width: 0 }}
                        animate={{ width: `${categoryProgress}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                </div>
            </Card>

            {/* ── Lesson list ── */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-brand-300" />
                    Lessons
                </h2>

                {lessons.length === 0 ? (
                    <Card className="p-10 text-center border-dashed border-white/20">
                        <BookOpen className="w-10 h-10 text-gray-500 mx-auto mb-3" />
                        <p className="text-gray-400">Lessons for this category are coming soon.</p>
                    </Card>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {lessons.map((lesson, index) => {
                            const isDone     = completedIds.includes(lesson.id);
                            const isUnlocked = index === 0 || completedIds.includes(lessons[index - 1].id);
                            const href       = `/languages/${languageId}/study/${categoryId}/${lesson.id}`;

                            const card = (
                                <Card
                                    className={cn(
                                        'p-5 border h-full transition-all',
                                        isUnlocked
                                            ? 'border-white/10 hover:border-brand-500/40 hover:scale-[1.02] cursor-pointer'
                                            : 'border-white/5 opacity-50 cursor-not-allowed',
                                    )}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold truncate mb-1">{lesson.title}</h3>
                                            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
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

                                        <div className="ml-2 shrink-0">
                                            {isDone ? (
                                                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                                            ) : isUnlocked ? (
                                                <ChevronRight className="w-5 h-5 text-brand-300" />
                                            ) : (
                                                <Lock className="w-5 h-5 text-gray-500" />
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        <span
                                            className={cn(
                                                'text-xs font-medium px-2.5 py-1 rounded-full border',
                                                isDone
                                                    ? 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20'
                                                    : isUnlocked
                                                    ? difficultyColor[lesson.difficulty] ?? 'text-brand-300 bg-brand-500/10 border-brand-500/20'
                                                    : 'text-gray-400 bg-white/5 border-white/10',
                                            )}
                                        >
                                            {isDone ? 'Completed' : isUnlocked ? lesson.difficulty : 'Locked'}
                                        </span>

                                        {isUnlocked && (
                                            <Button
                                                variant={isDone ? 'outline' : 'primary'}
                                                size="sm"
                                                className="gap-1 pointer-events-none"
                                            >
                                                <Play className="w-3.5 h-3.5" />
                                                {isDone ? 'Review' : 'Start'}
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            );

                            return isUnlocked ? (
                                <Link key={lesson.id} href={href} className="block h-full">
                                    {card}
                                </Link>
                            ) : (
                                <div key={lesson.id} className="h-full">{card}</div>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* ── Overview / study materials from curriculum ── */}
            {overviewLesson && (
                <section className="mb-10 space-y-6">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-brand-300" />
                        Study Materials
                    </h2>

                    {/* Explanation paragraphs */}
                    {overviewLesson.explanation?.length > 0 && (
                        <Card className="p-6 space-y-3">
                            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
                                Overview
                            </h3>
                            {overviewLesson.explanation.map((para, i) => (
                                <p key={i} className="text-gray-300 leading-relaxed text-sm">
                                    {para}
                                </p>
                            ))}
                        </Card>
                    )}

                    {/* Examples */}
                    {overviewLesson.examples?.length > 0 && (
                        <Card className="p-6">
                            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
                                Examples
                            </h3>
                            <div className="space-y-3">
                                {overviewLesson.examples.map((ex, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5"
                                    >
                                        <span className="text-2xl font-bold text-white min-w-[6rem]">
                                            {ex.jp}
                                        </span>
                                        <span className="text-sm text-gray-400 italic min-w-[8rem]">
                                            {ex.reading}
                                        </span>
                                        <span className="text-sm text-gray-300 flex-1">
                                            {ex.en}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )}

                    {/* Charts and grids */}
                    {overviewLesson.media?.length > 0 && (
                        <MediaBlock media={overviewLesson.media} />
                    )}
                </section>
            )}

            {/* ── Practice CTA ── */}
            {practiceMeta && (
                <Card
                    className="p-6 border border-brand-500/20"
                    style={{ background: `linear-gradient(135deg, ${config.themeColor}11 0%, ${config.themeColor}06 100%)` }}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="font-bold text-lg mb-1">
                                Ready to test yourself?
                            </h3>
                            <p className="text-sm text-gray-400">
                                {practiceMeta.questions} questions · +{practiceMeta.xpReward} XP · {practiceMeta.difficulty}
                            </p>
                        </div>
                        <Link href={`/languages/${languageId}/practice/${categoryId}`}>
                            <Button variant="primary" className="gap-2 whitespace-nowrap">
                                <Zap className="w-4 h-4" />
                                Go to Practice Quiz
                            </Button>
                        </Link>
                    </div>
                </Card>
            )}
        </DashboardLayout>
    );
}

// Tiny helper — avoids prop drilling the config everywhere
function useLanguageConfig(languageId) {
    return getLanguageConfig(languageId);
}
