function parseInt2(str) {
    // validate according to regex
    re = /\-?\d+/
    if (!re.test(str)) {
        throw new Error('invalid format to parseInt2()')
    }
    // set initial number to 0 and tens to 0
    number = 0
    tens = 0
    // iterate backward through str, multiplying by 10^tens and
    // adding to number
    for (let i = str.length-1; i >= 0; i--) {
        if (/\d/.test(str[i])) {
            number += Math.pow(10, tens) * (str[i] - '0')
        }
        // if we reach a negative sign, multiply by -1
        if (str[i] === '-') {
            number *= -1
        }
        tens++
    }
    return number
}


// testing
console.log(parseInt2("-42") + 2) // should print -40
