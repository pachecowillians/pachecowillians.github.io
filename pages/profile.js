import { socialMedia } from "../components/socialMedia.js";
import { description, socialMediaItems } from "../data/profile.js";

export function Profile() {
    return /*html*/ `
    <section id="profile">
        <div class="container">
            <img src="img/profile.png" alt="Profile Picture" id="profileImg">
            <h1>Willian Pacheco Silva</h1>
            <div class="social-media"> ${
                socialMediaItems.map((socialMediaItem) => (socialMedia(socialMediaItem))).join('')
            } </div>
            <div class="profile-text"> ${description} </div>
        </div>
    </section>
    `;
}