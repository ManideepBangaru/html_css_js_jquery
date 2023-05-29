function Alien(name, tech){
    this.name = name;
    this.tech = tech;
}

let alien1 = new Alien('Manideep', 'Python')
console.log(alien1)

let alien2 = new Alien('Bangaru', 'JS')
console.log(alien2)

alien1.tech = 'C++';
console.log(alien1)
console.log(alien2)
