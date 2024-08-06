/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    for (let i = 0; i < matrix.length; i++) {
        let l = 0, r = matrix[i].length - 1;
        while (l <= r) {
            let mid = Math.ceil((r + l) / 2);
            if (matrix[i][mid] < target) l++;
            else if (matrix[i][mid] > target) r--;
            else return true;
        }
    }
    return false;
};