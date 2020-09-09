"use strict";

// this is naive approach to solve this problem, i can do better.
const two_sum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) return [i, j];
    }
  }
  return "no match";
};

// console.log(two_sum([3, 2, 4], 6));

// a better approach to this problem would be to use  two hash table

const two_sum_v2 = (array, target) => {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], i);
  }

  let complement;
  for (let j = 0; j < array.length; j++) {
    complement = target - array[j];
    if (map.has(complement) && map.get(complement) !== j)
      return [j, map.get(complement)];
  }
};

// complexity of this problem is O(n);
// console.log(two_sum_v2([3, 2, 4], 6));

// this is i gues the best version available of the above problem
const two_sum_v3 = (array, target) => {
  let map = new Map(),
    complement;
  for (let i = 0; i < array.length; i++) {
    complement = target - array[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(array[i], i);
  }
};

// console.log(two_sum_v3([3, 2, 4], 6));

/** Reverse Integer */

function reverseInteger(int) {
  let rev = 0,
    mod;
  while (int > 0) {
    mod = int % 10;
    int = Math.floor(int / 10);
    rev = rev * 10 + mod;
  }
  return rev;
}

function reverseInteger_v2(num) {
  const rev = new Array();
  if (num < 0) rev.push("-");
  if (!num) return 0;
  num = Math.abs(num);
  while (num > 0) {
    let mod = num % 10;
    num = Math.floor(num / 10);
    rev.push(mod);
  }

  return parseInt(rev.join(""));
}

// console.log(reverseInteger_v2(0));

/**
 *
 * @param {string } str
 *
 * find the longest substring without any repeating characters..
 */

// approach 1 (brute force)

// sample - pwwkew
// so this approach has taken me linear time to find the longest substring

// console.log(longestSubstring("pwwkew"));

/**
 *
 * @param { Array of numbers} arr
 * @param { integer} k
 *
 * this is the naive approach to solve this problem
 */
function maxSum(arr, k) {
  const length = arr.length;
  if (k > length) return "Invalid input";
  let max_sum = 0;
  for (let i = 0; i < length - k + 1; i++) {
    let curr_sum = 0;
    for (let j = 0; j < k; j++) {
      curr_sum += arr[i + j];
    }

    max_sum = Math.max(max_sum, curr_sum);
  }

  return max_sum;
}

// console.log(maxSum([100, 200, 300, 400], 3));

/**
 * Sliding windo approach
 * this is in roughly linear time comlexity
 *
 */

function maxSum_v2(arr, k) {
  if (k > arr.length) return "Invalid Input !!";

  let max_sum = 0,
    curr_sum = 0;
  for (let i = 0; i < k; i++) {
    max_sum += arr[i];
  }

  curr_sum = max_sum;

  for (let j = 0; j < arr.length - k; j++) {
    curr_sum = curr_sum - arr[j] + arr[j + k];
    max_sum = Math.max(curr_sum, max_sum);
  }

  return max_sum;
}

// console.log(maxSum_v2([100, 200, 300, 400], 5));

/**
 *
 * @param {array of integers } array
 */
function countUnique(array) {
  let i = 0,
    j = 1;
  while (j < array.length) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
      j++;
    } else {
      j++;
    }
  }

  array = array.slice(0, i + 1);

  return {
    unique: i + 1,
    array,
  };
}

// console.log(countUnique([2,2,5,6,7,7,8]));

/**
 *  Add Two Numbers
 */

class Node {
  constructor(value, next) {
    Object.assign(this, { next: next || null, value: value || 0 });
  }
}

class LinkedList {
  constructor() {
    Object.assign(this, { head: null, tail: null, length: 0 });
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  print(node = this.head, array = []) {
    if (!node) return node;
    array.push(node.value);
    node.next = this.print(node.next, array);
    return array;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null,
      next;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
}

//    n1 -> n2 -> n1
// n1  -><- n2  (this is circular linking)

const l1 = new Node(2);
const l2 = new Node(5);

l1.next = new Node(4);
l1.next.next = new Node(3);

l2.next = new Node(6);
l2.next.next = new Node(4);

/**
 *
 * @param {linked list} l1
 * @param { linked list} l2
 */

function addTwoNumbers(l1, l2) {
  let dummy_head = new Node(0);
  let l3 = dummy_head;
  let carry = 0;

  while (l1 || l2) {
    let l1_val = l1 ? l1.value : 0;
    let l2_val = l2 ? l2.value : 0;

    let curr_sum = l1_val + l2_val + carry;
    carry = Math.floor(curr_sum / 10);
    let last_value = curr_sum % 10;

    l3.next = new Node(last_value);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    l3 = l3.next;
  }

  if (carry) {
    let lastNode = new Node(carry);
    l3.next = lastNode;
    l3 = l3.next;
  }

  return dummy_head.next;
}

addTwoNumbers(l1, l2);

class Print extends LinkedList {
  constructor(head) {
    super(head);
    this.head = head;
  }
}

const p = new Print(addTwoNumbers(l1, l2));

// console.log(p.print());

// this is the addition of two numbers how it is suposed to be done
const i1 = 100,
  i2 = 200;

function addTwoIntegers(i1, i2) {
  let carry = 0,
    result = 0;
  while (i1 || i2) {
    let last_i1 = i1 % 10;
    let last_i2 = i2 % 10;

    let last_sum = last_i1 + last_i2 + carry;
    carry = Math.floor(last_sum / 10);
    result = result * 10 + (last_sum % 10);

    i1 = Math.floor(i1 / 10);
    i2 = Math.floor(i2 / 10);
  }

  if (carry) {
    result = result * 10 + carry;
  }

  return reverseInteger(result);
}

// console.log(addTwoIntegers(i1, i2));

/**
 * 
 * @param {string} str 
 * 
 * longest palindrome question
 */

function palindrome(str) {
  let i = 0,
    j = str.length - 1,
    result = true;

  while (i <= j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

console.log(palindrome("hanah"));

function longestPalindromicSubstring(s) {
  let i = 0,
    j = s.length - 1,
    map = new Map();

  while (i <= j) {
    if (s[i] === s[j]) {
      map.set(i, s[i]);
      map.set(j, s[j]);
      i++;
      j--;
    } else {
      j--;
    }
  }

  let result = "";
  if (map.size) {
    const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
    for (let j of sortedKeys) {
      if (map.has(j)) result = result.concat(map.get(j));
    }
  }

  return result;
}

console.log(longestPalindromicSubstring("babad"));
