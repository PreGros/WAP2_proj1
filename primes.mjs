const knownPrimesSet = new Set()
const knownPrimesList = [];

export async function isPrime(n) {
    if (knownPrimesSet.has(n))  {
        return true;
    }

    let sqrtFloorN = Math.sqrt(n);
    for (let i = 2; i <= sqrtFloorN; i++) {
        if (n % i == 0)
            return false;
    }
    
    knownPrimesSet.add(n);
    return true;
}

export async function getPrimes(threshold) {
    for (let i = 0; i <= threshold; i++) {
        if (await isPrime(i))
            knownPrimesList.push(i)
    }

    return knownPrimesList;
}