//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

// const selectionSort = (arr) => {
//     for (var i = 0; i < arr.length; i++) {
//         var min = i
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]];
//     }
//     return arr;
// }

function selectionSort(Arr) {
    for (let i = 0; i < Arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < Arr.length; j++) {
            if (Arr[j] < Arr[min]) {
                min = j;
            }     
        }
        [Arr[i], Arr[min]] = [Arr[min], Arr[i]];
    }
    return Arr;
}

console.log(selectionSort([4, 8, 5, 2, 1, 0, 9, 7]));
