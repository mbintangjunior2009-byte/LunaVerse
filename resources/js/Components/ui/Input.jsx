import React from 'react';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-10 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";
