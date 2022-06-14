var addDigits = function (num) {
    let numArr = Array.from(num.toString()).map((x) => parseInt(x));
    let sum = numArr.reduce((a, b) => a + b, 0);
    console.log(numArr);
    console.log(sum);
    for (var i = 0; i < numArr.length; i++) {
        if (sum > 9) {
            let numArr2 = Array.from(sum.toString()).map((x) => parseInt(x));
            sum = numArr2.reduce((a,b) => a + b, 0)
        }
    }
    return sum
};

console.log(addDigits(199));
