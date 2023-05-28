let greet1 = () => {
    return 'Hello'
}

console.log(greet1())

let greet2 = (user) => {
    return `Hello ${user}`
}

console.log(greet2('Manideep'))

let sumFun = (num1, num2) => {
    return num1 + num2
}
console.log(sumFun(45,65))

let add = (num1, num2) => num1 + num2
console.log(add(45,65))

let addPosOnly = (num1, num2) => num1 + (num2>0 ? num2 : -1*num2)
console.log(addPosOnly(45,-65))