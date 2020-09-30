const { log } = console;

// const matrix = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30],
// ];

const matrix = [
  [1, 4, 8],
  [2, 5, 9],
  [3, 6, 10],
];

function binarySearch(nums, target, left, right) {
  if (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) return nums[middle];

    if (target < nums[middle])
      return binarySearch(nums, target, left, middle - 1);
    return binarySearch(nums, target, middle + 1, right);
  }

  return -1;
}

function binarySearch_2d_v2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let left = 0,
      right = nums[i].length - 1;
    let result = binarySearch(nums[i], target, left, right);
    if (result === target) return true;
  }

  return false;
}

log(binarySearch_2d_v2(matrix, 6));

// this algorithms assumes the entire 2d matrix as a 1d matrix.
function searchMatrix(matrix, target) {
  let row = matrix.length,
    col = matrix[0].length;

  let start = 0,
    end = row * col - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    let middle_el = matrix[Math.floor(middle / col)][middle % col];

    if (target === middle_el) return true;

    if (target < middle_el) end = middle - 1;
    else start = middle + 1;
  }

  return false;
}

// log(searchMatrix(matrix, 2));
