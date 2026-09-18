import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { setLocale } from '@/i18n';
import { cn } from '@/lib/utils';

const LOCALES = [
    { code: 'en', label: 'EN', flag: '🇬🇧', name: 'English' },
    { code: 'id', label: 'ID', flag: '🇮🇩', name: 'Indonesia' },
];

/**
 * Compact language switcher dropdown.
 * Renders a flag + locale code button that expands into a small menu.
 *
 * @prop {'light'|'dark'} [variant='dark']  — color scheme hint
 */
export default function LanguageSwitcher({ variant = 'dark' }) {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const current = LOCALES.find((l) => l.code === i18n.language) ?? LOCALES[1];

    // Close on outside click
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleSelect = (code) => {
        setLocale(code);
        setOpen(false);
    };

    const isDark = variant === 'dark';

    return (
        <div ref={ref} className="relative">
            {/* Trigger */}
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-label="Switch UI language"
                aria-haspopup="listbox"
                aria-expanded={open}
                className={cn(
                    'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold',
                    'border transition-colors select-none',
                    isDark
                        ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                        : 'bg-black/5 border-black/10 text-gray-700 hover:bg-black/10 hover:text-black',
                )}
            >
                <span className="text-sm leading-none">{current.flag}</span>
                <span>{current.label}</span>
                {/* chevron */}
                <svg
                    className={cn('w-3 h-3 transition-transform', open && 'rotate-180')}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            {open && (
                <div
                    role="listbox"
                    aria-label="Select language"
                    className={cn(
                        'absolute right-0 mt-2 w-36 rounded-xl border shadow-2xl z-[200]',
                        'overflow-hidden py-1',
                        isDark
                            ? 'bg-dark-800/95 backdrop-blur-xl border-white/10'
                            : 'bg-white border-gray-200',
                    )}
                >
                    {LOCALES.map((locale) => {
                        const isActive = locale.code === i18n.language;
                        return (
                            <button
                                key={locale.code}
                                role="option"
                                aria-selected={isActive}
                                type="button"
                                onClick={() => handleSelect(locale.code)}
                                className={cn(
                                    'w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors',
                                    isActive
                                        ? isDark
                                            ? 'bg-brand-500/20 text-brand-300 font-semibold'
                                            : 'bg-brand-100 text-brand-700 font-semibold'
                                        : isDark
                                        ? 'text-gray-300 hover:bg-white/5 hover:text-white'
                                        : 'text-gray-700 hover:bg-gray-50',
                                )}
                            >
                                <span className="text-base">{locale.flag}</span>
                                <div className="text-left">
                                    <div className="font-medium leading-none mb-0.5">{locale.label}</div>
                                    <div className={cn('text-[10px] leading-none', isDark ? 'text-gray-500' : 'text-gray-400')}>
                                        {locale.name}
                                    </div>
                                </div>
                                {isActive && (
                                    <svg className="w-3.5 h-3.5 ml-auto shrink-0 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
