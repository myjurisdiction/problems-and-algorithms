const haystack = "aabaaabaaac";
const needle = "aabaaac";

// this is the naive approach, complexity is O(m * n);
function haystack_needle(haystack, needle) {
  if (!needle) return 0;

  if (needle.length > haystack.length) return -1;

  let i = 0;

  for (; i < haystack.length; i++) {
    let index = i;
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] === haystack[index]) index++;
      else break;

      if (j === needle.length - 1) return i;
    }
  }

  return -1;
}

// this have done by using KMP algorithm
function haystack_needle_better(haystack, needle) {
  if (!needle) return 0;

  if (needle.length > haystack.length) return -1;

  const list = prefixArray(needle);

  let i = 0,
    j = 0;

  while (i < haystack.length) {
    if (needle.charAt(j) === haystack.charAt(i)) {
      i++;
      j++;
    }
    if (j === needle.length) {
      return i - j;
    } else if (needle.charAt(j) !== haystack.charAt(i)) {
      if (j) {
        j = list[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
}

function prefixArray(needle) {
  let array = Array.from({ length: needle.length }, () => 0),
    i = 0,
    j = 1;

  while (j < needle.length) {
    if (needle.charAt(i) === needle.charAt(j)) {
      array[j] = ++i;
      j++;
    } else {
      if (i) i = array[i - 1];
      else j++;
    }
  }

  return array;
}

console.log(haystack_needle_better(haystack, needle));
