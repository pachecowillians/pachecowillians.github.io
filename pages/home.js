import { Navbar } from "../components/navbar.js";
import { Profile } from "./profile.js";
import { Programming } from "./programming.js";
import { School } from "./school.js";
import { Professional } from "./professional.js";
import { Projects } from "./projects.js";
import { optionMenu } from "../components/optionMenu.js";

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
    ${ optionMenu() }
    `;
}