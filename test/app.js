$ = (identifier) => {
    const element = document.querySelectorAll(identifier);
    if (element.length > 1) {
        return element;
    } else if (element.length == 1) {
        return element[0];
    }
}

state = {
    text: 'New text'
}

function renderH1() {
    $("h1").innerHTML = state.text;
}

function setState(callback) {
    callback();
    renderH1();
}



$(".btn").onclick = () => {
    setState(() => { state.text = 'New name of the state' });
}
console.log($(".btn").onclick);

renderH1();