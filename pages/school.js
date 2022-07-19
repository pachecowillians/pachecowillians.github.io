import { schoolItemHTML } from "../components/school.js";
import { courses, informationText, schooling, titles } from "../data/school.js";

export function School() {
    return /*html*/ `
    <section id="school">
        <div class="container">
            <div class="information-text">${informationText}</div>
            <div class="study-container">
                <div class="scholarity">
                    <span class="material-symbols-outlined">
                        school
                    </span>
                    <p>${titles.scholarity}</p>
                </div>
                <div class="scholarity-container">${
                    schooling.map((scholarity) => (schoolItemHTML(scholarity, titles))).join('')
                }</div>
                <div class="courses">
                    <span class="material-symbols-outlined">
                        menu_book
                    </span>
                    <p>${titles.courses}</p>
                </div>
                <div class="courses-container">${
                    courses.map((course) => (schoolItemHTML(course, titles))).join('')
                }</div>
            </div>
        </div>
    </section>
    `;
}