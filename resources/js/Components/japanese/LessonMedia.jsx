import React from 'react';
import { Card } from '@/Components/ui/Card';

function KanaGrid({ title, rows }) {
    return (
        <div>
            <h3 className="text-sm font-medium text-brand-300 mb-3">{title}</h3>
            <div className="overflow-x-auto">
                <div className="min-w-[520px] space-y-2">
                    {rows.map((row) => (
                        <div key={row.label} className="grid grid-cols-[2rem_repeat(5,minmax(0,1fr))] gap-2">
                            <div className="flex items-center justify-center text-xs text-gray-500 font-medium">
                                {row.label}
                            </div>
                            {row.cells.map((cell, index) => (
                                <div
                                    key={`${row.label}-${index}`}
                                    className="rounded-lg bg-dark-900/60 border border-white/10 px-2 py-3 text-center text-sm"
                                >
                                    {cell === '—' ? (
                                        <span className="text-gray-600">—</span>
                                    ) : (
                                        <span className="font-medium">{cell}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function PairGrid({ title, pairs }) {
    return (
        <div>
            <h3 className="text-sm font-medium text-brand-300 mb-3">{title}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {pairs.map((pair) => (
                    <div
                        key={pair.join('|')}
                        className="rounded-xl bg-dark-900/60 border border-white/10 p-3 flex items-center justify-between gap-2 text-sm"
                    >
                        <span>{pair[0]}</span>
                        <span className="text-brand-300">→</span>
                        <span className="font-medium text-right">{pair[1]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function LessonMedia({ media }) {
    if (!media?.length) return null;

    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Reference Charts</h2>
            <div className="space-y-8">
                {media.map((item) => {
                    if (item.type === 'kana-grid') {
                        return <KanaGrid key={item.title} title={item.title} rows={item.rows} />;
                    }
                    if (item.type === 'pair-grid') {
                        return <PairGrid key={item.title} title={item.title} pairs={item.pairs} />;
                    }
                    return null;
                })}
            </div>
        </Card>
    );
}
