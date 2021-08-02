function find(arr, fn) {
    arr.map((i) => {
        if(fn(i)) return i;
    })
}

function fn(element) {
    return element < 10
}

const array1 = [5, 12, 8, 130, 44];

find(array1, fn)