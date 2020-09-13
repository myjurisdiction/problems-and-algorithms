console.log(`
    Longest increasing sub-sequence !!
`);

const sampleArray = [10, 22, 9, 33, 21, 50, 41, 60, 80];

// first let's creat a sort function
// 1. quick sort;

function partition(a, l = 0, r = a.length - 1) {
  let pivot = a[l],
    i = l,
    swapIndex = l;

  while (i < a.length) {
    if (a[i] < pivot) {
      swapIndex += 1;
      swap(a, swapIndex, i);
    }

    i += 1;
  }

  swap(a, swapIndex, l);
  return swapIndex;
}

function swap(a, idx1, idx2) {
  return ([a[idx1], a[idx2]] = [a[idx2], a[idx1]]);
}

function quickSort(a, left = 0, right = a.length - 1) {
  if (left < right) {
    const pivotIndex = partition(a, left, right);
    // left side partition
    quickSort(a, left, pivotIndex - 1);
    // right side partition
    quickSort(a, pivotIndex + 1, right);
  }

  return a;
}

const sortedArray = [...quickSort(sampleArray)];

console.log(sortedArray);

// now let's do binary search here...

function binarySearch(a, s) {
  let start = 0,
    end = a.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (a[middle] !== s && start <= end) {
    if (s < a[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor(Math.floor((start + end) / 2));
  }

  return a[middle] === s ? true : false;
}

console.log(binarySearch(sortedArray, 100));

/**
 *
 * @param {array of integers} a
 *
 * I must tell you that this approach has a time complexity of O(n ^ 2);
 *
 * Question is can we do this is less time complexity
 *
 * One more thing is that the same way we can do the longest non decreasing, or longest decreasing subsequence
 */

function longestIncreasingSubsequence(a) {
  let result = 0,
    momentResult,
    last;
  for (let i = 0; i < a.length; i++) {
    momentResult = 0;
    last = a[i];
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] > last) {
        last = a[j];
        momentResult++;
      }
    }
    result = Math.max(result, momentResult);
  }

  return result + 1;
}
console.log(longestIncreasingSubsequence([3, 4, -1, 0, 6, 2, 3]));

console.log(`
    This problem could also be solved using DP so here it is
`);

/**
 * Longest increasing subsequence using dynamic programming !!
 */

function longestIncreasingSubsequence_v2(a) {
  let temporaryArray = Array.from({ length: a.length }, () => 1),
    max = 0;

  for (let i = 1; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
      if (a[j] < a[i] && temporaryArray[i] < temporaryArray[j] + 1) {
        temporaryArray[i] = temporaryArray[j] + 1;
      }
    }
  }

  console.log(temporaryArray);
  for (let i of temporaryArray) {
    if (i > max) {
      max = i;
    }
  }

  return `The length of the longest increasing subsequence is : ${max}`;
}

console.log(
  longestIncreasingSubsequence_v2([3, 4, -1, 0, 6, 2, 3])
);
