function fill(arr, value, begin = 0, end = arr.length) {
    const length = arr.length;
    if(begin < 0) begin += length;
    if(end < 0) end += length;

    for(i = begin; i < end; i++) {
        arr[i] = value;
    }
    console.log(arr)
}

const arr = [1,3,4,5,6,7]

fill(arr, 0, 1, 4) //normal
fill(arr, 0) //no begin & no end
fill(arr, 1, -3, -1) //negative nums