/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 思路: 两个索引一个 一个用来遍历(index),一个用来确定数组位置(count),
// 遍历 与val相同则跳过，不同则count位置为当前遍历元素,count加1,直到遍历完
var removeElement = function(nums, val) {
  let count = 0; let index = 0;
  while (index < nums.length) {
    if (nums[index] !== val) {
      nums[count++] = nums[index];
    }
    index++;
  }
  return count;
};
// @lc code=end

