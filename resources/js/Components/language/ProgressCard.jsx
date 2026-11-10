import React from 'react';
import { Card } from '@/Components/ui/Card';
import { cn } from '@/lib/utils';

/**
 * Reusable Progress Card Component
 * Displays a progress metric with visual indicator
 */
export default function ProgressCard({ 
    label, 
    value, 
    total = null, 
    icon: Icon, 
    color = 'brand',
    showProgress = true,
    percentage = null 
}) {
    const colorClasses = {
        brand: 'text-brand-300 bg-brand-500/15 border-brand-500/30',
        emerald: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30',
        orange: 'text-orange-300 bg-orange-500/15 border-orange-500/30',
        blue: 'text-blue-300 bg-blue-500/15 border-blue-500/30',
        yellow: 'text-yellow-300 bg-yellow-500/15 border-yellow-500/30',
        purple: 'text-purple-300 bg-purple-500/15 border-purple-500/30',
    };

    const progressColorClasses = {
        brand: 'bg-brand-500',
        emerald: 'bg-emerald-500',
        orange: 'bg-orange-500',
        blue: 'bg-blue-500',
        yellow: 'bg-yellow-500',
        purple: 'bg-purple-500',
    };

    const displayPercentage = percentage !== null ? percentage : (total ? Math.round((value / total) * 100) : value);

    return (
        <Card className="p-5">
            <p className="text-sm text-gray-400 mb-1 inline-flex items-center gap-1">
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {label}
            </p>
            <div className={cn('text-3xl font-bold', colorClasses[color].split(' ')[0])}>
                {value}
                {total !== null && (
                    <span className="text-lg text-gray-500">/{total}</span>
                )}
                {typeof value === 'number' && total === null && percentage === null && '%'}
            </div>
            
            {showProgress && (
                <div className="mt-2 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className={cn('h-full rounded-full transition-all', progressColorClasses[color])}
                        style={{ width: `${displayPercentage}%` }}
                    />
                </div>
            )}
        </Card>
    );
}
