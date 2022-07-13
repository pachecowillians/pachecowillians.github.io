import { isProgressBarInViewport } from "./scripts/viewport.js";
import { setActiveSection } from "./scripts/navbar.js";
import { toggleTheme } from "./scripts/theme.js";
import { languagesCSS, languagesHTML } from "./scripts/language.js";
import { schoolingCSS, schoolingHTML } from "./scripts/scholarity.js";
import { coursesCSS, coursesHTML } from "./scripts/course.js";

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
let scrolling = false;

document.querySelector(".programming-container").innerHTML = languagesHTML();
addCSS(languagesCSS());

document.querySelector(".scholarity-container").innerHTML = schoolingHTML();
addCSS(schoolingCSS());

document.querySelector(".courses-container").innerHTML = coursesHTML();
addCSS(coursesCSS());

function progressBarsLoad() {
    let progressBars = document.querySelectorAll('.progress-bar span');
    [...progressBars].map((progressBar) => {
        if (isProgressBarInViewport(progressBar)) {
            progressBar.style.animationPlayState = 'running';
        }
    });
}

function onScroll() {
    progressBarsLoad();

    let activeItem = document.querySelector(".selected-item").parentElement.parentElement.id;
    activeItem = activeItem.substring(0, activeItem.length - 'Item'.length);
    setActiveSection(activeItem);
}


document.querySelector("main").onscroll = () => {
    scrolling = true;
};

document.querySelector("#theme-toggle").onclick = function() {
    toggleTheme();
}

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        onScroll();
    }
}, 300);