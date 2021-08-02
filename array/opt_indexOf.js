function indexOf(arr, searchElement, fromIndex = 0) {
    const len = arr.length;

    const n = fromIndex;

    if(n > len) return -1;

    let k = Math.max(n >= 0 ? n : len-Math.abs(n), 0)

    while(k < len) {
        if(k in arr && arr[k] === searchElement) {
            return k;
        }
        k++;
    }
    return -1;
}

const array = [2, 5, 9]

indexOf(array,5)