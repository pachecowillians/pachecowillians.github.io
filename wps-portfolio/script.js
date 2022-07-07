var darkTheme = false;

document.querySelector("#theme-toggle").onclick = function() {
    if (!darkTheme) {
        document.documentElement.style.setProperty("--background", "var(--background-dark)");
        document.documentElement.style.setProperty("--darkgrey", "var(--darkgrey-dark)");
        document.documentElement.style.setProperty("--darkblue", "var(--darkblue-dark)");
        document.documentElement.style.setProperty("--black", "var(--black-dark)");
        document.documentElement.style.setProperty("--lightblue", "var(--lightblue-dark)");
        document.documentElement.style.setProperty("--grey", "var(--grey-dark)");
        document.documentElement.style.setProperty("--white", "var(--white-dark)");
        document.documentElement.style.setProperty("--menu-option", "var(--white-dark)");
        document.querySelector("#logo").style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
    } else {
        document.documentElement.style.setProperty("--background", "var(--background-light)");
        document.documentElement.style.setProperty("--darkgrey", "var(--darkgrey-light)");
        document.documentElement.style.setProperty("--darkblue", "var(--darkblue-light)");
        document.documentElement.style.setProperty("--black", "var(--black-light)");
        document.documentElement.style.setProperty("--lightblue", "var(--lightblue-light)");
        document.documentElement.style.setProperty("--grey", "var(--grey-light)");
        document.documentElement.style.setProperty("--white", "var(--white-light)");
        document.documentElement.style.setProperty("--menu-option", "var(--black-light)");
        document.querySelector("#logo").style.setProperty("filter", "none");
    }
    darkTheme = !darkTheme;
}