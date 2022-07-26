import { images } from "../data/images.js";
import { navbarData } from "../data/sections.js";
import { setActiveSection } from "../utils/navbar.js";
import { $ } from "../utils/selector.js";
import { getCurrentLanguage } from "../utils/translate.js";
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
    setActiveSection();
}

window.addEventListener("load", function() {
    $("#language-toggle").addEventListener(
        "click",
        function() {
            setNavbar(() => { sectionState = navbarData[getCurrentLanguage()] });
        },
        false
    );
    setNavbar(() => { sectionState = navbarData[getCurrentLanguage()] });
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