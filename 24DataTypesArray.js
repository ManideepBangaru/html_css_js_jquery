let names = ['Naveen','Kiran']
console.log(names)

let data = ['Navin','Kiran']
data[2] = 'vini'
console.log(data)
data[3] = 34
console.log(data)

data[4] = {tech : 'Python'}
data[5] = function(num1,num2){
    return num1 + num2
}

console.log(data)

console.log(data[5](1,2))