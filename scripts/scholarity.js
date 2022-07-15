import { schooling } from "../data/schooling.js";

export function schoolingHTML() {
    return schooling.map((scholarity) => (scholarityHTML(scholarity))).join('');
}

function scholarityHTML(scholarity) {
    return `
    <div class="school-item-container ${scholarity.className}">
        <div class="school-item-toggle-icon">
            <span class="material-symbols-outlined">
                navigate_next
            </span>
        </div>
        <div class="school-item-information">
            <div class="school-item-visible-area">
                <div class="school-item-header">
                    <div class="school-item-header-information">
                        <h2>${scholarity.name}</h2>
                        <p>${scholarity.date}</p>
                    </div>
                </div>
            </div>
            <div class="school-item-collapse-area">
                <h3>Description</h3>
                <p>${scholarity.description}</p>
                <h3>Subjects Studied</h3>
                <ul>
                    ${scholarity.subjectsStudied.map((subject)=>(`<li>${subject}</li>`)).join('')}
                </ul>
            </div>
        </div>
    </div>
        `;
}