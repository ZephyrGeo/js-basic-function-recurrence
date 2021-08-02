function padStart(str, tarLen, padStr = ' ') {
    if(str.length < tarLen) {

        for(let i = 0; i < tarLen - str.length; i+= padStr.length) {
            str = padStr + str;
        }
        
        str = padStr.slice(0, tarLen - str.length) + str;
    }

    return str;
}

console.log(padStart('abc',10,'123'))
console.log(padStart('abc',2,'123'))
console.log(padStart('ac',9,'123'))