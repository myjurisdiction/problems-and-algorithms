const { log } = console;

const Node = class {
  constructor(val) {
    Object.assign(this, { left: null, right: null, val });
  }
};

const root = new Node(6);

root.left = new Node(2);
root.right = new Node(8);

root.left.left = new Node(0);
root.left.right = new Node(4);
root.right.left = new Node(7);
root.right.right = new Node(9);

root.left.right.left = new Node(3);
root.left.right.right = new Node(5);

function inOrder(root) {
  const stack = new Array(),
    list = new Array();

  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else if (stack.length) {
      root = stack.pop();

      list.push(root.val);

      root = root.right;
    } else break;
  }

  return list;
}

function postOrder(root, p, q) {
  if (!root) return null;

  const stack = new Array(),
    list = new Array();

  while (true) {
    while (root) {
      if (root.right) stack.push(root.right);
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    if (root && stack[stack.length - 1] === root.right) {
      stack.pop();
      stack.push(root);
      root = root.right;
    } else {
      list.push(root);
      root = null;
    }
    if (!stack.length) break;
  }
  return list;
}

function findPath(root, targetNode) {
  const path = new Array();

  if (hasPath(root, targetNode, path)) return path;
  return null;
}

function hasPath(root, targetNode, array) {
  if (!root) return false;

  array.push(root);

  if (root.val === targetNode.val) return true;

  if (
    hasPath(root.left, targetNode, array) ||
    hasPath(root.right, targetNode, array)
  )
    return true;

  array.pop();

  return false;
}

function lowestCommonAncestor(root, p, q) {
  const path1 = findPath(root, p);
  const path2 = findPath(root, q);

  let i = 0,
    j = 0;

  while (i++ < path1.length && j++ < path2.length) {
    if (path1[i] !== path2[j]) return path1[i - 1];
  }

  return null;
}

// log(lowestCommonAncestor(root, root.left.left, root.left.right));

// another approach would to traverse the tree once and find out the LCA of given nodes

function LCA_V2(root, p, q) {
  if (!root) return root;

  if (root === p || root === q) return root;

  if (root) log(root.val);

  let left = LCA_V2(root.left, p, q);
  let right = LCA_V2(root.right, p, q);

  if (!left && !right) return null;

  if (left && right) return root;

  return left || right; // if left is not null return left or else return right
}

LCA_V2(root, root.left.right, null);
