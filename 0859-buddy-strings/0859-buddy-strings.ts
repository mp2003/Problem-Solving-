function buddyStrings(s: string, goal: string): boolean {
    if (s.length != goal.length)
        return false;

    if (s === goal) {
        let set = new Set(s);
        return set.size < s.length;
    }

    const diffArr : number []= [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i])
            diffArr.push(i);
    }

    if (diffArr.length > 2)
        return false;

    return (s[diffArr[0]] === goal[diffArr[1]]
        && s[diffArr[1]] === goal[diffArr[0]]
    )
};