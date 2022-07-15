import { courses } from "../data/courses.js";
import { schoolItemHTML } from "./schoolItem.js";

export function coursesHTML() {
    return courses.map((course) => (schoolItemHTML(course))).join('');
}