const testFn = require('./test');

/**
解法 1
  64ms, 94.18%
  43MB, 32.33%

思路

小结
 */

/**
@param {ListNode} node
@return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

// Definition for singly-linked list.
const LinkedList = function () {

  let ListNode = function (val) {
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
      length++;
    }
  }

  this.print = function () {
    let s = '';
    let current = head;
    while (current.next) {
      s += current.val + (current.next ? ',' : '')
    }
    return s;
  }

  this.delete = function (node) {
    let localNode;
    let current = head;
    while (current.next) {
      if (current.val === node) {
        localNode = current;
      }
    }
    localNode.val = localNode.next.val;
    localNode.next = localNode.next.next;

    return this.print().split('');
  }
}

const getLinkedList = function (list, node) {
  let link = new LinkedList();
  list.forEach(item => {
    link.append(item)
  });
  console.log(link.print(), node);
  return link.delete(node);
}

testFn(getLinkedList, '解法 1');
