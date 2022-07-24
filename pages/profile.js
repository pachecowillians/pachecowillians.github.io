import { socialMedia } from "../components/socialMedia.js";
import { images } from "../data/images.js";
import { description, socialMediaItems } from "../data/profile.js";
import { getCurrentLanguage, toggleLanguage } from "../utils/translate.js"

let $ = (identifier) => {
    const element = document.querySelectorAll(identifier);
    if (element.length > 1) {
        return element;
    } else if (element.length == 1) {
        return element[0];
    }
}

let descriptionState = {
    description: description[getCurrentLanguage()]
}

function renderProfile() {


    const template = document.createElement('template');
    template.innerHTML = Profile();

    $("main").replaceChild(template.content, $("#profile"));
}

function setDescriptionState(callback) {
    callback();
    renderProfile();
}

export function Profile() {
    return /*html*/ `
    <section id="profile">
        <div class="container">
            <img src="${images.filter(image => image.name=='profile')[0].path}" alt="Profile Picture" id="profileImg">
            <h1>Willian Pacheco Silva</h1>
            <div class="social-media"> ${
                socialMediaItems.map((socialMediaItem) => (socialMedia(socialMediaItem))).join('')
            } </div>
            <div class="profile-text"> <span>${descriptionState.description}</span> </div>
        </div>
    </section>
    `;
}

window.onload = function(e) {
    $("#language-toggle").onclick = () => {
        toggleLanguage();
        setDescriptionState(() => { descriptionState.description = description[getCurrentLanguage()] });
    }
}