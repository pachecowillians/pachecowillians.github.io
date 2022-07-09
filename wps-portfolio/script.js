var darkTheme = false;

document.querySelector("#theme-toggle").onclick = function() {
    let properties = [
        "background",
        "darkgrey",
        "darkblue",
        "black",
        "lightblue",
        "grey",
        "white",
        "menu-option"
    ];

    if (!darkTheme) {
        properties.map(prop => {
            document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-dark)`);
        });
        document.querySelector("#logo").style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
    } else {
        properties.map(prop => {
            document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-light)`);
        });
        document.querySelector("#logo").style.setProperty("filter", "none");
    }
    darkTheme = !darkTheme;
}