const lengthOfLastWord = (str) => {
    var strArray = str.split(" ")
    for (var i = strArray.length - 1; i >= 0; i--) {
        if (strArray[i].length == 0) {
            continue
        } else {
            return strArray[i].length
        }
    }
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))

