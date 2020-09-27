const Node = class {
  constructor(val) {
    Object.assign(this, { next: null, val });
  }
};

const head = new Node(4);
head.next = new Node(5);
head.next.next = new Node(1);
head.next.next.next = new Node(9);

// we have not been the head node
function deleteAnode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

function print(head) {
  if (head) {
    console.log(head.val);
    print(head.next);
  }
}

deleteAnode(head.next);
print(head);
