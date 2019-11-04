
// 二叉树的深度优先遍历的非递归的通用做法是采用栈，广度优先遍历的非递归的通用做法是采用队列
// 深度优先  先取这个元素的子节点如果子节点还有子节点就继续取子节点, 先纵向再横向
// 一层一层进去一层一层出来 使用递归

let dTraversal = (node, nodeList = []) => {
  if (node) {
    nodeList.push(node);
    let children = node.children;
    for(let i = 0; i < children.length; i++) {
      dTraversal(children[i], nodeList);
    }
  }
  return nodeList;
}

// 广度优先 先取这个节点的所有兄弟节点然后再取子节点，层次遍历从上往下，从左往右访问节点

let wTraversal = (node) => {
  // 两个数组    一个作为收集节点的数组, 一个作为节点处理的队列
  let result = [];
  let queue = [];
  if (node) {
    queue.push(node);
  } else {
    return 'node为空'
  }
  // 当queue不为空时
  while (queue.length) {
    let current = queue.shift();
    result.push(current);
    let children = current.children;
    for (let i = 0; i < children.length;i++) {
      queue.push(children[i]);
    }
  }
  return result;
}