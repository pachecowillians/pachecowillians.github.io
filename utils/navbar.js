import { $ } from "./selector.js";
import { isSectionInViewport } from "./viewport.js";
import { navbarData } from "../data/sections.js";
import { getCurrentLanguage } from "../utils/translate.js"

let sections = navbarData[getCurrentLanguage()];

export function setActiveSection() {
    var i = 0;

    while (i < sections.length && !isSectionInViewport($(`#${sections[i].referenceName}`))) {
        i++;
    }

    let oldIcon = $(".selected-item");
    oldIcon.classList.remove("selected-item");

    let icon = $(`#${sections[i].referenceName}Icon`);
    icon.classList.add("selected-item");
}