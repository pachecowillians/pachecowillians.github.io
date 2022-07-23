import { sections } from "../data/sections.js";
import { Home } from "../pages/home.js";
import { loadPage } from "../script.js";

let actualLanguage = 'portuguese';

export function toggleLanguage() {
    let profileLanguage = document.querySelector("#profileIcon span:nth-child(2)").innerHTML;
    let profileLanguagePortuguese = sections.filter(language => language.referenceName == 'profile')[0].name.portuguese;

    if (profileLanguage == profileLanguagePortuguese) {
        actualLanguage = 'english';
    } else {
        actualLanguage = 'portuguese';
    }

    //document.querySelector("body").innerHTML = Home();
    loadPage();
}

export function getCurrentLanguage() {
    return actualLanguage;
}