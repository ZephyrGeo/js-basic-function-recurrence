function findIndex(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i])) return i
        else return -1
    }
}

function fn(element) {
    return element < 10
}

const array1 = [5, 12, 8, 130, 44];
const array2 = [23, 12, 11, 130, 44];

findIndex(array1, fn)
findIndex(array2, fn)