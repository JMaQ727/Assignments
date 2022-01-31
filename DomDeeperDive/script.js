var title = document.querySelector('#title')
var box = document.querySelector('#box')
var counter = 0
box.innerText = counter

function display(element) {
    console.log(element.innerText);
}

function changeText(element) {
    console.log(element.innerText = "you clicked me.")
}

function changeBg(element) {
    title.style.backgroundColor = "green"
}

function hoverOver(element) {
    element.style.backgroundColor = "rebeccapurple"
}

function hoverOut(element) {
    element.style.backgroundColor = "coral"
}

function increment() {
    counter++;
    box.innerText = counter;
}