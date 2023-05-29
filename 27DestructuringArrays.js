let nums = [5,7,2,4]

console.log(nums)

// let a = nums[0]
// let b = nums[1]

let [a, b, c, d] = nums
console.log(a, b, c, d)

let [x, y, , z] = nums
console.log(x, y,  z)

let p = 5;
let q = 6;
[p,q] = [q,p]
console.log(p,q)

let words = "My Name is Manideep Bangaru"
console.log(words)
console.log(words.split(" "))

let [e,f,g,h,i] = words.split(" ")
let [j, k, , ...l] = words.split(" ")
console.log(l)