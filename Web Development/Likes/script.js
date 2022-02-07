var counter = parseInt(document.querySelector("#change").innerHTML);
var counter2 = parseInt(document.querySelector("#change2").innerHTML);
var counter3 = parseInt(document.querySelector("#change3").innerHTML);

var counters = [counter, counter2, counter3];
console.log(counters);

var container = document.querySelector("#change");
var container2 = document.querySelector("#change2");
var container3 = document.querySelector("#change3");

var containers = [container, container2, container3];

function increase(index) {
    counters[index]++;
    containers[index].innerHTML = counters[index];
}
