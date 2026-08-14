import React from 'react';
import { Card } from '@/Components/ui/Card';

export default function LessonProgressUpdate({ progress, categoryTitle, completedInCategory, totalInCategory }) {
    return (
        <Card className="p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <p className="text-sm text-brand-300 mb-1">Progress Update</p>
                    <h3 className="font-bold text-lg">{categoryTitle}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                        {completedInCategory} of {totalInCategory} lessons completed in this category
                    </p>
                </div>
                <div className="w-full md:w-56">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Lesson</span>
                        <span className="font-bold">{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-brand-700 to-brand-300 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
}
