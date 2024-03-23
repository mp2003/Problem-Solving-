function searchMatrix(matrix: number[][], target: number): boolean {
    for (let arr of matrix) {
        for (let num of arr) {
            if (target === num)
                return true;
        }
    }

    return false;
};