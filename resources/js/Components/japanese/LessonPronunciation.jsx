import React, { useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { Card } from '@/Components/ui/Card';
import { Button } from '@/Components/ui/Button';
import { speakLanguage, stopLanguageSpeech } from '@/lib/languageSpeech';

export default function LessonPronunciation({ items, languageId = 'japanese' }) {
    const [playing, setPlaying] = useState(null);

    useEffect(() => () => stopLanguageSpeech(), []);

    if (!items?.length) return null;

    return (
        <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Pronunciation</h2>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div
                        key={`${item.text}-${item.reading}`}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                        <div>
                            <p className="text-2xl font-bold mb-1">{item.text}</p>
                            <p className="text-sm text-brand-300">{item.reading}</p>
                            {item.tip && <p className="text-xs text-gray-400 mt-1">{item.tip}</p>}
                        </div>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="gap-1 shrink-0"
                            onClick={() => {
                                setPlaying(index);
                                const ok = speakLanguage(item.text, languageId, {
                                    onEnd: () => setPlaying(null),
                                });
                                if (!ok) setPlaying(null);
                            }}
                        >
                            <Volume2 className="w-3.5 h-3.5" />
                            {playing === index ? 'Playing…' : 'Listen'}
                        </Button>
                    </div>
                ))}
            </div>
        </Card>
    );
}
