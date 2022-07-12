import { isInViewport, isSectionInViewport } from "./viewport.js";
import { sections } from "../data/sections.js";

export function setActiveSection(oldSection) {
    var i = 0;

    while (i < sections.length && !isSectionInViewport(document.querySelector(`#${sections[i].name}`))) {
        i++;
    }

    if (oldSection != sections[i].name) {
        let oldIcon = document.querySelector(`#${oldSection}Icon span`);
        oldIcon.classList.remove("selected-item");

        let icon = document.querySelector(`#${sections[i].name}Icon span`);
        icon.classList.add("selected-item");
    }
}