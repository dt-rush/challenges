function searchInBinaryArray(arr, x, i=0) {
    console.log(i)
    if (i >= arr.length) {
        return -1
    }
    if (x === arr[i]) {
        return i
    }
    else if (x < arr[i]) {
        // search left branch
        return searchInBinaryArray(arr, x, 2*i + 1)
    }
    else if (x > arr[i]) {
        // search right branch
        return searchInBinaryArray(arr, x, 2*i + 2)
    }
}





arr = [4,2,7,1,3,6,8]
console.log(searchInBinaryArray(arr, 6))
