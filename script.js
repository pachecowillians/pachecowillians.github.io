import { isProgressBarInViewport } from "./functions/viewport.js";
import { setActiveSection, sidebarIconsHTML } from "./functions/navbar.js";
import { toggleTheme } from "./functions/theme.js";
import { languagesCSS, languagesHTML } from "./functions/language.js";
import { schoolingHTML } from "./functions/scholarity.js";
import { coursesHTML } from "./functions/course.js";
import { projectsHTML } from "./functions/project.js";
import { profileDescription } from "./data/profile.js";
import { socialMediaHTML } from "./functions/socialMedia.js";

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

let scrolling = false;

function progressBarsLoad() {
    let progressBars = document.querySelectorAll('.progress-bar span');
    [...progressBars].map((progressBar) => {
        if (isProgressBarInViewport(progressBar)) {
            progressBar.style.animationPlayState = 'running';
        }
    });
}

function scrollPage() {
    progressBarsLoad();

    let activeItem = document.querySelector(".selected-item").parentElement.parentElement.id;
    activeItem = activeItem.substring(0, activeItem.length - 'Item'.length);
    setActiveSection(activeItem);
}

function setProjectItemHeight() {
    let items = document.querySelectorAll(".project-item");
    let width = items[0].offsetWidth;
    [...items].map((item) => {
        item.style.height = `${width * 245.094/435.938}px`;
    })
}

document.querySelector(".programming-container").innerHTML = languagesHTML();
addCSS(languagesCSS());

document.querySelector(".scholarity-container").innerHTML = schoolingHTML();

document.querySelector(".courses-container").innerHTML = coursesHTML();


document.querySelector("main").onscroll = () => { scrolling = true; };

document.querySelector("#theme-toggle").onclick = () => { toggleTheme(); }

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        scrollPage();
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

document.querySelector("#sidebar-menu").innerHTML = sidebarIconsHTML();

window.addEventListener("resize", setProjectItemHeight);

window.addEventListener("load", setProjectItemHeight);

let projectItems = document.querySelectorAll(".project-item-info");

[...projectItems].map((item) => {
    item.onclick = (event) => {
        let projectItem = event.currentTarget.parentElement;
        if (projectItem.classList.contains("item-active")) {
            projectItem.classList.remove("item-active");
            projectItem.querySelector(".project-item-info span").innerHTML = "info";
        } else {
            projectItem.classList.add("item-active");
            projectItem.querySelector(".project-item-info span").innerHTML = "<span style='color:var(--text)'> horizontal_rule </span>";
        }
    };
})

document.querySelector(".profile-text").innerHTML = `<p>${profileDescription}</p>`
document.querySelector(".social-media").innerHTML = socialMediaHTML();