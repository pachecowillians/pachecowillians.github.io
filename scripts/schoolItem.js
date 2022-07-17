export function schoolItemHTML(schoolItem) {
    return `
    <div class="school-item-container ${schoolItem.className}">
        <div class="school-item-toggle-icon">
            <span class="material-symbols-outlined">
                navigate_next
            </span>
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
                    <h3>Certificate:</h3>
                    <a href="${schoolItem.link}">${schoolItem.link}</a>
                </div>
                <h3>Description</h3>
                <p>${schoolItem.description}</p>
                <h3>Subjects Studied</h3>
                <ul>
                    ${schoolItem.subjectsStudied.map((subject)=>(`<li>${subject}</li>`)).join('')}
                </ul>
            </div>
        </div>
    </div>
        `;
}