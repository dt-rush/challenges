function dfs(l, r, loads) {
    if (!loads.length) {
        return Math.abs(r - l)
    }
    return Math.min(
        dfs(l + loads[0], r, loads.slice(1)),
        dfs(l, r + loads[0], loads.slice(1))
    )
}

function minAbsDiff(loads) {
    return dfs(0, 0, loads)
}


// testing
console.log(minAbsDiff([1, 2, 3, 4, 5]) == 1)
console.log(minAbsDiff([1, 2, 3]) == 0)
console.log(minAbsDiff([1, 1, 4]) == 2)
