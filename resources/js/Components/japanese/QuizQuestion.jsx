import React, { useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { Button } from '@/Components/ui/Button';
import { cn } from '@/lib/utils';

function pickJapaneseVoice() {
    if (typeof window === 'undefined' || !window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    return (
        voices.find((voice) => voice.lang === 'ja-JP') ||
        voices.find((voice) => voice.lang?.startsWith('ja')) ||
        null
    );
}

export default function QuizQuestion({
    question,
    index,
    total,
    selected,
    onSelect,
    locked,
}) {
    const [speechReady, setSpeechReady] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.speechSynthesis) {
            setSpeechReady(false);
            return undefined;
        }
        const warm = () => window.speechSynthesis.getVoices();
        warm();
        window.speechSynthesis.addEventListener('voiceschanged', warm);
        return () => {
            window.speechSynthesis.cancel();
            window.speechSynthesis.removeEventListener('voiceschanged', warm);
        };
    }, []);

    const playAudio = () => {
        if (!question.audio || !speechReady) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(question.audio);
        const voice = pickJapaneseVoice();
        if (voice) utterance.voice = voice;
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div>
            <div className="flex items-center justify-between gap-3 mb-4">
                <p className="text-sm text-brand-300 font-medium">
                    Question {index + 1} of {total}
                </p>
                <div className="flex-1 max-w-[180px] h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-brand-700 to-brand-300 rounded-full transition-all"
                        style={{ width: `${((index + 1) / total) * 100}%` }}
                    />
                </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4 leading-snug">{question.prompt}</h2>

            {question.audio && (
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-2 mb-5"
                    onClick={playAudio}
                    disabled={!speechReady}
                >
                    <Volume2 className="w-4 h-4" />
                    Play audio
                </Button>
            )}

            <div className="space-y-3">
                {question.options.map((option, optionIndex) => {
                    const isSelected = selected === optionIndex;
                    const isCorrect = locked && optionIndex === question.answer;
                    const isWrong = locked && isSelected && optionIndex !== question.answer;

                    return (
                        <button
                            key={`${option}-${optionIndex}`}
                            type="button"
                            disabled={locked}
                            onClick={() => onSelect(optionIndex)}
                            className={cn(
                                'w-full text-left px-4 py-3 rounded-xl border transition-colors',
                                !locked && !isSelected && 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand-500/30',
                                !locked && isSelected && 'bg-brand-500/20 border-brand-500/40 text-brand-300',
                                isCorrect && 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
                                isWrong && 'bg-red-500/15 border-red-500/40 text-red-300'
                            )}
                        >
                            <span className="text-sm font-medium mr-2 text-gray-500">
                                {String.fromCharCode(65 + optionIndex)}.
                            </span>
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
