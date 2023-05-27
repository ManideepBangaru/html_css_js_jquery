// **********************************************************************
// Say hello world
console.log("Hello World !!!")

// **********************************************************************

// Declare a variable
let num = 4
console.log(num * 3)

// **********************************************************************

// Declare constants
let radius = 5
const pi = 3.14
let area

area = pi * radius * radius

console.log(area)

// **********************************************************************

// Data types
let data = 8 //number
let user = 'Manideep' //String

// // primitive data types
// Number
// String
// Boolean
// null
// undefined
// symbol

// Number
let num1 = 12345678910111213141516 //int
console.log(num1 * 25)

let num2 = 5.8 //decimal
console.log(typeof(num2))

let num3 = 0xf //hexadecimal
console.log(typeof(num3))
console.log(num3)

let num4 = 1.5e12 //exponential
console.log(num4)

let num5 = 100_00_000 //new form of representing a number
console.log(num5)
console.log(typeof(num5))

let num6 = 5/0 //infinity
console.log(num6)

let num7 = 6
console.log(num7/"Manideep")
console.log(typeof(num7/"Manideep"))

// String
let userName = "Manideep Bangaru"
console.log(userName)
console.log(typeof(userName))

let firstName = "Manideep"
let lastName = "Bangaru"
let fullName  = firstName + " " + lastName

console.log(fullName)

let employee1 = "Manideep Bangaru \"Senior Data Scientist\""
console.log(employee1)
employee1 = "Manideep \nBangaru"
console.log(employee1)
employee1 = "Manideep \tBangaru"
console.log(employee1)
employee1 = "Manideep \vBangaru"
console.log(employee1)
employee1 = "Manideep B\bBangaru"
console.log(employee1)

// Boolean
let bool = 5 > 6
console.log(bool)
console.log(typeof(bool))

//Null
let randomVar = null
console.log(null)
console.log(typeof(null))

//undefined
let variab
console.log(variab)
console.log(typeof(variab))