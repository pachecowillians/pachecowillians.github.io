import { socialMedia } from "../components/socialMedia.js";
import { profileDescription, profileSocialMedia } from "../data/profile.js";

export function socialMediaHTML() {
    return [...profileSocialMedia].map((socialMediaItem) => (socialMedia(socialMediaItem))).join('');
}

export function profileDescriptionHTML() {
    return `<p>${profileDescription}</p>`
}