var plusOne = function(digits) {
    for (var i = 0; i < digits.length; i++) {
        if (digits[digits.length - 1] == 9 && digits[0] != 9) {
            newArr = [digits[0] + 1]
            for (var j = 0; j < digits.length; j++) {
                newArr.push(0)
            }
            return newArr
        } else if (digits[digits.length - 1] == 9 && digits[0] == 9) {
            let newArr = (+digits.join("") + 1)
            let newerArr = Array.from(String(newArr), Number)
            return newerArr
            
        }
        else if (i == digits.length - 1) {
            digits[i] = digits[i] + 1
        }
    }
    return digits
};

console.log(plusOne([6, 9, 8, 9]));
console.log(plusOne([9, 8, 9]));
console.log(plusOne([8, 9, 9, 9]));