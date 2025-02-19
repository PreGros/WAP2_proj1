const knownPrimesSet = new Set()
var knownPrimesList = [];

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
// Binární vyhledávání 
function findLowerPrimeIndex(threshold) {
    let left = 0;
    let right = knownPrimesList.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (knownPrimesList[middle] === threshold) {
            return middle;
        } else if (knownPrimesList[middle] < threshold) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return right;
}

export async function getPrimes(threshold) {
    let acc = 0;
    let tempList = [];
    let maxKnownPrime = knownPrimesList[knownPrimesList.length - 1]

    if (knownPrimesList.length != 0) {
        if (maxKnownPrime < threshold)
            acc = maxKnownPrime;
        else if (maxKnownPrime == threshold)
            return knownPrimesList;
        else if (maxKnownPrime > threshold) {
            return knownPrimesList.slice(0, findLowerPrimeIndex(threshold))
        }
    }


    for (let i = acc; i <= threshold; i++) {
        if (await isPrime(i)) // TODO: přidat kontrolu jestli je prvočíslo v setu
            knownPrimesList.push(i)
    }

    return knownPrimesList;
}