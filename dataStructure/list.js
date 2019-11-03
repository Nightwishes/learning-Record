// 数组是一块连续的内存，而链表可以不是连续内存，链表的节点与节点之间连接通过指针,
//数组第一项删除后续项都会受影响往前移




// 链表的节点类,每一个节点都应该有指针指向它的上一个节点跟下一个节点
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

// 链表类 
class List {
  constructor() {
    // 表头
    this.head = null;
    // 链表
    this.size = 0;
  }
  // 添加节点
  add (node) {
    if (this.head === null) {
      this.head = node;
    } else {
      // 如果head不为空则从head一直搜索到最后一个节点然后最后节点指向这个节点
      let index = 0;
      let current = this.head;
      while (++index < this.size) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
    }
    ++this.size;
  }
  // 删除节点
  del (node) {
    // 判断是否是头节点
    if (node === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    // 需要判断是不是尾节点
     else {
      let current = this.head;
      let index = 1;
      while (node !== current) {
        current = current.next;
        ++index;
      }
      // 判断index与size的关系 是否是最后一个节点
      console.log(this.size, index)
      if (this.size === index) {
        current.prev.next = null;
        current.prev = null;
      } else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    --this.size;
  }
  // 查找节点
  search (node) {
    let current = this.head;
    while (current !== node) {
      current = current.next;
    }
    return current;
  }
  // 修改节点
  xiugai (node, val) {
    let target = this.search(node);
    target.element = val;
  }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(44);
let l1 = new List();
l1.add(n1);
l1.add(n2);
l1.add(n3);
l1.add(n4);
l1.del(n3)

console.log(l1.search(n4))

l1.xiugai(n4, 90);

console.log(l1.head.next);
