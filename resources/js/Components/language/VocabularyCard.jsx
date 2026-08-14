import React from 'react';
import { Card } from '@/Components/ui/Card';

/**
 * Reusable Vocabulary Card Component
 * Displays vocabulary items for any language
 */
export default function VocabularyCard({ items, languageId = 'japanese' }) {
    if (!items?.length) return null;

    // Get language-specific labels
    const getReadingLabel = (lang) => {
        const labels = {
            japanese: 'Reading',
            chinese: 'Pinyin',
            korean: 'Romanization',
            english: 'Phonetic',
            spanish: 'Phonetic',
        };
        return labels[lang] || 'Reading';
    };

    // Get language-specific field names
    const getReadingField = (lang) => {
        const fields = {
            japanese: 'reading',
            chinese: 'pinyin',
            korean: 'romanization',
            english: 'phonetic',
            spanish: 'phonetic',
        };
        return fields[lang] || 'reading';
    };

    // Get language-specific meaning label
    const getMeaningLabel = (lang) => {
        const labels = {
            english: 'Meaning',
        };
        return labels[lang] || 'Meaning';
    };

    const readingField = getReadingField(languageId);
    const meaningField = languageId === 'english' ? 'meaning' : 'meaning';

    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Vocabulary List</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="text-gray-400 border-b border-white/10">
                            <th className="py-2 pr-3 font-medium">Term</th>
                            <th className="py-2 pr-3 font-medium">{getReadingLabel(languageId)}</th>
                            <th className="py-2 font-medium">{getMeaningLabel(languageId)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr 
                                key={`${item.term}-${item[readingField]}`} 
                                className="border-b border-white/5 last:border-0"
                            >
                                <td className="py-3 pr-3 text-lg font-bold">{item.term}</td>
                                <td className="py-3 pr-3 text-brand-300">{item[readingField]}</td>
                                <td className="py-3 text-gray-300">{item[meaningField]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
