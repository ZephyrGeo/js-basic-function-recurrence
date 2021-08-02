function includes(arr, valueToFind, fromIndex) {
    const length = arr.length;

    if(fromIndex < 0) length += fromIndex;

    for(let i = 0; i < length; i++) {
        if(arr[i] == valueToFind) return true
    }
    return false;
}

const arr1 = [1,3,2]

console.log(includes(arr1, 1, 2))
console.log(includes(arr1, 4))