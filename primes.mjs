const knownPrimesSet = new Set();
const knownPrimesMap = new Map();
const maxPrimeKey = -1;

function checkPrime(n) {
    let sqrtFloorN = Math.sqrt(n);
    for (let i = 2; i <= sqrtFloorN; i++) {
        if (n % i == 0)
            return false;
    }

    knownPrimesSet.add(n);

    return true;
}

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
function findLowerPrimeIndex(threshold, maxPrimeList) {
    let left = 0;
    let right = maxPrimeList.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (maxPrimeList[middle] === threshold) {
            return middle;
        } else if (maxPrimeList[middle] < threshold) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return right;
}

export async function getPrimes(threshold) {
    // In case I have already computed same threshold
    if (knownPrimesMap.has(threshold)) {
        // console.log("Already computed!");
        return knownPrimesMap.get(threshold);    
    }

    // In case I have already computed threshold with greater number (I know prime number greater than my threshold)
    let maxPrimeVal = knownPrimesMap.has(maxPrimeKey) ? knownPrimesMap.get(maxPrimeKey) : 1;
    let maxPrimeList = (maxPrimeVal != 1) ? knownPrimesMap.get(maxPrimeVal) : [];
    if (maxPrimeVal > threshold){
        // console.log("Slicing!");
        return maxPrimeList.slice(0, findLowerPrimeIndex(threshold, maxPrimeList));
    }

    // Max known prime number is lower
    let tempArray = [...maxPrimeList]; // should be the fastest way since ECMA2015 of copying an array to an array
    let maxFoundPrime = 0;
    for (let i = maxPrimeVal+1; i <= threshold; i++) { // plus one to find a number greater then max known prime in map
        if (knownPrimesSet.has(i) || checkPrime(i)) {
            tempArray.push(i);
            maxFoundPrime = i;
        }
    }

    knownPrimesMap.set(maxPrimeKey, maxFoundPrime);

    // Add new array up to given threshold
    knownPrimesMap.set(threshold, tempArray);

    return tempArray;
}