class Node {
  constructor(val) {
    Object.assign(this, { left: null, right: null, val });
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) this.root = newNode;
    else {
      let p = this.root;

      while (true) {
        if (val < p.val) {
          if (!p.left) {
            p.left = newNode;
            break;
          }
          p = p.left;
        } else {
          if (!p.right) {
            p.right = newNode;
            break;
          }
          p = p.right;
        }
      }

      return this;
    }
  }

  get print() {
    const queue = [this.root],
      result = new Array();

    while (queue.length) {
      let p = queue.shift();

      result.push(p.val);

      if (p.left) queue.push(p.left);
      if (p.right) queue.push(p.right);
    }

    return result;
  }
}

const sampleArray = [-11, -10, -3, 0, 9, 5, 2];

function sortedArrayToBST(nums) {
  const middle = Math.floor(nums.length / 2);

  let i = middle - 1;
  let j = middle + 1;

  const bst = new Bst();
  bst.insert(nums[middle]);

  while (i >= 0 || j < nums.length) {
    let leftVal = i >= 0 ? nums[i] : null;
    let rightVal = j ? nums[j] : null;

    if (leftVal) bst.insert(leftVal);
    if (rightVal) bst.insert(rightVal);

    i--;
    j++;
  }

  return bst;
}

console.log(sortedArrayToBST(sampleArray).print);

function BinarySearch(nums, val) {
  let middle = Math.floor(nums.length / 2),
    left = 0,
    right = nums.length - 1;

  while (nums[middle] !== val && left <= right) {
    if (val < nums[middle]) right = middle - 1;
    else left = middle + 1;

    middle = Math.floor(left + right / 2);
  }

  return nums[middle] === val ? true : false;
}

console.log(BinarySearch(sampleArray, -11));

function _(nums) {
  if (!nums.length) return null;

  return binaryInsert(nums, 0, nums.length - 1);
}

function binaryInsert(nums, left, right) {
  if (left <= right) {
    let middle = left + Math.floor(right - left / 2);

    let node = new Node(nums[middle]);

    node.left = binaryInsert(nums, left, middle - 1);

    node.right = binaryInsert(nums, middle + 1, right);

    return node;
  } else {
    return null;
  }
}

console.log(_(sampleArray));
