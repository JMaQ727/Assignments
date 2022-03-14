/*

create a function that accepts a string as an input and outputs an array with each word from the string


input: "  hello hey how   you   doing?   "
output: ["hello", "hey", "how", "you", "doing?"]

*/

const word = (string) => {
    var output = []
    var begin = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            output.push(string[begin] + string[i-1])
            var begin = i + 1
        }
    }
    console.log(output)
}

word("hello hey how are you")