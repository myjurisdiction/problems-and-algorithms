class Node {
  constructor(val) {
    Object.assign(this, { left: null, right: null, val });
  }
}

const root = new Node(4);

root.left = new Node(2);
root.right = new Node(7);

root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(9);

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

// this is the recursive approach,
function invertTree(root) {
  if (!root) return null;

  let right = invertTree(root.right);
  let left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
}

invertTree(root);
console.log(levelOrder(root));

// iterative approach would be

function invertTree_iterative(root) {
  const queue = [root];
  while (queue.length) {
    let frontNode = queue.shift();

    let temp = frontNode.left;
    frontNode.left = frontNode.right;
    frontNode.right = temp;

    if (frontNode.left) queue.push(frontNode.left);
    if (frontNode.right) queue.push(frontNode.right);
  }

  return root;
}

invertTree_iterative(root);
console.log(levelOrder(root));
