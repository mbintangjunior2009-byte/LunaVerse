import React from 'react';
import { Link } from '@inertiajs/react';

export default function JapaneseStudyBreadcrumb({
    current,
    lessonTitle,
    section = 'study',
}) {
    const sectionLabel = section === 'practice' ? 'Practice' : 'Study';
    const sectionHref = section === 'practice'
        ? '/language/japanese/practice'
        : '/language/japanese/study';

    return (
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <Link href="/dashboard" className="hover:text-brand-300 transition-colors">Dashboard</Link>
            <span className="text-gray-600">›</span>
            <Link href="/languages" className="hover:text-brand-300 transition-colors">Languages</Link>
            <span className="text-gray-600">›</span>
            <Link href="/language/japanese" className="hover:text-brand-300 transition-colors">Japanese</Link>
            <span className="text-gray-600">›</span>
            {lessonTitle ? (
                <>
                    <Link href={sectionHref} className="hover:text-brand-300 transition-colors">{sectionLabel}</Link>
                    <span className="text-gray-600">›</span>
                    <span className="text-brand-300 font-medium">{lessonTitle}</span>
                </>
            ) : (
                <span className="text-brand-300 font-medium">{current || sectionLabel}</span>
            )}
        </nav>
    );
}
