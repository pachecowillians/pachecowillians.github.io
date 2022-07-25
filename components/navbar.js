import { images } from "../data/images.js";
import { navbarData } from "../data/sections.js";
import { $ } from "../utils/selector.js";
import { getCurrentLanguage, toggleLanguage } from "../utils/translate.js";
import { navbarIcon } from "./navbarIcon.js";

let sectionState = navbarData[getCurrentLanguage()];

function renderNavbar() {
    const newElement = document.createElement('template');
    newElement.innerHTML = Navbar();
    $("body").replaceChild(newElement.content, $("#sidebar"));
}

function setNavbar(callback) {
    callback();
    renderNavbar();
}

window.addEventListener("load", function() {
    $("#language-toggle").addEventListener(
        "click",
        function() {
            toggleLanguage();
            setNavbar(() => { sectionState = navbarData[getCurrentLanguage()] });
        },
        false
    );
}, false);

export function Navbar() {
    return /*html*/ `
    <aside id="sidebar">
        <div class="logo-container">
            <a href="#profile">
                <img src="${images.filter(image=> image.name=='logo')[0].path}" alt="Logo" id="logoNavbar">
            </a>
        </div>
        <div id="sidebar-menu">
            ${sectionState.map((section) => (navbarIcon(section))).join('')}
        </div>
    </aside>
    `;
}