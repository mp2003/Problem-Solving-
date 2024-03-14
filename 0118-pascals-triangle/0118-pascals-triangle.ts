function generate(numRows: number): number[][] {
    let res: number[][] = [[1]];
    for (let i = 1; i < numRows; i++) {
        let tempRows : number[] = [0 , ...res[res.length - 1] , 0];
        let row : number []= [];

        for (let j = 0; j < tempRows.length - 1; j++) {
            row.push(tempRows[j] + tempRows[j + 1]);
        }

        res.push(row);
    }
    return res;
};

    // let result = [[1]];
    // for (let i = 1; i < numRows ; i++) {
    //     let temp = [0, ...result[result.length - 1], 0];
    //     let row = [];
    //     for (let j = 0; j < temp.length - 1; j++) {
    //         row.push(temp[j] + temp[j + 1]);
    //     }
    //     result.push(row);
    // }
    // return result;