'use strict'
import { isPrime, getPrimes, iterPrimes } from "../../primes.mjs";

(async function()
{
	for (let prime of iterPrimes()) {
		if (prime > 10950 && prime < 10960) {
			console.log("10957:", prime === 10957);
			break;
		}
	}
	getPrimes(250).then(primes => console.log(primes.join(", ")));
	getPrimes(5).then(primes => console.log(primes.join(", ")));
	isPrime(10957).then(result => console.log("5: ", result));
	isPrime(10958).then(result => console.log("6: ", result));
	isPrime(53879).then(result => console.log("7: ", result));
	getPrimes(0).then(primes => console.log(primes.join(", ")));
	getPrimes(77).then(primes => console.log(primes.join(", ")));
	for (let prime of iterPrimes()) {
		if (prime > 10950 && prime < 10960) {
			console.log("10958:", prime === 10958);
			break;
		}
	}
})();
