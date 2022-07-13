import { languages } from "../data/languages.js";

export function languagesHTML() {
    return languages.map((language) => (languageHTML(language))).join('');
}

function languageHTML(language) {
    return `
        <div class="language-container ${language.className}">
            <img src="img/Languages/${language.className}.svg" alt="${language.name}" id="${language.className}">
            <div class="progress-bar-container">
                <div class="progress-bar-title">
                    <span>${language.name}</span>
                    <span>${language.percentage}%</span>
                </div>
                <div class="progress-bar">
                    <span></span>
                </div>
            </div>
        </div>
    `;
}