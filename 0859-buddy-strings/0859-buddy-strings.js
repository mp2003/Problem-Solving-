/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    // If s and goal are the same, check if there are repeated characters
    if (s === goal) {
        const set = new Set(s);
        return set.size < s.length;
    }

    // Find indices with different characters
    const diffIndices = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffIndices.push(i);
        }

        // If more than two differences found, not possible to be buddy strings
        if (diffIndices.length > 2) {
            return false;
        }
    }

    // Check if swapping the characters at the two different indices makes the strings equal
    return (
        diffIndices.length === 2 &&
        s[diffIndices[0]] === goal[diffIndices[1]] &&
        s[diffIndices[1]] === goal[diffIndices[0]]
    );
};
