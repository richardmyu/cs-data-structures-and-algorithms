const testFn = require('./test');
const LinkedList = require('../link-list');

/**
解法 1

思路

小结
 */
// TODO: error
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let diff = this.size() - n;
  let current = head;
  let index = 0;

  if (diff === 0) {
    return [];
  }

  while (index < diff - 1) {
    current = current.next;
    index++;
  }

  current.next = (current.next && current.next.next) ? current.next.next : null;

  return this.toString().split(',').map(item => Number(item));
};

LinkedList.prototype.removeNthFromEnd = removeNthFromEnd;

const getLinkedList = function (list, n) {
  let link = new LinkedList();

  list.forEach(item => {
    link.append(item);
  });

  return link.removeNthFromEnd(n);
};


testFn(getLinkedList, '解法 1');
