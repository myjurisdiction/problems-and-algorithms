/** this is an important algorithm, go through this one
 * 
 * @param {Genomic sequence analysis employs maximum subarray algorithms to identify important biological segments of protein sequences.[citation needed] These problems include conserved segments, GC-rich regions, tandem repeats, low-complexity filter, DNA binding domains, and regions of high charge.[citation needed]

    In computer vision, maximum-subarray algorithms are used on bitmap images to detect the brightest area in an image.} nums 
    */
function maxSubArray(nums) {
  if (nums.length === 0) return null;

  if (nums.length === 1) return nums[0];

  let max_sum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let curr_sum = 0;
    for (let j = i; j < nums.length; j++) {
      curr_sum += nums[j];
      log(curr_sum);
      max_sum = Math.max(curr_sum, max_sum);
    }
  }

  return max_sum;
}

log(maxSubArray([-2, -1]));

// let's work on the kadane's algorithm.
// this is done in
function maxSumArray_v2(nums) {
  if (nums.length === 0) return 0;

  if (nums.length === 1) return nums[0];

  let best_sum = -Infinity,
    curr_sum = 0;

  for (let el of nums) {
    curr_sum = Math.max(el, curr_sum + el);
    best_sum = Math.max(curr_sum, best_sum);
  }

  return best_sum;
}

log(maxSumArray_v2([-2, -1]));

// modified kadane's algorithm to trace the path
function maxSumArray_v3(nums) {
  let best_sum = -Infinity,
    current_sum = 0,
    best_start = 0,
    best_end = 0,
    current_start;

  for (let i = 0; i < nums.length; i++) {
    if (current_sum <= 0) {
      current_start = i;
      current_sum = nums[i];
    } else {
      current_sum += nums[i];
    }

    if (current_sum > best_sum) {
      best_sum = current_sum;
      best_start = current_start;
      best_end = i;
    }
  }

  return {
    best_sum,
    best_start,
    best_end,
  };
}

log(maxSumArray_v3([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
