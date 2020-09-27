const { log } = console;

log(`
    Move zeroes prob will be solved tommorow
`);

function moveZeroes(nums) {
  let countZeroes = 0,
    stack = new Array();

  for (let el of nums) {
    if (!el) countZeroes++;
    if (el) stack.push(el);
  }

  while (countZeroes--) {
    stack.push(0);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = stack[i];
  }

  return nums;
}

// console.log(moveZeroes([0, 1, 0, 3, 12]));


// this one is a better solution, since space complexity here is O(1);
function moveZeroes_v2(nums) {
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) nums[lastNonZero++] = nums[i];
  }

  for (let j = lastNonZero; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
}

console.log(moveZeroes_v2([0, 1, 11, 3, 12]));
