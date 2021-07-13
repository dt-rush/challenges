function singleNumber(nums) {
    seen = new Set()
    for (num of nums) {
        if (seen.has(num)) {
            seen.delete(num)
        } else {
            seen.add(num)
        }
    }
    return Array.from(seen)[0]
}






nums = [2,2,1]
console.log(singleNumber(nums)) // should be 1

nums = [4,1,2,1,2]
console.log(singleNumber(nums)) // should be 4

nums = [1]
console.log(singleNumber(nums)) // should be 1
