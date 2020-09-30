const { log } = console;

function searchInsert(nums, target) {}

function binarySearch(nums, target, left, right) {
  if (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) return middle;

    if (target < nums[middle])
      return binarySearch(nums, target, left, middle - 1);
    return binarySearch(nums, target, middle + 1, right);
  }

  return left;
}

const sampleArray = [-11, 3, 5, -6];

log(binarySearch(sampleArray, 7, 0, sampleArray.length - 1));
