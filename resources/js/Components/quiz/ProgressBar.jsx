import React from 'react';
import { Target } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Quiz Progress Bar Component
 * Displays current question progress
 */
export default function ProgressBar({ 
    current, 
    total, 
    showLabel = true 
}) {
    const percentage = total > 0 ? (current / total) * 100 : 0;

    return (
        <div className="flex items-center gap-3">
            {showLabel && (
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Target className="w-4 h-4" />
                    <span className="font-medium text-white">{current}</span>
                    <span>/</span>
                    <span>{total}</span>
                </div>
            )}
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-brand-500 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
