nums = [42,45,67,65,54,34,32,34,78,90]
console.log(nums)

nums.forEach((n)=>{
    console.log(n)
})

nums.forEach( n => {
    console.log(n**2)
})

nums.forEach((n,i,nums) => {
    console.log(n**2, i, nums)
})