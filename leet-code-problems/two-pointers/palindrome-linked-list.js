const { log } = console;

class Node {
  constructor(val) {
    Object.assign(this, { next: null, val });
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(1);
// head.next.next.next = new Node(1);
// head.next.next.next.next = new Node(5);

function print(head) {
  if (!head) return;
  console.log(head.val);
  return print(head.next);
}

// print(head);

// this is a poor wsolution
function palindromeLinkedList(head) {
  if (!head) false;
  const queue = new Array();

  let temp = head;
  while (temp) {
    queue.unshift(temp.val);
    temp = temp.next;
  }

  let front, last;
  while (queue.length) {
    if (queue.length === 1) return true;
    front = queue.shift();
    last = queue.pop();
    if (front !== last) return false;
  }

  return true;
}

function reverseList(head) {
  let current = head,
    next,
    prev = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  head = prev;
  return head;
}

function palindromeLinkedList_v2(head) {
  if (!head || !head.next) return true;

  let temp = head;
  let temp2 = head;

  while (temp2 && temp2.next) {
    temp2 = temp2.next.next;
    temp = temp.next;
  }

  temp = reverseList(temp);
  temp2 = head;

  while (temp) {
    if (temp.val !== temp2.val) return false;
    temp = temp.next;
    temp2 = temp2.next;
  }

  return true;
}

palindromeLinkedList_v2(head);
