function padEnd(str, tarLen, padStr = ' ') {
    if(str.length < tarLen) {

        for(let i = 0; i < tarLen - str.length; i+= padStr.length) {
            str += padStr;
        }
        
        str += padStr.slice(0, tarLen - str.length)
    }

    return str;
}


console.log(padEnd('abc',10,'123'))
console.log(padEnd('abc',2,'123'))
console.log(padEnd('ac',9,'123'))
