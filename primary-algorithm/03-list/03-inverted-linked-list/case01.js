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
const reverseList = function (head) {
  let prev;
  let current = head;

  if (current === null) {
    return head;
  } else if (current.next === null) {
    return head;
  }

  prev = current;

  while (current.next) {
    current = current.next;
    prev = reverseBro(prev, current);
  }
  head = prev;
  return head;
};

const reverseBro = function (prev, next) {
  next = JSON.parse(JSON.stringify(next))
  if (prev.next.val === next.val) {
    prev.next = null;
  }
  next.next = prev;
  return next;
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

    if (current === null) {
      return [];
    }

    while (current) {
      s += current.val + (current.next ? ',' : '');
      current = current.next;
    }
    return s.split(',').map(item => Number(item));
  }

  // TODO: [1, 1, 2, 1] 未通过
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
      console.log('--33', current);
      current = current.next;
      console.log('--44', current);
      prev = this.reverseBro(prev, current);
      console.log('--55', prev);
    }
    head = prev;
    return this.print();
  }

  this.reverseBro = function (prev, next) {
    next = JSON.parse(JSON.stringify(next))
    if (prev.val === next.val) {
      return prev;
    }
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
