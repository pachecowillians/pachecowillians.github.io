import { sections } from "../data/sections.js";
import { loadPage } from "../app.js";

let actualLanguage = 'portuguese';

export function toggleLanguage() {
    let profileLanguage = document.querySelector("#profileIcon span:nth-child(2)").innerHTML;
    let profileLanguagePortuguese = sections.filter(language => language.referenceName == 'profile')[0].name.portuguese;

    if (profileLanguage == profileLanguagePortuguese) {
        actualLanguage = 'english';
    } else {
        actualLanguage = 'portuguese';
    }

    loadPage();
}

export function getCurrentLanguage() {
    return actualLanguage;
}