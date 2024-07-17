/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) {
                if (i + j === grid.length - 1 || i === j) {
                    return false;
                }
            } else {
                if (i + j !== grid.length - 1 && i !== j) {
                    return false;
                }
            }
        }
    }
    return true;
};