import { isProgressBarInViewport } from "./scripts/viewport.js";
import { setActiveSection } from "./scripts/navbar.js";
import { toggleTheme } from "./scripts/theme.js";
import { languagesCSS, languagesHTML } from "./scripts/language.js";
import { schoolingCSS, schoolingHTML } from "./scripts/scholarity.js";
import { coursesCSS, coursesHTML } from "./scripts/course.js";

document.querySelector("#theme-toggle").onclick = function() {
    toggleTheme();
}

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

document.querySelector(".programming-container").innerHTML = languagesHTML();
addCSS(languagesCSS());

document.querySelector(".scholarity-container").innerHTML = schoolingHTML();
addCSS(schoolingCSS());

document.querySelector(".courses-container").innerHTML = coursesHTML();
addCSS(coursesCSS());

let scrolling = false;

document.querySelector("main").onscroll = () => {
    scrolling = true;
};

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        scrollFunction();
    }
}, 300);

function scrollFunction() {
    let progressBars = document.querySelectorAll('.progress-bar span');
    [...progressBars].map((progressBar) => {
        if (isProgressBarInViewport(progressBar)) {
            progressBar.style.animationPlayState = 'running';
        }
    });
    let activeItem = document.querySelector(".selected-item").parentElement.parentElement.id;
    activeItem = activeItem.substring(0, activeItem.length - 'Item'.length);
    setActiveSection(activeItem);
}