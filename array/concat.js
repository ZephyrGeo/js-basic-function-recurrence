function concat(arr, ...Args) {
    Args.map((element) => {
        element.map((i) => arr.push(i))
    })
    console.log(arr)
}

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [7,8,9]

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];


concat(arr1, arr2, arr3)
concat(array1, array2, array3)
