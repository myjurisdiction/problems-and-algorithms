/**
 *
 * @param {array of integers} a1
 * @param {array of integers} a2
 *
 *
 * merge sort is not an in-place sorting algorithm,
 * merge sort has a time complexity of O(n log n), and a space complexity of O(n)
 * in place sorting algorithm has a constant space complexity
 */

function mergeSortedArrays(a1, a2) {
  // [1] -> sorted array (having length 1);
  // [3,9,17] + [2, 5, 10] = [2, 3, 5, 9, 10, 17];

  let i = 0,
    j = 0,
    sortedArray = new Array();

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      sortedArray.push(a1[i]);
      i++;
    } else {
      sortedArray.push(a2[j]);
      j++;
    }
  }

  if (i < a1.length) {
    sortedArray = sortedArray.concat(a1.slice(i));
  }

  if (j < a2.length) {
    sortedArray = sortedArray.concat(a2.slice(j));
  }

  return sortedArray;
}

function breakInHalf(a) {
  if (a.length === 1) return a;

  let middle = Math.floor(a.length / 2);

  let left = breakInHalf(a.slice(0, middle));

  let right = breakInHalf(a.slice(middle));

  return mergeSortedArrays(left, right);
}

const sampleArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 30)
);

console.log(sampleArray);

console.log(breakInHalf(sampleArray));

/**  Let's implement the quick sort algorithm  */
