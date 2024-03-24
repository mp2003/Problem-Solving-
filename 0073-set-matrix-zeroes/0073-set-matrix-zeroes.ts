function setZeroes(matrix: number[][]): void {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const zeroCol: Set<number> = new Set();

    // Find rows and columns containing zeroes
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroCol.add(j);
            }
        }
    }

    // Set entire rows to zero
    for (let i = 0; i < rows; i++) {
        if (matrix[i].includes(0)) {
            matrix[i].fill(0);
        }
    }

    // Set entire columns to zero
    for (const col of zeroCol) {
        for (let i = 0; i < rows; i++) {
            matrix[i][col] = 0;
        }
    }
}
