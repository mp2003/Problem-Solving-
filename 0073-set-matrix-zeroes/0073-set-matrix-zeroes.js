/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rows = matrix.length, cols = matrix[0].length;
    let firstRow = false;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0;
                if (r > 0) matrix[r][0] = 0;
                else firstRow = true;
            }
        }
    }
    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (matrix[r][0] === 0 || matrix[0][c] === 0)
                matrix[r][c] = 0;
        }
    }
    if (matrix[0][0] === 0) {
        for (let r = 0; r < rows; r++) {
            matrix[r][0] = 0;
        }
    }
    if (firstRow) {
        for (let c = 0; c < cols; c++)
            matrix[0][c] = 0;
    }

    
};