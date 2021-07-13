function allEqual(list) {
    return list.reduce((equal, x) => equal && (list[0] == x), true)
}

function doSwap(a, b, pattern) {
    return a.map((x, i) => (pattern[i] == 1) ? b[i] : a[i])
}

// generate all combinations of 1 and 0 up to a given length
// (not including all 0 or all 1)
function generateSwapPatterns(length) {
    patterns = []
    for (let i = 0; i < Math.pow(2, length) - 1; i++) {
        pattern = []
        for (let bit = 0; bit < length; bit++) {
            pattern.push((i >> bit) % 2)
        }
        patterns.push(pattern)
    }
    return patterns
}

function minimumSwaps(tops, bottoms) {
    mins = []
    for (swap of generateSwapPatterns(tops.length)) {
        topSwapped = doSwap(tops, bottoms, swap)
        bottomSwapped = doSwap(bottoms, tops, swap)
        if (allEqual(topSwapped) || allEqual(bottomSwapped)) {
            nSwapsUsed = swap.reduce((sum, x) => sum + x, 0)
            mins.push(nSwapsUsed)
        }
    }
    return Math.min.apply(Math, mins)
}

tops = [2,1,2,4,2,2]
bottoms = [5,2,6,2,3,2]
// console.log(minimumSwaps(tops, bottoms))
console.log(minimumSwaps(tops, bottoms) == 2)
console.log(minimumSwaps([1, 1, 1, 1], [2, 2, 2, 2]) == 0)
console.log(minimumSwaps([1, 1, 2, 1], [2, 2, 1, 2]) == 1)
