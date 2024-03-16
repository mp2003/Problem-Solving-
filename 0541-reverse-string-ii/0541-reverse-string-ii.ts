function reverseStr(s: string, k: number): string {
    let res = "";
    for ( let i =0 ;i< s.length;i+=2*k){
        let group = s.slice ( i ,i+2*k);
        res += group.slice(0,k).split("").reverse().join("") + group.slice(k); 
    }

return res;
};