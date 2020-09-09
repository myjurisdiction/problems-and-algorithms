class Node {
  constructor(value) {
    Object.assign(this, { next: null, value });
  }
}

class Queue {
  constructor() {
    Object.assign(this, { head: null, tail: null, length: 0 });
  }

  // this must be the constant time , add to the tail
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
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
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    this.length++;
    return this;
  }

  // this must be the constant time to
  dequeue() {
    if (!this.head) return;
    let temp = this.head;
    if (temp.next) {
      this.head = temp.next;
    } else {
      this.head = this.tail = null;
    }

    this.length--;
    return temp;
  }

  get getList() {
    let temp = this.head;
    const list = new Array();
    while (temp) {
      list.push(temp.value);
      temp = temp.next;
    }
    return list;
  }
}

const queue = new Queue();

const randomNumbers = Array.from({ length: 10 }, () =>
  Math.ceil(Math.random() * 100)
);

for (let el of randomNumbers) {
  queue.enqueue(el);
}

queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.enqueue(1020);

queue.unshift('i am the new memebrt');

console.log(queue.dequeue());

console.log(queue.getList);

module.exports = Queue;
