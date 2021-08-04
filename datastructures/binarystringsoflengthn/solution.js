function binaryStringsOfLengthN(n) {

    let recurse = function(remaining=n, str="", solns=[]) {
        if (remaining === 0) {
            solns.push(str)
            return
        }
        one = recurse(remaining-1, str + "1", solns)
        zero = recurse(remaining-1, str + "0", solns)
        return solns
    }

    solns = recurse()

    return solns
}



// testing
n = 4
console.log(binaryStringsOfLengthN(n)) // should output ... well, you get it
