function filter(arr, fn) {
    const new_arr = [];
    const length = arr.length;

    for(i = 0; i < length; i++) {
        if(fn(arr[i]) == true) new_arr.push(arr[i]);
    }
    console.log(new_arr);
}

const result = (word) => word.length > 6;

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

filter(words, result);