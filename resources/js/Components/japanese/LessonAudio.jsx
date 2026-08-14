import React, { useEffect, useState } from 'react';
import { Volume2, Square } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { speakLanguage, stopLanguageSpeech } from '@/lib/languageSpeech';

export default function LessonAudio({ clips, title = 'Native Audio Player', languageId = 'japanese' }) {
    const [speakingId, setSpeakingId] = useState(null);
    const [supported, setSupported] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.speechSynthesis) {
            setSupported(false);
            return undefined;
        }

        const warmVoices = () => {
            window.speechSynthesis.getVoices();
        };
        warmVoices();
        window.speechSynthesis.addEventListener('voiceschanged', warmVoices);
        return () => {
            stopLanguageSpeech();
            window.speechSynthesis.removeEventListener('voiceschanged', warmVoices);
        };
    }, []);

    const stop = () => {
        stopLanguageSpeech();
        setSpeakingId(null);
    };

    const play = (clip, index) => {
        if (!supported || typeof window === 'undefined' || !window.speechSynthesis) return;

        stop();
        const ok = speakLanguage(clip.text, languageId, {
            onEnd: () => setSpeakingId(null),
        });
        if (ok) setSpeakingId(index);
    };

    const getLanguageLabel = (lang) => {
        const labels = {
            japanese: 'Japanese',
            chinese: 'Chinese',
            korean: 'Korean',
            english: 'English',
            spanish: 'Spanish',
        };
        return labels[lang] || 'the language';
    };

    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-400 mb-4">
                Native {getLanguageLabel(languageId)} audio via your browser's speech engine.
            </p>

            {!supported && (
                <p className="text-sm text-amber-300 mb-4">
                    Speech synthesis is not available in this browser. You can still study the written readings above.
                </p>
            )}

            <div className="space-y-3">
                {clips.map((clip, index) => (
                    <div
                        key={`${clip.label}-${clip.text}`}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                        <div className="min-w-0">
                            <p className="text-sm text-brand-300 mb-1">{clip.label}</p>
                            <p className="text-lg font-bold truncate">{clip.text}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            {speakingId === index ? (
                                <Button type="button" variant="outline" size="sm" className="gap-1" onClick={stop}>
                                    <Square className="w-3.5 h-3.5" /> Stop
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    variant="primary"
                                    size="sm"
                                    className="gap-1"
                                    onClick={() => play(clip, index)}
                                    disabled={!supported}
                                >
                                    <Volume2 className="w-3.5 h-3.5" /> Play
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
