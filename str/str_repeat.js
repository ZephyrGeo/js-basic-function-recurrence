function repeat(str, count) {
    //count < 0
    if(count < 0) {
        throw new RangeError('repeat count must be non-negative');
    }
    //count = Infinity
    if(count == Infinity) {
        throw new RangeError('repeat count must be less than infinity');
    }
    //count = 0, str.length = 0
    if(count == 0 || str.length == 0) return '';
    //count normal
    count = Math.floor(count);
    
    let res = "";

    for(let i = 0; i < count; i++) {
        res += str.slice();
    }

    return res;
}

const str = 'abc'

console.log(repeat(str, 4))
console.log(repeat(str, -1))