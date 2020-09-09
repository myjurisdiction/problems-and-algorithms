"use strict";

function quickSort(a, s = 0, e = a.length - 1) {
  if (s < e) {
    const pivotIndex = partition(a, s, e);
    // left
    quickSort(a, s, pivotIndex - 1);

    // right
    quickSort(a, pivotIndex + 1, e);
  }

  return a;
}

function randomisedPartition(a, s, e) {
  let random = Math.floor(Math.random() * e);
  swap(a, s, random);
  return partition(a, s, e);
}

function partition(a, s, e) {
  let pivot = a[s],
    pivotIndex = s;

  for (let i = s; i <= e; i++) {
    if (a[i] < pivot) {
      pivotIndex += 1;
      swap(a, pivotIndex, i);
    }
  }

  swap(a, s, pivotIndex);
  return pivotIndex;
}

function swap(a, idx1, idx2) {
  return ([a[idx1], a[idx2]] = [a[idx2], a[idx1]]);
}

const sampleArray = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 10)
);

console.log("sample Array ", sampleArray);

console.log(quickSort(sampleArray));
