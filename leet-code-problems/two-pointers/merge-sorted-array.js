const { log } = console;

function mergeTwoArrays(nums1, m, nums2, n) {
  let i = 0,
    j = 0,
    temp;

  while (i < m) {
    if (nums2[j] < nums1[i]) {
      temp = nums1[i];
      nums1[i] = nums2[j];
      nums2[j] = temp;
      sortArray(nums2);
    }
    i++;
  }

  if (i === m) {
    for (let x = 0; x < n; x++) {
      nums1[i++] = nums2[x];
    }
  }

  return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

log(mergeTwoArrays(nums1, m, nums2, n));

// here i have used selection sort algorithm, -> time complexity O(n) for best case when the array is sorted or else, O(n ^ 2)
function sortArray(nums) {
  let currentValue, j;

  for (let i = 1; i < nums.length; i++) {
    currentValue = nums[i];

    for (j = i - 1; j >= 0 && currentValue < nums[j]; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = currentValue;
  }

  return nums;
}

// what if i use quick sort to sort this array in place

function sortArray_v2(a, left = 0, right = a.length - 1) {
  if (left < right) {
    let pivotIndex = partition(a, left, right);

    sortArray_v2(a, left, pivotIndex - 1);

    sortArray_v2(a, pivotIndex + 1, right);
  }

  return a;
}

function partition(a, left = 0, right = nums.length - 1) {
  let pivot = a[left],
    swapIndex = left,
    i = left + 1;

  while (i < a.length) {
    if (pivot > a[i]) {
      swap(a, ++swapIndex, i);
    }
    i++;
  }

  swap(a, left, swapIndex);

  return swapIndex;
}

function swap(a, idx1, idx2) {
  return ([a[idx1], a[idx2]] = [a[idx2], a[idx1]]);
}

log(sortArray_v2([1, 5, 7, 6]));
