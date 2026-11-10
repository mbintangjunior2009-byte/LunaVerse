import React, { useEffect, useMemo, useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { Lock } from 'lucide-react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { getLanguageConfig, getLanguageConfig as getConfig } from '@/data/languageConfig';
import { getLessonById, getAdjacentLessons, isLessonUnlocked, getLanguageCurriculum } from '@/data/languageCurriculum';
import { loadLanguageProgress, markLessonComplete, setLastLesson, setLessonPartialProgress } from '@/lib/languageProgress';
import { buildLessonViewerContent } from '@/lib/lessonViewer';
import LanguageHeader from '@/Components/language/LanguageHeader';
import LessonHeader from '@/Components/japanese/LessonHeader';
import LessonExplanation from '@/Components/japanese/LessonExplanation';
import LessonExamples from '@/Components/japanese/LessonExamples';
import LessonPronunciation from '@/Components/japanese/LessonPronunciation';
import LessonAudio from '@/Components/japanese/LessonAudio';
import VocabularyCard from '@/Components/language/VocabularyCard';
import LessonSentences from '@/Components/japanese/LessonSentences';
import LessonGrammarNotes from '@/Components/japanese/LessonGrammarNotes';
import LessonInteractiveExamples from '@/Components/japanese/LessonInteractiveExamples';
import LessonMedia from '@/Components/japanese/LessonMedia';
import LessonNavigation from '@/Components/japanese/LessonNavigation';
import LessonProgressUpdate from '@/Components/japanese/LessonProgressUpdate';
import LessonCompletionOverlay from '@/Components/japanese/LessonCompletionOverlay';

export default function LanguageLesson({ languageId, lessonId }) {
    const { t } = useTranslation();
    const config   = getLanguageConfig(languageId);
    const lesson   = getLessonById(languageId, lessonId);
    const { previous, next } = getAdjacentLessons(languageId, lessonId);
    const content  = useMemo(() => lesson ? buildLessonViewerContent(lesson) : null, [lesson]);
    const curriculum = getLanguageCurriculum(languageId);

    const lessonInStudyCategories = useMemo(() => {
        const langConfig = getConfig(languageId);
        if (!langConfig?.studyCategories) return false;
        for (const category of langConfig.studyCategories) {
            if (category.lessons?.some(l => l.id === lessonId)) return true;
        }
        return false;
    }, [languageId, lessonId]);

    const [progressState, setProgressState] = useState({ completed: [], lastLessonId: null, xp: 0 });
    const [lessonProgress, setLessonProgress] = useState(0);
    const [completionOpen, setCompletionOpen] = useState(false);
    const [xpAwarded, setXpAwarded]           = useState(0);

    useEffect(() => {
        const stored = loadLanguageProgress(languageId);
        setProgressState(stored);
        setCompletionOpen(false);
        setXpAwarded(0);
        if (!lesson) return;
        if (!isLessonUnlocked(languageId, lesson.id, stored.completed)) return;
        setLastLesson(languageId, lesson.id);
        if (stored.completed.includes(lesson.id)) { setLessonProgress(100); return; }
        const started = 20;
        setLessonPartialProgress(languageId, lesson.id, started);
        setLessonProgress(started);
    }, [languageId, lessonId, lesson]);

    const completed = progressState.completed.includes(lessonId);

    const category = useMemo(() => {
        if (!lesson?.categoryId) return null;
        return curriculum.find((item) => item.id === lesson.categoryId) ?? null;
    }, [lesson, curriculum]);

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
            setLessonPartialProgress(languageId, lessonId, nextValue);
            return nextValue;
        });
    };

    if (!lesson || !content) {
        if (lessonInStudyCategories) {
            return (
                <DashboardLayout>
                    <Head title={t('study.contentPreparing')} />
                    <LanguageHeader languageId={languageId} />
                    <Card className="p-8 text-center">
                        <h1 className="text-2xl font-bold mb-2">{t('study.contentPreparing')}</h1>
                        <p className="text-gray-400 mb-6">{t('study.contentPreparingDesc')}</p>
                        <Button variant="primary" onClick={() => router.visit(`/languages/${languageId}/study`)}>
                            {t('buttons.backToStudy')}
                        </Button>
                    </Card>
                </DashboardLayout>
            );
        }
        return (
            <DashboardLayout>
                <Head title={t('study.lessonNotFound')} />
                <LanguageHeader languageId={languageId} />
                <Card className="p-8 text-center">
                    <h1 className="text-2xl font-bold mb-2">{t('study.lessonNotFound')}</h1>
                    <p className="text-gray-400 mb-6">{t('study.lessonNotFoundDesc')}</p>
                    <Button variant="primary" onClick={() => router.visit(`/languages/${languageId}/study`)}>
                        {t('buttons.backToStudy')}
                    </Button>
                </Card>
            </DashboardLayout>
        );
    }

    const unlocked = isLessonUnlocked(languageId, lesson.id, progressState.completed);

    if (!unlocked) {
        return (
            <DashboardLayout>
                <Head title={`${lesson.title} · ${t('stats.locked')}`} />
                <LanguageHeader languageId={languageId} />
                <Card className="p-8 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-7 h-7 text-gray-400" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">{lesson.title} {t('study.lessonLocked')}</h1>
                    <p className="text-gray-400 mb-6">{t('study.lessonLockedDesc')}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        {previous && (
                            <Button variant="primary" onClick={() => router.visit(`/languages/${languageId}/study/${previous.id}`)}>
                                {t('study.previousLesson')}
                            </Button>
                        )}
                        <Button variant="outline" onClick={() => router.visit(`/languages/${languageId}/study`)}>
                            {t('buttons.backToStudy')}
                        </Button>
                    </div>
                </Card>
            </DashboardLayout>
        );
    }

    const handleMarkComplete = () => {
        const result = markLessonComplete(languageId, lesson.id, content.xpReward);
        setLessonPartialProgress(languageId, lesson.id, 100);
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
            <Head title={`${lesson.title} · ${config.name} ${t('sections.study')}`} />
            <LanguageHeader languageId={languageId} />

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
                    <LessonPronunciation items={content.pronunciation} languageId={languageId} />
                    <LessonAudio clips={content.audioClips} title={t('study.nativeAudioPlayer')} languageId={languageId} />
                    <VocabularyCard items={content.vocabulary} languageId={languageId} />
                    <LessonSentences items={content.sentences} />
                    <LessonGrammarNotes notes={content.grammarNotes} />
                    <LessonInteractiveExamples items={content.interactive} onInteract={handleInteractive} languageId={languageId} />
                    <LessonMedia media={content.media} />
                </section>

                <LessonNavigation previous={previous} next={next} completed={completed} onMarkComplete={handleMarkComplete} />
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
