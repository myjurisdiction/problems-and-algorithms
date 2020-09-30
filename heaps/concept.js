const { log } = console;

class BinaryHeap {
  constructor() {}
}

class MaxHeap extends BinaryHeap {
  constructor() {
    super();
    Object.assign(this, { container: new Array() });
  }

  insert(val) {
    this.container.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.container.length - 1,
      element = this.container[index];

    while (index > 0) {
      let parentIndex = Math.floor(index - 1 / 2);

      if (element < this.container[parentIndex]) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }

    return this.container;
  }

  swap(idx1, idx2) {
    [this.container[idx1], this.container[idx2]] = [
      this.container[idx2],
      this.container[idx1],
    ];
  }

  get extractMax() {
    let max = this.container[0],
      min = this.container.pop();

    this.container[0] = min;
    // now relocathe the oth position element to its exact location.
    this.sinkDown();

    return max;
  }

  sinkDown() {
    let rootIndex = 0,
      element = this.container[rootIndex],
      len = this.container.length;

    while (true) {
      let leftIdx = 2 * rootIndex + 1,
        rightIdx = 2 * rootIndex + 2,
        swapIndex = null;

      let leftChild, rightChild;

      if (leftIdx < len) {
        leftChild = this.container[leftIdx];
        if (leftChild > element) swapIndex = leftIdx;
      }

      if (rightIdx < len) {
        rightChild = this.container[rightIdx];
        if (
          (swapIndex === null && rightChild > element) ||
          (swapIndex !== null && rightChild > leftChild)
        )
          swapIndex = rightIdx;
      }

      if (swapIndex === null) break;

      this.swap(swapIndex, rootIndex);
      rootIndex = swapIndex;
    }

    return this.container;
  }
}

const heap = new MaxHeap();

heap.insert(3);
heap.insert(99);
heap.insert(1);
heap.insert(100);
heap.insert(7);

heap.insert(5);
heap.insert(20);
heap.insert(55);

heap.extractMax;

heap.extractMax;

heap.insert(100);

heap.extractMax;
heap.extractMax;

log(heap.container);
