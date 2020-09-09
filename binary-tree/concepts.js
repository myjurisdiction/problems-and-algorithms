/** Analysis of how we will be implementing the binary tree */

/**
 *              100   -> this is root
 *            /     \
 *           70      110  -> these are childrens who are also the parents
 *          /  \      /  \
 *         20  90   105   120
 *
 *   The above diagram is the structure of the binary tree
 */

// class to create nodes for the binary tree
const B_Node = class {
  constructor(value) {
    Object.assign(this, { left: null, right: null, value });
  }
};

const BinaryTree = class {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new B_Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let temp = this.root;
      while (true) {
        if (value === temp.value) return;
        else if (value < temp.value) {
          if (temp.left === null) {
            temp.left = node;
            break;
          }
          temp = temp.left;
        } else {
          if (temp.right === null) {
            temp.right = node;
            break;
          }
          temp = temp.right;
        }
      }
    }
    return this;
  }

  recursive_insert(value) {
    const newNode = new B_Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      function recurse(node) {
        if (value < node.value) {
          if (!node.left) return (node.left = newNode);
          recurse(node.left);
        } else {
          if (!node.right) return (node.right = newNode);
          recurse(node.right);
        }
      }
      recurse(this.root);
    }

    return this;
  }

  search(value) {
    if (!this.root) return "Invalid search !!";
    let pointer = this.root;
    let found;
    while (pointer) {
      if (value === pointer.value) {
        found = true;
        break;
      } else if (value < pointer.value) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }
    return found ? true : false;
  }

  traverseBreadthFirstSearch_V1() {
    const queue = [this.root];
    const list = new Array();

    while (queue.length) {
      let dequeuedNode = queue.shift();

      list.push(dequeuedNode.value);
      if (dequeuedNode.left) queue.push(dequeuedNode.left);
      if (dequeuedNode.right) queue.push(dequeuedNode.right);
    }
    return list;
  }

  /**
   * steps for this algorrithm
   *
   * 1.  create an  stack
   * 2. put root in to the stack
   * 3. while(stack has length) {
   *      pop the top of stack
   *      check if popped el has a right node -> if yes then push it to the stack
   *      check if popped el has a left node -> if yes push it to the stack
   * }
   */

  DfsPreOrder() {
    let stack = [this.root],
      list = [],
      popped;
    while (stack.length) {
      popped = stack.pop();
      list.push(popped.value);
      if (popped.right) stack.push(popped.right);
      if (popped.left) stack.push(popped.left);
    }
    return list;
  }

  recursivePreOrder(node, array = []) {
    array.push(node.value);
    if (node.left) this.recursivePreOrder(node.left, array);
    if (node.right) this.recursivePreOrder(node.right, array);
    return array;
  }

  peek(stack) {
    if (stack.length) {
      return stack[stack.length - 1];
    }
    return null;
  }

  /**
   * ( just an example of iterative postOrder approach )
   *                1
   *             /    \
   *           2        3
   *         /  \      /  \
   *       4     5    6    7
   *
   *    1. create a stack -> [],
   *    2  root <- this.root,
   *    3. while(true)
   *        3.1.  while(root is not null)
   *                3.1.1. push if root has the right child
   *                3.1.2. push root
   *                3.1.3. set root <- root.left
   *        3.2.  set root <- stack.pop();
   *        3.3.  if(root.right is not NULL AND top of the stack === root.right)  // this means that right child of the root has not been processed yet.
   *                 3.3.1. pop right child from the stack
   *                 3.3.2  push root to the stack
   *                 3.3.3 set root <- root.right // change root so that the right child is processed next.
   *
   *              else -> print the root.value and set root <- null
   *
   *       3.4.   if length of the stack is empty, break out of the loop
   *
   */
  postOrder() {
    let stack = [],
      list = [],
      pointer = this.root;
    while (true) {
      while (pointer) {
        if (pointer.right) stack.push(pointer.right);
        stack.push(pointer);
        pointer = pointer.left;
      }

      pointer = stack.pop();
      if (pointer.right && this.peek(stack) === pointer.right) {
        stack.pop(); // removing the right child from the stack
        stack.push(pointer); // pushing the root node again in the stack
        pointer = pointer.right; // setting the root node = right child
      } else {
        list.push(pointer.value);
        pointer = null;
      }

      if (!stack.length) break;
    }

    return list;
  }

  recursivePostOrder(node, array = []) {
    if (node.left) this.recursivePostOrder(node.left, array);
    if (node.right) this.recursivePostOrder(node.right, array);
    array.push(node.value);
    return array;
  }

  /**
   * (a quick summary of the iterative inOrder traversal algorithm)
   *
   *  1. create a stack
   *  2. create a current pointer and current <- this.root;
   *  3. while(true)
   *      3.1. if(current is not NULL)
   *              3.1.1. stack.push(current);
   *              3.1.2. current <- current.left
   *      3.2 else if (when stack is not EMPTY)
   *              3.2.1. current <- stack.pop();
   *              3.2.2. print current.value
   *              3.2.3  current = current.right
   *      3.3 else break;
   *
   */

  inOrder() {
    let stack = new Array(),
      current = this.root,
      list = [];
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

  recursiveInOrder(node, array = []) {
    if (node.left) this.recursiveInOrder(node.left, array);
    array.push(node.value);
    if (node.right) this.recursiveInOrder(node.right, array);

    return array;
  }

  /**
   * @param {object} node
   */
  

  min(node) {
    if (!node) return null;
    while (node.left) {
      node = node.left;
    }
    return node;
  }
};

const node = new BinaryTree();

const randomNumers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 30)
);

// let's prepare the tree
for (let el of [100, 50, 150, 25, 75, 105, 200]) {
  // node.insert(el);
  node.insert(el);
}

console.log("height of the tree: ", node.getHeight(node.root));
console.log("Level Order \n", node.traverseBreadthFirstSearch_V1());
console.log("PreOrder \n", node.DfsPreOrder());
console.log("recursive preorder ", node.recursivePreOrder(node.root));
console.log("PostOrder   ", node.postOrder());
console.log("Recursive PostOrder   ", node.recursivePostOrder(node.root));
console.log("InOrder   ", node.inOrder());
console.log("Recursive InOrder", node.recursiveInOrder(node.root));
console.log("min node: ", node.min(node.root));
