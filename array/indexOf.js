function indexOf(arr, searchElement, fromIndex = 0) {
    const length = arr.length;
    
    if(fromIndex < 0) 
    {
        let newIndex = length + fromIndex
    }

    // length > 0 && fromIndex < length
    if(fromIndex > 0 && fromIndex < length) {
        for(let i = fromIndex; i < length; i++) {
            if(arr[i] == searchElement) console.log(i)
        }
        console.log(-1)
    }
    else if(fromIndex > 0 && fromIndex > length) console.log(-1)
    else if(fromIndex < 0 && newIndex > 0 && newIndex < length) {
        for(let i = fromIndex; i < length; i++) {
            if(arr[i] == searchElement) console.log(i)
        }
        console.log(-1)
    }
    else if(fromIndex < 0 && newIndex < 0) {
        for(let i = 0; i < length; i++) {
            if(arr[i] == searchElement) console.log(i)
        }
        console.log(-1)
    }
}   

const array = [2, 5, 9]

indexOf(array,5)
