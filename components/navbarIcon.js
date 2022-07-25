export function navbarIcon(section) {
    return ( /*html*/ `
    <a href="#${section.referenceName}">
        <div class="sidebar-icon" id="${section.referenceName}Icon">
            <span class="material-symbols-outlined">
                ${section.iconName}
            </span>
            <span>${section.name}</span>
        </div>
    </a>
    `)
}