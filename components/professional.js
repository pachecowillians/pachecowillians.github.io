import { images } from "../data/images.js";

export function professionalItemHTML(professional, titles) {
    return /* html */ `
    <div class="professional-item">
        <div class="professional-item-header">
            <div class="professional-item-header-image">
                <img src="${images.filter(image => image.name==professional.referenceName)[0].path}" alt="${professional.name}" id="${professional.referenceName}">
            </div>
            <div class="professional-item-header-information">
                <h2>${professional.name}</h2>
                <p>${professional.date}</p>
            </div>
        </div>
        <div class="professional-item-informations">
            <h3>${titles.website}</h3>
            <a href="${professional.link}" target="_blank">${professional.link}</a>
            <h3>${titles.description}</h3>
            <p>${professional.description}</p>
            <h3>${titles.tasks}</h3>
            <ul>
                ${professional.tasks.map((task)=>(`<li>${task}</li>`)).join('')}
            </ul>
        </div>
    </div>
    `;
}