'use strict'
import { isPrime, getPrimes, iterPrimes } from "../../primes.mjs";

(async function()
{
	isPrime(5890).then(result => console.log("2: ", result));
	isPrime(425).then(result => console.log("3: ", result));
	isPrime(0).then(result => console.log("4: ", result));
	isPrime(1).then(result => console.log("5: ", result));
	isPrime(521).then(result => console.log("6: ", result));
	isPrime(33).then(result => console.log("7: ", result));
	isPrime(535353).then(result => console.log("2: ", result));
})();
