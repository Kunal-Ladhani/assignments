/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

const isAlpha = (char) => {
  if ('abcdefghijklmnopqrstuvwxyz'.indexOf(char) !== -1) {
    return true;
  }
  return false;
};

function isPalindrome(str) {
  const lowerCaseStr = str.trim().toLowerCase();
  const n = lowerCaseStr.length;
  if (n == 0 || n == 1) {
    return true;
  }

  let l = 0, r = n - 1;
  while (l < r) {

    if (!isAlpha(lowerCaseStr[l])) {
      l++;
      continue;
    } else if (!isAlpha(lowerCaseStr[r])) {
      r--;
      continue;
    } else if (lowerCaseStr[l] !== lowerCaseStr[r]) {
      return false;
    }

    l++;
    r--;
  }
  return true;
}

module.exports = isPalindrome;
