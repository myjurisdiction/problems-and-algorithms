const { log } = console;

function generateMaxHeap(nums, heap, k) {
  for (let el of nums) {
    insertHeapEl(heap, el);
  }

  for (let j = 1; j < k; j++) {
    extractMax(heap);
  }

  return heap[0];
}

function insertHeapEl(heap, el) {
  heap.push(el);
  bubbleUp(heap);
}

function bubbleUp(heap) {
  let index = heap.length - 1;

  while (index > 0) {
    let parentIndex = Math.floor(index - 1 / 2);

    if (heap[parentIndex] >= heap[index]) break;

    swap(heap, index, parentIndex);

    index = parentIndex;
  }

  return heap;
}

function swap(array, idx1, idx2) {
  return ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);
}

function extractMax(heap) {
  let min = heap.pop();

  heap[0] = min;

  sinkDown(heap);
}

function sinkDown(heap) {
  let rootIndex = 0,
    element = heap[rootIndex];
  len = heap.length;

  while (true) {
    let leftChildIdx = 2 * rootIndex + 1,
      rightChildIdx = 2 * rootIndex + 2,
      swapIdx = null,
      leftChild,
      rightChild;

    if (leftChildIdx < len) {
      leftChild = heap[leftChildIdx];
      if (leftChild > element) swapIdx = leftChildIdx;
    }

    if (rightChildIdx < len) {
      rightChild = heap[rightChildIdx];
      if (
        (swapIdx === null && rightChild > element) ||
        (swapIdx !== null && rightChild > leftChild)
      )
        swapIdx = rightChildIdx;
    }

    if (swapIdx === null) break;

    swap(heap, rootIndex, swapIdx);

    rootIndex = swapIdx;
  }

  return heap;
}

log(generateMaxHeap([3, 2, 1, 5, 6, 4], new Array(), 2));
