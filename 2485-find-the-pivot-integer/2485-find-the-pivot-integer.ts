function pivotInteger(n: number): number {
    let sum: number = (n * (n + 1)) / 2;

    let pivot = Math.sqrt(sum);
    console.log(pivot);
    return Number.isInteger(pivot) && pivot * pivot === sum ? pivot : -1;

};