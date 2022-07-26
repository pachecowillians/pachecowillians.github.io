import { $ } from "../utils/selector.js";
import { languageCSS, languageHTML, progressBarsLoad } from "../components/language.js";
import { programmingData } from "../data/programming.js";
import { getCurrentLanguage } from "../utils/translate.js"

let programmingState = programmingData[getCurrentLanguage()];

function renderProgramming() {
    const newElement = document.createElement('template');
    newElement.innerHTML = Programming();
    $("main").replaceChild(newElement.content, $("#programming"));
}

function setProgramming(callback) {
    callback();
    renderProgramming();
    progressBarsLoad();
}

window.addEventListener("load", function() {
    $("#language-toggle").addEventListener(
        "click",
        function() {
            setProgramming(() => { programmingState = programmingData[getCurrentLanguage()] });
        },
        false
    );
    setProgramming(() => { programmingState = programmingData[getCurrentLanguage()] });
}, false);


export function Programming() {
    return /*html*/ `
    <section id="programming">
        <div class="container">
            <div class="information-text"><span>${programmingState.informationText}</span></div>
            <div class="programming-container">${
                programmingState.languages.map((language) => (languageHTML(language))).join('')
            }</div>
        </div>
    </section>
    `;
}

export function languagesCSS() {
    return programmingState.languages.map((language) => (languageCSS(language))).join('\n');
}