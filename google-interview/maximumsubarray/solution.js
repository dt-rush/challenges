function arrSum(arr) {
    return arr.reduce((sum, x) => sum + x, 0)
}

function genSub(arr, k, i=0, subarray=[], subarrays=[]) {
    // if subarray.length == k, include the array (push to subarrays)
    if (subarray.length === k) {
        subarrays.push(subarray)
        return
    }
    // if i >= arr.length, invalid (don't push to subarrays)
    if (i >= arr.length) {
        return
    }
    // 1: include the element at i
    genSub(arr, k, i+1, subarray.concat([arr[i]]), subarrays)
    // 2: don't include the element at i
    genSub(arr, k, i+1, subarray.concat([]), subarrays)
    return subarrays
}

function maxSubArray(arr, k) {
    subs = genSub(arr, k)
    subs.sort((a, b) => arrSum(a) - arrSum(b))
    return subs[subs.length-1]
}



// testing
arr = [1,2,3,4,5,6,5,4,3,2,1]
console.log(maxSubArray(arr, 3))
