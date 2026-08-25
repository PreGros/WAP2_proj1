'use strict'
import { isPrime, getPrimes, iterPrimes } from "../../primes.mjs";

(async function()
{
	getPrimes(0).then(primes => console.log(primes.join(", ")));
	getPrimes(1).then(primes => console.log(primes.join(", ")));
	getPrimes(49).then(primes => console.log(primes.join(", ")));
	getPrimes(1).then(primes => console.log(primes.join(", ")));
	getPrimes(0).then(primes => console.log(primes.join(", ")));
	getPrimes(8950).then(primes => console.log(primes.join(", ")));
	getPrimes(6509).then(primes => console.log(primes.join(", ")));
	getPrimes(5).then(primes => console.log(primes.join(", ")));
	getPrimes(0).then(primes => console.log(primes.join(", ")));
})();
