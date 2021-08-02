function join(arr, sep = ',') {
    let s = '';
    for(let i = 0; i < arr.length; i++) {
        (i != arr.length -1) ? (s += arr[i] + sep) : (s += arr[i])
    }
    return s;
}

const arr1 = ['Wind', 'Rain', 'Fire']

console.log(join(arr1))

