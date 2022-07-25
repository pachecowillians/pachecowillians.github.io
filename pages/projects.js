import { $ } from "../utils/selector.js";
import { projectHTML } from "../components/project.js";
import { projectsData } from "../data/projects.js";
import { getCurrentLanguage } from "../utils/translate.js"

let projectsState = projectsData[getCurrentLanguage()];

function renderProjects() {
    const newElement = document.createElement('template');
    newElement.innerHTML = Projects();
    $("main").replaceChild(newElement.content, $("#projects"));
}

function setProjects(callback) {
    callback();
    renderProjects();
}

window.addEventListener("load", function() {
    $("#language-toggle").addEventListener(
        "click",
        function() {
            setProjects(() => { projectsState = projectsData[getCurrentLanguage()] });
        },
        false
    );
    setProjects(() => { projectsState = projectsData[getCurrentLanguage()] });
}, false);

export function Projects() {
    return /*html*/ `
    <section id="projects">
        <div class="container">
            <div class="information-text"><span>${projectsState.informationText}</span></div>
            <div class="projects-container">${
                projectsState.projects.map((project) => (projectHTML(project))).join('')
            }</div>
        </div>
    </section>
    `;
}