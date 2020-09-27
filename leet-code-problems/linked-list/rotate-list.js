const { log } = console;

class Node {
  constructor(val) {
    Object.assign(this, { next: null, val });
  }
}

const list = [1, 2, 3, 4, 5];

function insert(list) {
  const head = new Node(list[0]);
  let temp = head;
  for (let i = 1; i < list.length; i++) {
    temp.next = new Node(list[i]);
    temp = temp.next;
  }

  return head;
}

function print(head) {
  if (!head) return null;
  console.log(head.val);
  print(head.next);
}

const head = insert(list);

function rotateList(head, k) {
  if (!head) return null;
  let len = 1,
    temp = head;

  while (temp.next) {
    len++;
    temp = temp.next;
  }

  k = k % len;

  if (!k) return head;

  temp.next = head;

  let newTail = temp;

  let steps = len - k;

  while (steps-- > 0) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;

  newTail.next = null;

  return newHead;
}

print(rotateList(head, 2));
