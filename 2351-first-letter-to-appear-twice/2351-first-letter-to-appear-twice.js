var repeatedCharacter = function (s) {
//   console.log(s);
  let map = new Map();
  for (let ch of s) {
    map.set(ch, (map.get(ch) || 0) + 1);
    if (map.get(ch) === 2) {
      return ch;
    }
  }
//   console.log(map);
};