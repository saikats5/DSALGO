//1234 !== 4321 , 121 == 121
function numberPalindrome(num){
    let actualNum = num, reversedNum = 0;
    while(actualNum>0){
        let lastNum = actualNum%10;
        reversedNum = (reversedNum*10) + lastNum;
        actualNum = Math.floor(actualNum/10);
    }
    return num === reversedNum;
}
console.log('11',numberPalindrome(1234));
console.log('22',numberPalindrome(121));