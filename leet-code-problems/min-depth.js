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

function minDepth(root) {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  // if not root.left, recurse root.right
  if (!root.left) return 1 + minDepth(root.right);

  // if not root.right, recurse root.left
  if (!root.right) return 1 + minDepth(root.left);

  return Math.min(minDepth(root.left), minDepth(root.right));
}

console.log(minDepth(root));
