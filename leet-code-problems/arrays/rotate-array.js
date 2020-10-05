const { log } = console;

function generateMatrix(row, column, startValue) {
  const matrix = new Array();
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array();
    for (let j = 0; j < column; j++) {
      matrix[i][j] = ++startValue;
    }
  }
  return matrix;
}

const m1 = generateMatrix(3, 3, 0),
  m2 = generateMatrix(3, 2, 10);

// this is a naive way to multiply two matrices
function multiplyMatrix(m1, m2) {
  if (m1.length !== m2[0].length)
    return "Matrix multiplication not possible !!";

  let result = new Array();

  for (let i = 0; i < m1.length; i++) {
    result[i] = new Array();
    for (let j = 0; j < m2[0].length; j++) {
      result[i][j] = 0;
      for (let k = 0; k < m2[0].length; k++) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return result;
}

// a better ways is to use divide and conquer.

// log(multiplyMatrix([[10]], [[10]]));

function rotateMatrix(matrix) {
  const length = matrix.length;

  // this is to transpose the matrix
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // now we have to mirror the matrix

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][length - 1 - j];
      matrix[i][length - 1 - j] = temp;
    }
  }

  return matrix;
}

log(
  rotateMatrix([
    [1, 2],
    [3, 4],
  ])
);
