export function pickJapaneseVoice() {
    if (typeof window === 'undefined' || !window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    return (
        voices.find((voice) => voice.lang === 'ja-JP') ||
        voices.find((voice) => voice.lang?.startsWith('ja')) ||
        null
    );
}

export function speakJapanese(text, { rate = 0.9, onEnd } = {}) {
    if (typeof window === 'undefined' || !window.speechSynthesis || !text) {
        return false;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = pickJapaneseVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = 'ja-JP';
    utterance.rate = rate;
    if (onEnd) {
        utterance.onend = onEnd;
        utterance.onerror = onEnd;
    }
    window.speechSynthesis.speak(utterance);
    return true;
}

export function stopJapaneseSpeech() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
}
