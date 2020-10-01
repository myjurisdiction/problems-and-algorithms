const { log } = console;

const ListNode = class {
  constructor(val) {
    Object.assign(this, { next: null, val });
  }
};

function insert(list) {
  const head = new ListNode(list[0]);
  let temp = head;
  for (let i = 1; i < list.length; i++) {
    temp.next = new ListNode(list[i]);
    temp = temp.next;
  }

  return head;
}

const list1 = [1, 2, 3, 4];
const list2 = [5, 6, 7, 8];

const h1 = insert(list1);
const h2 = insert(list2);

function mergeTwoList(l1, l2) {
  if (!l1 && !l2) return null;

  if (!l1) return l2;

  if (!l2) return l1;

  let p1 = l1,
    p2 = l2;

  const newHead = new ListNode(0);

  let newHeadPointer = newHead;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      newHeadPointer.next = new ListNode(p1.val);
      p1 = p1.next;
    } else {
      newHeadPointer.next = new ListNode(p2.val);
      p2 = p2.next;
    }

    newHeadPointer = newHeadPointer.next;
  }

  while (!p1 && p2) {
    newHeadPointer.next = new ListNode(p2.val);
    p2 = p2.next;
    newHeadPointer = newHeadPointer.next;
  }

  while (!p2 && p1) {
    newHeadPointer.next = new ListNode(p1.val);
    p1 = p1.next;
    newHeadPointer = newHeadPointer.next;
  }

  return newHead.next;
}

function print(head) {
  if (!head) return null;
  console.log(head.val);
  print(head.next);
}

print(mergeTwoList(h1, h2));
