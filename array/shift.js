function shift(arr) {
    const returnV = arr[0];

    for(let i =0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length--;

    return returnV;
}

const arr = [1,2,3,4]

console.log(shift(arr), arr, arr.length)