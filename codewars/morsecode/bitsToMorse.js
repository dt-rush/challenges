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


/*
 * "Dot" – is 1 time unit long.
 * "Dash" – is 3 time units long.
 * Pause between dots and dashes in a character – is 1 time unit long.
 * Pause between characters inside a word – is 3 time units long.
 * Pause between words – is 7 time units long.
 */
bitsToMorse = function(bits) {
    morse = ''
    seq = streaks(bits)
    for (s of seq) {
        if (s.char == '1' && s.streak == 1) {
            // dot
            morse += '.'
        }
        else if (s.char == '0' && s.streak == 1) {
            // charspace
        }
        else if (s.char == '1' && s.streak == 3) {
            // dash
            morse += '-'
        }
        else if (s.char == '0' && s.streak == 3) {
            // wordspace
        }
        else if (s.char == '0' && s.streak == 7) {
            // spacespace
            morse += ' '
        }

    }
    // return seq
    return morse
}

// testing

console.log(bitsToMorse('10101000111011101110000000101010')) // should be sos
