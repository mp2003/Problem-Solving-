//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let k = parseInt(readLine());
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        
        let obj = new Solution();
        let res = obj.printFirstNegativeInteger(n, k, arr);
        
        let S = '';
        for(let i=0;i<res.length;i++)
        {
            S+=(res[i]);
            S+=' ';
        }
        console.log(S);
        
    }
}

// } Driver Code Ends


class Solution {
/**
* @param number n
* @param number k
* @param number[] arr

* @returns number[]
*/
    printFirstNegativeInteger(n, k, arr) {
        // code here
        let i =0 , j=0;
        let nArr=[] , res = [];
        while ( j < n){
            if ( arr[j] < 0){
                nArr.push(arr[j]);
            }
            // console.log(nArr)
            if (j-i+1 < k)
                j++;
            else if ( j-i+1 === k){
                
               if ( nArr.length === 0 )
                    res.push(0)
                else {
                    res.push(nArr[0]);
                    // console.log(nArr[0]+" "+ arr[i])
                    if ( nArr[0] === arr[i])
                        nArr.shift();
                }
                i++;
                j++
            }
        }
        return res
    }
}
        
