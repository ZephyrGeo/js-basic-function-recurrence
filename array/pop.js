function pop(arr) {
    const returnV = arr[arr.length - 1];
    arr.length--;
    return returnV;
}

const arr = [1,2,3,4,5]

console.log(pop(arr), arr)