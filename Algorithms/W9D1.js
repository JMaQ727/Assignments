// 1. Intersect Sorted Arrays
// Given two sorted arrays, return a new array containing all the numbers they have in common
// This includes duplicates too! The intersection of [2,2] and [2,2,2] would be [2,2]

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

const isa = (arr1, arr2) => {
    let longarr = arr1
    let shortarr = arr2
    if (arr1.length < arr2.length) {
        longarr = arr2
        shortarr = arr1
    }
    let output = [];
    for (var i = 0; i < longarr.length; i++) {
        if (longarr.includes(shortarr[i])) {
            output.push(shortarr[i]);
        }
    }
    return output;
};

console.log(isa([2, 3, 5, 7, 9, 10], [2, 4, 7, 9, 10]));
console.log(isa([1,1,4,5,8], [1,1,1,5,6,8]))

// 2. Union Sorted Arrays
// Efficiently combine two pre-sorted arrays into a new sorted array
// no built in functions!!!

// Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
// Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
// Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]
