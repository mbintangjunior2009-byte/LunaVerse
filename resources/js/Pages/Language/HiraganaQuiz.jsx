import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import LanguageHeader from '@/Components/language/LanguageHeader';
import BasicHiraganaQuiz from './BasicHiraganaQuiz';

/**
 * Hiragana Quiz Page
 * Renders the Hiragana quiz for a specific language
 */
export default function HiraganaQuiz({ languageId, quizId }) {
    return (
        <DashboardLayout>
            <Head title="Hiragana Quiz" />
            <LanguageHeader languageId={languageId} currentSection="practice" />

            <div className="mb-6">
                <Link href={`/languages/${languageId}/practice`} className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-300 transition-colors">
                    Back to Practice
                </Link>
            </div>

            <BasicHiraganaQuiz quizType={quizId} standalone={false} />
        </DashboardLayout>
    );
}
