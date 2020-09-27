let Node = class {
  constructor(value) {
    Object.assign(this, { next: null, value });
  }
};

let Linked_list = class {
  constructor() {
    Object.assign(this, { head: null, tail: null, length: 0 });
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  // removing the tail element from the linked list
  pop() {
    let temp1 = this.head,
      temp2;

    if (!this.head) {
      return "List is empty";
    }

    if (this.head === this.tail) {
      this.head = this.tail = null;
      this.length = 0;
      return temp1;
    }

    while (temp1.next) {
      temp2 = temp1;
      temp1 = temp1.next;
    }
    this.tail = temp2;
    this.tail.next = null;
    this.length -= 1;
    return temp1;
  }

  /**
   * Removes the element from the 0th index
   */
  shift() {
    if (!this.head) return "List is empty";
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    return temp;
  }

  /**
   *
   * @param {any} value
   */
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

  // starting from 0
  get(position) {
    if (position <= 0) return this.head;
    if (position >= this.length) return this.tail;
    let temp = this.head,
      count = 0;
    while (temp.next && count < position - 1) {
      count++;
      temp = temp.next;
    }
    return temp;
  }

  set(position, value) {
    if (!this.head) return "List is empty";
    let node = this.get(position);
    node.next.value = value;
    return node;
  }

  insert(position, value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else if (position <= 0) this.unshift(value);
    else if (position >= this.length) this.push(value);
    else {
      let prevNode = this.get(position);
      let currentNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = currentNode;
    }
    this.length++;
    return this;
  }

  // actually i have to reverse
  reverse() {
    let current = this.head,
      prev = null,
      next;
    this.head = this.tail;
    this.tail = current;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }

  reverseRecursively(node = this.head, container = new Array()) {
    if (node.next) {
      container.push(node.value);
      this.reverseRecursively(node.next, container);
    } else {
      return node;
    }
    return container;
  }

  delete(position) {
    if (!this.head) {
      return "List is empty";
    } else if (position <= 0) {
      this.shift();
    } else if (position >= this.length) {
      this.pop();
    } else {
      let prevNode = this.get(position);
      let currentNode = prevNode.next;
      prevNode.next = currentNode.next;
      this.length--;
      return currentNode;
    }
  }
};

let node = new Linked_list();

let numbers = Array.from({ length: 5 }, (a, b) => b + 1);

for (let el of numbers) {
  node.push(el);
}

node.shift();

node.print();
