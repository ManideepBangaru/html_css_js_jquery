let nums = []

nums[0] = 5
nums[99] = 9

console.log(nums)
console.log(nums.length)

for (let n of nums){
    console.log(n)
}

for (let n in nums){
    console.log(nums[n])
}