"use strict";

const { log } = console;

function isPrime(num) {
  if ([0, 1].some((i) => i === num)) return false;

  if (num === 2) return true;

  if (num > 2 && num % 2 === 0) return false;

  const maxDivisor = Math.floor(Math.sqrt(num));

  // check if it has divisible other that the number it self

  for (let i = 3; i < maxDivisor + 1; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

const sampleArray = Array.from({ length: 20 }, (a, b) => b + 1);

for (let el of sampleArray) {
  log(`is ${el} a Prime :`, isPrime(el));
}
