var isPalindrome = function (x) {
  if (x < 0) return false;

  let revNum = 0,
    temp = x,
    pow = 0;
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    pow++;
  }
  temp = x;
  while (temp > 0) {
    revNum += (temp % 10) * Math.pow(10, --pow);
    temp = Math.floor(temp / 10);
  }
return revNum === x
};


