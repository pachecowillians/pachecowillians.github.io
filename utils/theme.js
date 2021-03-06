import { colors } from "../data/colors.js";
import { $ } from "./selector.js";

export function toggleTheme() {
    let windowStyle = window.getComputedStyle(document.documentElement);
    let actualBackground = windowStyle.getPropertyValue('--background').replace(/\s/g, '');
    let darkBackground = windowStyle.getPropertyValue('--background-dark').replace(/\s/g, '');

    if (actualBackground == darkBackground) {
        colors.map(color => {
            document.documentElement.style.setProperty(`--${color}`, `var(--${color}-light)`);
        });

        $("#theme-toggle span").innerHTML = 'dark_mode';
    } else {
        colors.map(color => {
            document.documentElement.style.setProperty(`--${color}`, `var(--${color}-dark)`);
        });

        $("#theme-toggle span").innerHTML = 'light_mode';
    }
}