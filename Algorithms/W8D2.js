const rotateString = (str, val) =>{
    var newStr = str;
    for(var i = 0; i < val; i++){
        newStr += newStr[0];
        newStr = newStr.substr(1);
    }
    return newStr
}

console.log(rotateString("hello", 3));
