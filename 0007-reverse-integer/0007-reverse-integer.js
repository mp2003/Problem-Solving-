var reverse = function (x) {
    const limit = Math.pow(2, 31);
    if (x < 0) {
        const reversed = -parseInt(String(x).slice(1).split("").reverse().join(""));
        return reversed < -limit ? 0 : reversed;
    } else {
        const reversed = parseInt(String(x).split("").reverse().join(""));
        return reversed > limit - 1 ? 0 : reversed;
    }
};
