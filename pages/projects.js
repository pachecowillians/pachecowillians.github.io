import { projectHTML } from "../components/project.js";
import { informationText, projects } from "../data/project.js";

export function Projects() {
    return /*html*/ `
    <section id="projects">
        <div class="container">
            <div class="information-text"><span>${informationText}</span></div>
            <div class="projects-container">${
                projects.map((project) => (projectHTML(project))).join('')
            }</div>
        </div>
    </section>
    `;
}