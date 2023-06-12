// function multiplyNumbers(a, b) {
//     return a * b;
// }

// let product = multiplyNumbers(4,5);
// console.log(product);

// number 3
// function isDivisible(n, x, y) {
//     if(n%x === 0 && n % y === 0) {
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(isDivisible(20,2,5));

// number 4

function findPrimeNums(digit) {
    let primenums = [];

    for(let i = 2; i <= digit; i++) {
        let isPrime = true;
        for (let a = 2; a <= Math.sqrt(i); a++) {
            if (i % a === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            primenums.push(i);
        }
    }

    return primenums;
}

console.log(findPrimeNums(100));