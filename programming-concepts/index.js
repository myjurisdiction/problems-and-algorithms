console.log("This is all about programming concepts !!!");

// function sum(n) {
//   if (n <= 1) return n;
//   return n + sum(n - 1);
// }

// console.log(sum(5));

class Node {
  constructor(value) {
    Object.assign(this, { left: null, right: null, value });
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _insert_v2(value) {
    const newNode = new Node(value);
    if (!this.root) return (this.root = newNode);

    let pointer = this.root;

    while (true) {
      if (value < pointer.value) {
        if (!pointer.left) {
          pointer.left = newNode;
          break;
        }
        pointer = pointer.left;
      } else {
        if (!pointer.right) {
          pointer.right = newNode;
          break;
        }
        pointer = pointer.right;
      }
    }

    return this;
  }

  print(node = this.root, array = []) {
    if (node.left) this.print(node.left, array);
    if (node.right) this.print(node.right, array);

    array.push(node.value);

    return array;
  }

  print_level() {
    const queue = [this.root];
    const result = new Array();

    let removed;

    while (queue.length) {
      removed = queue.shift();

      result.push(removed.value);

      if (removed.left) queue.push(removed.left);
      if (removed.right) queue.push(removed.right);
    }

    return result;
  }

  getMinNode(node = this.root) {
    while (true) {
      if (node.left) node = node.left;
      else break;
    }

    return node;
  }

  delete(value, node = this.root) {
    if (!node) return node;

    if (value < node.value) node.left = this.delete(value, node.left);
    else if (value > node.value) node.right = this.delete(value, node.right);
    else {
      // i am exactly at the node which i want to delete

      if (!node.left && !node.right) {
        node = null;
      } else if (!node.left) {
        node = node.right;
      } else if (!node.right) {
        node = node.left;
      } else {
        // the node which contains both left and right child
        const nextInLine = this.getMinNode(node.right);
        node.value = nextInLine.value;
        node.right = this.delete(nextInLine.value, node.right);
      }
    }

    return node;
  }

  getHeight(node) {
    if (!node) {
      return null;
    } else {
      let lHeight = this.getHeight(node.left);
      let rHeight = this.getHeight(node.right);
      if (lHeight > rHeight) return lHeight + 1;
      else return rHeight + 1;
    }
  }

  postOrder_iterative() {
    const stack = new Array(),
      result = new Array();
    let root = this.root;

    while (true) {
      while (root) {
        if (root.right) {
          stack.push(root.right);
        }
        stack.push(root);
        root = root.left;
      }

      root = stack.pop();

      if (root.right && stack[stack.length - 1] === root.right) {
        stack.pop(); // pop the children of the stack
        stack.push(root); // push the parent
        root = root.right;
      } else {
        result.push(root.value);
        root = null;
      }

      if (!stack.length) break;
    }

    return result;
  }

  inOrder_iterative() {
    const stack = new Array(),
      list = new Array();
    let current = this.root;

    while (true) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else if (stack.length) {
        current = stack.pop();
        list.push(current.value);
        current = current.right;
      } else break;
    }

    return list;
  }
}

const bst = new BinarySearchTree();

const sample_array = [100, 5, 200, 150, 50, 25, 70];

for (let el of sample_array) {
  bst._insert_v2(el);
}

// console.log(bst.getMinNode());

// console.log(bst.print_level());

// bst.delete(200);

// bst.delete(100);

console.log(bst.print_level());

console.log("Post order ", bst.postOrder_iterative());

console.log("In order ", bst.inOrder_iterative());

console.log(bst.getHeight(bst.root));
