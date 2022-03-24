const testFn = require('./test');

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
  console.log('11', ary);
  ary = ary.map((item, index) => {
    // console.log('aa', item);
    console.log('aa--', ary);
    if ((index + 1) < ary.length) {
      console.log('aa-11', item);
      return item.next = ary[index + 1];
    } else {
      console.log('aa-22', item);
      return item.next = null;
    }
  });
  console.log('==ary', ary);
  return ary[0];
};

// mock function
const LinkedList = function () {

  //  * Definition for singly - linked list.
  const ListNode = function (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  this.length = 0;
  this.head = null;

  this.append = function (val) {
    let node = new ListNode(val);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  this.print = function () {
    let s = '';
    let current = this.head;

    if (current === null) {
      return [];
    }

    while (current) {
      s += current.val + (current.next ? ',' : '');
      current = current.next;
    }
    return s.split(',').map(item => Number(item));
  }

  // this.mergeTwoLists = function (list1, list2) {
  //   let ary = [];
  //   let head1 = list1.print();
  //   let head2 = list2.print();
  //   // while (head1.next) {
  //   //   ary.push(head1);
  //   //   head1 = head1.next;
  //   // }
  //   // while (head2.next) {
  //   //   ary.push(head2);
  //   //   head2 = head2.next;
  //   // }
  //   head1.forEach(item => ary.push(item));
  //   head2.forEach(item => ary.push(item));
  //   ary = ary.sort();
  //   ary.map((item, index) => {
  //     if ((index + 1) < ary.length) {
  //       item.next = ary[index + 1];
  //     } else {
  //       item = null;
  //     }
  //   });
  //   return ary;
  // }
}

const getLinkedList = function (list1, list2) {
  // let link = new LinkedList();
  let link1 = new LinkedList();
  let link2 = new LinkedList();

  list1.forEach(item => {
    link1.append(item)
  });

  list2.forEach(item => {
    link2.append(item)
  });

  console.log('--', link1);

  mergeTwoLists(link1.head, link2.head);
}


testFn(getLinkedList, '解法 1');

