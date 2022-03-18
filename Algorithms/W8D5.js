/*

input: "sweet potato"

output: "swet poa"

*/


function dedupeString(str){
    let output = ""
    for (var i = 0; i < str.length; i++) {
        if (output.includes(str[i])) {
            continue
        } else {
            output += str[i]
        }
    }
    return output
}


console.log(dedupeString("sweet potato")) //"swet poa"