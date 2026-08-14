import { Link } from '@inertiajs/react';
import { Card } from '@/Components/ui/Card';
import { motion } from 'framer-motion';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0 bg-dark-900 text-white relative overflow-hidden font-sans">
            {/* Background Glow */}
            <div className="absolute top-[0%] left-[-20%] w-[60%] h-[60%] bg-brand-700/20 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[0%] right-[-20%] w-[60%] h-[60%] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="z-10 w-full max-w-md px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <Link href="/" className="flex items-center gap-2 group mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-300 flex items-center justify-center shadow-[0_0_15px_rgba(185,95,255,0.5)] group-hover:shadow-[0_0_25px_rgba(185,95,255,0.7)] transition-all">
                            <span className="font-bold text-xl text-white">L</span>
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-glow">LinguaNova</span>
                    </Link>

                    <Card className="w-full">
                        {children}
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
