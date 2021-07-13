// toPermute is an array of elements which remain to be permuted
// building is an array of a premutation we have built up so far
// completed is where finished premutations will be stored
//
// example
//
// at the beginning, 
// toPermute is [a, b, c]
// building is []
// completed is []
//
// then for each of a, b, c, we create `remaining`, which is
// [b,c], [a, c], and [a, b] respectively
// we add the character being considered (a, b, or c) onto `building`
// and we set `toPermute` to the `remaining`
//
// so immediately,
// toPermute is [b, c] and `building` is [a]
//
// in the deeper function call (we recurse), we iterate over `toPermute`
// again, adding (one at a time) `b` and `c` to `building`, and having
// `remaining` (= `toPermute` of the deeper call) be `c` and `b`, 
// respectively
//
dumbPermute = function (toPermute, building=[], completed=[]) {
    // if there's nothing left to permute, building is a finished permutation
    if (!toPermute.length) completed.push(building)
    // else, iterate through the elements of toPermute, and
    // build a permutation based off appending each of them to `building`
    for (let i = 0; i < toPermute.length; i++) {
        // `toPermute` should be all except the symbol we are about
        // to add onto `building`
        remaining = toPermute.filter((x, j) => j != i)
        // clone the set of symbols built so far to pass in
        cloned = building.slice(0)
        cloned.push(toPermute[i])
        // permute deeper
        dumbPermute(remaining, cloned, completed)
    }
    return completed
}

listEquals = (listA) => (listB) => {
    if (listA.length !== listB.length) {
        return false
    }
    for (let i = 0; i < listA.length; i++) {
        if (listA[i] != listB[i]) {
            return false
        }
    }
    return true
}

permutations = function(toPermute) {
    results = dumbPermute(Array.from(toPermute))
    seen = []
    // prevent permutations from being seen more than once
    // (this occurs because dumbPermute doesn't care
    // about equivalence among the symbols)
    results.forEach((list) => {
        if (seen.find(listEquals(list)) === undefined) {
            seen.push(list)
        }
    })
    return seen.map((arr) => arr.join(''))
}



// testing
console.log(permutations('aabb'))
