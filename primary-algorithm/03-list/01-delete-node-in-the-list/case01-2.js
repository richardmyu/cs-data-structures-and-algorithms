const testFn = require('./test');
const LinkedList = require('../link-list');

/**
解法 1
  64ms, 94.18%
  43MB, 32.33%

思路

小结
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

LinkedList.prototype.deleteNode = deleteNode;

const getLinkedList = function (list, node) {
  let link = new LinkedList();
  list.forEach(item => {
    link.append(item)
  });
  return link.deleteNode(node);
}

testFn(getLinkedList, '解法 1');
