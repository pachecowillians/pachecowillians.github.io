import { $ } from "./utils/selector.js"
import { Home } from "./pages/home.js";
import { setActiveSection } from "./utils/navbar.js";
import { toggleTheme } from "./utils/theme.js";
import { languagesCSS } from "./pages/programming.js";
import { progressBarsLoad } from "./components/language.js";
import { favicon } from "./components/favicon.js";

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

addCSS(languagesCSS());

$("head").innerHTML += favicon();

export function loadPage() {
    $("body").innerHTML = Home();

    $("#theme-toggle").onclick = () => { toggleTheme(); }

    $("main").onscroll = () => {
        progressBarsLoad();

        let activeItem = $(".selected-item").parentElement.parentElement.id;
        activeItem = activeItem.substring(0, activeItem.length - 'Item'.length);
        setActiveSection(activeItem);
    };
}

loadPage();