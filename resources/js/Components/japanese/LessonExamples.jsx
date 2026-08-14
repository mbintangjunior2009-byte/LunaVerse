import React from 'react';
import { Card } from '@/Components/ui/Card';

export default function LessonExamples({ examples }) {
    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Examples</h2>
            <div className="space-y-3">
                {examples.map((example, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                        <p className="text-xl md:text-2xl font-bold mb-1">{example.jp || example.zh || example.ko || example.es || example.en}</p>
                        <p className="text-sm text-brand-300 mb-1">{example.reading || example.pinyin || example.romanization || example.phonetic}</p>
                        <p className="text-sm text-gray-400">{example.en || example.meaning}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
}
