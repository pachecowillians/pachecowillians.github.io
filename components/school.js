import { getCurrentLanguage } from "../utils/translate.js";

export function schoolItemHTML(schoolItem, titles) {
    return /*html*/ `
        <div class="school-item-container ${schoolItem.referenceName}">
            <div class="school-item-toggle-icon">
                <span class="material-symbols-outlined"> navigate_next </span>
            </div>
            <div class="school-item-information">
                <div class="school-item-visible-area">
                    <div class="school-item-header">
                        <div class="school-item-header-information">
                            <h2>${schoolItem.name}</h2>
                            <p>${schoolItem.date}</p>
                        </div>
                    </div>
                </div>
                <div class="school-item-collapse-area">
                    <h3>${titles.certificate[getCurrentLanguage()]}</h3>
                    <a href="${schoolItem.link}" target="_blank">${schoolItem.link}</a>
                    <h3>${titles.description[getCurrentLanguage()]}</h3>
                    <p>${schoolItem.description}</p>
                    <h3>${titles.subjectsStudied[getCurrentLanguage()]}</h3>
                    <ul>
                        ${schoolItem.subjectsStudied.map((subject)=>(`<li>${subject}</li>`)).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

export function toggleSchoolItem(schoolItem) {
    if (schoolItem.classList.contains("item-active")) {
        schoolItem.classList.remove("item-active");
    } else {
        schoolItem.classList.add("item-active");
    }
}