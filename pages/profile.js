import { socialMedia } from "../components/socialMedia.js";
import { images } from "../data/images.js";
import { description, socialMediaItems } from "../data/profile.js";
import { getCurrentLanguage } from "../utils/translate.js"

export function Profile() {
    return /*html*/ `
    <section id="profile">
        <div class="container">
            <img src="${images.filter(image => image.name=='profile')[0].path}" alt="Profile Picture" id="profileImg">
            <h1>Willian Pacheco Silva</h1>
            <div class="social-media"> ${
                socialMediaItems.map((socialMediaItem) => (socialMedia(socialMediaItem))).join('')
            } </div>
            <div class="profile-text"> <span>${description[getCurrentLanguage()]}</span> </div>
        </div>
    </section>
    `;
}