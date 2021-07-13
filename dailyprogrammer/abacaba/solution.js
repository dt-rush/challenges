alphabet = 'abcdefghijklmnopqrstuvwxyz'

function abacaba(n) {
    s = ''
    for (let i = 0; i < n; i++) {
        s = s + alphabet[i] + s
    }
    return s
}

console.log(abacaba(26).length)
