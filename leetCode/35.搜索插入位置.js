/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index= 0;
  if (nums.length === 1&&nums[0]===target) return 0;
  if (nums.length === 1 && nums[0] < target) return 1;
  if (nums.length === 1 && nums[0]>target)return 0
  while(nums.length !== index) {
    if (nums[0] > target && nums.length > 1) return 0;
    if (nums[index]===target) {
      return index;
    }
    if (nums[index] > target) {
      return index;
    }
    index++;
  }
  return index;
};
// @lc code=end

searchInsert([1,3],1)