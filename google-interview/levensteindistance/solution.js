function ld(a, b) {
    table = new Array(a.length + 1).fill(0).map(() => new Array(b.length + 1).fill(0))
    // base cases for empty string comparison
    for (let i = 0; i < a.length + 1; i++) {
        table[i][0] = i
    }
    for (let j = 0; j < b.length + 1; j++) {
        table[0][j] = j
    }
    // fill interior of table
    for (let i = 1; i < a.length + 1; i++) {
        for (let j = 1; j < b.length + 1; j++) {
            del = 1 + table[i-1][j]
            ins = 1 + table[i][j-1]
            substitutionCost = (a[i-1] == b[j-1]) ? 0 : 1
            rep = table[i-1][j-1] + substitutionCost
            table[i][j] = Math.min.apply(Math, [ 
                del, ins, rep
            ])
        }
    }
    table.forEach(row => console.log(row.join(',')))
    return table[a.length][b.length]
}


// testing
a = 'benyam'
b = 'ephrem'
console.log(ld(a, b)) // should be 5
