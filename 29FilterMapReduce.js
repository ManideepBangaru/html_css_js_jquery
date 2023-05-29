let nums = [43,45,56,65,67,76,78]

nums.forEach(n => {
    if(n%2==0){
        console.log(n)
    }
})

// filter
console.log(nums.filter(n => n%2===0))

nums.filter(n => n%2===0)
    .forEach(n => {
        console.log(n**2)
    })

// map
nums.filter(n => n%2===0)
    .map(n => n**3)
    .forEach(n => {
    console.log(n)
})

// reduce
let result = nums.filter(n => n%2===0)
                 .map(n => n**3)
                 .reduce((a,b) => a + b)
console.log(result)
