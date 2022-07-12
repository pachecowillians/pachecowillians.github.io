export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    if (window.innerWidth < 700) {
        return (
            rect.bottom >= 90 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight - 90 || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    } else {
        return (
            rect.bottom >= 0 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight - 10 || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }
}