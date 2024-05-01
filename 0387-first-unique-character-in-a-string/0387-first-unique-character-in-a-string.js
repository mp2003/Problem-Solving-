var firstUniqChar = function (s) {
  console.log(s);
  let map = new Map();
  for (let ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }
  for (let [key, freq] of map) {
    if (map.get(key) > 1) {
      map.delete(key);
    }
  }
  let firstEl = map.keys().next().value;

  console.log(s.indexOf(firstEl));

  return firstEl !== undefined ? s.indexOf(firstEl) : -1;
};
