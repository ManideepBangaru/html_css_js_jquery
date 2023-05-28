let alien1 = {
    Name: "Manideep",
    tech: "Python"
}

console.log(alien1)

let alien2 = {
    Name: "Manideep",
    tech: "Python",
    laptop:{
        brand: "Dell",
        chip: "i7"
    }
}

console.log(alien2)
console.log(alien2.laptop.brand)
console.log(alien2.laptop.brand.length)
console.log(alien2.laptop.brand1?.length)

delete alien2.laptop
console.log(alien2)