/**
 * 100. Same Tree
 */
function postOrder(root) {
  const stack = new Array();
  const result = new Array();

  while (true) {
    if (root) {
      if (root.right) {
        stack.push(root.right);
      }
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      root = stack.pop();
      if (root.right && stack[stack.length - 1] === root.right) {
        stack.pop();
        stack.push(root);
        root = root.right;
      } else {
        result.push(root.val);
        root = null;
      }
    } else break;
  }

  return result;
}

function inOrder(root) {
  const stack = new Array();
  const result = new Array();

  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    } else break;
  }

  return result;
}

function preOrder(root) {
  const stack = new Array();
  const result = new Array();
  stack.push(root);

  while (stack.length) {
    let popped = stack.pop();
    result.push(popped.val);

    if (popped.right) stack.push(popped.right);
    if (popped.left) stack.push(popped.left);
  }

  return result;
}

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

function Node(val) {
  Object.assign(this, { left: null, right: null, val });
  return this;
}

const node1 = new Node(1);
// node1.left = new Node(2);
node1.right = new Node(2);

const node2 = new Node(1);
node2.left = new Node(2);
// node2.right = new Node(3);

console.log(levelOrder(node1), levelOrder(node2));

function sameTree(p, q) {
  // if both NULL
  if (!p && !q) return true;
  // if one of them is NULL
  else if (!p || !q) return false;
  // if there values don't match
  else if (p.val !== q.val) return false;

  return sameTree(p.left, q.left) && sameTree(p.right, q.right);
}

// p && q === null return true
// p || q === null return false
// p.val !== q.val return false

// this is basically a helper function
function check(root_p, root_q) {
  // if both NULL
  if (!root_p && !root_q) return true;
  // if one of them is NULL
  else if (!root_p || !root_q) return false;
  // if there values don't match
  else if (root_p.val !== root_q.val) return false;
  else return true;
}

// console.log(sameTree(node1, node2));

function sameTree_v2(p, q) {
  if (!p && !q) return true;
  const Q1 = [p],
    Q2 = [q];
  while (Q1.length) {
    p = Q1.shift();
    q = Q2.shift();

    if (!check(p, q)) return false;

    if (p) {
      if (!check(p.left, q.left)) return false;

      if (p.left) {
        Q1.push(p.left);
        Q2.push(q.left);
      }

      if (!check(p.right, q.right)) return false;

      if (p.right) {
        Q1.push(p.right);
        Q2.push(q.right);
      }
    }
  }

  return true;
}

console.log(sameTree_v2(node1, node2));
