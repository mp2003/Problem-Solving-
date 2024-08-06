/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let max = Math.max(...piles, 0);
    let l = 1, r = max;
    let k = r;
    while (l <= r) {
        let mid = Math.floor((r - l) / 2 + l);
        let hrs = 0;
        for (let n of piles) {
            hrs += Math.ceil(n / mid);
        }
        if (hrs <= h) {
            k = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }

    }
    return k;
};