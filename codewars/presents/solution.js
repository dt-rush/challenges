function presents(a) {
    whoGave = a.slice(0)
    for (let i = 1; i <= a.length; i++) {
        // a[i] = x means x gave a present to i
        whoGave[a[i - 1] - 1] = i
    }
    return whoGave
}

// testing
console.log(presents([2, 3, 4, 1]))
