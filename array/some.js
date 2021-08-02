function some(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i]) === true) return true;
    }
    return false;
}

function f(value) {
    return value > 10;
}

const arr = [1,11,2]
const arr1 = [1,3,2]

console.log(some(arr, f))
console.log(some(arr1, f))
