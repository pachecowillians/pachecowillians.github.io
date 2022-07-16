import { projects } from "../data/projects.js";

export function projectsHTML() {
    return projects.map((project) => (projectHTML(project))).join('');
}

function projectHTML(project) {
    console.log("entrou");
    return (`
    <div class="project-item">
        <div class="project-item-hidden">
            <div class="project-item-hidden-information">
                <div class="project-item-hidden-header">
                    <h2>${project.name}</h2>
                    <img src="img/Social/github.svg" alt="GitHub">
                </div>
                <div class="project-item-hidden-description">
                    <p>${project.description}</p>
                </div>
            </div>
            <div class="project-item-hidden-languages">
                ${project.languages.map((language)=>(`<img src="img/Languages/${language}.svg" alt="HTML">`)).join('')}
            </div>
        </div>
        <div class="project-item-visible">
            <img src="img/Projects/${project.referenceName}.png" alt="${project.name}">
            <div class="project-item-information">
                <span class="material-symbols-outlined">
                    info
                </span>
            </div>
        </div>
        <div class="project-item-pin-fixed">
        </div>
    </div>
    `);
}