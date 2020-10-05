" use strict";

const { log } = console;

/**
 * Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */

// first do it recursively.
// then do it via using heaps.

// function permutations(str) {
//   if (str.length === 0 || !Array.isArray(nums)) return null;

//   const container = new Array(),
//     used = Array.from({ length: nums.length }, () => false),
//     currentArray = new Array();

//   seekCurrentPermutation(nums, used, currentArray, container);

//   return container;
// }

// function seekCurrentPermutation(nums, used, currentArray, container) {
//   if (nums.length === currentArray.length) {
//     container.push([...currentArray]);
//     return;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (used[i]) continue;
//     used[i] = true;
//     currentArray.push(nums[i]);
//     seekCurrentPermutation(nums, used, currentArray, container);
//     currentArray.pop();
//     used[i] = false;
//   }
// }

// log(permutations([1, 2, 3]));

// function heapPermutation(nums) {
//   if (nums.length === 0 || !Array.isArray(nums)) return null;

//   const container = new Array();

//   generatePermutations(nums, nums.length, container);

//   return container;
// }

// function generatePermutations(nums, length, container) {
//   if (length === 1) {
//     container.push([...nums]);
//     return;
//   }

//   for (let i = 0; i < length; i++) {
//     generatePermutations(nums, length - 1, container);
//     if (length % 2 === 0) {
//       swap(nums, i, length - 1);
//     } else {
//       swap(nums, 0, length - 1);
//     }
//   }
// }

// function swap(a, idx1, idx2) {
//   return ([a[idx1], a[idx2]] = [a[idx2], a[idx1]]);
// }

// log(heapPermutation([1, 2, 3, 4]));

log(` Back track algorithm..`);

const nums = [1, 2, 2];

function permuteString(nums) {
  const superArray = new Array();
  const used = Array.from({ length: nums.length }, () => false);
  const currentArray = new Array();

  nums = nums.sort((a, b) => a - b);

  backtrack_algo(nums, superArray, used, currentArray);

  return superArray;
}

function backtrack_algo(nums, superArray, used, currentArray) {
  if (nums.length === currentArray.length) {
    superArray.push([...currentArray]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    used[i] = true;
    currentArray.push(nums[i]);
    backtrack_algo(nums, superArray, used, currentArray);
    currentArray.pop();
    used[i] = false;

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
  }
}

log(permuteString(nums));
