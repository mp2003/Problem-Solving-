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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let s = input_ar0[1];
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.subarraySum(arr, n, s);
        let ans='';
        for(let i=0; i<res.length; i++){
            ans+=res[i];
            ans+=" ";
        }
        console.log(ans);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
*/

class Solution 
{
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s)
    {
        //your code here
        let i=0, j=0,sum=0;
        let res = [];
        
        if (s === 0) {
            for (let k = 0; k < n; k++) {
                if (arr[k] === 0) {
                    return [k + 1, k + 1];
            }
        }
        return [ -1];
    }
        
        // if ( Math.min(...arr) > s)
        //     return [-1];
            // console.log(Math.min(...arr))
        while ( j < n){
            
            sum += arr[j];
            // console.log(sum);
               if ( sum > s){
                while (sum > s && i <= j) { 
                sum -= arr[i];
                i++;
            }
        }
            
            if (sum === s){
                res = [i+1 ,j+1];
                return res;
            }
            
            j++;
        }
        return [-1];
    }
    
}