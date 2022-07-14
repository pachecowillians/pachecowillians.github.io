import { courses } from "../data/courses.js";

export function coursesHTML() {
    return courses.map((course) => (courseHTML(course))).join('');
}

export function coursesCSS() {
    return courses.map((course) => (courseCSS(course))).join('\n');
}

function courseHTML(course) {
    return `
            <details class="course-item ${course.className}">
                <summary>
                    <div class="course-item-texts">
                        <div class="course-item-information">
                            <div class="course-item-title">
                                <div>
                                    <p>${course.name}</p>
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </div>
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
                </summary>
                <div class="course-collapse">
                    <h3>Description</h3>
                    <p>${course.description}</p>
                    <h3>Subjects Studied</h3>
                    <ul>
                        ${course.subjectsStudied.map((subject)=>(`<li>${subject}</li>`)).join('')}
                    </ul>
                </div>
            </details>
        `;
}

function courseCSS(course) {
    return `
    .${course.className} .progress-bar span {
        background: var(--lightblue);
        animation: animation-${course.className} 1.4s ease-out forwards;
        animation-play-state: paused;

    }
    
    @keyframes animation-${course.className} {
        to {
            width: ${course.percentage}%;
        }
    }
    `;
}