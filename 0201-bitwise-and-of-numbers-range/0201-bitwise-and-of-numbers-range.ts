function rangeBitwiseAnd(left: number, right: number): number {
    let shift: number = 0;

    while (left < right) {
        left >>= 1; 
        right >>= 1; 
        shift++;    
    }

    return left << shift; 

};