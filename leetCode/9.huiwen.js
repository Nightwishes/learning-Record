/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 判断是否为奇数还是偶数
    x = x.toString();
    if (x.length === 1) return true;
    let double;
    double = x.length % 2 == 0 ? true : false;
    let left, right;
    if (double) {
      right = (x.length / 2) ;
      left = (x.length / 2) - 1;
    } else {
      right = Math.floor(x.length / 2);
      left = Math.ceil(x.length / 2) - 1 ;
    }
    while (left) {
      let leftValue = x[left];
      let rightValue = x[right];
      if (leftValue == rightValue) {
        left--;
        right++;
      } else {
        return false;
      }
    }
    return true;
};
// @lc code=end

console.log(isPalindrome(124321));
