import { images } from "../data/images.js";

export function socialMedia(media) {
    return /*html*/ `
    <a href="${media.link}" target="_blank">
        <img src="${images.filter(image => image.name==media.referenceName)[0].path}" alt="${media.name}" id="${media.referenceName}">
    </a>
    `;
}