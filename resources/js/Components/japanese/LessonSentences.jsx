import React from 'react';
import { Card } from '@/Components/ui/Card';

export default function LessonSentences({ items }) {
    if (!items?.length) return null;

    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Example Sentences</h2>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                        <p className="text-xl md:text-2xl font-bold mb-1">{item.jp || item.zh || item.ko || item.es || item.en}</p>
                        <p className="text-sm text-brand-300 mb-1">{item.reading || item.pinyin || item.romanization || item.phonetic}</p>
                        <p className="text-sm text-gray-400">{item.en || item.meaning}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
}
