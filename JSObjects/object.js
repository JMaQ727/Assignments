// JS Objects
// JSObjects are like objects IRL.  They have characteristics, and things they can do.
// Car
// Characterisitcs: make, model, numDoors, numWheels, etc.
// Things that it can do: drive, deep, etc.

// In JS, characteristics are called properties, and the things it can do are called methods.

console.log("hello, worldl"); // console = object      log = method
var array = [1, 2, 3, 4, 5];
console.log(array.length); // length = property

// Making objects from scratch
// Object Literal Notation
// key-value pairs

var myCar = {
    make: "Jeep",
    model: "Wrangler",
    beephorn: function () {
        console.log("beep beep!");
    },
};

// get and set
// get values using dot notation
console.log(myCar.model);

// set values using dot notation
myCar.make = "Toyota";
console.log(myCar.make);

// get values using bracket notation
console.log(myCar["model"]);

// set values using dot notation
myCar["model"] = "Corolla";
console.log(myCar);

myCar.beephorn();

var x = 0;
for (var i = 1; i < 5; i++) {
    x += i;
}
console.log(x);

var x = "0";
for (var i = 1; i < 5; i++) {
    x += i;
}
console.log(x);
