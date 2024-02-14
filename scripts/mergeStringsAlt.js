// a,b,c    d,e,f  ->  a,d,b,e,c,f
function mergingStringsAlt(word1, word2) {
    let str = '';
    let i;
    let minlen = (word1.length === word2.length) ? word1.length : (word1.length > word2.length) ? word2.length : word1.length;
    for (i = 0; i < minlen; i++) {
        str += word1[i] + word2[i];
    }
    return str + word1.slice(i) + word2.slice(i);
};
console.log('11', mergingStringsAlt('abc', 'def'));
console.log('22', mergingStringsAlt('ac', 'def'));