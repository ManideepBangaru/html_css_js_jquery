let nums = new Set("shooooppppkeeeeepeeer");
console.log(nums)

let nums1 = new Set();
nums1.add(3)
nums1.add(4)
nums1.add(6)
nums1.add(2)
nums1.add(3)
nums1.add(4)
nums1.add("Manideep")
nums1.add("Manideep")

console.log(nums1)

nums1.forEach(n => {
    console.log(n)
})

console.log(nums1.has("Manideep"))