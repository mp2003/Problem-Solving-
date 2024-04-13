/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let i = 0,
        j = x;
    while (i <= j) {
        let mid = Math.floor((i + j )/ 2);
        if (mid * mid < x) {
            i = mid + 1;
        } else if (mid * mid > x) {
            j = mid - 1;
        } else {
            return mid;
        }
    }
    return j;
};
