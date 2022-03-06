const testFn = require('./test');

/**
解法 1

思路

小结
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {

  return head;
};


// mock function
const LinkedList = function () {

  //  * Definition for singly - linked list.
  const ListNode = function (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  let length = 0;
  let head = null;

  this.append = function (val) {
    let node = new ListNode(val);
    if (head === null) {
      head = node;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }

  this.print = function () {
    let s = '';
    let current = head;
    while (current) {
      s += current.val + (current.next ? ',' : '');
      current = current.next;
    }
    return s;
  }

  this.removeNthFromEnd = function (n) {
    let fast = head;
    let slow = head;
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    if (fast === null) {
      return head.next;
    }
    while (fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return this.print().split(',').map(item => Number(item));
  }
}

const getLinkedList = function (list, n) {
  let link = new LinkedList();
  list.forEach(item => {
    link.append(item)
  });
  return link.removeNthFromEnd(n);
}


testFn(getLinkedList, '解法 1');
