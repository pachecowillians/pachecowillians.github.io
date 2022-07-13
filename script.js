import { isInViewport } from "./scripts/viewport.js";
import { setActiveSection } from "./scripts/navbar.js";
import { toggleTheme } from "./scripts/theme.js";

let languages = [
    { name: 'HTML', className: 'html', percentage: 95, color: '#E44D26' },
    { name: 'CSS', className: 'css', percentage: 85, color: '#1572B6' },
    { name: 'JavaScript', className: 'javascript', percentage: 80, color: '#F0DB4F' },
    { name: 'TypeScript', className: 'typescript', percentage: 60, color: '#007ACC' },
    { name: 'React JS', className: 'reactjs', percentage: 50, color: '#61DAFB' },
    { name: 'Next JS', className: 'nextjs', percentage: 50, color: 'var(--text)' },
    { name: 'Bootstrap', className: 'bootstrap', percentage: 75, color: '#7952B3' },
    { name: 'Flask', className: 'flask', percentage: 75, color: 'var(--text)' },
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

let schooling = [{
        name: 'UFES - Computer Engineering College',
        className: 'ufes',
        begin: '2019',
        end: 'Today',
        percentage: 60
    },
    {
        name: 'SENAI - Systems Development Technical Course',
        className: 'senai',
        begin: '2017',
        end: '2018',
        percentage: 100
    }, {
        name: 'SESI - High School',
        className: 'sesiHigh',
        begin: '2016',
        end: '2018',
        percentage: 100
    }, {
        name: 'SESI - Elementary School',
        className: 'sesiElementary',
        begin: '2012',
        end: '2016',
        percentage: 100
    },
];


let courses = [{
        name: 'CS50 - Introduction to Computer Science',
        className: 'cs50',
        date: '2020',
        percentage: 100
    },
    {
        name: 'SENAI - Unlocking Industry 4.0',
        className: 'senai',
        date: '2020',
        percentage: 100
    }, {
        name: 'Code IOT - Introduction to the Internet of Things',
        className: 'iot',
        date: '2020',
        percentage: 100
    }, {
        name: 'Code IOT - Apps for mobile devices',
        className: 'iotmobile',
        date: '2020',
        percentage: 100
    }, {
        name: 'DELL - Intermediary English',
        className: 'dell',
        date: '2020',
        percentage: 100
    }
];

document.querySelector("#theme-toggle").onclick = function() {
    toggleTheme();
}

document.querySelector(".programming-container").innerHTML = languages.map(
    (language) => (`
            <div class="language-container ${language.className}">
                <img src="img/Languages/${language.className}.svg" alt="${language.name}" id="${language.className}">
                <div class="progress-bar-container">
                    <div class="progress-bar-title">
                        <span>${language.name}</span>
                        <span>${language.percentage}%</span>
                    </div>
                    <div class="progress-bar">
                        <span></span>
                    </div>
                </div>
            </div>
            `)
).join('');

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

languages.map((language) => {
    addCSS(`
    .${language.className} .progress-bar span {
        background: ${language.color};
        animation: progress-animation-${language.className} 0.8s ease-out forwards;
    }

    @keyframes progress-animation-${language.className} {
        to {
            width: ${language.percentage}%;
        }
    }
   
    .${language.className} .progress-bar {
        border: 1px solid ${language.color};
    }
    
    .${language.className} {
        color: ${language.color};
    }
    `);
});

document.querySelector("main").onscroll = () => {
    let progressBars = document.querySelectorAll('.progress-bar span');
    [...progressBars].map((progressBar) => {
        if (!isInViewport(progressBar)) {
            progressBar.style.animation = 'none';
            progressBar.offsetHeight;
            progressBar.style.animation = null;
        }
    });
    let activeItem = document.querySelector(".selected-item").parentElement.parentElement.id;
    activeItem = activeItem.substring(0, activeItem.length - 'Item'.length);
    setActiveSection(activeItem);
}

document.querySelector(".school-container").innerHTML = schooling.map(
    (school) => (`
                <div class="school-item ${school.className}">
                    <div class="school-item-texts">
                        <div class="school-item-information">
                            <div class="school-item-title">
                                <a href="">
                                    <p>${school.name}</p>
                                    <span class="material-symbols-outlined">
                                        link
                                    </span>
                                </a>
                            </div>
                            <div class="school-item-date">
                                <p>${school.begin} - ${school.end}</p>
                            </div>
                        </div>
                        <div class="school-item-percentage">
                            <span>${school.percentage}%</span>
                        </div>
                    </div>

                    <div class="progress-bar">
                        <span></span>
                    </div>
                </div>
            `)
).join('');


schooling.map((school) => {
    addCSS(`
    .${school.className} .progress-bar span {
        background: var(--lightblue);
        animation: progress-animation-${school.className} 0.8s ease-out forwards;
    }
    
    @keyframes progress-animation-${school.className} {
        to {
            width: ${school.percentage}%;
        }
    }
    `);
});

document.querySelector(".courses-container").innerHTML = courses.map(
    (course) => (`
                <div class="school-item ${course.className}">
                    <div class="school-item-texts">
                        <div class="school-item-information">
                            <div class="school-item-title">
                                <a href="">
                                    <p>${course.name}</p>
                                    <span class="material-symbols-outlined">
                                        link
                                    </span>
                                </a>
                            </div>
                            <div class="school-item-date">
                                <p>${course.begin} - ${course.end}</p>
                            </div>
                        </div>
                        <div class="school-item-percentage">
                            <span>${course.percentage}%</span>
                        </div>
                    </div>

                    <div class="progress-bar">
                        <span></span>
                    </div>
                </div>
            `)
).join('');


courses.map((course) => {
    addCSS(`
    .${course.className} .progress-bar span {
        background: var(--lightblue);
        animation: progress-animation-${course.className} 0.8s ease-out forwards;
    }
    
    @keyframes progress-animation-${course.className} {
        to {
            width: ${course.percentage}%;
        }
    }
    `);
});