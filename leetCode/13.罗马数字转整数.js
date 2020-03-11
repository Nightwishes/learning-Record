/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  s = s.split('');
  if (!s.length) {
    return;
  }
  let result = 0;
  s.forEach(item => {
    if (item === 'M') {
      result += 1000;
    }
    if (item === 'D') {
      result += 500;
    }
    if (item === 'C') {
      result += 100;
    }
    if (item === 'L') {
      result += 50;
    }
    if (item === 'X') {
      result += 10;
    }
    if (item === 'V') {
      result += 5;
    }
    if (item === 'I') {
      result += 1;
    }
  })
  return result;
};
// @lc code=end

