function dec2binary(num){
    let output = "";
    while (num > 0){
        if (num % 2 == 1) {
            output = 1 + output
            num = Math.floor(num / 2)
        } else {
            output = 0 + output
            num = Math.floor(num / 2)
        }
    }
    return output;
}



console.log(dec2binary(23)) //10111
console.log(dec2binary(15))
console.log(dec2binary(41))