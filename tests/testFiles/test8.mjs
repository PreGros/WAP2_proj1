'use strict'
import { isPrime, getPrimes, iterPrimes } from "../../primes.mjs";

(async function()
{
	for (let prime of iterPrimes()) {
		if (prime > 1000) {
			console.log("1009:", prime === 1009);
			break;
		}
	}
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
	for (let prime of iterPrimes()) {
		if (prime > 72 && prime < 78) {
			console.log("73:", prime === 73);
		}
		if (prime > 5500 && prime < 5502) {
			console.log("5501:", prime === 5501);
		}
		if (prime > 7902 && prime < 7918) {
			console.log("7907:", prime === 7907);
		}
		if (prime > 7910 && prime < 7920) {
			console.log("7917:", prime === 7917);
			break;
		}
	}
	isPrime(53879).then(result => console.log("7: ", result));
	getPrimes(0).then(primes => console.log(primes.join(", ")));
	getPrimes(77).then(primes => console.log(primes.join(", ")));
	for (let prime of iterPrimes()) {
		if (prime > 10950 && prime < 10960) {
			console.log("10958:", prime === 10958);
			break;
		}
	}
	isPrime(558039).then(result => console.log("2: ", result));
	isPrime(0).then(result => console.log("3: ", result));
	isPrime(-1).then(result => console.log("4: ", result));
	isPrime(43).then(result => console.log("5: ", result));
	isPrime(1).then(result => console.log("6: ", result));
	isPrime(553).then(result => console.log("7: ", result));
	isPrime(42).then(result => console.log("2: ", result));
})();
