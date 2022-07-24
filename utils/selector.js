export let $ = (identifier) => {
    const element = document.querySelectorAll(identifier);
    if (element.length > 1) {
        return element;
    } else if (element.length == 1) {
        return element[0];
    }
}