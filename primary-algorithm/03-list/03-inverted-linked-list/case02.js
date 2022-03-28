const testFn = require('./test');
const LinkedList = require('../link-list');

/**
解法 2
  64ms, 79.93%
  42.8MB, 47.5%

思路
  for + ary

小结

 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let list = [];
  let current = head;

  if (current === null) {
    return head;
  } else if (current.next === null) {
    return head;
  }

  while (current) {
    list.push(current);
    current = current.next;
  }

  list = list.reverse();
  head = list[0];
  list.map((item, index) => {
    if ((index + 1) < list.length) {
      item.next = list[index + 1];
    } else {
      item.next = null;
    }
  })

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

    if (current === null) {
      return [];
    }

    while (current) {
      s += current.val + (current.next ? ',' : '');
      current = current.next;
    }
    return s.split(',').map(item => Number(item));
  }

  this.reverseLinkedList = function () {
    let list = [];
    let current = head;

    if (current === null) {
      return [];
    } else if (current.next === null) {
      return this.print();
    }

    while (current) {
      list.push(current);
      current = current.next;
    }

    list = list.reverse();
    head = list[0];
    list.map((item, index) => {
      if ((index + 1) < list.length) {
        item.next = list[index + 1];
      } else {
        item.next = null;
      }
    })

    return this.print();
  }
}

const getLinkedList = function (list) {
  let link = new LinkedList();
  list.forEach(item => {
    link.append(item)
  });
  return link.reverseLinkedList();
}


testFn(getLinkedList, '解法 2');
