let phoneBook = new Map();

phoneBook.set('Name','Manideep')
phoneBook.set('empId', 123)
phoneBook.set('Name','Manoj')

console.log(phoneBook)
console.log(phoneBook.keys())

console.log(phoneBook.get('empId'))

for(let [k,v] of phoneBook) {
    console.log(k,":",v)
}

phoneBook.forEach((v,k) => {
    console.log(k,"=",v)
})