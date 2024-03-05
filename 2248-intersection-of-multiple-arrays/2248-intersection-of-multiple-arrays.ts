function intersection(nums: number[][]): number[] {
    let res: number[] = [];
    let map = new Map<number, number>();
    for (let arr of nums) {
        for (let num of arr)
            map.set(num, (map.get(num) || 0) + 1);
    }

    console.log(map);

    for (let [key, val] of map) {
        if (val == nums.length)
            res.push(key);
    }
    return res.sort((a, b) => a - b);
};