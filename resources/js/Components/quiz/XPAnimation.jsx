import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

/**
 * XP Animation Component
 * Floating XP notification when earned
 */
export default function XPAnimation({ xp, show }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            const timer = setTimeout(() => setIsVisible(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [show]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: -50, scale: 1 }}
                    exit={{ opacity: 0, y: -80, scale: 0.8 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                >
                    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500/20 border border-brand-500/30 backdrop-blur-md">
                        <Zap className="w-5 h-5 text-brand-300 animate-pulse" />
                        <span className="text-lg font-bold text-brand-300">+{xp} XP</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
