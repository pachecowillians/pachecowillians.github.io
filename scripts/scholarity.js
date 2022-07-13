import { schooling } from "../data/schooling.js";

export function schoolingHTML() {
    return schooling.map((scholarity) => (scholarityHTML(scholarity))).join('');
}

export function schoolingCSS() {
    return schooling.map((scholarity) => (scholarityCSS(scholarity))).join('\n');
}

function scholarityHTML(scholarity) {
    return `
            <div class="scholarity-item ${scholarity.className}">
                <div class="scholarity-item-texts">
                    <div class="scholarity-item-information">
                        <div class="scholarity-item-title">
                            <a href="">
                                <p>${scholarity.name}</p>
                                <span class="material-symbols-outlined">
                                    link
                                </span>
                            </a>
                        </div>
                        <div class="scholarity-item-date">
                            <p>${scholarity.begin} - ${scholarity.end}</p>
                        </div>
                    </div>
                    <div class="scholarity-item-percentage">
                        <span>${scholarity.percentage}%</span>
                    </div>
                </div>

                <div class="progress-bar">
                    <span></span>
                </div>
            </div>
        `;
}

function scholarityCSS(scholarity) {
    return `
    .${scholarity.className} .progress-bar span {
        background: var(--lightblue);
        animation: animation-${scholarity.className} 1.4s ease-out forwards;
        animation-play-state: paused;

    }
    
    @keyframes animation-${scholarity.className} {
        to {
            width: ${scholarity.percentage}%;
        }
    }
    `;
}