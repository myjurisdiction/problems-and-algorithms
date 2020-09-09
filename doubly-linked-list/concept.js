/** Analysis of the doubly linked list and its various operations*/

class Node {
  constructor(value) {
    Object.assign(this, { next: null, prev: null, value });
  }
}

class Dll {
  constructor() {
    Object.assign(this, { head: null, tail: null, length: 0 });
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return "List is empty";
    let prevNode = this.tail.prev;
    this.tail = prevNode;
    prevNode.next = null;
  }

  shift() {
    if (!this.head) return "List is empty";
    let temp = this.head;
    this.head = temp.next;
    this.head.prev = null;
    return temp;
  }

  print() {
    const container = new Array();
    let temp = this.head;
    while (temp) {
      container.push(temp.value);
      temp = temp.next;
    }
    return container;
  }

  // this a inplace of the reversal of the doubly linked list
  reverse() {
    let temp = this.tail;
    let container = new Array();
    while (temp) {
      container.push(temp.value);
      temp = temp.prev;
    }
    return container;
  }

  // indexing from 0
  get(position) {
    if (!this.head) return "List is empty";
    let node = this.head,
      prevNode,
      count = 0;
    while (node.next && count < position) {
      prevNode = node;
      node = node.next;
      count++;
    }
    return { prevNode, node };
  }

  set(position, value) {
    if (!this.head) return "List is empty";
    let { node } = this.get(position);
    node.value = value;
    return node;
  }

  insert(position, value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else if (position <= 0) {
      return this.unshift(value);
    } else if (position >= this.length) {
      return this.push(value);
    } else {
      let { prevNode, node } = this.get(position);
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = node;
    }
    this.length++;
    return this;
  }

  // delete from any position in the list.
  delete (position) {
    if(!this.head) return "List is empty !!";
    else if(position <= 0) return this.shift();
    else if(position >= this.length) return this.pop();
    else {
      let { prevNode, node } = this.get(position);
      let nextNode = node.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length--;
      return node;
    }
  }
}

const node = new Dll();

const numbers = Array.from({ length: 5 }, (a, b) => b + 1);

for (let el of numbers) {
  node.push(el);
}

// console.log(node.get(1));
console.log(node.set(1, "Second"));
console.log(node.set(3, "Fourth !!"));

node.unshift("now i am first !!");

node.insert(1, "hello there");

node.insert(100, "had it not been my developer, i had been an error >>><<<");

node.pop();

node.pop();

node.push("Success loves prep.");

// node.shift();

node.delete(4);

node.insert(4, 'i was third here beofre deletion !!');

console.log(node.print());

// console.log(node.reverse());
