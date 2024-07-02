var sortColors = function (nums) {
    let fMap = new Map();
    for (let num of nums) {
        fMap.set(num, (fMap.get(num) || 0) + 1);
    }
    console.log(fMap);
    nums.length = 0;
    // nums = [];

    for (let [key, freq] of fMap) {
        if (key === 0) {
            nums.push(...new Array(freq).fill(0));
        } else if (key === 1) {
            nums.push(...new Array(freq).fill(1));
        } else {
            nums.push(...new Array(freq).fill(2));
        }
    }

    //   console.log(arr);
    //   nums = nums.sort((a, b) => a - b);
      console.log(nums, "jnnj");

    return nums.sort((a, b) => a - b);
};
