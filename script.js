var darkTheme = false;
var selected = "profile";
let sections = [
    "profile",
    "programming",
    "school",
    "professional",
    "projects"
];

document.querySelector("#theme-toggle").onclick = function() {
    let properties = [
        "background",
        "darkgrey",
        "darkblue",
        "black",
        "lightblue",
        "grey",
        "white",
        "text"
    ];

    if (!darkTheme) {
        properties.map(prop => {
            document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-dark)`);
        });
        document.querySelector("#logoNavbar").style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
        document.querySelector("#logoTopbar").style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
        document.querySelector("#github").style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
    } else {
        properties.map(prop => {
            document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-light)`);
        });
        document.querySelector("#logoNavbar").style.setProperty("filter", "none");
        document.querySelector("#logoTopbar").style.setProperty("filter", "none");
        document.querySelector("#github").style.setProperty("filter", "none");

    }
    darkTheme = !darkTheme;
}

sections.map(section => {
    document.querySelector(`#${section}Icon`).onclick = function() {
        let icon = document.querySelector(`#${section}Icon`);
        let iconSpan = icon.querySelector("span");
        iconSpan.classList.add("selected-item");

        let oldIcon = document.querySelector(`#${selected}Icon`);
        let oldIconSpan = oldIcon.querySelector("span");
        oldIconSpan.classList.remove("selected-item");

        selected = section;
    }
});


// const appHeight = () => {
//     const doc = document.documentElement
//     doc.style.setProperty('--app-height', `${window.innerHeight}px`)
// }
// window.addEventListener('resize', appHeight)
// appHeight();

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});