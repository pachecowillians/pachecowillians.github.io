import { languageCSS, languageHTML } from "../components/language.js";
import { informationText, languages } from "../data/programming.js";
import { getCurrentLanguage } from "../utils/translate.js"

export function Programming() {
    return /*html*/ `
    <section id="programming">
        <div class="container">
            <div class="information-text"><span>${informationText[getCurrentLanguage()]}</span></div>
            <div class="programming-container">${
                languages.map((language) => (languageHTML(language))).join('')
            }</div>
        </div>
    </section>
    `;
}

export function languagesCSS() {
    return languages.map((language) => (languageCSS(language))).join('\n');
}