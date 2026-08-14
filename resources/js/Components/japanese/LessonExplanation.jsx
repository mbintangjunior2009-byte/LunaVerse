import React from 'react';
import { Card } from '@/Components/ui/Card';

export default function LessonExplanation({ paragraphs }) {
    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Explanation</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
                {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </Card>
    );
}
