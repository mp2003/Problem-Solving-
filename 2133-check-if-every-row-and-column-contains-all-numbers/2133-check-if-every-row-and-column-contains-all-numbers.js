/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    let rows = matrix.length, cols = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        let set = new Set(matrix[i]);
        if (set.size !== rows)
            return false;
    }

    for (let j = 0; j < cols; j++) {
        let set = new Set();
        for (let i = 0; i < rows; i++) {
            set.add(matrix[i][j]);
        }
        console.log(set);
        if (set.size !== cols)
            return false;

    }


    return true;
};