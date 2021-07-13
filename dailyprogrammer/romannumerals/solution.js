digitValues = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
}

/*
 * return output like:
 *
 [
  { n: 1, ch: 'M' },
  { n: 1, ch: 'D' },
  { n: 2, ch: 'C' },
  { n: 2, ch: 'X' },
  { n: 1, ch: 'V' },
  { n: 4, ch: 'I' }
 ]
 */
function romanNumeralGroups(s) {
    groups = [
        [s[0]],
    ]
    for(let i = 1; i < s.length; i++) {
        if (groups[groups.length - 1][0] === s[i]) {
            groups[groups.length - 1].push(s[i])
        } else {
            groups.push([s[i]])
        }
    }
    return groups.map((list) => ({
        n: list.length,
        ch: list[0]
    }))
}

function romanNumeralValue(s) {
    groups = romanNumeralGroups(s)
    sum = 0
    for (let i = 0; i < groups.length; i++) {
        value = digitValues[groups[i].ch] * groups[i].n
        // subtractive if next group has greater denomination
        if (i + 1 < groups.length &&
            digitValues[groups[i + 1].ch] > digitValues[groups[i].ch]) {
            value *= -1
        }
        sum += value
    }
    return sum
}

function greaterRomanNumeral(numeral1, numeral2) {
    diff = romanNumeralValue(numeral1) - romanNumeralValue(numeral2)
    if (diff > 0) {
        return numeral1
    }
    else if (diff <= 0) {
        return numeral2
    }
}




// testing
numeral = 'MDCCXXVIIII'
console.log(romanNumeralValue(numeral)) // should be 1729

numeral = 'MDCCXXIV'
console.log(romanNumeralValue(numeral)) // should be 1724

console.log(greaterRomanNumeral('MDCCXXVIIII', 'MDCCXXIV')) // should be MDCCXXVIIII
