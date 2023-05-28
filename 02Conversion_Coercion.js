// conversion
let num1 = 6
console.log(num1, typeof num1)

let num2 = String(num1)
console.log(num2, typeof num2)

let num3 = Number(num2)
console.log(num3, typeof num3)

let num4 = Boolean(num3)
console.log(num4, typeof num4)

// coercion
let x
console.log(x, typeof x)

x = 8
console.log(x, typeof x)

x = x + ""
console.log(x, typeof x)

x = x - 2
console.log(x, typeof x)

x = !x
console.log(x, typeof x)

let y = parseInt("123 Manideep")
console.log(y, typeof y)