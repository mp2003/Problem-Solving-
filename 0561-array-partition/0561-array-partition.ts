// function quickSort(arr: number[]): number[] {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const pivotIndex = Math.floor(arr.length / 2);
//     const pivot = arr[pivotIndex];

//     const left = arr.filter((element, index) => index !== pivotIndex && element < pivot);
//     const equal = arr.filter(element => element === pivot);
//     const right = arr.filter(element => element > pivot);

//     return [...quickSort(left), ...equal, ...quickSort(right)];
// }

function arrayPairSum(nums: number[]): number {
    // let res: number[][] = [];
    let sum: number = 0;
    nums.sort((a,b)=> a-b);
    console.log(nums);
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
};
