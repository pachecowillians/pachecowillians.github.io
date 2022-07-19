import { professionalItemHTML } from "../components/professional.js";
import { informationText, professionalItems, titles } from "../data/professional.js";

export function Professional() {
    return `
    <section id="professional">
        <div class="container">
            <div class="information-text">${informationText}</div>
            <div class="professional-items-container">${
                professionalItems.map((professionalItem) => (professionalItemHTML(professionalItem, titles))).join('')
            }</div>
        </div>
    </section>
    `;
}