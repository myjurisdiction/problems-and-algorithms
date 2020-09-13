console.log(`
    -> Longest common subsequence !!
`);

const str1 = "aab";
const str2 = "azb";

function longestCommonSubsequence(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;
  if (s1.charAt(s1.length - 1) === s2.charAt(s2.length - 1)) {
    return (
      1 +
      longestCommonSubsequence(
        s1.substring(0, s1.length - 1),
        s2.substring(0, s2.length - 1)
      )
    );
  } else
    return Math.max(
      longestCommonSubsequence(s1, s2.substring(0, s2.length - 1)),
      longestCommonSubsequence(s1.substring(0, s1.length - 1), s2)
    );
}

console.log(longestCommonSubsequence(str1, str2));

function longestCommonSubsequence_v2(
  s1,
  s2,
  pointer_1 = s1.length,
  pointer_2 = s2.length
) {
  if (!pointer_1 || !pointer_2) return 0;
  else if (s1.charAt(pointer_1 - 1) === s2.charAt(pointer_2 - 1))
    return (
      1 + longestCommonSubsequence_v2(s1, s2, pointer_1 - 1, pointer_2 - 1)
    );
  else
    return Math.max(
      longestCommonSubsequence_v2(s1, s2, pointer_1, pointer_2 - 1),
      longestCommonSubsequence_v2(s1, s2, pointer_1 - 1, pointer_2)
    );
}

console.log(longestCommonSubsequence_v2(str1, str2));

function constructMatrix(row, column) {
  const result = new Array();
  for (let i = 0; i <= row; i++) {
    result[i] = new Array();
    for (let j = 0; j <= column; j++) {
      result[i][j] = null;
    }
  }

  return result;
}

console.log(constructMatrix(str1.length, str2.length));

function longestCommonSubsequence_v3(str1, str2) {
  const lookUpTable = constructMatrix(str1.length, str2.length);
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 || j === 0) lookUpTable[i][j] = 0;
      else if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
        lookUpTable[i][j] = 1 + lookUpTable[i - 1][j - 1];
      } else {
        lookUpTable[i][j] = Math.max(
          lookUpTable[i - 1][j],
          lookUpTable[i][j - 1]
        );
      }
    }
  }

  return lookUpTable[str1.length][str2.length];
}

console.log(longestCommonSubsequence_v3(str1, str2));



