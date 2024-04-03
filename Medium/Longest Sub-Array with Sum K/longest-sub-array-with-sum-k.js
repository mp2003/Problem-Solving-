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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let k = input_ar1[1];
        let arr = new Array(n);
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.lenOfLongSubarr(arr, n, k);
        console.log(res);
        
    }
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    lenOfLongSubarr(arr, n, k) {
        let map = new Map();
        let max = 0;
        let sum = 0;

        for (let i = 0; i < n; i++) {
            sum += arr[i];

            // Update max if sum equals k
            if (sum === k) {
                max = i + 1;
            }

            // Check if sum - k exists in the map
            if (map.has(sum - k)) {
                max = Math.max(max, i - map.get(sum - k));
            }

            // Update map with sum if not present
            if (!map.has(sum)) {
                map.set(sum, i);
            }
        }

        return max;
    }
}
