let alien = {
    Name: "Manideep",
    tech: "Python",
    laptop:{
        brand: "Dell",
        chip: "i7"
    }
}

console.log(alien)

for(let key in alien){
    console.log(key, alien[key])
}