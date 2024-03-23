function searchMatrix(matrix: number[][], target: number): boolean {

    let i = 0, j = matrix[0].length - 1;

    while (i < matrix.length && j >= 0) {
        let current = matrix[i][j];

        if (current === target) {
            return true;
        } else if (current > target)
            j--;
        else
            i++;
    }

    return false;
};