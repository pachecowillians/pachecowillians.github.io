import { projectHTML } from "../components/project.js";
import { projects, projectsInformationText } from "../data/project.js";

export function projectsHTML() {
    return projects.map((project) => (projectHTML(project))).join('');
}

export function projectInformationTextHTML() {
    return `<p>${projectsInformationText}</p>`
}