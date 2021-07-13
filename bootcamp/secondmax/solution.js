function secondMax(arr) {
    arr = arr.sort()
    i = Math.max(0, arr.length - 2)
    return arr[i]
}

function secondMax2(arr) {
    max = arr[0]
    secondMax = arr[0]
    for (el of arr) {
        if (el > max) {
            secondMax = max
            max = el
        }
    }
    return secondMax
}



// testing
arr = [1,2,3,4,5,6]
console.log(secondMax(arr))
console.log(secondMax2(arr))
