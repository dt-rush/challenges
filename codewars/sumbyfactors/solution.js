function isPrime(n) {
    for (let i = 2; i <= Math.floor(n/2); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

function primeFactors(n) {
    factors = []
    if (n < 0) {
        n *= -1
    }
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i)
        }
    }
    return new Set(factors.filter(x => isPrime(x)))
}

function sumOfDivided(I) {
    // factorsMap allows us to look up a Set of the prime factors of
    // each element of I
    factorsMap = {}
    for (i of I) {
        factorsMap[i] = primeFactors(i)
    }
    // build a set of *all* prime factors of any of the elements of I
    allFactors = new Set()
    for (i of I) {
        for (factor of factorsMap[i]) {
            allFactors.add(factor)
        }
    }
    // for each prime factor, associate the sum of all elements which it divides
    result = []
    for (factor of Array.from(allFactors).sort((a, b) => a - b)) {
        result.push([
            factor,
            I.filter((i) => factorsMap[i].has(factor))
                .reduce((sum, x) => sum + x)
        ])
    }
    return result
}




// testing
I = [12, 15]
console.log(sumOfDivided(I)) // should be [[2, 12], [3, 27], [5, 15]]
