import React, { useEffect, useMemo, useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { Lock } from 'lucide-react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import {
    getAdjacentLessons,
    getLessonById,
    isLessonUnlocked,
    japaneseCurriculum,
} from '@/data/japaneseCurriculum';
import {
    getLessonProgressPercent,
    loadJapaneseProgress,
    markLessonComplete,
    setLastLesson,
    setLessonPartialProgress,
} from '@/lib/japaneseProgress';
import { buildLessonViewerContent } from '@/lib/lessonViewer';
import JapaneseStudyBreadcrumb from '@/Components/japanese/JapaneseStudyBreadcrumb';
import LessonHeader from '@/Components/japanese/LessonHeader';
import LessonExplanation from '@/Components/japanese/LessonExplanation';
import LessonExamples from '@/Components/japanese/LessonExamples';
import LessonPronunciation from '@/Components/japanese/LessonPronunciation';
import LessonAudio from '@/Components/japanese/LessonAudio';
import LessonVocabulary from '@/Components/japanese/LessonVocabulary';
import LessonSentences from '@/Components/japanese/LessonSentences';
import LessonGrammarNotes from '@/Components/japanese/LessonGrammarNotes';
import LessonInteractiveExamples from '@/Components/japanese/LessonInteractiveExamples';
import LessonMedia from '@/Components/japanese/LessonMedia';
import LessonNavigation from '@/Components/japanese/LessonNavigation';
import LessonProgressUpdate from '@/Components/japanese/LessonProgressUpdate';
import LessonCompletionOverlay from '@/Components/japanese/LessonCompletionOverlay';

export default function Lesson({ lessonId }) {
    const lesson = getLessonById(lessonId);
    const { previous, next } = getAdjacentLessons(lessonId);
    const content = useMemo(() => buildLessonViewerContent(lesson), [lesson]);

    const [progressState, setProgressState] = useState({ completed: [], lastLessonId: null, xp: 0 });
    const [lessonProgress, setLessonProgress] = useState(0);
    const [completionOpen, setCompletionOpen] = useState(false);
    const [xpAwarded, setXpAwarded] = useState(0);

    useEffect(() => {
        const stored = loadJapaneseProgress();
        setProgressState(stored);
        setCompletionOpen(false);
        setXpAwarded(0);

        if (!lesson) return;
        if (!isLessonUnlocked(lesson.id, stored.completed)) return;

        setLastLesson(lesson.id);

        if (stored.completed.includes(lesson.id)) {
            setLessonProgress(100);
            return;
        }

        const existing = getLessonProgressPercent(lesson.id, stored.completed);
        const started = Math.max(existing, 20);
        setLessonPartialProgress(lesson.id, started);
        setLessonProgress(started);
    }, [lessonId, lesson]);

    const completed = progressState.completed.includes(lessonId);

    const category = useMemo(
        () => japaneseCurriculum.find((item) => item.id === lesson?.categoryId) ?? null,
        [lesson]
    );

    const categoryStats = useMemo(() => {
        if (!category) return { completed: 0, total: 0 };
        return {
            completed: category.lessons.filter((item) => progressState.completed.includes(item.id)).length,
            total: category.lessons.length,
        };
    }, [category, progressState.completed]);

    const bumpProgress = (value) => {
        if (completed) return;
        setLessonProgress((current) => {
            const nextValue = Math.max(current, Math.min(95, value));
            setLessonPartialProgress(lessonId, nextValue);
            return nextValue;
        });
    };

    if (!lesson || !content) {
        return (
            <DashboardLayout>
                <Head title="Lesson not found" />
                <JapaneseStudyBreadcrumb />
                <Card className="p-8 text-center">
                    <h1 className="text-2xl font-bold mb-2">Lesson not found</h1>
                    <p className="text-gray-400 mb-6">This study lesson does not exist in the Japanese curriculum.</p>
                    <Button variant="primary" onClick={() => router.visit('/languages/japanese/study')}>
                        Back to Study
                    </Button>
                </Card>
            </DashboardLayout>
        );
    }

    const unlocked = isLessonUnlocked(lesson.id, progressState.completed);

    if (!unlocked) {
        return (
            <DashboardLayout>
                <Head title={`${lesson.title} · Locked`} />
                <JapaneseStudyBreadcrumb lessonTitle={lesson.title} />
                <Card className="p-8 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-7 h-7 text-gray-400" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">{lesson.title} is locked</h1>
                    <p className="text-gray-400 mb-6">
                        Complete the previous lesson before starting this one.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        {previous && (
                            <Button variant="primary" onClick={() => router.visit(`/languages/japanese/study/${previous.id}`)}>
                                Go to Previous Lesson
                            </Button>
                        )}
                        <Button variant="outline" onClick={() => router.visit('/languages/japanese/study')}>
                            Back to Study
                        </Button>
                    </div>
                </Card>
            </DashboardLayout>
        );
    }

    const handleMarkComplete = () => {
        const result = markLessonComplete(lesson.id, content.xpReward);
        setLessonPartialProgress(lesson.id, 100);
        setProgressState(result.progress);
        setLessonProgress(100);
        setXpAwarded(result.xpAwarded || content.xpReward);
        setCompletionOpen(true);
    };

    const handleInteractive = (revealedCount) => {
        if (revealedCount <= 0) return;
        const ratio = revealedCount / Math.max(content.interactive.length, 1);
        bumpProgress(40 + Math.round(ratio * 40));
    };

    return (
        <DashboardLayout>
            <Head title={`${lesson.title} · Japanese Study`} />
            <JapaneseStudyBreadcrumb lessonTitle={lesson.title} />

            <LessonHeader
                title={lesson.title}
                categoryTitle={lesson.categoryTitle}
                estimatedTime={lesson.estimatedTime}
                difficulty={lesson.difficulty}
                progress={lessonProgress}
                xpReward={content.xpReward}
                completed={completed}
            />

            <div className="space-y-5 mb-5">
                <LessonProgressUpdate
                    progress={lessonProgress}
                    categoryTitle={category?.title || lesson.categoryTitle}
                    completedInCategory={categoryStats.completed}
                    totalInCategory={categoryStats.total}
                />

                <section aria-label="Lesson Content" className="space-y-5">
                    <LessonExplanation paragraphs={content.explanation} />
                    <LessonExamples examples={content.examples} />
                    <LessonPronunciation items={content.pronunciation} />
                    <LessonAudio clips={content.audioClips} title="Native Audio Player" />
                    <LessonVocabulary items={content.vocabulary} />
                    <LessonSentences items={content.sentences} />
                    <LessonGrammarNotes notes={content.grammarNotes} />
                    <LessonInteractiveExamples
                        items={content.interactive}
                        onInteract={handleInteractive}
                    />
                    <LessonMedia media={content.media} />
                </section>

                <LessonNavigation
                    previous={previous}
                    next={next}
                    completed={completed}
                    onMarkComplete={handleMarkComplete}
                />
            </div>

            <LessonCompletionOverlay
                open={completionOpen}
                lessonTitle={lesson.title}
                xpAwarded={xpAwarded}
                nextLesson={next}
                onClose={() => setCompletionOpen(false)}
            />
        </DashboardLayout>
    );
}
