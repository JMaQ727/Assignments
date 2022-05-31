// var majorityElement = function (nums) {
//     let newObj = [];
//     for (var i = 0; i < nums.length; i++) {
//         if (newObj.some((e) => e.number === nums[i])) {
//             var pos = newObj.map((e) => {
//                     return e.number;
//                 })
//                 .indexOf(nums[i]);
//             newObj[pos].freq++;
//         } else {
//             newObj[i] = {
//                 number: nums[i],
//                 freq: 1,
//             };
//         }
//     }
//     var newArr = newObj.filter(Boolean).sort((a,b) => { return b.freq - a.freq});
//     return newArr[0].number
// };

var majorityElement = function(nums) {
    let ht = {}
    nums.forEach((num) => {
        ht[num] = ht[num]+1 || 1;
    })
    console.log(ht)
    
    let result = nums.length/2;
    
    for(key in ht) {
        if(ht[key] < nums.length/2) continue;
        if(ht[key] > result) result = key
    }
    
    return result;
};

console.log(majorityElement([1,3,1,1,4,1,1,5,1,1,6,2,2]));