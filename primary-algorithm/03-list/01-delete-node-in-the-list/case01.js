const testFn = require('./test');

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

// mock function
const LinkedList = function () {

  const ListNode = function (val) {
    this.val = val;
    this.next = null;
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
    return s.split(',').map(item => Number(item));
  }

  this.delete = function (val) {
    let current = head;
    while (current) {
      if (current.val === val) {
        current.val = current.next.val;
        current.next = current.next.next;
      }
      current = current.next;
    }

    return this.print();
  }
}

const getLinkedList = function (list, node) {
  let link = new LinkedList();
  list.forEach(item => {
    link.append(item)
  });
  return link.delete(node);
}

testFn(getLinkedList, '解法 1');
