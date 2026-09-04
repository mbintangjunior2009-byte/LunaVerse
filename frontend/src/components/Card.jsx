import React from 'react';
import { cn } from '../utils';
import { motion } from 'framer-motion';

export const Card = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("glass-card p-6", className)}
            {...props}
        >
            {children}
        </div>
    );
});
Card.displayName = "Card";

export const InteractiveCard = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <motion.div
            ref={ref}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={cn("glass-card p-6 cursor-pointer", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
});
InteractiveCard.displayName = "InteractiveCard";
