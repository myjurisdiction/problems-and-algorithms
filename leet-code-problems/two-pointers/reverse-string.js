const { log } = console;

var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;

  while (i <= j) {
    swap(s, i, j);
    i++;
    j--;
  }

  return s;
};

function swap(s, idx1, idx2) {
  [s[idx1], s[idx2]] = [s[idx2], s[idx1]];
}

console.log(reverseString(["H","a","n","n","a","h"]));
