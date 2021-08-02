function push(arr, ...Args) {

    for(let i = 0; i < Args.length; i++) {
        arr[arr.length] = Args[i];
    }
     
    return arr.length;
}

const arr = [1,2,3]

console.log(push(arr,4,5,6), arr)
