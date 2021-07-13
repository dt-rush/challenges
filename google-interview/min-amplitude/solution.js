function minAmplitude(arr) {
    sorted = arr.sort((a, b) => a - b)
    dfs = function (arr, toRemove) {
        if (!arr.length) {
            return 0
        }
        if (toRemove == 0) {
            return arr[arr.length-1] - arr[0]
        }
        l = dfs(arr.slice(1), toRemove - 1)
        r = dfs(arr.slice(0, arr.length-1), toRemove - 1)
        return Math.min(l, r)
    }
    return dfs(sorted, 3)
}

// testing
console.log(minAmplitude([1, 1, 1, 3, 4, 5])) // should be 0
console.log(minAmplitude([1, 1, 2, 3, 4, 5])) // should be 1
console.log(minAmplitude([1, 4, 6, 8, 12])) // should be 2
console.log(minAmplitude([1, 1, 4, 6, 9, 12])) // should be 3
