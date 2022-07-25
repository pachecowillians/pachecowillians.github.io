import { $ } from "./utils/selector.js"
import { Home } from "./pages/home.js";
import { setActiveSection } from "./utils/navbar.js";
import { toggleTheme } from "./utils/theme.js";
import { languagesCSS } from "./pages/programming.js";
import { progressBarsLoad } from "./components/language.js";
import { favicon } from "./components/favicon.js";

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

let scrolling = false;

addCSS(languagesCSS());

$("head").innerHTML += favicon();

export function loadPage() {
    $("body").innerHTML = Home();

    $("#theme-toggle").onclick = () => { toggleTheme(); }

    $("main").onscroll = () => { scrolling = true; };

    setActiveSection();

    setInterval(() => {
        if (scrolling) {
            scrolling = false;

            progressBarsLoad();
            setActiveSection();
        }
    }, 200);
}

loadPage();

window.addEventListener("load", function() {
    setActiveSection();
}, false);