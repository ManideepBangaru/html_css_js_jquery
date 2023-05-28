let laptop1 = {
    brand: 'Dell',
    chip: 'i9',
    RAM: '16GB',
    getConfig: function(){
        return this.RAM
    }
}

let laptop2 = {
    brand: 'Dell',
    chip: 'i7',
    RAM: '24GB',
    getConfig: function(){
        return this.RAM
    }
}

console.log(laptop1.getConfig())
console.log(laptop2.getConfig())