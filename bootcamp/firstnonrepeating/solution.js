function firstNonRepeating(arr) {
    freqMap = arr.reduce((map, x) => {
        if (map[x]) {
            map[x]++
        } else {
            map[x] = 1
        }
        return map
    }, {})
    for (let i = 0; i < arr.length; i++) {
        if (freqMap[arr[i]] == 1) {
            return arr[i]
        }
    }
    return undefined
}




// testing
arr = [1,1,2,2,3,4,4,5,5,6]
console.log(firstNonRepeating(arr))
