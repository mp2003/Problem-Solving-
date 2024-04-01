//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let txt = readLine().trim();
        let pat = readLine().trim();
        let obj = new Solution();
        let res = obj.search(pat,txt);
        if(res === -0){
            res = 0;
        }
        console.log(res);
        
    }
}
// } Driver Code Ends


//User function Template for javascript


/**
 * @param {string} pat
 * @param {string} txt
 * @return {number}
*/

class Solution {
    search(pat,txt){
       //code here
         let i = 0,
    j = 0,
    k = pat.length;
  let map = new Map();

  for (let char of pat) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let count = map.size;
  let ans = 0;

  while (j < txt.length) {
    if (map.has(txt[j])) {
      map.set(txt[j], map.get(txt[j]) - 1);

      if (map.get(txt[j]) === 0) {
        count--;
      }
    }

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (count === 0) {
        ans++;
      }

      if (map.has(txt[i])) map.set(txt[i], map.get(txt[i]) + 1);

      if (map.get(txt[i])=== 1) count++;

      i++;
      j++;
        }
    }
      return ans;
    }
}