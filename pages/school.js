import { $ } from "../utils/selector.js";
import { schoolItemHTML, toggleSchoolItem } from "../components/schoolItem.js";
import { schoolData } from "../data/school.js";
import { getCurrentLanguage } from "../utils/translate.js"

let schoolState = schoolData[getCurrentLanguage()];

function renderSchool() {
    const newElement = document.createElement('template');
    newElement.innerHTML = School();
    $("main").replaceChild(newElement.content, $("#school"));

    [...$(".school-item-visible-area")].map((item) => {
        item.onclick = (event) => {
            let schoolItem = event.currentTarget.parentElement.parentElement;
            toggleSchoolItem(schoolItem);
        };
    });

    [...$(".school-item-toggle-icon")].map((item) => {
        item.onclick = (event) => {
            let schoolItem = event.currentTarget.parentElement;
            toggleSchoolItem(schoolItem);
        };
    });
}

function setSchool(callback) {
    callback();
    renderSchool();
}

window.addEventListener("load", function() {
    $("#language-toggle").addEventListener(
        "click",
        function() {
            setSchool(() => { schoolState = schoolData[getCurrentLanguage()] });
        },
        false
    );
    setSchool(() => { schoolState = schoolData[getCurrentLanguage()] });
}, false);


export function School() {
    return /*html*/ `
    <section id="school">
        <div class="container">
            <div class="information-text"><span>${schoolState.informationText}</span></div>
            <div class="study-container">
                <div class="scholarity">
                    <span class="material-symbols-outlined">
                        school
                    </span>
                    <h1>${schoolState.titles.scholarity}</h1>
                </div>
                <div class="scholarity-container">${
                    schoolState.schooling.map((scholarity) => (schoolItemHTML(scholarity, schoolState.titles))).join('')
                }</div>
                <div class="courses">
                    <span class="material-symbols-outlined">
                        menu_book
                    </span>
                    <h1>${schoolState.titles.courses}</h1>
                </div>
                <div class="courses-container">${
                    schoolState.courses.map((course) => (schoolItemHTML(course, schoolState.titles))).join('')
                }</div>
            </div>
        </div>
    </section>
    `;
}