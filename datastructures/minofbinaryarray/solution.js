function minOfBinaryArray(arr, i=0) {
    if (i >= arr.length) {
        return undefined
    }
    if (2*i + 1 < arr.length) {
        return minOfBinaryArray(arr, 2*i + 1)
    }
    else if (2*i + 1 >= arr.length) {
        return arr[i]
    }
}




// testing
arr = [4,2,7,1,3,6,8]
console.log(minOfBinaryArray(arr)) // should be 1
