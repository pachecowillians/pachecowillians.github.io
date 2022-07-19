import { isSectionInViewport } from "./viewport.js";
import { sections } from "../data/sections.js";
import { navbarIconHTML } from "../components/navbarIcon.js";

export function setActiveSection(oldSection) {
    var i = 0;

    while (i < sections.length && !isSectionInViewport(document.querySelector(`#${sections[i].referenceName}`))) {
        i++;
    }

    if (oldSection != sections[i].referenceName) {
        let oldIcon = document.querySelector(".selected-item");
        oldIcon.classList.remove("selected-item");

        let icon = document.querySelector(`#${sections[i].referenceName}Icon`);
        icon.classList.add("selected-item");
    }
}

export function navbarIconsHTML() {
    return sections.map((section) => (navbarIconHTML(section))).join('');
}