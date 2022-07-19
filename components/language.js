import { images } from "../data/images.js";
import { isProgressBarInViewport } from "../utils/viewport.js";

export function languageHTML(language) {
    return /*html*/ `
        <div class="language-container ${language.referenceName}">
            <img src="${images.filter(image=> image.name==language.referenceName)[0].path}" alt="${language.name}" id="${language.referenceName}">
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

export function progressBarsLoad() {
    let progressBars = document.querySelectorAll('.progress-bar span');
    [...progressBars].map((progressBar) => {
        if (isProgressBarInViewport(progressBar)) {
            progressBar.style.animationPlayState = 'running';
        }
    });
}