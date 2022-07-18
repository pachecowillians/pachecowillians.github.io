import { isProgressBarInViewport } from "./scripts/viewport.js";
import { setActiveSection } from "./scripts/navbar.js";
import { toggleTheme } from "./scripts/theme.js";
import { languagesCSS, languagesHTML } from "./scripts/language.js";
import { schoolingHTML } from "./scripts/scholarity.js";
import { coursesHTML } from "./scripts/course.js";
import { projectsHTML } from "./scripts/project.js";

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
let scrolling = false;

document.querySelector(".programming-container").innerHTML = languagesHTML();
addCSS(languagesCSS());

document.querySelector(".scholarity-container").innerHTML = schoolingHTML();

document.querySelector(".courses-container").innerHTML = coursesHTML();

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
}, 200);

let schoolItems = document.querySelectorAll(".school-item-container");

[...schoolItems].map((item) => {
    item.onclick = (event) => {
        let schoolItem = event.currentTarget;
        if (schoolItem.classList.contains("item-active")) {
            schoolItem.classList.remove("item-active");
        } else {
            schoolItem.classList.add("item-active");
        }
    };
})

document.querySelector(".projects-container").innerHTML = projectsHTML();

function setProjectItemHeight() {
    let items = document.querySelectorAll(".project-item");
    let width = items[0].offsetWidth;
    [...items].map((item) => {
        item.style.height = `${width * 245.094/435.938}px`;
    })
}

window.addEventListener("resize", setProjectItemHeight);
window.addEventListener("load", setProjectItemHeight);

let projectItems = document.querySelectorAll(".project-item");

[...projectItems].map((item) => {
    item.onclick = (event) => {
        let projectItem = event.currentTarget;
        if (projectItem.classList.contains("item-active")) {
            projectItem.classList.remove("item-active");
            projectItem.querySelector(".project-item-info span").innerHTML = "info";
        } else {
            projectItem.classList.add("item-active");
            projectItem.querySelector(".project-item-info span").innerHTML = "horizontal_rule";
        }
    };
})