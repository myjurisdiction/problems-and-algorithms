const { log } = console;
const sampleArray = Array.from({ length: 6 }, () =>
  Math.floor(Math.random() * 30)
);


function insertionSort (nums) {
    for(let i = 1; i < nums.length; i++) {
        let current_i = nums[i], j = i - 1
        for(; j >= 0 && nums[j] > current_i; j--) {
                nums[j + 1] = nums[j];
        }
        nums[j + 1] = current_i;
    }

    return nums;
}

log(insertionSort(sampleArray));
