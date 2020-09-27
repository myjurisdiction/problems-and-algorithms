const { log } = console;

class Node {
  constructor(val) {
    Object.assign(this, { next: null, val });
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

function print(head) {
  if (!head) return null;
  console.log(head.val);
  print(head.next);
}

function findLength(head) {
  let count = 0;

  function countNodes(head) {
    if (!head) return null;
    count++;
    return countNodes(head.next);
  }

  countNodes(head, count);
  return count;
}

function removeNthFromEnd(head, n) {
  if (!head) return null;
  const length = findLength(head);

  let loopCounter = length - n;
  let current = head,
    prev = head;

  if (!loopCounter) {
    head = current.next;
    return head;
  }

  while (loopCounter--) {
    if (loopCounter < 0 || !current.next) break;
    prev = current;
    current = current.next;
  }

  prev.next = current.next;

  return head;
}

// a more optimal solution would be ..
function removeNthFromEnd_v2(head, n) {
  if (!head) return null;

  let fast = head,
    slow = head;

  for (let i = 1; i <= n + 1; i++) {
    if (fast.next) {
      fast = fast.next;
    }
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
}

log(removeNthFromEnd_v2(head, 2));

print(head);
