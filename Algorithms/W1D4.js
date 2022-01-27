// When we create a variable outside of a function it has GLOBAL SCOPE
var x = 5;

function functionScope() {
    // when we create a variable inside of a function, it has FUNCTION SCOPE
    var myNum = 60;
}

functionScope();

// function declaration:
// starts with the function keyword
// followed by the name of the function -setX
// followed by the parameters of the function in parenthesis -newValue

function setX(newValue) {
    x = newValue;
}

console.log(x);
// Invoking  or calling a function
setX(15);
console.log(x);

//Return of return

var x = 5;

function addToX(amount) {
    return x + amount;
    console.log("hello there");
}

console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

//Is the array a palindrome?
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
