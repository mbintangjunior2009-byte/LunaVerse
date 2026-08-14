import React from 'react';
import { Card } from '@/Components/ui/Card';

/**
 * Reusable Grammar Card Component
 * Displays grammar notes for any language
 */
export default function GrammarCard({ notes }) {
    if (!notes?.length) return null;

    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Grammar Notes</h2>
            <div className="space-y-4">
                {notes.map((note) => (
                    <div key={note.title} className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h3 className="font-bold text-brand-300 mb-2">{note.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{note.body}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
}
