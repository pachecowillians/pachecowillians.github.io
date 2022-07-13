import { isProgressBarInViewport } from "./scripts/viewport.js";
import { setActiveSection } from "./scripts/navbar.js";
import { toggleTheme } from "./scripts/theme.js";
import { languagesCSS, languagesHTML } from "./scripts/language.js";
import { schoolingCSS, schoolingHTML } from "./scripts/scholarity.js";

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

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

document.querySelector(".programming-container").innerHTML = languagesHTML();
addCSS(languagesCSS());

document.querySelector(".scholarity-container").innerHTML = schoolingHTML();
addCSS(schoolingCSS());

let scrolling = false;

document.querySelector("main").onscroll = () => {
    scrolling = true;
};

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        scrollFunction();
    }
}, 300);

function scrollFunction() {
    let progressBars = document.querySelectorAll('.progress-bar span');
    [...progressBars].map((progressBar) => {
        if (isProgressBarInViewport(progressBar)) {
            progressBar.style.animationPlayState = 'running';
        }
    });
    let activeItem = document.querySelector(".selected-item").parentElement.parentElement.id;
    activeItem = activeItem.substring(0, activeItem.length - 'Item'.length);
    setActiveSection(activeItem);
}

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