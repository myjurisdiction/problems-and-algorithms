const { log } = console;

function threeSum(nums) {
  if (!nums.length) return null;

  const triplets = new Array();

  quickSort(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    // we check if the current element is not equal to the element before
    if (!i || (i > 0 && nums[i] !== nums[i - 1])) {
      log(nums[i]);
      let start = i + 1,
        end = nums.length - 1,
        sum = 0 - nums[i];

      while (start < end) {
        if (nums[start] + nums[end] === sum) {
          triplets.push([nums[i], nums[start], nums[end]]);
          // we need a way to check for the duplicates of the triplets
          while (start < end && nums[start] === nums[start + 1]) {
            start++;
          }
          while (start < end && nums[end] === nums[end - 1]) {
            end--;
          }
          start++;
          end--;
        } else if (nums[start] + nums[end] < sum) start++;
        else end--;
      }
    }
  }

  return triplets;
}

// good news is that this is an inplace sorting algorithm
function quickSort(a, left = 0, right = a.length - 1) {
  if (left < right) {
    let pivotIndex = partition(a, left, right);

    // partition left and sort
    quickSort(a, left, pivotIndex - 1);

    // partition right and sort
    quickSort(a, pivotIndex + 1, right);
  }

  return a;
}

function partition(a, left, right) {
  let pivot = a[left],
    swapIndex = left,
    i = left;

  while (i <= right) {
    if (a[i] < pivot) {
      swapIndex += 1;
      swap(a, swapIndex, i);
    }
    i++;
  }

  swap(a, swapIndex, left);

  return swapIndex;
}

function swap(a, idx1, idx2) {
  return ([a[idx1], a[idx2]] = [a[idx2], a[idx1]]);
}

log(threeSum([-1, 0, 1, 2, -1, -4]));

log(quickSort([-1, 0, 1, 2, -1, -4]));
