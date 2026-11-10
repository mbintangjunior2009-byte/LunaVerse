import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import id from './locales/id.json';

const STORAGE_KEY = 'linguanova_ui_locale';

/**
 * Determine initial locale:
 *  1. User's persisted preference in localStorage
 *  2. Browser language (if id or en)
 *  3. Fall back to 'id' (Indonesian) as the app default
 */
function detectLocale() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'id') return stored;

    const browserLang = navigator.language?.toLowerCase() ?? '';
    if (browserLang.startsWith('id')) return 'id';
    if (browserLang.startsWith('en')) return 'en';

    return 'id'; // default
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            id: { translation: id },
        },
        lng: detectLocale(),
        fallbackLng: 'en',
        interpolation: {
            // React already escapes values
            escapeValue: false,
        },
        // No suspense — translations are bundled, never async
        react: { useSuspense: false },
    });

/**
 * Switch the active UI locale and persist the choice.
 * @param {'en'|'id'} locale
 */
export function setLocale(locale) {
    if (locale !== 'en' && locale !== 'id') return;
    localStorage.setItem(STORAGE_KEY, locale);
    i18n.changeLanguage(locale);
}

export { STORAGE_KEY };
export default i18n;
