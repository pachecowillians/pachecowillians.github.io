export function NavbarIcon(section) {
    return ( /*html*/ `
    <a href="#${section.referenceName}">
        <div class="sidebar-icon ${section.referenceName=='profile' ? 'selected-item' : ''}" id="${section.referenceName}Icon">
            <span class="material-symbols-outlined">
                ${section.iconName}
            </span>
            <span>${section.name}</span>
        </div>
    </a>
    `)
}