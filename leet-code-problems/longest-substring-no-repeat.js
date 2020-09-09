"use strict";

/**
 *
 * @param {string} str
 */

/**
 *  PSEUDO CODE
 *
 *
 */

function longestSubstring(str) {
  const map = new Map();
  let pointer_1 = 0,
    pointer_2 = 0,
    max = 0;

  while (pointer_2 < str.length) {
    if (!map.has(str.charAt(pointer_2))) {
      map.set(str.charAt(pointer_2), pointer_2);
      pointer_2 += 1;
      max = Math.max(map.size, max);
    } else {
      map.delete(str.charAt(pointer_1));
      pointer_1 += 1;
    }
  }

  return {
    map,
    max,
  };
}

/**
 *
 * @param {array} a
 * @param {*integer} k
 *
 *
 */

function maxSum(a, k) {
  let max_sum = 0;
  for (let i = 0; i < k; i++) {
    max_sum += a[i];
  }

  let curr_sum = max_sum;

  for (let j = 0; j < a.length - k; j++) {
    curr_sum = curr_sum - a[j] + a[j + k];
    max_sum = Math.max(max_sum, curr_sum);
  }

  return max_sum;
}

console.log(maxSum([1, 2, 3, 4], 3));
