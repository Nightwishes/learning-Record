/*
 * @Author: your name
 * @Date: 2021-09-04 10:31:12
 * @LastEditTime: 2021-09-04 10:37:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learning-Record\compare.js
 */
class Comparator {
    constructor() {
        this.compare = Comparator.defaultCompare;
    }
    static defaultCompare(a, b) {
        if (a === b) return 0;
        return a < b ? -1 : 1
    }
    eq(a, b) {
        return this.compare(a, b) === 0
    }
    moreThan(a, b) {
        return this.compare(a, b) === 1;
    }
    /**
     * Checks if variable "a" is less than "b"
     * @description: 
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThan(a, b) {
        return this.compare(a, b) === -1;
    }
}
export default Comparator;