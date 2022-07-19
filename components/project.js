export function projectHTML(project) {
    return (`
    <div class="project-item">
        <div class="project-item-hidden">
            <div class="project-item-hidden-information">
                <h2>${project.name}</h2>
                <a href=${project.link} target="_blank">${project.link}</a>
                <p>${project.description}</p>
            </div>
            <div class="project-item-hidden-languages">
                ${project.languages.map((language)=>(`<img src="img/Languages/${language}.svg" alt="HTML">`)).join('')}
            </div>
        </div>
        <div class="project-item-visible">
            <img src="img/Projects/${project.referenceName}.png" alt="${project.name}">
        </div>
        <div class="project-item-info">
            <span class="material-symbols-outlined selected-item">
                info
            </span>
        </div>
    </div>
    `);
}