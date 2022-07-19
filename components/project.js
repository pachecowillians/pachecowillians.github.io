export function projectHTML(project) {
    return ( /*html*/ `
    <div class="project-item">
        <div class="project-item-hidden">
            <div class="project-item-hidden-information">
                <h2>${project.name}</h2>
                <a href=${project.link} target="_blank">${project.link}</a>
                <p>${project.description}</p>
            </div>
            <div class="project-item-hidden-languages">
                ${project.languages.map((language)=>(
                    /*html*/ `<img src="img/Languages/${language}.svg" alt="HTML">`
                    )).join('')}
            </div>
        </div>
        <div class="project-item-visible">
            <img src="img/Projects/${project.referenceName}.png" alt="${project.name}">
        </div>
        <div class="project-item-info">
            <span class="material-symbols-outlined selected-item"> info </span>
        </div>
    </div>
    `);
}

export function setProjectItemHeight() {
    let items = document.querySelectorAll(".project-item");
    let width = items[0].offsetWidth;
    [...items].map((item) => {
        item.style.height = `${width * 245.094/435.938}px`;
    })
}

export function toggleProjectItem(projectItem){
    if (projectItem.classList.contains("item-active")) {
        projectItem.classList.remove("item-active");
        projectItem.querySelector(".project-item-info span").innerHTML = "info";
    } else {
        projectItem.classList.add("item-active");
        projectItem.querySelector(".project-item-info span").innerHTML = "<span style='color:var(--text)'> horizontal_rule </span>";
    }
}