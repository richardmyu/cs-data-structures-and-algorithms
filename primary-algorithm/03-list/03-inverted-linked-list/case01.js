const testFn = require('./test');

/**
解法 1

思路
  迭代

小结
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) { };

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
    return s.split(',').map(item => Number(item));
  }

  this.reverseLinkedList = function () {
    let prev;
    let current = head;

    if (current === null) {
      return [];
    } else if (current.next === null) {
      return this.print();
    }

    prev = current;

    while (current.next) {
      current = current.next;
      console.log('--current', current);
      next = current.next || null;

      prev = this.reverseBro(prev, current);
      console.log('--while--', prev);
    }
    head = prev;
    return this.print();
  }

  this.reverseBro = function (prev, next) {
    console.log('Bro--prev', prev);
    console.log('Bro--next', next);
    if (prev.next.val === next.val) {
      prev.next = null;
    }
    next.next = prev;
    return next;
  }
}

const getLinkedList = function (list) {
  let link = new LinkedList();
  list.forEach(item => {
    link.append(item)
  });
  return link.reverseLinkedList();
}


testFn(getLinkedList, '解法 1');
