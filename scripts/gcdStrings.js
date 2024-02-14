//str1 = "ABCABC", str2 = "ABC" -> "ABC"
//"ABABAB", str2 = "ABAB" -> "AB"
//str1 = "LEET", str2 = "CODE" -> ""
function gcdString(str1, str2){
    if((str1 + str2) !== (str2 + str1)){
        return "";
    }else if(str1 === str2){
        return str1;
    }else if(str1.length > str2.length){
        return gcdString(str1.slice(str2.length), str2);
    }else{
        return gcdString(str2.slice(str1.length), str1);
    }
}
console.log('11',gcdString("ABCABC","ABC"));
console.log('22',gcdString("SAIKAT","SAHA"));
console.log('33',gcdString("ABABAB","ABAB"));
console.log('44',gcdString("ABCAB","ADC"));
console.log('55',gcdString("A","ABC"));
console.log('66',gcdString("ABCABC","ABCDABC"));