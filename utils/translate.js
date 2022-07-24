let actualLanguage = 'portuguese';

export function toggleLanguage() {
    if (actualLanguage == 'portuguese') {
        actualLanguage = 'english';
    } else {
        actualLanguage = 'portuguese';
    }
}

export function getCurrentLanguage() {
    return actualLanguage;
}