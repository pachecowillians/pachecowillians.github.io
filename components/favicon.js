import { images } from "../data/images.js";

export function favicon() {
    return /*html */ `
        <link rel="icon" href="${images.filter((image)=>(image.name=="favicon"))[0].path}">
    `;
}