/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    x = (x).toString().split('');
    let tempArr = [];

    while (x.length) {
        tempArr.push(x.pop());
    }
    if (tempArr[tempArr.length - 1] === '-' ) {
        tempArr.unshift(tempArr.pop());
        if (tempArr[1] === '0') {
            tempArr.splice(1, 1);
        }
    }
    if (tempArr[0] === '0') {
        tempArr.splice(0,1);
    }
    tempArr.join('');
    tempArr = Number(tempArr);
    return tempArr;
};
// @lc code=end

