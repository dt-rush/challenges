function twosum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        wanted = target - nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === wanted) {
                return [i, j]
            }
        }
    }
}


// testing
nums = [2,7,11,15]
target = 9
console.log(twosum(nums, target))
// Output: [0,1]

nums = [3,2,4]
target = 6
console.log(twosum(nums, target))
// Output: [1,2]

nums = [3,3]
target = 6
console.log(twosum(nums, target))
// Output: [0,1]
