Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % 2 === 0) {
            return false;
        } else if (Math.sqrt(this) % 1 === 0) {
            return false;
        } else if (this % i === 0) {
            return false;
        }
    }
    return true;
}

// const {
//     performance
// } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while (primeCount < 1e4) {
//     if (num.isPrime()) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);



const {
    performance
} = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e5) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`); //104729
console.log(`This took ${performance.now() - start} milliseconds to run`);

// console.log(`The 100,000th prime number is ${num-1}`); //
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// console.log(`The 1,000,000th prime number is ${num-1}`); //104729
// console.log(`This took ${performance.now() - start} milliseconds to run`);