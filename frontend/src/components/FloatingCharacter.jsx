import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/utils';

export const FloatingCharacter = ({ char, className, delay = 0, duration = 4, size = 64 }) => {
    return (
        <motion.div
            className={cn(
                "absolute flex items-center justify-center rounded-2xl pointer-events-none select-none",
                "bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-white font-bold",
                className
            )}
            style={{ width: size, height: size, fontSize: size * 0.5 }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
                y: [0, -20, 0], 
                rotateX: [0, 10, -10, 0],
                rotateY: [0, -10, 10, 0],
                opacity: 0.8
            }}
            transition={{
                y: {
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay
                },
                rotateX: {
                    duration: duration * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay
                },
                rotateY: {
                    duration: duration * 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay
                },
                opacity: { duration: 1 }
            }}
        >
            <span className="text-glow drop-shadow-md">{char}</span>
        </motion.div>
    );
};
