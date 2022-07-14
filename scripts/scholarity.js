import { schooling } from "../data/schooling.js";

export function schoolingHTML() {
    return schooling.map((scholarity) => (scholarityHTML(scholarity))).join('');
}

export function schoolingCSS() {
    return schooling.map((scholarity) => (scholarityCSS(scholarity))).join('\n');
}

function scholarityHTML(scholarity) {
    return `
            <details class="scholarity-item ${scholarity.className}">
                <summary>
                    <div class="scholarity-item-texts">
                        <div class="scholarity-item-information">
                            <div class="scholarity-item-title">
                                <div>
                                    <p>${scholarity.name}</p>
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </div>
                            </div>
                            <div class="scholarity-item-date">
                                <p>${scholarity.data}</p>
                            </div>
                        </div>
                        <div class="scholarity-item-percentage">
                            <span>${scholarity.percentage}%</span>
                        </div>
                    </div>

                    <div class="progress-bar">
                        <span></span>
                    </div>
                </summary>
                <div class="scholarity-collapse">
                    <h3>Description</h3>
                    <p>${scholarity.description}</p>
                    <h3>Subjects Studied</h3>
                    <ul>
                        ${scholarity.subjectsStudied.map((subject)=>(`<li>${subject}</li>`)).join('')}
                    </ul>
                </div>
            </details>
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