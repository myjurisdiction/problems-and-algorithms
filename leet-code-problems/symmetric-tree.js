/**
 * 101. Symmetric Tree
 */

function Node(val) {
  Object.assign(this, { left: null, right: null, val });
  return this;
}

const node = new Node(1);
node.left = new Node(2);
node.right = new Node(2);
node.left.left = new Node(3);
node.left.right = new Node(4);
node.right.left = new Node(3);
node.right.right = new Node(3);

function levelOrder(root) {
  const queue = new Array();
  const result = new Array();
  queue.push(root);

  while (queue.length) {
    let dequeued = queue.shift();
    result.push(dequeued.val);

    if (dequeued.left) queue.push(dequeued.left);
    if (dequeued.right) queue.push(dequeued.right);
  }

  return result;
}

console.log(levelOrder(node));

function SymmetricTree(root) {
  let queue = [root, root],
    last,
    second_last;
  while (queue.length) {
    last = queue.shift();
    second_last = queue.shift();

    if (!last && !second_last) continue;
    if (!last || !second_last) return false;
    if (last.val !== second_last.val) return false;

    queue.push(last.left);
    queue.push(second_last.right);
    queue.push(last.right);
    queue.push(second_last.left);
  }

  return true;
}

console.log(SymmetricTree(node));

// This is the recursive approach.
function SymmetricTree_v2(root) {
  return isMirror(root, root);
}

function isMirror(b1, b2) {
  if (!b1 && !b2) return true;
  if (!b1 || !b2) return false;

  return (
    b1.val === b2.val &&
    isMirror(b1.left, b2.right) &&
    isMirror(b2.left, b1.right)
  );
}

console.log(SymmetricTree_v2(node));
