function nthSmallest(list, n) {
    if (n > list.length) {
        throw new Error(`${n} greater than list length`)
    }
    list = list.sort((a, b) => a - b)
    return list[n-1]
}



// testing
arr = [1, 2, 3, 4, 5, 6, 7]
n = 5
console.log(nthSmallest(arr, n)) // should print 5
