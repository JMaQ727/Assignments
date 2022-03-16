/*
given a string with repeated consecutive characters, return the amount of each character as such:


input: "aaabbbbcdd"

output: "a3b4c1d2"
*/


function encode(str){
    var output = []
    var counter = 1
    for (var i = 0; i < str.length; i++){
        if (output.includes(str[i])) {
            counter++
        } else {
            output.push(str[i],counter)
        }
    }
    return output.join('')
}


console.log(encode("aaabbbbcdd")) //"a3b4c1d2"