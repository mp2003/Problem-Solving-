function sqrt(num) {
  let i = 0,
    j = num;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (mid * mid > num) j = mid - 1;
    else if (mid * mid < num) i = mid + 1;
    else return mid;
  }
}

var isPerfectSquare = function (num) {
  let squareRoot = sqrt(num);
//   console.log(squareRoot);
  return Number.isInteger(squareRoot);
};

// console.log(isPerfectSquare(125));
