import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Reusable Progress Bar Component
 * Displays a progress bar with optional label and percentage
 */
export default function ProgressBar({ 
    value, 
    total = null, 
    label = null, 
    color = 'brand',
    showPercentage = true,
    animated = true,
    size = 'md'
}) {
    const percentage = total ? Math.round((value / total) * 100) : value;
    
    const sizeClasses = {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
    };

    const colorClasses = {
        brand: 'bg-brand-500',
        emerald: 'bg-emerald-500',
        orange: 'bg-orange-500',
        blue: 'bg-blue-500',
        yellow: 'bg-yellow-500',
        purple: 'bg-purple-500',
    };

    return (
        <div className="w-full">
            {(label || showPercentage) && (
                <div className="flex justify-between text-sm mb-1">
                    {label && <span className="text-gray-400">{label}</span>}
                    {showPercentage && <span className="font-bold">{percentage}%</span>}
                </div>
            )}
            <div className={`w-full ${sizeClasses[size]} bg-white/10 rounded-full overflow-hidden`}>
                <motion.div
                    className={cn('h-full rounded-full', colorClasses[color])}
                    initial={animated ? { width: 0 } : { width: `${percentage}%` }}
                    animate={{ width: `${percentage}%` }}
                    transition={animated ? { duration: 0.8 } : {}}
                />
            </div>
        </div>
    );
}
