import React from 'react';
import { Card } from '@/Components/ui/Card';

export default function LessonVocabulary({ items }) {
    if (!items?.length) return null;

    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Vocabulary List</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="text-gray-400 border-b border-white/10">
                            <th className="py-2 pr-3 font-medium">Term</th>
                            <th className="py-2 pr-3 font-medium">Reading</th>
                            <th className="py-2 font-medium">Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={`${item.term}-${item.reading}`} className="border-b border-white/5 last:border-0">
                                <td className="py-3 pr-3 text-lg font-bold">{item.term}</td>
                                <td className="py-3 pr-3 text-brand-300">{item.reading}</td>
                                <td className="py-3 text-gray-300">{item.meaning}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
