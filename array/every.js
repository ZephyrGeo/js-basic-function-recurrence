function every(arr, fn) {
    const length = arr.length;
    
    for(let i = 0; i < length; i++) {
        let flag = fn(arr[i]);
        if(!flag) return false;
    }
    return true;
}

const isBelowThreshold = (currentValue) => currentValue < 40;


const array = [1,3,3,4]
const array1 = [1,3,3,50]

every(array, isBelowThreshold)
every(array1, isBelowThreshold)

