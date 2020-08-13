/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let idx = 1;
  let temp = nums[0];
  while(idx !== nums.length) {
    if (nums[idx] > temp) {
      temp = nums[idx];
    }
    idx++;
  }
  let index = nums.findIndex(item => item === temp);
  let 
};
// @lc code=end

