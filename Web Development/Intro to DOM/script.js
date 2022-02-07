//The DOM is our page as an object.

// alert("This is coming from script.js")

var title = document.querySelector('#title');
console.log(title);
title.innerHTML = "this text has been coopted by your new JavaScript Overlords"

function disappear(element) {
    element.remove();
}