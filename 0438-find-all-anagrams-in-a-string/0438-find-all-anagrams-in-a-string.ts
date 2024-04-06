function findAnagrams(s: string, p: string): number[] {
    let i = 0, j = 0;
    let map = new Map<string, number>();
    let k = p.length;
    let res = [];

    for (let char of p) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let count = map.size;
    // console.log(map);
    while (j < s.length) {
        if (map.has(s[j])) {
            map.set(s[j], map.get(s[j]) - 1);
            // console.log(s[j],map)
            if (map.get(s[j]) === 0)
                count--;
        }

        if (j - i + 1 < k)
            j++;
        else if (j - i + 1 === k) {
            if (count === 0) {
                res.push(i)
            }

            if (map.has(s[i])) {
                map.set(s[i], map.get(s[i]) + 1);
                if (map.get(s[i]) === 1)
                    count++;
            }

            i++;
            j++;
        }
    }

    return res;
};