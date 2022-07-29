import { images } from "../data/images.js";

export function optionMenu() {
    return /*html*/ `
    <aside id="option-menu">
        <div class="menu-icon" id="theme-toggle">
            <span class="material-symbols-outlined">
                dark_mode
            </span>
        </div>
        <a href="#profile">
            <img src="${images.filter(image => image.name=='logo')[0].path}" alt="Logo" id="logoTopbar" title="WPS">
        </a>
        <div class="menu-icon" id="language-toggle">
            <span class="material-symbols-outlined">
                translate
            </span>
        </div>
    </aside>
    `;
}