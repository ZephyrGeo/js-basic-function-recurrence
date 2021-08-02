function reverse(arr) {
    const k = (arr.length % 2 == 0) ? (arr.length / 2) : ((arr.length + 1) / 2)
    
    for(let i = 0; i < k; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

const arr = [1,2,3,4]
const arr1 = [1,2,3,4,5,6,7]

console.log(reverse(arr))
console.log(reverse(arr1))