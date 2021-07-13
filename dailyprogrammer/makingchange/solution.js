coinValues = [
    1, 5, 10, 25, 100, 500
]

function change(x) {
    n = 0
    i = coinValues.length - 1
    while (x !== 0) {
        if (x >= coinValues[i]) {
            x -= coinValues[i]
            n++
        } else {
            i--
        }
    }
    return n
}


// testing
//
console.log(change(0)) // should be 0
console.log(change(12)) // should be 3
console.log(change(468)) // should be 11
console.log(change(123456)) // should be 254
