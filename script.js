import { Home } from "./pages/home.js";
import { setActiveSection } from "./utils/navbar.js";
import { toggleTheme } from "./utils/theme.js";
import { languagesCSS } from "./pages/programming.js";
import { toggleProjectItem } from "./components/project.js";
import { progressBarsLoad } from "./components/language.js";
import { toggleSchoolItem } from "./components/school.js";
import { favicon } from "./components/favicon.js";
import { toggleLanguage } from "./utils/translate.js";

export function loadPage() {
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

    let scrolling = false;

    addCSS(languagesCSS());

    document.querySelector("body").innerHTML = Home();

    document.querySelector("head").innerHTML += favicon();

    document.querySelector("#theme-toggle").onclick = () => { toggleTheme(); }

    document.querySelector("#language-toggle").onclick = () => { toggleLanguage(); }

    document.querySelector("main").onscroll = () => { scrolling = true; };

    let schoolItems = document.querySelectorAll(".school-item-container");

    [...schoolItems].map((item) => {
        item.onclick = (event) => { toggleSchoolItem(event.currentTarget); };
    })

    let projectItems = document.querySelectorAll(".project-item-info");

    [...projectItems].map((item) => {
        item.onclick = (event) => { toggleProjectItem(event.currentTarget.parentElement); };
    })

    setInterval(() => {
        if (scrolling) {
            scrolling = false;

            progressBarsLoad();

            let activeItem = document.querySelector(".selected-item").parentElement.parentElement.id;
            activeItem = activeItem.substring(0, activeItem.length - 'Item'.length);
            setActiveSection(activeItem);
        }
    }, 200);
}

loadPage();