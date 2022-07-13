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

export function toggleTheme() {
    let windowStyle = window.getComputedStyle(document.documentElement);
    let actualBackground = windowStyle.getPropertyValue('--background').replace(/\s/g, '');
    let darkBackground = windowStyle.getPropertyValue('--background-dark').replace(/\s/g, '');

    let imagesToFilter = [
        "logoNavbar",
        "logoTopbar",
        "github",
        "nextjs",
        "flask"
    ]

    if (actualBackground == darkBackground) {
        properties.map(prop => {
            document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-light)`);
        });

        imagesToFilter.map((image) => {
            document.querySelector(`#${image}`).style.setProperty("filter", "none");
        });
    } else {
        properties.map(prop => {
            document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-dark)`);
        });

        imagesToFilter.map((image) => {
            document.querySelector(`#${image}`).style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
        });
    }
}