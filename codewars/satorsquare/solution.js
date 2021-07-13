reverseStr = function(str) {
    return Array.from(str).reverse().join('')
}

lefts = function(tablet) {
    return tablet.map((arr) => arr.join(''))
}

rights = function(tablet) {
    s = []
    for (let y = 0; y < tablet.length; y++) {
        str = ''
        for (let i = tablet[y].length - 1; i >= 0; i--) {
            str += tablet[y][i]
        }
        s.push(str)
    }
    return s
}

tops = function(tablet) {
    s = []
    for (let x = 0; x < tablet[0].length; x++) {
        str = ''
        for (let i = 0; i < tablet.length; i++) {
            str += tablet[i][x]
        }
        s.push(str)
    }
    return s
}

bottoms = function(tablet) {
    s = []
    for (let x = 0; x < tablet[0].length; x++) {
        str = ''
        for (let i = tablet.length - 1; i >= 0; i--) {
            str += tablet[i][x]
        }
        s.push(str)
    }
    return s
}

function isSatorSquare(tablet){
    l = lefts(tablet)
    r = rights(tablet)
    t = tops(tablet)
    b = bottoms(tablet)
    // lefts should equal tops
    // rights should equal bottoms
    lEQt = l.map((le, i) => le == t[i]).reduce((accum, x) => accum && x)
    rEQb = r.map((re, i) => re == b[i]).reduce((accum, x) => accum && x)
    isSator = lEQt && rEQb
    // further tests
    for (let i = 0; i < l.length; i++) {
        isSator = isSator && (reverseStr(l[i]) == t[t.length - 1 - i])
    }
    for (let i = 0; i < r.length; i++) {
        isSator = isSator && (reverseStr(r[i]) == b[b.length - 1 - i])
    }
    return isSator
}


// testing
tablet = [['S', 'A', 'T', 'O', 'R'],
          ['A', 'R', 'E', 'P', 'O'],
          ['T', 'E', 'N', 'E', 'T'],
          ['O', 'P', 'E', 'R', 'A'],
          ['R', 'O', 'T', 'A', 'S']]

console.log(lefts(tablet))
console.log(rights(tablet))
console.log(tops(tablet))
console.log(bottoms(tablet))

tablet = [['K', 'N', 'I', 'T'],          // warning:
          ['N', 'O', 'R', 'I'],          // O and 0 look similar
          ['I', 'R', '0', 'N'],          // but are not the same
          ['T', 'I', 'N', 'K']]

console.log(lefts(tablet))
console.log(rights(tablet))
console.log(tops(tablet))
console.log(bottoms(tablet))
console.log(isSatorSquare(tablet))
