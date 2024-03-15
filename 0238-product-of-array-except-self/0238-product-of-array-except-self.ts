function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const prefix: number[] = new Array(n).fill(1);
    const postfix: number[] = new Array(n).fill(1);
    const result: number[] = new Array(n);

    for (let i = 1; i < n; i++) {
        prefix[i] = nums[i - 1] * prefix[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        postfix[i] = nums[i + 1] * postfix[i + 1];
    }

    console.log(postfix);

    for (let i = 0; i < n; i++) {
        result[i] = prefix[i] * postfix[i];
    }

    return result;
}
