//["flower","flow","flight"] -> 'fl'
function prefix(words){
    if(!words[0] || words.length === 1){
        return words[0] || "";
    }
    let i = 0;
    while(words[0][i] && words.every((val)=>val[i] === words[0][i])){
        i++;
    }
    return words[0].substr(0, i);
}
console.log('11', prefix([]));
console.log('22', prefix([""]));
console.log('33', prefix(["abc"]));
console.log('44', prefix(["abcdefgh", "abcde", "abe"]));
console.log('55', prefix(["abc", "abc", "abc"]));
console.log('66', prefix(["abc", "abcde", "xyz"]));
console.log('77', prefix(["abc", "def", "ghi"]));