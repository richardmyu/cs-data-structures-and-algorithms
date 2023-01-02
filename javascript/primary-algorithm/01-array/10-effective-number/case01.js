const testFn = require('./test');

/**
解法 1

思路

小结
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  let r = [];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        for (let k = j + 1; k < 9; k++) {
          // row
          if (board[i][j] === board[i][k]) {
            console.log('row');
            return false;
          }
        }

        for (let m = i + 1; m < 9; m++) {
          // col
          if (board[i][j] === board[m][j]) {
            console.log('col');
            return false;
          }
        }
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== '.') {
        if (r.includes(board[i][j])) {
          console.log('2-2');
          return false;
        } else {
          r.push(board[i][j]);
        }
      }
    }
  }

  r = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      if (board[i][j] !== '.') {
        if (r.includes(board[i][j])) {
          console.log('2-5');
          return false;
        } else {
          r.push(board[i][j]);
        }
      }
    }
  }

  r = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (r.includes(board[i][j])) {
          console.log('2-8');
          return false;
        } else {
          r.push(board[i][j]);
        }
      }
    }
  }

  r = [];

  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== '.') {
        if (r.includes(board[i][j])) {
          console.log('5-2');
          return false;
        } else {
          r.push(board[i][j]);
        }
      }
    }
  }

  r = [];

  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      if (board[i][j] !== '.') {
        if (r.includes(board[i][j])) {
          console.log('5-5');
          return false;
        } else {
          r.push(board[i][j]);
        }
      }
    }
  }

  r = [];

  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (r.includes(board[i][j])) {
          console.log('5-8');
          return false;
        } else {
          r.push(board[i][j]);
        }
      }
    }
  }

  r = [];

  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== '.') {
        if (r.includes(board[i][j])) {
          console.log('8-2');
          return false;
        } else {
          r.push(board[i][j]);
        }
      }
    }
  }

  r = [];

  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      if (board[i][j] !== '.') {
        if (r.includes(board[i][j])) {
          console.log('8-5');
          return false;
        } else {
          r.push(board[i][j]);
        }
      }
    }
  }

  r = [];

  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (r.includes(board[i][j])) {
          console.log('8-8');
          return false;
        } else {
          r.push(board[i][j]);
        }
      }
    }
  }

  return true;
};

testFn(isValidSudoku, '解法 1');
