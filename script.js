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
    { name: 'HTML', className: 'html', percentage: 95, color: '#E44D26' },
    { name: 'CSS', className: 'css', percentage: 85, color: '#1572B6' },
    { name: 'JavaScript', className: 'javascript', percentage: 80, color: '#F0DB4F' },
    { name: 'TypeScript', className: 'typescript', percentage: 60, color: '#007ACC' },
    { name: 'React JS', className: 'reactjs', percentage: 50, color: '#61DAFB' },
    { name: 'Next JS', className: 'nextjs', percentage: 50, color: '#000000' },
    { name: 'Bootstrap', className: 'bootstrap', percentage: 75, color: '#7952B3' },
    { name: 'Flask', className: 'flask', percentage: 75, color: '#000000' },
    { name: 'PHP', className: 'php', percentage: 75, color: '#6181B6' },
    { name: 'Python', className: 'python', percentage: 85, color: '#386F9F' },
    { name: 'Java', className: 'java', percentage: 40, color: '#EA2D2E' },
    { name: 'C', className: 'c', percentage: 90, color: '#03599C' },
    { name: 'C++', className: 'cplusplus', percentage: 85, color: '#9C033A' },
    { name: 'C#', className: 'csharp', percentage: 40, color: '#68217A' },
    { name: 'Arch Linux', className: 'archlinux', percentage: 80, color: '#1793D1' },
    { name: 'Ubuntu', className: 'ubuntu', percentage: 85, color: '#DD4814' },
    { name: 'Windows', className: 'windows', percentage: 60, color: '#0078D4' },
    { name: 'SQL Server', className: 'sqlserver', percentage: 60, color: '#A91D22' },
    { name: 'MySQl', className: 'mysql', percentage: 85, color: '#00618A' },
    { name: 'Docker', className: 'docker', percentage: 85, color: '#028BB8' },
    { name: 'Git', className: 'git', percentage: 90, color: '#F34F29' },
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
            <div class="language-container ${language.className}">
                <img src="img/Languages/${language.className}.svg" alt="${language.name}">
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
    addCSS(`
    .${language.className} .progress-bar::before {
        background: ${language.color};
        width: ${language.percentage}%;
    }
   
    .${language.className} .progress-bar {
        border: 1px solid ${language.color};
    }
    
    .${language.className} {
        color: ${language.color};
    }
    `);
});