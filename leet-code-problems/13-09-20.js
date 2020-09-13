console.log(`
    10 questions two hours !!
`);

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

root.right.left.left = new Node(5);
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

// console.log(levelOrder(root));

function path_sum_II(root, sum) {
  // const paths = new Array();
  const array = new Array();

  function findPath(root, sum, array) {
    if (!root) return false;

    // meaning the root is a leaf node
    // if leafNode's value === sum, then we hit the jack pot meaning this is the path
    if (!root.left && !root.right && root.val === sum) {
      array.push(root.val);
      return true;
    }

    if (
      findPath(root.left, sum - root.val, array) ||
      findPath(root.right, sum - root.val, array)
    ) {
      array.push(root.val);
      return true;
    }

    return false;
  }

  findPath(root, sum, array);

  return array;
}

console.log(path_sum_II(root, 22));



/**
 *
 * @param {root of a binary tree} root
 * @param {integer} sum
 * 
 * This is the another way to approach the problem, the iterative way !!
 */

function path_sum_II_v2(root, sum) {
  const sums = [sum - root.val];
  const nodes = [root];
  let curr_sum, curr_node;

  while (nodes.length) {
    curr_node = nodes.pop();
    curr_sum = sums.pop();

    // check if leaf node and sum is zero
    if (!curr_node.left && !curr_node.right && curr_node.val === curr_sum) {
      return true;
    }

    // if the curr_noe has left child than push that into nodes stack
    if (curr_node.left) {
      nodes.push(curr_node.left);
      sums.push(curr_sum - curr_node.val);
    }

    // if curr_node has right child then push that into nodes stack as well
    if (curr_node.right) {
      nodes.push(curr_node.right);
      sums.push(curr_sum - curr_node.val);
    }
  }

  return false;
}

console.log(levelOrder(root));
console.log(path_sum_II_v2(root, 22));

/**
 * 
 * class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) this.root = newNode;
    else {
      let pointer = this.root;
      while (true) {
        if (pointer.left) {
          pointer = pointer.left;
        } else {
          pointer.left = newNode;
          break;
        }

        if (pointer.right) {
          pointer = pointer.right;
        } else {
          pointer.right = newNode;
          break;
        }
      }
    }

    return this;
  }

  levelOrder(root) {
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
}

const bt = new BinaryTree();

bt.insert(100);
bt.insert(170);
bt.insert(200);
bt.insert(300);
bt.insert(700);

console.log(bt);
console.log(bt.levelOrder(bt.root));
 */

// To gene
/**
 * 
 * @param {*} arr 
 * @param {*} root 
 * @param {*} i 
 * @param {*} length 
 * 
 * function insertionLeverOrder(arr, root, i, length) {
  if (i < length) {
    let newNode = new Node(arr[i]);
    root = newNode;

    root.left = insertionLeverOrder(arr, root.left, 2 * i + 1, length);

    root.right = insertionLeverOrder(arr, root.right, 2 * i + 2, length);
  }

  return root;
}

function generateCompleteBtree(arr) {
  const length = arr.length;
  return insertionLeverOrder(arr, null, 0, length);
}

function postOrderTraversal() {
  let root = generateCompleteBtree([1, 2, 3, 4, 5, 6, 7, 8]),
    stack = new Array(),
    list = new Array();
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

console.log(postOrderTraversal());

// console.log(levelOrder());
 * 
 */

/**
  * 
  * class QueueNode {
  constructor(val) {
    Object.assign(this, { next: null, val });
  }
}

class Queue {
  constructor() {
    Object.assign(this, { head: null, tail: null, length: 0 });
  }

  enqueue(val) {
    const newNode = new QueueNode(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    this.length += 1;
    return this;
  }

  dequeue() {
    if (this.head === null) return null;
    if (this.head === this.tail) return (this.head = this.tail = null);

    let temp = this.head,
      prevNode;
    while (temp.next) {
      prevNode = temp;
      temp = temp.next;
    }
    this.tail = prevNode;
    prevNode.next = null;

    this.length--;
    return temp;
  }

  print() {
    let temp = this.head,
      queue = new Array();
    while (temp) {
      queue.push(temp.val);
      temp = temp.next;
    }

    return queue;
  }
}

const q = new Queue();

q.enqueue(100);
q.enqueue(200);
q.enqueue(300);
q.enqueue(500);

console.log(q.print());

q.dequeue();
console.log('i am out : ', q.dequeue());
console.log('i am out : ', q.dequeue());
console.log('i am out : ', q.dequeue());

console.log(q.print());
  */
