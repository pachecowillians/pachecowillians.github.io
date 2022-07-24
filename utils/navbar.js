import { isSectionInViewport } from "./viewport.js";
import { sections } from "../data/sections.js";
import { $ } from "./selector.js";

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