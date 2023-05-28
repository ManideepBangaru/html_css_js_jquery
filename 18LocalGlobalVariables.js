function greet(u){
    let num = 5;
    console.log(user)
    return `hello ${u}`;
}

let user = 'Manideep'
let result = greet(user)
console.log(result)

// console.log(num)

function sum(num1, num2, num3 = 1){
    return num1 + num2 + num3
}
console.log(sum(2,3))
console.log(sum(2,3,5))