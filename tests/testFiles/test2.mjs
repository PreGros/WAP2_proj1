'use strict'
import { isPrime, getPrimes, iterPrimes } from "../../primes.mjs";

(async function()
{
	getPrimes(10).then(primes => console.log(primes.join(", ")));
	getPrimes(100).then(primes => console.log(primes.join(", ")));
	getPrimes(500).then(primes => console.log(primes.join(", ")));
	getPrimes(250).then(primes => console.log(primes.join(", ")));
	getPrimes(5).then(primes => console.log(primes.join(", ")));
})();
