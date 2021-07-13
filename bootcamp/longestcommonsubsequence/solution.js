// recursive solution
function lcs(a, b) {
    if (a === '' || b === '') {
        return 0
    }
    if (a[a.length-1] == b[b.length-1]) {
        return 1 + lcs(a.substr(0, a.length-1), b.substr(0, b.length-1))
    } else {
        return Math.max(
            lcs(a, b.substr(0, b.length-1)),
            lcs(a.substr(0, a.length-1), b)
        )
    }
}


a = 'aab'
b = 'azb'
console.log(lcs(a, b)) // ab == 2

a = 'aggtab'
b = 'gxtxayb'
console.log(lcs(a, b)) // gtab == 4
