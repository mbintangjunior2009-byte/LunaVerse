/**
 * Multi-language Speech Synthesis
 * Supports Japanese, Chinese, Korean, English, and Spanish
 */

const LANGUAGE_VOICES = {
    japanese: {
        lang: 'ja-JP',
        fallbackLang: 'ja',
        rate: 0.9,
    },
    chinese: {
        lang: 'zh-CN',
        fallbackLang: 'zh',
        rate: 0.9,
    },
    korean: {
        lang: 'ko-KR',
        fallbackLang: 'ko',
        rate: 0.9,
    },
    english: {
        lang: 'en-US',
        fallbackLang: 'en',
        rate: 1.0,
    },
    spanish: {
        lang: 'es-ES',
        fallbackLang: 'es',
        rate: 0.9,
    },
};

/**
 * Pick the best available voice for a language
 */
function pickVoice(languageId) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return null;
    
    const config = LANGUAGE_VOICES[languageId];
    if (!config) return null;
    
    const voices = window.speechSynthesis.getVoices();
    return (
        voices.find((voice) => voice.lang === config.lang) ||
        voices.find((voice) => voice.lang?.startsWith(config.fallbackLang)) ||
        null
    );
}

/**
 * Speak text in a specific language
 */
export function speakLanguage(text, languageId = 'japanese', { rate, onEnd } = {}) {
    if (typeof window === 'undefined' || !window.speechSynthesis || !text) {
        return false;
    }

    const config = LANGUAGE_VOICES[languageId];
    if (!config) return false;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = pickVoice(languageId);
    if (voice) utterance.voice = voice;
    utterance.lang = config.lang;
    utterance.rate = rate ?? config.rate;
    if (onEnd) {
        utterance.onend = onEnd;
        utterance.onerror = onEnd;
    }
    window.speechSynthesis.speak(utterance);
    return true;
}

/**
 * Stop all speech synthesis
 */
export function stopLanguageSpeech() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
}

/**
 * Legacy Japanese-specific functions (for backward compatibility)
 */
export function pickJapaneseVoice() {
    return pickVoice('japanese');
}

export function speakJapanese(text, options = {}) {
    return speakLanguage(text, 'japanese', options);
}

export function stopJapaneseSpeech() {
    stopLanguageSpeech();
}
