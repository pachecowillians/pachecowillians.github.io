import { isProgressBarInViewport } from "./functions/viewport.js";
import { navbarIconsHTML, setActiveSection } from "./functions/navbar.js";
import { toggleTheme } from "./functions/theme.js";
import { languagesCSS, languagesHTML, programmingInformationTextHTML } from "./functions/language.js";
import { coursesTitleHTML, scholarityTitleHTML, schoolInformationTextHTML, schoolingHTML } from "./functions/school.js";
import { coursesHTML } from "./functions/school.js";
import { projectInformationTextHTML, projectsHTML } from "./functions/project.js";
import { professionalDescriptionHTML, professionalInformationTextHTML, professionalItemsHTML, professionalTasksHTML, professionalWebsiteHTML } from "./functions/professional.js";
import { Profile } from "./pages/profile.js";

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

document.querySelector("main").innerHTML += Profile();

document.querySelector("#programming .information-text").innerHTML = programmingInformationTextHTML();

document.querySelector("#programming .programming-container").innerHTML = languagesHTML();
addCSS(languagesCSS());

document.querySelector("#school .information-text").innerHTML = schoolInformationTextHTML();

document.querySelector("#school .scholarity").innerHTML += scholarityTitleHTML();

document.querySelector("#school .scholarity-container").innerHTML = schoolingHTML();

document.querySelector("#school .courses").innerHTML += coursesTitleHTML();

document.querySelector("#school .courses-container").innerHTML = coursesHTML();

document.querySelector("#professional .information-text").innerHTML = professionalInformationTextHTML();

document.querySelector("#professional .professional-items-container").innerHTML = professionalItemsHTML();

document.querySelector("#professional .professional-website").innerHTML = professionalWebsiteHTML();

document.querySelector("#professional .professional-description").innerHTML = professionalDescriptionHTML();

document.querySelector("#professional .professional-task").innerHTML = professionalTasksHTML();

document.querySelector("#projects .information-text").innerHTML = projectInformationTextHTML();

document.querySelector("#projects .projects-container").innerHTML = projectsHTML();

document.querySelector("#theme-toggle").onclick = () => { toggleTheme(); }

document.querySelector("#sidebar-menu").innerHTML = navbarIconsHTML();

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

document.querySelector("main").onscroll = () => { scrolling = true; };


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