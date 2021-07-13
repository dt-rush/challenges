// find an element in a sorted array
function binarySearch(arr, k) {
    lower = 0
    upper = arr.length - 1
    while (lower <= upper) {
        midpoint = Math.floor((lower + upper)/2)
        if (arr[midpoint] > k) {
            console.log(arr[midpoint] + ' @ ' + midpoint + ' > ' + k)
            upper = midpoint - 1
        } else if (arr[midpoint] < k) {
            console.log(arr[midpoint] + ' @ ' + midpoint + ' < ' + k)
            lower = midpoint + 1
        } else {
            console.log(arr[midpoint] + ' @ ' + midpoint)
            return midpoint
        }
    }
    return -1
}




arr = [0,1,1,2,4,7,14,20]
console.log(binarySearch(arr, 20)) // should be 7
console.log(binarySearch(arr, 7)) // should be 5
console.log(binarySearch(arr, 8)) // should be -1
console.log(binarySearch(arr, 1)) // should be 1 (or 2?)
console.log(binarySearch(arr, 0)) // should be 1 (or 2?)
