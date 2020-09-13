console.log(`
    10 questions two hours !!
`);

class Node {
  constructor(val) {
    Object.assign(this, { left: null, right: null, val });
  }
}

function insertionLeverOrder(arr, root, i, length) {
  if (i < length) {
    let newNode = new Node(arr[i]);
    root = newNode;

    root.left = insertionLeverOrder(arr, root.left, 2 * i + 1, length);

    root.right = insertionLeverOrder(arr, root.right, 2 * i + 2, length);

    // console.log(root);
  }

  return root;
}

function generateCompleteBtree(arr) {
  const length = arr.length;
  return insertionLeverOrder(arr, null, 0, length);
}

function postOrderTraversal() {
  let root = generateCompleteBtree([1, 2, 3, 4, 5, 6, 7, 8]),
    stack = new Array(),
    list = new Array();
  while (true) {
    while (root) {
      if (root.right) stack.push(root.right);
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (root.right && stack[stack.length - 1] === root.right) {
      stack.pop();
      stack.push(root);
      root = root.right;
    } else {
      list.push(root.val);
      root = null;
    }

    if (!stack.length) break;
  }

  return list;
}

console.log(postOrderTraversal());

function levelOrder(root) {
  const queue = [root];
  const list = new Array();

  while (queue.length) {
    let dequeued = queue.shift();
    list.push(dequeued.val);
    if (dequeued.left) queue.push(dequeued.left);
    if (dequeued.right) queue.push(dequeued.right);
  }

  return list;
}

// console.log(levelOrder());

// going back to the problem;

const root = new Node(5);
root.left = new Node(4);
root.right = new Node(8);
root.left.left = new Node(11);
root.right.left = new Node(13);
root.right.right = new Node(4);

root.left.left.left = new Node(7);
root.left.left.right = new Node(2);

root.right.left.left = new Node(5);
root.right.right.right = new Node(1);

console.log(levelOrder(root));

function path_sum_II(root, sum, array = new Array()) {
  if (!root) return false;

  if (!root.left && !root.right) {
    if (root.val === sum) {
      array.push(root.val);
      return true;
    }
    return false;
  }

  console.log(array);

  if (
    path_sum_II(root.left, sum - root.val, array) ||
    path_sum_II(root.right, sum - root.val, array)
  ) {
    array.push(root.val);
    return true;
  }
  return false;
}

console.log(path_sum_II(root, 22));
