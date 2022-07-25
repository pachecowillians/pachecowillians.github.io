import { $ } from "./selector.js";
import { isSectionInViewport } from "./viewport.js";
import { navbarData } from "../data/sections.js";
import { getCurrentLanguage } from "../utils/translate.js"

let sections = navbarData[getCurrentLanguage()];

export function setActiveSection(oldSection) {
    var i = 0;

    while (i < sections.length && !isSectionInViewport($(`#${sections[i].referenceName}`))) {
        i++;
    }

    if (oldSection != sections[i].referenceName) {
        let oldIcon = $(".selected-item");
        oldIcon.classList.remove("selected-item");

        let icon = $(`#${sections[i].referenceName}Icon`);
        icon.classList.add("selected-item");
    }
}