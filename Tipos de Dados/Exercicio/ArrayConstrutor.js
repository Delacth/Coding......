let myArr = []

function mainRandom(maxRandom, minRandm){
    return(Math.floor(Math.random() * (maxRandom - minRandm) + minRandm))  
}

for (let index = 0; index < 10; index++) {
    myArr.push(mainRandom(1,50000))
}

let somaArry = 0


for (let count = 0; count < myArr.length; count++) {
     somaArry += myArr[count];
}

console.log(myArr);
console.log(somaArry);
 

