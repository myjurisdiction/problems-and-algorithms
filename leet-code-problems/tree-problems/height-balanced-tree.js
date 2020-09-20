class Node {
  constructor(val) {
    this.left = this.right = null;
    this.val = val;
  }
}

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

function nodeDepth(node) {
  if (!node) return -1;

  let left = nodeDepth(node.left);
  let right = nodeDepth(node.right);

  return Math.max(left, right) + 1;
}

const root = new Node(1);

root.left = new Node(2);
// root.right = new Node(3);

// root.left.left = new Node(3);
// root.left.right = new Node(3);

// root.left.left.left = new Node(4);
// root.left.left.right = new Node(4);

console.log(levelOrder(root));

function isBalanced(root) {
  if (!root) return true;
  return (
    Math.abs(nodeDepth(root.left) - nodeDepth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}

console.log(isBalanced(root));

