import { colors } from "../data/colors.js";
import { images } from "../data/images.js";

export function toggleTheme() {
    console.log(images)
    let windowStyle = window.getComputedStyle(document.documentElement);
    let actualBackground = windowStyle.getPropertyValue('--background').replace(/\s/g, '');
    let darkBackground = windowStyle.getPropertyValue('--background-dark').replace(/\s/g, '');

    let imagesToFilter = images.filter((image) => (image.filter));

    if (actualBackground == darkBackground) {
        colors.map(color => {
            document.documentElement.style.setProperty(`--${color}`, `var(--${color}-light)`);
        });

        imagesToFilter.map((image) => {
            let equalImages = document.querySelectorAll(`img[src*="${image.name}"]`);
            [...equalImages].map((equalImage) => {
                equalImage.style.setProperty("filter", "none");
            });
        });


        document.querySelector("#theme-toggle span").innerHTML = 'dark_mode';
    } else {
        colors.map(color => {
            document.documentElement.style.setProperty(`--${color}`, `var(--${color}-dark)`);
        });

        imagesToFilter.map((image) => {
            let equalImages = document.querySelectorAll(`img[src*="${image.name}"]`);
            [...equalImages].map((equalImage) => {
                equalImage.style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
            });
        });

        document.querySelector("#theme-toggle span").innerHTML = 'light_mode';
    }
}