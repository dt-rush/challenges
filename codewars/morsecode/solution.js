MORSE_CODE = {
    '.-': 'a',
    '.----': 'b',
    '.-.-': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.':'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z'
}

decodeMorse = function(morseCode) {
    morseCode = morseCode.trim()
    translation = ''
    words = morseCode.split(/   /).filter((s) => !/^\s*$/.test(s))
    for (word of words) {
        letters = word.split(/ /)
        for (letter of letters) {
            translation += MORSE_CODE[letter]
        }
        translation += ' '
    }
    return translation.toUpperCase().trim()
}

sampleEvery = function(str, n) {
    s = ''
    for(let i = 0; i < str.length; i += n) {
        s += str[i]
    }
    return s
}

// given 11110000111100, return
// [
//     { char: '1', streak: 4},
//     { char: '0', streak: 4},
//     { char: '1', streak: 4},
//     { char: '0', streak: 2}
// ]
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
    console.log(seq)
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
            morse += ' '
        }
        else if (s.char == '0' && s.streak == 7) {
            // spacespace
            morse += '   '
        }

    }
    // return seq
    return morse
}

decodeBits = function(bits) {
    // remove leading/trailing zeroes
    bits = bits.replace(/^0+|0+$/g, "")
    // determine sample frequency (number of repeats 
    // of each digit in the msg)
    // (the minimal repeat seen in the message according
    // to the function `streaks()`)
    sampleFreq = Math.min.apply(undefined, streaks(bits).map(o => o.streak))
    // reduce the message
    bits = sampleEvery(bits, sampleFreq)
    return bitsToMorse(bits)
}

/// testing
// console.log(decodeMorse('.-- .- - ..- .--.   -.. --- --- -..')) // should be 'WATUP DOOD'

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .')) // should be 'HEY JUDE'

// console.log(decodeMorse('    .    ')) // should be 'E'

// console.log(decodeMorse('    . .   ')) // should be 'E E'

bits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'

console.log(decodeBits(bits)) // should be '.... . -.--   .--- ..- -.. .'
console.log(decodeMorse(decodeBits(bits))) // should be '.... . -.--   .--- ..- -.. .'

// console.log(decodeMorse(decodeBits(bits))) // should be 'HEY JUDE'

bits = '1111000011110000111111111111' // ..-
console.log(decodeBits(bits))


bits = '1'
console.log(decodeBits(bits))
