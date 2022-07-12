import { isInViewport } from "./viewport.js";
import { sections } from "../data/sections.js";

export function setActiveSection(oldSection) {

    // sections.map(section => {
    //     if (isInViewport(document.querySelector(`#${section.name}`))) {
    //         if (oldSection != section.name) {
    //             let oldIcon = document.querySelector(`#${oldSection}Icon span`);
    //             oldIcon.classList.remove("selected-item");

    //             let icon = document.querySelector(`#${section.name}Icon span`);
    //             icon.classList.add("selected-item");
    //         }
    //     }
    // });
    var i = 0;
    while (i < sections.length && !isInViewport(document.querySelector(`#${sections[i].name}`))) {
        i++;
    }
    i++;
    console.log(sections[i].name);

    if (oldSection != sections[i].name) {
        let oldIcon = document.querySelector(`#${oldSection}Icon span`);
        oldIcon.classList.remove("selected-item");

        let icon = document.querySelector(`#${sections[i].name}Icon span`);
        icon.classList.add("selected-item");
    }
}