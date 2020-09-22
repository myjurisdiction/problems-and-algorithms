const log = console.log;

log(`
        These are two pointers problems..
`);

function removeDups(nums) {
  if (!nums.length) return -1;

  let i = 0,
    j = 1;

  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else {
      j++;
    }
  }

  return i + 1;
}

const sample1 = [1, 1];

console.log(removeDups(sample1));
