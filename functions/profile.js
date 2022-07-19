import { socialMedia } from "../components/socialMedia.js";
import { socialMediaItems } from "../data/profile.js";

export function socialMedias() {
    return [...socialMediaItems].map((socialMediaItem) => (socialMedia(socialMediaItem))).join('');
}