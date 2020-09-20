class Node {
  constructor(val) {
    Object.assign(this, { left: null, right: null, val });
  }
}

const root = new Node(3);

root.left = new Node(9);
root.right = new Node(20);

root.right.left = new Node(15);
root.right.right = new Node(7);

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

function reverseLevelOrder(root) {
  const height = getHeight(root);
  console.log("height", height);
  const list = new Array();

  for (let i = height; i > 0; i--) {
    printGivenLevel(root, i, (current = new Array()), list);
    list.push(current);
  }

  return list;
}

function getHeight(root) {
  if (!root) return 0;
  const queue = [root];
  let nodeCount,
    height = 0;

  while (true) {
    nodeCount = queue.length;

    if (!nodeCount) return height;

    height++;

    while (nodeCount > 0) {
      let temp = queue.shift();

      if (temp && temp.left) queue.push(temp.left);
      if (temp && temp.right) queue.push(temp.right);

      nodeCount--;
    }

    if (!queue.length) break;
  }

  return height;
}

function printGivenLevel(root, level, current) {
  if (!root) return;

  if (level === 1) {
    current.push(root.val);
  } else if (level > 1) {
    printGivenLevel(root.left, level - 1, current);
    printGivenLevel(root.right, level - 1, current);
  }
}

console.log(reverseLevelOrder(root));