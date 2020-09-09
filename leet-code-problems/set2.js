console.log("Here we are dealing with binary search tree");

function longestSubstring (s) {
  let i = 0, j = 0, max = 0, map = new Map();
  while (j < s.length) {
      if(!map.has(s.charAt(j))) {
          map.set(s.charAt(j), j);
          j++;
          max = Math.max(map.size, max);
      } else {
          map.delete(s.charAt(i));
          i++;
      }
  }

  return {
      max, map
  }

}

console.log(longestSubstring('pwwkew'));

class Node {
  constructor(value) {
    Object.assign(this, { left: null, right: null, value });
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // this is the iterative way of doing the above
  insert_v1(value) {
    const newNode = this.newNode(value);
    if (!this.root) return (this.root = newNode);
    let pointer = this.root;
    while (true) {
      if (value < pointer.value) {
        if (pointer.left === null) {
          pointer.left = newNode;
          break;
        }
        pointer = pointer.left;
      } else {
        if (pointer.right === null) {
          pointer.right = newNode;
          break;
        }
        pointer = pointer.right;
      }
    }
    return this;
  }

  // recursive_approach of inserting into the binary tree
  insert_v2(value) {
    const newNode = this.newNode(value);
    if (this.root === null) return (this.root = newNode);
    function addNode(node, value) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          addNode(node.left, value);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          addNode(node.right, value);
        }
      }
    }

    addNode(this.root, value);

    return this;
  }

  newNode(value) {
    return new Node(value);
  }

  bfs() {
    const queue = [this.root];
    const elements = new Array();
    let removed;
    while (queue.length) {
      removed = queue.shift();
      elements.push(removed.value);

      if (removed.left) queue.push(removed.left);
      if (removed.right) queue.push(removed.right);
    }

    return {
      traverse: "level order",
      elements,
    };
  }

  dfs_preOrder() {
    const stack = [this.root];
    const elements = new Array();
    let popped;
    while (stack.length) {
      popped = stack.pop();
      elements.push(popped.value);

      if (popped.right) stack.push(popped.right);
      if (popped.left) stack.push(popped.left);
    }

    return {
      traverse: "pre order",
      elements,
    };
  }

  delete(value, root = this.root) {
    if (root === null) return root;
    else if (value < root.value) root.left = this.delete(value, root.left);
    else if (value > root.value) root.right = this.delete(value, root.right);
    else {
      if (!root.left && !root.right) {
        root = null;
      } else if (!root.left) {
        root = root.right;
      } else if (!root.right) {
        root = root.left;
      } else {
        let min_node = this.minNode(root.right);
        root.value = min_node.value;
        root.right = this.delete(min_node.value, root.right);
      }
    }
    return root;
  }

  minNode(root = this.root) {
    if (!root) return root;
    while (true) {
      if (!root.left) return root;
      root = root.left;
    }
  }
}

let bst = new BST();

const demo_array = [10, 15, 5, 2, 7, 12, 20];

for (let el of demo_array) {
  console.log(bst.root);
  bst.insert_v1(el);
}

console.log(bst.bfs());

console.log(bst.dfs_preOrder());

console.log(bst.minNode());

bst.delete(10)

bst.delete(12)

bst.delete(15)

bst.delete(7)
console.log(bst.bfs());
console.log(bst.dfs_preOrder());



