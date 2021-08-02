function slice(arr, begin = 0, finish = 0) {
    const cloned = [];

    if(begin > arr.length) return cloned;

    const start = (begin >= 0) ? begin : Math.max(begin + arr.length, 0)

    const end = (finish >= 0) ? finish : Math.max(finish + arr.length, 0)

    if(start < end) {
        for(let i = 0; i < end - 1; i++) {
            cloned[i] = arr[i + start]
        }
    } else cloned;
    return cloned;
}

const arr = [1,2,3,4,5,6]