// How to swap variables
//

var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);



var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);



var start = 0;
var end = 12;

while (start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
// For loops are for when you know when a loop should end.  While loops are for when you are not sure.
// ["a", "b", "c", "d", "e"];

function reverse(arr) {
    for(i=0;i < arr.length/2; i++) { //loop goes half way
        var temp = arr[i] //dumps 
        var j = arr.length-1-i;
        arr[i] = arr[j]
        arr[j] = temp
    }
    console.log(arr)
}

reverse(["a", "b", "c", "d", "e"])