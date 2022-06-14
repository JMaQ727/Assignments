const isPalindrome = (x) => {
    var y = x.toString();
    var midway = Math.floor(y.length / 2);
    console.log(midway, "MIDWAY")
    if (y[0] == "-") {
        return false
    }
    if (y.length % 2 == 0 && y % 11 == 0 && y[0] == y[y.length - 1]) {
        return true
    }
    for (var i = 0; i < midway; i++) {
        if (y[midway - 1 - i] !== y[midway + i + 1]) {
            console.log(y[midway - 1 - i], y[midway + i + 1])
            return false;
        } else {
            console.log(y[midway - 1 - i], y[midway + i + 1])
        }
    }
    return true
};

console.log(isPalindrome(-121));
