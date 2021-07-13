function kaprekarSplit(n) {
    if (n == 1) return 0
    m = n * n
    s = '' + m
    for (let i = 0; i < s.length; i++) {
        leftM = parseInt(s.substr(0, i))
        rightM = parseInt(s.substr(i))
        if (leftM + rightM == n) {
            return i
        }
    }
    return -1
}

// testing
console.log('k(45) == ' + kaprekarSplit(45))
console.log('k(99999) == ' + kaprekarSplit(99999))
console.log('k(1) == ' + kaprekarSplit(1))
console.log('k(2223) == ' + kaprekarSplit(2223))
console.log('k(5051) == ' + kaprekarSplit(5051))
