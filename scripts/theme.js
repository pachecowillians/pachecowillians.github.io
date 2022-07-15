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

let imagesToFilter = [
    "logo.svg",
    "github.svg",
    "nextjs.svg",
    "flask.svg",
    "controleeletronica.png"
];

export function toggleTheme() {
    let windowStyle = window.getComputedStyle(document.documentElement);
    let actualBackground = windowStyle.getPropertyValue('--background').replace(/\s/g, '');
    let darkBackground = windowStyle.getPropertyValue('--background-dark').replace(/\s/g, '');

    if (actualBackground == darkBackground) {
        properties.map(prop => {
            document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-light)`);
        });

        imagesToFilter.map((image) => {
            let equalImages = document.querySelectorAll(`img[src$="${image}"]`);
            [...equalImages].map((equalImage) => {
                equalImage.style.setProperty("filter", "none");
            });
        });


        document.querySelector("#theme-toggle span").innerHTML = 'dark_mode';
    } else {
        properties.map(prop => {
            document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-dark)`);
        });

        imagesToFilter.map((image) => {
            let equalImages = document.querySelectorAll(`img[src$="${image}"]`);
            [...equalImages].map((equalImage) => {
                equalImage.style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
            });
        });

        document.querySelector("#theme-toggle span").innerHTML = 'light_mode';
    }
}