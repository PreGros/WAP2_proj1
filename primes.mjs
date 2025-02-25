const knownPrimesSet = new Set()
const knownPrimesList = [];

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
    let maxKnownPrime = knownPrimesList[knownPrimesList.length - 1]
    let acc = maxKnownPrime ? maxKnownPrime : 0;


    if (maxKnownPrime > threshold) {
        return knownPrimesList.slice(0, findLowerPrimeIndex(threshold));
    }

    for (let i = acc+1; i <= threshold; i++) { // plus one to find a number greater then max known prime in list
        if (knownPrimesSet.has(i) || checkPrime(i)) {
            knownPrimesList.push(i);
        }
    }

    let tempArray = knownPrimesList.slice(); // each call of getPrimes need to create its own copy of an array instead of global array - reason is global array was returned in its final shape

    return tempArray;
}

// nejde to asi nějak vyřešit, pokud outputuji globální proměnnou, tak v asyn přístupu se vždycky vypíše nejpozději vyhodnocený stav
// řešit by to šlo tak, že si budu pamatovat nejdelší vypočítané pole a buď si brát jen to co potřebuji, nebo překopírovávat do nového pole ktere potom vyprintuji a upravim globalni
// pry to jde ještě přes map