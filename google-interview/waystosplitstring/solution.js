function uniqueCharCount(s) {
    set = new Set()
    for (letter of s) {
        set.add(letter)
    }
    return set.size
}

function splits(s) {
    results = []
    for (let i = 1; i < s.length; i++) {
        results.push([
            s.substr(0, i),
            s.substr(i)
        ])
    }
    return results
}

function waysToSplit(s) {
    count = 0
    for (split of splits(s)) {
        if (uniqueCharCount(split[0]) === uniqueCharCount(split[1])) {
            count++
        }
    }
    return count
}


// testing
console.log(uniqueCharCount('abc') == 3)
console.log(uniqueCharCount('aabc') == 3)
console.log(uniqueCharCount('aaabc') == 3)
console.log(uniqueCharCount('aaabcd') == 4)
console.log(waysToSplit('aaaa') == 3)
console.log(waysToSplit('bac') == 0)
console.log(waysToSplit('ababa') == 2)
