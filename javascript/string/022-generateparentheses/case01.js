const testFn = require('./test');

/**
解法 1

思路
  递归法：

  ()   --》 三个插入点 --》()()  (())
  ()() --》 五个插入点 --》()()()  (())()  ()(())
  (()) --》          --》()(())  (()())  ((()))

小结
  之前一直有两种思路：
    一种是穷竭法，生成全部可能组合，再判断，卡在了生成组合这一步，留在 case02，看学习了算法以后，还能不能解；
    另一种是递归法，但是总觉得递归可能会遗漏，没有具体思考；在第一种方法碰壁后，去讨论去看了看，官方提供了三种，但没兴趣看，毕竟是 c；讨论大多都是说递归，于是我又仔细研究了递归，发现，其实递归，在有效的括号范围内，不仅没有遗漏，还有重复，这样一来，问题就简单多了。


 */

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  if (n < 1 || n > 8) {
    return false;
  }

  let r = [];

  if (n === 1) {
    r.push('()');
  } else {
    let list = generateParenthesis(n - 1);

    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list[i].length; j++) {
        r.push(list[i].slice(0, j) + '()' + list[i].slice(j));
      }
    }
  }

  return [...new Set(r)];
};

// generateParenthesis(1);
// generateParenthesis(2);
// generateParenthesis(3);
testFn(generateParenthesis, '解法 1');
