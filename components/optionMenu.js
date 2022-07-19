export function optionMenu() {
    return /*html*/ `
    <aside id="option-menu">
        <div class="menu-icon" id="theme-toggle">
            <span class="material-symbols-outlined">
                dark_mode
            </span>
        </div>
        <a href="#profile">
            <img src="img/Logo/logo.svg" alt="Logo" id="logoTopbar">
        </a>
        <div class="menu-icon" id="language-toggle">
            <span class="material-symbols-outlined">
                translate
            </span>
        </div>
    </aside>
    `;
}