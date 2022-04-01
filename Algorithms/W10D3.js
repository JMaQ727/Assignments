// function binary2decimal(str) {
//     var output = 0;
//     var x = 0;
//     for (var i = str.length - 1; i >= 0; i--) {
//         if (str[x] == 1) {
//             output += 2**i;
//             x++;
//         } else {
//             x++;
//         }
//     }
//     return output
// }

const chart = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
    16: 10,
    17: 11,
    18: 12,
    19: 13,
    20: 14,
    21: 15,
    22: 16,
    23: 17,
    24: 18,
    25: 19,
    26: "1A",
    27: "1B",
    28: "1C",
    29: "1D",
    30: "1E",
    40: 28,
    50: 32,
    60: "3C",
    70: 46,
    80: 50,
    90: "5A",
    100: 64,
};
function decimal2hex(num) {
    var output = "";
    var rem = num % 16;
    var quo = Math.floor(num / 16);
    output += chart[quo];
    output += chart[rem];
    return output;
}

const dec2hex = (num) => {
    let result = '';
    const options = '0123456789ABCDEF';
    while (num > 0) {
        let x = num % 16;
        result = options.charAt(x) + result;
        num = Math.floor(num / 16);
    }return result || '0';
}

console.log(decimal2hex(58));
console.log(decimal2hex(43));
console.log(dec2hex(700000));
