var darkTheme = false;
var selected = "profile";
let properties = [
    "background",
    "darkgrey",
    "darkblue",
    "black",
    "lightblue",
    "grey",
    "white",
    "text"
];
let sections = [
    "profile",
    "programming",
    "school",
    "professional",
    "projects"
];
let languages = [
    { name: 'HTML', percentage: 95, color: '#E44D26' },
    { name: 'CSS', percentage: 85, color: '#1572B6' },
    { name: 'JavaScript', percentage: 80, color: '#1572B6' },
    { name: 'TypeScript', percentage: 60, color: '#1572B6' },
    { name: 'React JS', percentage: 50, color: '#1572B6' },
    { name: 'Next JS', percentage: 50, color: '#1572B6' },
    { name: 'Bootstrap', percentage: 75, color: '#1572B6' },
    { name: 'Flask', percentage: 75, color: '#1572B6' },
    { name: 'PHP', percentage: 75, color: '#1572B6' },
    { name: 'Python', percentage: 85, color: '#1572B6' },
    { name: 'Java', percentage: 40, color: '#1572B6' },
    { name: 'C', percentage: 90, color: '#1572B6' },
    { name: 'C++', percentage: 85, color: '#1572B6' },
    { name: 'C#', percentage: 40, color: '#1572B6' },
    { name: 'Arch Linux', percentage: 80, color: '#1572B6' },
    { name: 'Ubuntu', percentage: 85, color: '#1572B6' },
    { name: 'Windows', percentage: 60, color: '#1572B6' },
    { name: 'SQL Server', percentage: 60, color: '#1572B6' },
    { name: 'MySQl', percentage: 85, color: '#1572B6' },
    { name: 'Docker', percentage: 85, color: '#1572B6' },
    { name: 'Git', percentage: 90, color: '#1572B6' },
];
document.querySelector("#theme-toggle").onclick = function() {
    if (!darkTheme) {
        properties.map(prop => {
            document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-dark)`);
        });
        document.querySelector("#logoNavbar").style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
        document.querySelector("#logoTopbar").style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
        document.querySelector("#github").style.setProperty("filter", "invert(99%) sepia(0%) saturate(0%) hue-rotate(148deg) brightness(87%) contrast(91%)");
    } else {
        properties.map(prop => {
            document.documentElement.style.setProperty(`--${prop}`, `var(--${prop}-light)`);
        });
        document.querySelector("#logoNavbar").style.setProperty("filter", "none");
        document.querySelector("#logoTopbar").style.setProperty("filter", "none");
        document.querySelector("#github").style.setProperty("filter", "none");

    }
    darkTheme = !darkTheme;
}

sections.map(section => {
    document.querySelector(`#${section}Icon`).onclick = function() {
        let icon = document.querySelector(`#${section}Icon`);
        let iconSpan = icon.querySelector("span");
        iconSpan.classList.add("selected-item");

        let oldIcon = document.querySelector(`#${selected}Icon`);
        let oldIconSpan = oldIcon.querySelector("span");
        oldIconSpan.classList.remove("selected-item");

        selected = section;
    }
});

document.querySelector("#programming").innerHTML = languages.map(
    (language) => (`
            <div class="language-container ${language.name.toLowerCase().replace(' ','')}">
                <img src="img/Languages/${language.name.toLowerCase().replace(' ','')}.svg" alt="${language.name}">
                <div class="progress-bar-container">
                    <div class="progress-bar-title">
                        <span>${language.name}</span>
                        <span>${language.percentage}%</span>
                    </div>
                    <div class="progress-bar">
                    </div>
                </div>
            </div>
            `)
).join('');

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

languages.map((language) => {
    console.log(language);
    addCSS(`
    .${language.name.toLowerCase().replace(' ','')} .progress-bar::before {
        background: ${language.color};
        width: ${language.percentage}%;
    }
   
    .${language.name.toLowerCase().replace(' ','')} .progress-bar {
        border: 1px solid ${language.color};
    }
    
    .${language.name.toLowerCase().replace(' ','')} {
        color: ${language.color};
    }
    `);
});