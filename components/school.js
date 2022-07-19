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
                    <div class="school-item-link">
                        <h3>${titles.certificate}</h3>
                        <a href="${schoolItem.link}" target="_blank">${schoolItem.link}</a>
                    </div>
                    <h3>${titles.description}</h3>
                    <p>${schoolItem.description}</p>
                    <h3>${titles.subjectsStudied}</h3>
                    <ul>
                        ${schoolItem.subjectsStudied.map((subject)=>(`<li>${subject}</li>`)).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}