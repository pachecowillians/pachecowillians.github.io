import { $ } from "../utils/selector.js";
import { professionalItemHTML } from "../components/professional.js";
import { professionalData } from "../data/professional.js";
import { getCurrentLanguage } from "../utils/translate.js";

let professionalState = professionalData[getCurrentLanguage()];

function renderProfessional() {
    const newElement = document.createElement('template');
    newElement.innerHTML = Professional();
    $("main").replaceChild(newElement.content, $("#professional"));
}

function setProfessional(callback) {
    callback();
    renderProfessional();
    setActiveSection();
}

window.addEventListener("load", function() {
    $("#language-toggle").addEventListener(
        "click",
        function() {
            setProfessional(() => { professionalState = professionalData[getCurrentLanguage()] });
        },
        false
    );
    setProfessional(() => { professionalState = professionalData[getCurrentLanguage()] });
}, false);


export function Professional() {
    return /*html*/ `
    <section id="professional">
        <div class="container">
            <div class="information-text"><span>${professionalState.informationText}</span></div>
            <div class="professional-items-container">${
                professionalState.professionalItems.map((professionalItem) => (professionalItemHTML(professionalItem, professionalState.titles))).join('')
            }</div>
        </div>
    </section>
    `;
}