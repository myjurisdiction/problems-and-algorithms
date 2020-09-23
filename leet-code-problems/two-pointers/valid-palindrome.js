const { log } = console;

const s = "race a car";

function validPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let i = 0,
    n = s.length - 1;

  while (i <= n) {
    if (s.charAt(i) === s.charAt(n)) {
      i++;
      n--;
    } else return false;
  }

  return true;
}

log(validPalindrome(s));
