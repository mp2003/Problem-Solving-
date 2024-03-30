//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
  for (; i < t; i++) {
    let [N, K] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let Arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.maximumSumSubarray(K, Arr, N);
    console.log(res);
  }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} K
 * @param {number[]} Arr
 * @param {number} N
 * @return {number}
 */
class Solution {
  maximumSumSubarray(K, Arr, N) {
    //code here
    let i =0 ,j=0, max=0;
    let sum =0;
    while ( j < N){
        sum+=Arr[j];
        if (j-i+1 === K){
             max = Math.max(max, sum);
             sum -= Arr[i];
             i++;
             j++;
        }   else if ( j-i+1 < K){
            j++;
        }
        
    }
    return max;
  }
}
