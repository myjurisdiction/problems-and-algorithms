function isPalindrome(s) {
  let i = 0,
    j = s.length - 1;

  if (s === "bb") console.log("yes i have got it !!!");
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

/**
 *
 * @param {string} s
 *
 * so, what we are doing is that we are creating all possible combinations of the string and then verifying that is it truly a palindrome or not
 */
function longestPalindromicSubstring(s) {
  let best_len = 0,
    best_str = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let len = j - i + 1;
      let subs = s.substring(i, len);

      if (len > best_len && isPalindrome(subs)) {
        best_len = len;
        best_str = subs;
      }
    }
  }

  return best_str;
}

console.log(longestPalindromicSubstring("abb"));

// solution 2
function longestPalindromicSubstring_v2(s) {
  if (!s || !s.length) return "";
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCorner(s, i, i);
    let len2 = expandAroundCorner(s, i, i + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCorner(s, l, r) {
  while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    l--;
    r++;
  }
  return r - l - 1;
}

console.log(longestPalindromicSubstring_v2("abb"));
