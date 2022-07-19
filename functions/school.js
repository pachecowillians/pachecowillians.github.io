import { schoolItemHTML } from "../components/school.js";
import { schoolCourses, schoolSchooling, schoolInformationText, schoolTitles } from "../data/school.js";

export function schoolingHTML() {
    return schoolSchooling.map((scholarity) => (schoolItemHTML(scholarity))).join('');
}
export function coursesHTML() {
    return schoolCourses.map((course) => (schoolItemHTML(course))).join('');
}

export function schoolInformationTextHTML() {
    return `<p>${schoolInformationText}</p>`;
}

export function scholarityTitleHTML() {
    return `<p>${schoolTitles.scholarity}</p>`;
}

export function coursesTitleHTML() {
    return `<p>${schoolTitles.courses}</p>`;
}