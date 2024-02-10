// a,b,c    d,e,f  ->  a,d,b,e,c,f
function mergingStringsAlt(str1, str2){
    let str = '';
    let len = Math.min(str1.length, str2.length);
    let i;
    for (i=0; i<len; i++){
        str += str1[i] + str2[i];
    }
    return str + str1.slice(i) + str2.slice(i);
}
console.log('11',mergingStringsAlt('abc','def'));
console.log('22',mergingStringsAlt('ac','def'));