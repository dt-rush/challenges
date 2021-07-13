function flipfront(arr, n) {
    front = arr.slice(0, n)
    rest = arr.slice(n, arr.length)
    return front.reverse().concat(rest)
}

// find the index of the greatest element up til index n
function indexOfGreatest(arr, n) {
    ix = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[ix]) {
            ix = i
        }
    }
    return ix
}

function pancakesort(arr) {
    // n is how many remain to sort
    let n = arr.length
    while (n > 0) {
        ix = indexOfGreatest(arr, n)
        // flip ix to the front
        arr = flipfront(arr, ix + 1)
        // flip ix to position n (lowest of sorted suffix)
        arr = flipfront(arr, n)
        n--
    }
    return arr
}


console.log(pancakesort([3, 2, 1, 4, 5, 6]))
console.log(pancakesort([3,2,1,1,2,3,2,3,1,3,1,2]))
