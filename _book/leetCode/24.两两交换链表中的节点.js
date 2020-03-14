/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let count = 0;
  while (head.next) {
    ++count;
    let temp = head.next; // 2
    if (count % 2 !== 0) {
      temp.next = head;
      head.next = temp.next;
    }
    head = head.next
  }
  return head;
};
// @lc code=end

