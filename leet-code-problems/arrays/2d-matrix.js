const { log } = console;

// const matrix = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30],
// ];

const matrix = [
  [1, 4],
  [2, 5],
];

function searchMatrix(matrix, target) {
  let row = matrix.length,
    col = matrix[0].length;

  let start = 0,
    end = row * col - 1;

  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2);

    let middle_el = matrix[Math.floor(middle / col)][middle % col];

    if (target === middle_el) return true;

    if (target < middle_el) end = middle - 1;
    else start = middle + 1;
  }

  return false;
}

log(searchMatrix(matrix, 2));
