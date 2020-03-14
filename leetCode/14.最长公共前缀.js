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
var longestCommonPrefix = function(strs) {
  let minLength = strs[0];
  let i = 1;
  while (i <= strs.length) {
    if (minLength.length < strs[i].length) {
      minLength = strs[i];
    }
    i++;
  }
  minLength = minLength.split('');
  
};
// @lc code=end

