function binarySearch(arr, x) {
    lower = 0
    upper = arr.length - 1
    while (lower != upper) {
        midpoint = Math.floor((lower + upper) / 2)
        if (x < arr[midpoint]) {
            upper = midpoint
        }
        else if (x > arr[midpoint]) {
            lower = midpoint + 1
        }
        else if (x === arr[midpoint]) {
            return midpoint
        }
    }
    return -1
}



arr = [1,1,1,2,3,4,6,7,8]
console.log(binarySearch(arr, 7))
