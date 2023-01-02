const testFn = require('./test');
const LinkedList = require('../link-list');
/**
解法 1

思路
  for + ary

小结
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  console.log(list1);
  console.log(list1.next);
  console.log();
  let ary = [];

  while (list1.next) {
    ary.push(list1);
    list1 = list1.next;
  }

  ary.push(list1);

  while (list2.next) {
    ary.push(list2);
    list2 = list2.next;
  }

  ary.push(list2);
  ary = ary.sort((a, b) => a.val - b.val);

  ary = ary.map((item, index) => {
    if ((index + 1) < ary.length) {
      item.next = ary[index + 1];
    } else {
      if (item.next !== null) {
        item.next = null;
      }
    }

    return item.val;
  });

  return ary;
};

const getLinkedList = function (list1, list2) {
  let link1 = new LinkedList();
  let link2 = new LinkedList();

  list1.forEach(item => {
    link1.append(item);
  });

  list2.forEach(item => {
    link2.append(item);
  });

  return mergeTwoLists(link1.getHead(), link2.getHead());
};


testFn(getLinkedList, '解法 1');

