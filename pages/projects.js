import { projectHTML } from "../components/project.js";
import { informationText, projects } from "../data/project.js";
import { getCurrentLanguage } from "../utils/translate.js"

export function Projects() {
    return /*html*/ `
    <section id="projects">
        <div class="container">
            <div class="information-text"><span>${informationText[getCurrentLanguage()]}</span></div>
            <div class="projects-container">${
                projects.map((project) => (projectHTML(project))).join('')
            }</div>
        </div>
    </section>
    `;
}