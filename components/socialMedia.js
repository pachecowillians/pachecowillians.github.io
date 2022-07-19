export function socialMedia(media) {
    return /*html*/ `
    <a href="${media.link}" target="_blank">
        <img src="img/Social/${media.referenceName}.svg" alt="${media.name}" id="${media.referenceName}">
    </a>
    `;
}