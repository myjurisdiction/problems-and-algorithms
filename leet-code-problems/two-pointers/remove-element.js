"use strict";

const log = console.log;

// solution one
function removeElement(nums, val) {
  let i = 0,
    j = 0;

  while (j < nums.length) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
      j++;
    } else {
      j++;
    }
  }
  console.log(nums);
  return i;
}

const nums = [2, 3, 3, 2];

// console.log(removeElement(nums, 3));

// there is a problem with this solution which is, if there is only a few elements to remove then in that case this algorithm become costly by copying the elements
// ex -> [1,2,3,4,5], remove -> 4

function removeElement_v2(nums, val) {
  let i = 0,
    n = nums.length - 1;

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }

  console.log(nums);
  return n;
}

console.log(removeElement_v2(nums, 2));
