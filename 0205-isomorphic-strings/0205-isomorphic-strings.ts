function isIsomorphic(s: string, t: string): boolean {
    let map = new Map<string, string>();
    let revMap = new Map<string, string>();

    // S->T
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) || revMap.has(t[i])) {
            if (t[i] !== map.get(s[i]) || s[i] !== revMap.get(t[i])) {
                return false;
            }
        } else {
            map.set(s[i], t[i]);
            revMap.set(t[i], s[i]);
        }
    }
    return true;
};