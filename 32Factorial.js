let findFactorial = (num) => {
    if(num === 0){
        return 1
    }
    else{
        return num * findFactorial(num-1)
    }
}

console.log(findFactorial(4));