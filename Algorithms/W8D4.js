/*
create a function called strDecode() that does the following: 

input: "a3b4c1d2"
output: "aaabbbbcdd"


*/

const strDecode = (str) => {
    let output = "";
    for (var i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            output += str[i].repeat(str[i + 1])
        }
    }
    return output
};

console.log(strDecode("a4b2c5d3"))
