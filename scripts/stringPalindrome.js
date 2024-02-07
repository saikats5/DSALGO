//madam == madam , saikat !== takias
function stringPalindrome(str){
    let newStr = str.toLowerCase();
    for(let i=0;i<newStr.length;i++){ //newStr.length/2
        if(newStr[i] !== newStr[(newStr.length-1)-i]){
            return false;
        }
    }
    return true;
}
console.log('11',stringPalindrome('saikat'));
console.log('22',stringPalindrome('Madam'));
console.log('33',stringPalindrome('Saikat'));
console.log('44',stringPalindrome('Malayalam'));