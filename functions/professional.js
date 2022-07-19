import { professionalItemHTML } from "../components/professional.js";
import { professionalInformationText, professionalItems, professionalTitles } from "../data/professional.js";

export function professionalItemsHTML() {
    return [...professionalItems].map((professionalItem) => (professionalItemHTML(professionalItem))).join('');
}

export function professionalInformationTextHTML() {
    return `<p>${professionalInformationText}</p>`
}

export function professionalWebsiteHTML() {
    return `<h3>${professionalTitles.website}</h3>`
}


export function professionalDescriptionHTML() {
    return `<h3>${professionalTitles.description}</h3>`
}

export function professionalTasksHTML() {
    return `<h3>${professionalTitles.tasks}</h3>`
}