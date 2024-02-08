function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) return false;

       const charFrequency = new Map<string, number>();

    for (let char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!charFrequency.has(char) || charFrequency.get(char) === 0) {
            return false; // Character not found or frequency exhausted
        }
        charFrequency.set(char, charFrequency.get(char) - 1);
    }

    return true;
};