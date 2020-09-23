const { log } = console;

function twoSum(numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i);
  }

  for (let j = 0; j < numbers.length; j++) {
    let remainder = target - numbers[j];

    if (map.has(remainder) && map.get(remainder) !== j)
      return [j + 1, map.get(remainder) + 1];
  }

  return null;
}

console.log(twoSum([1, 2, 4, 4], 8));

// or a more bettwe version would be
function twoSum_v2(numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let remainder = target - numbers[i];

    if (map.has(remainder)) return [map.get(remainder) + 1, i + 1];
    map.set(numbers[i], i);
  }

  return null;
}

console.log(twoSum_v2([1, 2, 4, 4], 8));
