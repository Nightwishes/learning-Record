/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */

 // 思路:找到最短字符串 然后 最短字符串 的组成挨个跟 其他的匹配
var longestCommonPrefix = function(strs) {
  let minLength = strs[0];
  let i = 1;
  while (i <= strs.length) {
    if (minLength.length < strs[i].length) {
      minLength = strs[i];
    }
    i++;
  }
  let index = 0;
  while (index <= minLength.length) {
    
  }
  
};
// @lc code=end

