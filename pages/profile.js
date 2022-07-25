import { $ } from "../utils/selector.js";
import { images } from "../data/images.js";
import { socialMedia } from "../components/socialMedia.js";
import { profileData } from "../data/profile.js";
import { getCurrentLanguage } from "../utils/translate.js"

let profileState = profileData[getCurrentLanguage()];

function renderProfile() {
    const newElement = document.createElement('template');
    newElement.innerHTML = Profile();
    $("main").replaceChild(newElement.content, $("#profile"));
}

function setProfile(callback) {
    callback();
    renderProfile();
    setActiveSection();
}

window.addEventListener("load", function() {
    $("#language-toggle").addEventListener(
        "click",
        function() {
            setProfile(() => { profileState = profileData[getCurrentLanguage()] });
        },
        false
    );
    setProfile(() => { profileState = profileData[getCurrentLanguage()] });
}, false);


export function Profile() {
    return /*html*/ `
    <section id="profile">
        <div class="container">
            <img src="${images.filter(image => image.name=='profile')[0].path}" alt="Profile Picture" id="profileImg">
            <h1>Willian Pacheco Silva</h1>
            <div class="social-media"> ${
                profileState.socialNetworks.map((socialMediaItem) => (socialMedia(socialMediaItem))).join('')
            } </div>
            <div class="profile-text"> <span>${profileState.description}</span> </div>
        </div>
    </section>
    `;
}