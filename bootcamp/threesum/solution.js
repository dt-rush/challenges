function twosum(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        want = x - arr[i]
        rest = arr.filter((a, j) => j !== i)
        if (rest.indexOf(want) !== -1) {
            return true
        }
    }
    return false
}

function threesum(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        want = x - arr[i]
        rest = arr.filter((a, j) => j !== i)
        if (twosum(rest, want)) {
            return true
        }
    }
    return false
}



arr = [1,2,3,4,5,6,7]
console.log(threesum(arr, 18))
console.log(threesum(arr, 19))
