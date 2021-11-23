/*
var isPalindromeStr = function (s) {
  let leng = s.length;
  if (leng === 0 || leng === 1) {
    return true;
  }
  for (let i = 0; i < leng; i++) {
    if (s[i] === s[leng - 1]) {
      if ((i + 1) === (leng - 1)) {
        return true;
      } else {
        return isPalindromeStr(s.slice(i + 1, leng - 1));
      }
    } else {
      return false;
    }
  }
}
*/

/**
 * @param {string} s
 * @returns {boolean}
 */
const isPalindromeStr = function (s) {
  let leng = s.length;
  if (leng === 0 || leng === 1) {
    return true;
  }
  for (let i = 0; i < leng; i++) {
    if (s[i] !== s[leng - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindromeStr;
