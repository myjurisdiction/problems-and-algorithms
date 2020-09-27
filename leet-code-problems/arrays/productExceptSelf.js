const { log } = console;

function productExceptSelf(nums) {
  let previousProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    let product = 1,
      j = i + 1;
    while (j < nums.length) {
      product = product * nums[j];
      j++;
    }
    product = product * previousProduct;
    previousProduct *= nums[i];
    nums[i] = product;
  }

  return nums;
}

log(productExceptSelf([1, 2, 3, 4]));
