export function professionalItemHTML(professional) {
    return `
    <div class="professional-item">
        <div class="professional-item-header">
            <div class="professional-item-header-image">
                <img src="img/Companies/${professional.referenceName}.png" alt="${professional.name}" id="${professional.referenceName}">
            </div>
            <div class="professional-item-header-information">
                <h2>${professional.name}</h2>
                <p>${professional.date}</p>
            </div>
        </div>
        <div class="professional-item-informations">
            <div class="professional-website"></div>
            <a href="${professional.link}" target="_blank">${professional.link}</a>
            <div class="professional-description"></div>
            <p>${professional.description}</p>
            <div class="professional-task"></div>
            <ul>
            ${professional.tasks.map((task)=>(`<li>${task}</li>`)).join('')}
            </ul>
        </div>
    </div>
    `;
}