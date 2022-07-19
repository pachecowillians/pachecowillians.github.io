import { Profile } from "./profile.js";
import { Programming } from "./programming.js";
import { School } from "./school.js";
import { Professional } from "./professional.js";
import { Projects } from "./projects.js";
import { Navbar } from "../components/navbar.js";

export function Home() {
    return /*html */ `
    ${ Navbar() }
    <main>
        ${ Profile() }
        ${ Programming() }
        ${ School() }
        ${ Professional() }
        ${ Projects() }
    </main>
    <aside id="option-menu">
        <div class="menu-icon" id="theme-toggle">
            <span class="material-symbols-outlined">
                dark_mode
            </span>
        </div>
        <a href="#profile">
            <img src="img/Logo/logo.svg" alt="Logo" id="logoTopbar">
        </a>
        <div class="menu-icon" id="language-toggle">
            <span class="material-symbols-outlined">
                translate
            </span>
        </div>
    </aside>
    `;
}