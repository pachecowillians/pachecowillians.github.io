import { description } from "../data/profile.js";
import { socialMedias } from "../functions/profile.js";

export function Profile() {
    return `
    <section id="profile">
        <div class="container">
            <img src="img/profile.png" alt="Profile Picture" id="profileImg">
            <h1>Willian Pacheco Silva</h1>
            <div class="social-media"> ${socialMedias()} </div>
            <div class="profile-text"> ${description} </div>
        </div>
    </section>
    `;
}