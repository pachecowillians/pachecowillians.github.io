import { socialMedia } from "../components/socialMedia.js";
import { socialMediaItems } from "../data/socialMedia.js";

export function socialMediaHTML() {
    return [...socialMediaItems].map((socialMediaItem) => (socialMedia(socialMediaItem))).join('');
}