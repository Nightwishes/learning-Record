/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  // 先排序 取一个定值
  nums = nums.sort((a, b) => a - b);
  let result = [];
  let size = nums.length;
  // 将最左边的数当作定值
  let i = 0;
  let max = nums.length - 2;
  while (i < max) {
    let first = i + 1;
    let last = size - 1;
    while (first < last) {
      let sum = nums[i] + nums[first] + nums[last];
      // 判断sum决定左移还是右移
      if (sum == 0) {
        result.push([nums[i], nums[first], nums[last]]);
      }
      if (sum >= 0) {
        // sum大于0 last左移
        if (nums[last] === nums[--last]) {} // 重复值跳过
      } else {
        // sum小于0 first右移
        if (nums[first] === nums[++first]) {} // 重复值跳过
      }
    }
    while (nums[i] === nums[++i]) {}
  }
  return result;
};

// @lc code=end


// 思想 : 取一个定值,再 取最小数，最大数，三数相加,如果三数相加等于0则添加至保存结果的
// 假设定值是第一个左边第一个值
// 数组里 如果大于0则 最大数往左边移动,如果小于0 最小数往右边移动。直到最小数不小于最大数 结束这次循环
// 定值右移 开启新的循环



