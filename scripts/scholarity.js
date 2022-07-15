import { schooling } from "../data/schooling.js";
import { schoolItemHTML } from "./schoolItem.js";

export function schoolingHTML() {
    return schooling.map((scholarity) => (schoolItemHTML(scholarity))).join('');
}