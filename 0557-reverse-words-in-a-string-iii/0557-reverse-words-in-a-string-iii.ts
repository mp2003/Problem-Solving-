function reverseWords(s: string): string {
    let arr = s.split(" ");
    let ans: string[] = [];
    // console.log(arr.join(" "));
    for (let str of arr) {
        ans.push(str.split("").reverse().join(""));
    }

    return ans.join(" ")
};