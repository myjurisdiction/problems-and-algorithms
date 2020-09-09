function isPalindrome(s) {
  let i = 0,
    j = s.length - 1;
  while (i <= j) {
    if (s.charAt(i) === s.charAt(j)) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}

function longestPalindromicSubstring(s) {
  let best_len = 0,
    best_str = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let len = j - i + 1;
      let subs = s.substring(i, len);
      if (isPalindrome(subs) && len > best_len) {
        best_len = len;
        best_str = subs;
      }
    }
  }

  return best_str;
}

console.log(longestPalindromicSubstring("ababd"));
