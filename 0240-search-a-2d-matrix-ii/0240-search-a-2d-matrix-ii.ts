function searchMatrix(matrix: number[][], target: number): boolean {

    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        let current = matrix[row][col];
        if (current === target)
            return true;
        else if (current > target) {
            col--;
        }
        else {
            row++;
        }
    }

    return false;
};