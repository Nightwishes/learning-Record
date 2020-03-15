/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 // 原生的indexOf可以直接支持 不过这样就没意思了

// 解法1 正则
// var strStr = function(haystack, needle) {
//   let reg = new RegExp(needle);
//   if (needle === '') return 0;
//   if (!reg.test(haystack)) return -1;
//   return haystack.match(reg).index;
// };

// 解法2 subString
  var strStr = function (haystack, needle) {
    if (needle === '') return 0;
    for (let i = 0; i < haystack.length; i++) {
      if (haystack.substring(i, i+needle.length) === needle) return i;
    }
  }

// @lc code=end

