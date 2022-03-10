//create a helper function that takes 2 already sorted array, and combines them into one sorted array and returns that new sorted array

const combineSortedArrays = (arr1, arr2) => {
    let combo = arr1.concat(arr2)
    for (var i = 0; i < combo.length; i++) {
        while (combo[i] > combo[i + 1]) {
            [combo[i+1], combo[i]]  = [combo[i], combo[i+1]]
            i--
        }
    }
    return combo
}

function mergeSort(arr) {
    let midway = Math.floor(arr.length / 2)
    let arr1 = arr.slice(0,midway)
    let arr2 = arr.slice(midway,arr.length)
}

console.log(combineSortedArrays([1,3,5,5,6], [2,3,4,9])) //[1,2,3,3,4,5,5,6,9]
// console.log(mergeSort([4,2,8,5,9,0,1]))

//https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/