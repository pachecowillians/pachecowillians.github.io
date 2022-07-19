import { languages } from "../data/languages.js";

export function languagesHTML() {
    return languages.map((language) => (languageHTML(language))).join('');
}

export function languagesCSS() {
    return languages.map((language) => (languageCSS(language))).join('\n');
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

function languageCSS(language) {
    return `
    .${language.className} .progress-bar span {
        background: ${language.color};
        animation: animation-${language.className} 0.8s ease-out forwards;
        animation-play-state: paused;
    }

    @keyframes animation-${language.className} {
        to {
            width: ${language.percentage}%;
        }
    }
   
    .${language.className} .progress-bar {
        border: 1px solid ${language.color};
    }
    
    .${language.className} {
        color: ${language.color};
    }
    `;
}