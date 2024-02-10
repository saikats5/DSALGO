//'saikat' -> 'aik'
function substring(mainStr, subStr){
    let mainStrLen = mainStr.length;
    let subStrLen = subStr.length;
    for(let i=0; i<(mainStrLen-subStrLen); i++){
        let flag = true;
        for(let j=0; j<subStrLen; j++){
            if(mainStr[i+j] !== subStr[j]){
                flag = false;
                break;
            }
        }
        if(flag){
            return i;
        }
    }
    return -1;
}
console.log('11',substring('saikat','ka'));
console.log('22',substring('saikat','maik'));