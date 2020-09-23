const { log } = console;

class Node {
  constructor(val) {
    Object.assign(this, { next: null, val });
  }
}

const head = new Node(3);
head.next = new Node(2);
head.next.next = new Node(0);
head.next.next.next = new Node(-4);

head.next.next.next.next = head.next;

function print(head) {
  let temp = head,
    result = new Array();
  while (temp) {
    result.push(temp.val);
    temp = temp.next;
  }

  return result;
}

// log(head);

// this solution is better that haire and turtle concept
function detectCycle(head) {
  if (!head || !head.next) return null;
  let i = head,
    position = 0,
    map = new Map();

  while (i) {
    if (map.has(i) && map.get(i) <= position) return i;
    map.set(i, position++);
    i = i.next;
  }

  return null;
}

console.log(detectCycle(head));

// whats the second approach to solve this issue
//       ji -> this is the cycle exist in the cycle
// n1 -> n2 -> n3 -> n4 -> n2

function detectCycle_v2(head) {
  if (!head) return -1;

  let temp = head,
    temp2 = head;

  while (true) {
    if (temp.next) temp = temp.next;
    else return null;

    if (temp2.next && temp2.next.next) temp2 = temp2.next.next;
    else return null;

    if (temp === temp2) {
      temp2 = head;
      while (temp !== temp2) {
        temp2 = temp2.next;
        temp = temp.next;
      }

      return temp2;
    }
  }
}

console.log(detectCycle_v2(head));

var hasCycle = function (head) {
  if (!head) return false;

  let temp = head,
    temp2 = head;

  while (true) {
    if (temp.next && temp2.next && temp2.next.next) {
      temp = temp.next;
      temp2 = temp2.next.next;
    } else return null;

    if (temp === temp2) return true;
  }
};

console.log(hasCycle(head));
