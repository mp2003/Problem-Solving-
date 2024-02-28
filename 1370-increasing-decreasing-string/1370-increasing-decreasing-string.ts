function sortString(s: string): string {
    let charCount : number[ ] = new Array(26).fill(0);
    
    for ( let char of s){
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    // A->Z

    let ans : string = '';
    
    while ( ans.length < s.length){

            for ( let i =0 ;i< 26;i++){
        if (charCount[i] > 0){
            ans+= String.fromCharCode ( i + 'a'.charCodeAt(0));
            charCount[i]--;
        }
    }
    
    for ( let i = 25 ;i>=0;i--){
        if ( charCount[i]>0){
            ans+= String.fromCharCode ( i + 'a'.charCodeAt(0));
            charCount[i]--;
        }
    }
    }
    
return ans ;
};