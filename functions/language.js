import { languageCSS, languageHTML } from "../components/language.js";
import { programmingInformationText, programmingLanguages } from "../data/programming.js";

export function languagesHTML() {
    return programmingLanguages.map((language) => (languageHTML(language))).join('');
}

export function languagesCSS() {
    return programmingLanguages.map((language) => (languageCSS(language))).join('\n');
}

export function programmingInformationTextHTML() {
    return `<p>${programmingInformationText}</p>`
}