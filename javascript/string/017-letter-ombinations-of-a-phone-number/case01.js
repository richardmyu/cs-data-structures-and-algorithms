const testFn = require('./test');

/**
解法 1

思路

小结
 */

/**
 * @param {string}digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits.length > 5 || /[^2-9]/.test(digits)) {
    return false;
  }

  const leng = digits.length;
  const mapList = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };
  let result = [];

  if (leng === 0) {
    result = [];
  } else if (leng === 1) {
    result = mapList[digits];
  } else if (leng === 2) {
    for (let i = 0; i < mapList[digits[0]].length; i++) {
      for (let j = 0; j < mapList[digits[1]].length; j++) {
        result.push(mapList[digits[0]][i] + mapList[digits[1]][j]);
      }
    }
  } else if (leng === 3) {
    for (let x = 0; x < mapList[digits[0]].length; x++) {
      for (let y = 0; y < mapList[digits[1]].length; y++) {
        for (let z = 0; z < mapList[digits[2]].length; z++) {
          result.push(mapList[digits[0]][x] + mapList[digits[1]][y] + mapList[digits[2]][z]);
        }
      }
    }
  } else if (leng === 4) {
    for (let a = 0; a < mapList[digits[0]].length; a++) {
      for (let b = 0; b < mapList[digits[1]].length; b++) {
        for (let c = 0; c < mapList[digits[2]].length; c++) {
          for (let d = 0; d < mapList[digits[3]].length; d++) {
            result.push(mapList[digits[0]][a] + mapList[digits[1]][b] + mapList[digits[2]][c] + mapList[digits[3]][d]);
          }
        }
      }
    }
  }

  return result;
};

testFn(letterCombinations, '解法 1');
