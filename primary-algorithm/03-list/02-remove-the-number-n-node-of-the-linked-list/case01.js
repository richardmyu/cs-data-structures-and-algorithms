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
  let diff = length(head) - n;
  let current = head;
  let index = 0;

  if (diff === 0) {
    return head;
  }

  while (index < diff - 1) {
    current = current.next;
    index++;
  }

  current.next = (current.next && current.next.next) ? current.next.next : null;
  return head;
};

const length = function (node) {
  let count = 0;
  if (node) {
    count++;
    node = node.next;
  }
  return count;
}


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
    let diff = length - n;
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