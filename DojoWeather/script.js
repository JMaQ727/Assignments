function loading() {
    alert('Loading weather report...')
}

function hide(element) {
    element.remove()
}

document.getElementById("tempchange").onchange = changeListener;
function changeListener() {
    var value = this.value
    for (var i = 1; i < 9; i++) {
        var thing = document.getElementById("test" + i)
        if (value == "F") {
            var newvalue = thing.innerHTML * 9/5 + 32
            thing.innerHTML = Math.round(newvalue)
        } else {
            var newvalue = (thing.innerHTML - 32) * 5/9
            thing.innerHTML = Math.round(newvalue)
        }
    }
} 