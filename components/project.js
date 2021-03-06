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
                <p>${project.description}</p>
            </div>
            <a href="${project.link}" class="project-item-button" target="_blank">
                <img src="${images.filter((image)=>(image.name=="github"))[0].path}" alt="GitHub">
                <span>GitHub</span>
            </a>
        </div>
    </div>
    `);
}