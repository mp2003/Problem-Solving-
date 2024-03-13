function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    let map = new Map<number[], number>();
    let res: number[][] = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let d = Math.abs(rCenter - i) + Math.abs(cCenter - j);
            map.set([i, j], d);
        }
    }
    // console.log(map);
    const entries = Array.from(map.entries());
    entries.sort((a, b) => a[1] - b[1]);
    const sortedMap = new Map(entries);

    // console.log(sortedMap);

    for (let key of sortedMap.keys()) {
        res.push(key)
    }
    return res;
};