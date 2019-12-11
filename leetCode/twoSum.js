/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
      if ((target == nums[i] + nums[j]) && (i !== j)) {
        return [i, j]
      }
    }
  }  
};
// @lc code=end

