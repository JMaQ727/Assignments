// can make a new array



// Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

// Note - Don't assume the array will always be the same size, we must rely on its .length property

// Hint - Can we put a for loop inside another for loop?

// function isPresent2d(arr2d, value) {
//     for (var i = 0; i < arr2d.length; i++) {
//         for (var j = 0; j < arr2d[i].length; j++) {
//             if (value == arr2d[i][j]) {
//                 return console.log(true);
//             } else {
//                 console.log(false);
//             }
//         }
//     }
// }

// isPresent2d(arr2d, 4);
var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
];

function flattenArray(arr2d) {
    var newArr = [];
    for (var i = 0; i < arr2d.length; i++) {
        arr2d[i].reverse();
        for (var j = 0; j < arr2d[i].length + j; j++) {
            var temp = arr2d[i].pop();
            newArr.push(temp);
        }
    }
    console.log(newArr);
}

flattenArray(arr2d);

// we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
