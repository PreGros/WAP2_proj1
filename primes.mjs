'use strict'

/**
 * Set známých prvočísel
 * @type {Set<number>}
 */
const knownPrimesSet = new Set();

/**
 * Mapa známých prvočísel
 * @type {Map<number, number[]>}
 */
const knownPrimesMap = new Map();

/** 
 * Index největšího nalezeného prvočísla v mapě
 * @type {number}
 */
const maxPrimeKey = -1;

/**
 * Ověří zadané číslo zda je prvočíslem
 * @param {number} n - Zadané číslo
 * @returns {boolean} Vrátí True pokud je prvočíslem, False v opačeném případě
 */
function checkPrime(n) {
    if (n <= 1)
        return false;

    let sqrtFloorN = Math.sqrt(n);
    for (let i = 2; i <= sqrtFloorN; i++) {
        if (n % i == 0)
            return false;
    }

    knownPrimesSet.add(n);

    return true;
}

/**
 * Asynchronně ověřuje zda zadané číslo je prvočíslem
 * @param {number} n - Zadané číslo
 * @returns {Promise<boolean>} Vrací Promise, který vrací True pokud je prvočíslem, False v opačeném případě
 */
export async function isPrime(n) {
    if (knownPrimesSet.has(n))  {
        return true;
    }

    return checkPrime(n);
}

/**
 * Najde prvočíslo menší nebo rovné zadanému thresholdu
 * @param {number} threshold - Horní hranice
 * @param {number[]} maxPrimeList - Pole ve kterém se bude hledat
 * @returns {number} Prvočíslo menší nebo rovné zadanému thresholdu
 */
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

/**
 * Funkce vracející všechna prvočísla do zadané threshold hodnoty
 * @param {number} threshold - Horní hranice
 * @returns {Promise<number[]>} Vrací Promise, který vrací pole prvočísel do threshold hodnoty
 * @throws {Error} Pokud je threshold záporné číslo
 */
export async function getPrimes(threshold) {
    if (threshold < 0) {
        throw new Error(`Invalid threshold '${threshold}'`);
    }

    // In case I have already computed same threshold
    if (knownPrimesMap.has(threshold)) {
        return knownPrimesMap.get(threshold);    
    }

    // In case I have already computed threshold with greater number (I know prime number greater than my threshold)
    let maxPrimeVal = knownPrimesMap.has(maxPrimeKey) ? knownPrimesMap.get(maxPrimeKey) : 1;
    let maxPrimeList = (maxPrimeVal != 1) ? knownPrimesMap.get(maxPrimeVal) : [];
    if (maxPrimeVal > threshold){
        return maxPrimeList.slice(0, findLowerPrimeIndex(threshold, maxPrimeList) + 1);
    }

    // Max known prime number is lower
    let tempArray = [...maxPrimeList]; // should be the fastest way since ECMA2015 of copying an array to an array
    let maxFoundPrime = 1;
    for (let i = maxPrimeVal+1; i <= threshold; i++) { // plus one to find a number greater then max known prime in map (also start from 1+1)
        if (knownPrimesSet.has(i) || checkPrime(i)) { // quick eval if already save in knownPrimeSet
            tempArray.push(i);
            maxFoundPrime = i;
        }
    }

    // Updating highest number
    knownPrimesMap.set(maxPrimeKey, maxFoundPrime);

    // Adding references to all key values from max prime number up to threshold (threshold=100, maxFoundPrime=97, keys 97,98,99,100 will get the reference)
    for (let i = maxFoundPrime; i <= threshold; i++) {
        knownPrimesMap.set(i, tempArray);
    }

    return tempArray;
}

/**
 * Generátor prvočísel pamatující kde skončil
 * @yields {number} Další prvočíslo v pořadí.
 */
export function* iterPrimes() {
    let acc = 2;
    while (true) {
        if (knownPrimesSet.has(acc) || checkPrime(acc)) {
            yield acc;
        }
        acc++;
    }
}