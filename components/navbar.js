import { sections } from "../data/sections.js";
import { navbarIcon } from "./navbarIcon.js";

export function Navbar() {
    return /*html*/ `
    <aside id="sidebar">
        <div class="logo-container">
            <a href="#profile">
                <img src="img/Logo/logo.svg" alt="Logo" id="logoNavbar">
            </a>
        </div>
        <div id="sidebar-menu">
            ${sections.map((section) => (navbarIcon(section))).join('')}
        </div>
    </aside>
    `;
}