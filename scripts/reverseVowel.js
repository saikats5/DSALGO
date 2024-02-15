// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
function reverseVowels(s) {
    let vowels = ['A','E','I','O','U','a','e','i','o','u'];
    let newStr = s.split('');
    let vowelsArr = [];
    for(let i=0; i<newStr.length; i++){
        if(vowels.indexOf(newStr[i]) !== -1){
            vowelsArr.push(newStr[i]);
        }
    }
    for(let i=0; i<newStr.length; i++){
        if(vowels.indexOf(newStr[i]) !== -1){
            newStr[i] = vowelsArr.pop();
        }
    }
    return newStr.join('');
};
console.log('11',reverseVowels("hello"));