// 二叉树 每个节点只有两个子节点(左节点，右节点)
// 左小右大

// 二叉树的节点类, 分别有一个左节点与右节点
class Node {
  constructor (element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  add (node) {
    // 如果根节点不存在
    if (!this.root) {
      this.root = node;
    } else {
      this.insert(this.root, node);
    }
  }
  insert (root, node) {
    if (root.element > node.element) {
      if (root.left == null) {
        // root的左节点不存在，且root的值比node小则root.left为Node
        root.left = node;
      } else {
        // 如果root的左节点存在,就把root.left作为下一个比较节点递归比较
        this.insert(root.left, node);
      }
    } else if (root.element < node.element) {
      if (root.right == null) {
        // 同上一样的 不过这里是放右边因为Node值比root大
        root.right = node;
      } else {
        this.insert(root.right, node);
      }
      // 如果root的值与node值相同则应该抛出错误
    } else {
      throw new Error('二叉树的值不应该相同,否则无法存储')
    }
  }
}

// 前序遍历

let preorderTraversal = (node) => {
  if (!node) return;
  console.log(node.element);
  preorderTraversal(node.left);
  preorderTraversal(node.right);
}

// 中序
let inorderTraversal = (node) => {
  if (!node) return;
  inorderTraversal(node.left);
  console.log(node.element);
  inorderTraversal(node.right);
}
// 后序
let postorderTraversal = (node) => {
  if (!node) return;
  postorderTraversal(node.left);
  postorderTraversal(node.right);
  console.log(node.element);
}

let n1 = new Node(5);
let n2 = new Node(8);
let n3 = new Node(4);
let n4 = new Node(15);
let n5 = new Node(1);
let b1 = new BinaryTree();

let arr = [n1, n2, n3, n4, n5];

arr.forEach(node => b1.add(node));

// console.log(preorderTraversal(b1.root));
// console.log(inorderTraversal(b1.root));
console.log(postorderTraversal(b1.root));
