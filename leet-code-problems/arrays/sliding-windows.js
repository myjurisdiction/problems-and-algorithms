const { log } = console;

function slidingWindow(nums, k) {
  if (k > nums.length) return null;

  let i = 0;
  for (; i <= nums.length - k; i++) {
    let max = nums[i];
    for (let j = i; j < i + k; j++) {
      if (nums[j] > max) {
        max = nums[j];
      }
    }

    nums[i] = max;
  }

  return nums.slice(0, i);
}

log(slidingWindow([1, -1], 1));
