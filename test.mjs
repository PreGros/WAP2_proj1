import { isPrime } from './primes.mjs';

async function test() {
    console.log(await isPrime(2));  // true
    console.log(await isPrime(4));  // false
    console.log(await isPrime(17)); // true
}

test();
