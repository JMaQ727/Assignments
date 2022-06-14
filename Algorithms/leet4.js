var isAnagram = function(s, t) { 
    var splitS = s.split("").sort()
    var splitT = t.split("").sort()
    if (splitS.length !== splitT.length) {
        return false
    }
    for (var i = 0; i < splitS.length; i++) {
        console.log(splitS[i], splitT[i])
        if (splitS[i] !== splitT[i]) {
            return false
        }
    }
    return true
};

console.log(isAnagram("tokyo", "kyotdfsdfsd"))