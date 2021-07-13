function nonogram(row) {
    return row.reduce((counts, digit, i) => {
        if (digit == 1) {
            counts[counts.length - 1]++
        } else if (digit == 0) {
            counts.push(0)
        }
        return counts
    }, [0])
    .filter((x) => x !== 0)
}


row = [1,1,0,1,0,0,1,1,1,0,0]
console.log(nonogram(row))

row = [0,1,1,1,1,1,0,1,1,1,1]
console.log(nonogram(row))
