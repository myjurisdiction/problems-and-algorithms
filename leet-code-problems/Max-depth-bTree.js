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

    if (this.root === null) return (this.root = newNode);
    let temp = this.root;
    while (true) {
      if (val < temp.val) {
        if (!temp.left) {
          temp.left = newNode;
          break;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          break;
        }
        temp = temp.right;
      }
    }

    return this;
  }

  get postOrder() {
    if (!this.root) return [];
    const stack = new Array(),
      list = new Array();
    let root = this.root;
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

  get levelOrder() {
    if (!this.root) return [];
    const queue = [this.root],
      list = new Array();
    let temp;
    while (queue.length) {
      temp = queue.shift();

      list.push(temp.val);

      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }

    return list;
  }

  get inOrder() {
    if (!this.root) return [];
    let stack = new Array(),
      current = this.root,
      list = [];
    while (true) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else if (stack.length) {
        current = stack.pop();
        list.push(current.val);
        current = current.right;
      } else break;
    }

    return list;
  }

  maxDepth(root = this.root) {
    if (!root) return root;
    const left = this.maxDepth(root.left);
    const right = this.maxDepth(root.right);
    if (right > left) return 1 + right;
    return 1 + left;
  }

  get maxDepth_v2() {
    if (!this.root) return 0;
    let queue = [this.root];
    let height = 0;

    while (true) {
      let nodeCount = queue.length;
      if (nodeCount === 0) return height;

      height++;

      // clear all the nodes at thee current level and push nodes of the next level

      while (nodeCount > 0) {
        let temp = queue.shift();

        if (temp) {
          if (temp.left) queue.push(temp.left);
          if (temp.right) queue.push(temp.right);
        }

        nodeCount--;
      }

      if (!queue.length) break;
    }

    return height;
  }
}

const bst = new Bst();

const sampleArray = [10, 5, 15, 2, 3, 7, 12, 17];

for (let el of sampleArray) {
  bst.insert(el);
}

console.log(bst.postOrder);
console.log(bst.levelOrder);
console.log(bst.inOrder);

console.log(bst.maxDepth());

console.log(bst.maxDepth_v2);

function pathSum(root, sum) {
  const paths = new Array();
  findPath(root, sum, (current = new Array()), paths);
  return paths;
}

function findPath(root, sum, current, paths) {
  if (!root) return;

  current.push(root.val);
  // check if the current root is leaf or not
  if (!root.left && !root.right && root.val === sum) {
    paths.push(current);
    return;
  }

  findPath(root.left, sum - root.val, [...current], paths);
  findPath(root.right, sum - root.val, [...current], paths);
}

console.log(pathSum(bst.root, 22));
