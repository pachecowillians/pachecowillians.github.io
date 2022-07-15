import { courses } from "../data/courses.js";

export function coursesHTML() {
    return courses.map((course) => (courseHTML(course))).join('');
}

function courseHTML(course) {
    return `
    <div class="school-item-container ${course.className}">
        <div class="school-item-toggle-icon">
            <span class="material-symbols-outlined">
                navigate_next
            </span>
        </div>
        <div class="school-item-information">
            <div class="school-item-visible-area">
                <div class="school-item-header">
                    <div class="school-item-header-information">
                        <h2>${course.name}</h2>
                        <p>${course.date}</p>
                    </div>
                </div>
            </div>
            <div class="school-item-collapse-area">
                <h3>Description</h3>
                <p>${course.description}</p>
                <h3>Subjects Studied</h3>
                <ul>
                    ${course.subjectsStudied.map((subject)=>(`<li>${subject}</li>`)).join('')}
                </ul>
            </div>
        </div>
    </div>
        `;
}