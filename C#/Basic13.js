function shiftValues(arr) {
    for (var i = 0; i<arr.length; i++){
        arr[i] = arr[i + 1]
    }
    arr[arr.length-1] = 0
    return arr
}

console.log(shiftValues([1,5,10,7,-2]))


    // Given an integer array, say [1, 5, 10, 7, -2], 
    // Write a function that shifts each number by one to the front and adds '0' to the end. 
    // For example, when the program is done, if the array [1, 5, 10, 7, -2] is passed to the function, 
    // it should become [5, 10, 7, -2, 0].


