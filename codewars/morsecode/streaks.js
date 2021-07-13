//
streaks = function(bits) {
    s = []

    for (let i = 0; i < bits.length;) {
        let x = 0
        while (bits[i + x] == bits[i] && i + x < bits.length) {
            x++
        }
        s.push({char: bits[i], streak: x})
        i += x
    }
    return s
}

// testing
console.log(streaks('11110000111100')) // should print [4, 4, 4, 2]
console.log(streaks('011110000111100')) // should print [1, 4, 4, 4, 2]
console.log(streaks('0111100001111001')) // should print [1, 4, 4, 4, 2, 1]
console.log(streaks('1')) // should print [1]
