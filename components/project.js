import { images } from "../data/images.js";

export function projectHTML(project) {
    return ( /*html*/ `
    <div class="project-item">
        <div class="project-item-image">
            <img src="${images.filter((image)=>(image.name==project.referenceName))[0].path}" alt="GitHub">
        </div>
        <div class="project-item-content">
            <div class="project-item-information">
                <h2>${project.name}</h2>
                <div class="project-item-languages">
                    ${project.languages.map((language)=>(`<img src="${images.filter((image)=>(image.name==language))[0].path}" alt="${language}" title="${language}">`)).join('')}
                </div>
                <p>Cronômetro utilizado para o método Pomodoro de gerenciamento de tempo</p>
            </div>
            <a href="${project.link}" class="project-item-button" target="_blank">
                <img src="${images.filter((image)=>(image.name=="githubwhite"))[0].path}" alt="GitHub">
                <span>GitHub</span>
            </a>
        </div>
    </div>
    `);
}

export function setProjectItemHeight() {
    let items = document.querySelectorAll(".project-item");
    let width = items[0].offsetWidth;
    [...items].map((item) => {
        item.style.height = `${width * 245.094/435.938}px`;
    })
}

export function toggleProjectItem(projectItem) {
    if (projectItem.classList.contains("item-active")) {
        projectItem.classList.remove("item-active");
        projectItem.querySelector(".project-item-info span").innerHTML = "info";
    } else {
        projectItem.classList.add("item-active");
        projectItem.querySelector(".project-item-info span").innerHTML = "<span style='color:var(--text)'> horizontal_rule </span>";
    }
}