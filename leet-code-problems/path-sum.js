class Node {
  constructor(val) {
    Object.assign(this, { left: null, right: null, val });
  }
}

const root = new Node(5);

root.left = new Node(4);
root.right = new Node(8);

root.left.left = new Node(11);
root.right.left = new Node(13);
root.right.right = new Node(4);

root.left.left.left = new Node(7);
root.left.left.right = new Node(2);

root.right.right.right = new Node(1);

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

console.log(levelOrder(root));

function pathSum(root, sum) {
  if (!root) return false;

  console.log(root.val);

  // check if the current root at which we are on is leaf or not
  if (!root.left && !root.right && root.val === sum) return true;

  if (pathSum(root.left, sum - root.val) || pathSum(root.right, sum - root.val))
    return true;

  return false;
}

console.log(pathSum(root, 22));
