import { images } from "../data/images.js";

export function languageHTML(language) {
    return /*html*/ `
        <div class="language-container ${language.referenceName}">
            <img src="${images.filter(image => image.name == language.referenceName)[0].path}" alt="${language.name}" id="${language.referenceName}" title="${language.name}">
            <span>${language.name}</span>
        </div>
    `;
}

export function languageCSS(language) {
    return /*css*/ `
    .${language.referenceName} .progress-bar span {
        background: ${language.color};
        animation: animation-${language.referenceName} 0.8s ease-out forwards;
        animation-play-state: paused;
    }

    @keyframes animation-${language.referenceName} {
        to {
            width: ${language.percentage}%;
        }
    }
   
    .${language.referenceName} .progress-bar {
        border: 1px solid ${language.color};
    }
    
    .${language.referenceName} {
        color: ${language.color};
    }
    `;
}