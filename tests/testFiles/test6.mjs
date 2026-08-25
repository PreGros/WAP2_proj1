'use strict'
import { isPrime, getPrimes, iterPrimes } from "../../primes.mjs";

(async function()
{
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
	for (let prime of iterPrimes()) {
		if (prime > 10950 && prime < 10960) {
			console.log("10957:", prime === 10957);
			break;
		}
	}
})();
