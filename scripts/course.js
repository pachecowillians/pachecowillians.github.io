import { courses } from "../data/courses.js";

export function coursesHTML() {
    return courses.map((course) => (courseHTML(course))).join('');
}

export function coursesCSS() {
    return courses.map((course) => (courseCSS(course))).join('\n');
}

function courseHTML(course) {
    return `
            <div class="course-item ${course.className}">
                <div class="course-item-texts">
                    <div class="course-item-information">
                        <div class="course-item-title">
                            <a href="">
                                <p>${course.name}</p>
                                <span class="material-symbols-outlined">
                                    link
                                </span>
                            </a>
                        </div>
                        <div class="course-item-date">
                            <p>${course.date}</p>
                        </div>
                    </div>
                    <div class="course-item-percentage">
                        <span>${course.percentage}%</span>
                    </div>
                </div>

                <div class="progress-bar">
                    <span></span>
                </div>
            </div>
        `;
}

function courseCSS(course) {
    return `
    .${course.className} .progress-bar span {
        background: var(--lightblue);
        animation: animation-${course.className} 0.8s ease-out forwards;
        animation-play-state: paused;

    }
    
    @keyframes animation-${course.className} {
        to {
            width: ${course.percentage}%;
        }
    }
    `;
}