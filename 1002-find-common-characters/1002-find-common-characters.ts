function commonChars(words: string[]): string[] {
    let countArr: number[] = new Array(26).fill(Infinity);
    // let map = new Map<string, number>();
    for (let word of words) {
        let currentCharCount: number[] = new Array(26).fill(0);
        for (let i = 0; i < word.length; i++) {
            currentCharCount[word[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            // map.set(word[i], ((map.get(word[i]) || 0) + 1));
        }

        for (let k = 0; k < 26; k++) {
            countArr[k] = Math.min(currentCharCount[k], countArr[k])
        }
    }
    let res: string[] = [];
    // let res1: string[] = [];
    // console.log(map)
    // for (let word of words) {
    //     for (let i = 0; i < word[i].length; i++) {
    //         if (map.has(word[i])
    //             && map.get(word[i]) >= 0
    //             && Number.isInteger(map.get(word[i]) / words.length)) {
    //             res1.push(word[i]);
    //             map.set(word[i], (map.get(word[i]) - words.length));
    //             console.log(map);
    //         }
    //     }

    // }
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < countArr[i]; j++) {
            res.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        }
    }
    return res;
};