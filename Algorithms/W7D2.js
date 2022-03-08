function insertionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        while (arr[i] > arr[i + 1]) {
            var temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
            i--
        }
    }
    return arr
}

console.log(insertionSort([5, 23, 0, 12, 8, 6]));
