import { projectHTML } from "../components/project.js";
import { informationText, projects } from "../data/project.js";

export function Projects() {
    return `
    <section id="projects">
        <div class="container">
            <div class="information-text">${informationText}</div>
            <div class="projects-container">${
                projects.map((project) => (projectHTML(project))).join('')
            }</div>
        </div>
    </section>
    `;
}