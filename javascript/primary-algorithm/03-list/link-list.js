let LinkedList = (function () {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  const length = new WeakMap();
  const head = new WeakMap();

  class LinkedList {
    constructor() {
      length.set(this, 0);
      head.set(this, null);
    }

    append(val) {
      let node = new Node(val);
      let current;
      if (this.getHead() === null) {
        head.set(this, node);
      } else {
        current = this.getHead();
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      let l = this.size();
      l++;
      length.set(this, l);
    }

    insert(position, val) {
      if (position >= 0 && position <= this.size()) {
        let node = new Node(val);
        let current = this.getHead();
        let prev;
        let index = 0;
        if (position === 0) {
          node.next = current;
          head.set(this, node);
        } else {
          while (index++ < position) {
            prev = current;
            current = current.next;
          }
          node.next = current;
          prev.next = node;
        }
        let l = this.size();
        l++;
        length.set(this, l);
        return true;
      } else {
        return false;
      }
    }

    removeAt(position) {
      if (position > -1 && position < this.size()) {
        let current = this.getHead();
        let prev;
        let index = 0;

        if (position === 0) {
          head.set(this, current.next);
        } else {
          while (index++ < position) {
            prev = current;
            current = current.next;
          }
          prev.next = current.next;
        }

        let l = this.size();
        l--;
        length.set(this, l);
        return current.val;
      } else {
        return null;
      }
    }

    remove(val) {
      let index = this.indexOf(val);
      return this.removeAt(index);
    }

    indexOf(val) {
      let current = this.getHead();
      let index = 0;

      while (current) {
        if (val === current.val) {
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
    }

    isEmpty() {
      return this.size() === 0;
    }

    size() {
      return length.get(this);
    }

    getHead() {
      return head.get(this);
    }

    toString() {
      let current = this.getHead();
      let str = '';

      while (current) {
        str += current.val + (current.next ? ',' : '');
        current = current.next;
      }
      return str;
    }

    print() {
      console.log(this.toString());
    }
  }


  return LinkedList;
})();

module.exports = LinkedList;
