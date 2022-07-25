import { $ } from "./selector.js";

let actualLanguage = 'portuguese';

export function toggleLanguage() {
    if (actualLanguage == 'portuguese') {
        actualLanguage = 'english';
    } else {
        actualLanguage = 'portuguese';
    }
}

export function getCurrentLanguage() {
    return actualLanguage;
}

window.addEventListener("load", function() {
    $("#language-toggle").addEventListener(
        "click",
        function() {
            toggleLanguage();
        },
        false
    );
}, false);