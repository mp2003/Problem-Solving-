/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {

    if (s1 === s2) {
        let set = new Set(s1);
        return set.size <= s1.length;
    }

    let diffArr = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i])
            diffArr.push(i);
    }

    if (diffArr.length > 2) {
        return false;
    }

    return (
        s1[diffArr[0]] === s2[diffArr[1]] &&
        s1[diffArr[1]] === s2[diffArr[0]]
    );
};
