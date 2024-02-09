// abcd == dcab , bbaa != aaca
function hashmap(str){
    let obj = {};
    for(let key of str){
        obj[key] = obj[key] + 1 || 1;
    }
    return obj;
}
function anagram(str1, str2){
    let charSet1 = hashmap(str1);
    let charSet2 = hashmap(str2);
    if(charSet1.length !== charSet2.length){
        return false;
    }
    for(let key in charSet1){
        if(charSet1[key] !== charSet2[key]){
            return false;
        }
    }
    return true;
}
console.log('11',anagram('abcd','cdba'));
console.log('22',anagram('ebcd','cdba'));