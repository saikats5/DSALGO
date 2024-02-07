//1287 -> 1 + 2 + 8 + 7 -> 18
//1287/10 -> Q-128,R-7 -> 128/10 -> Q-12,R,7+8 -> 12/10 -> Q-1,R-7+8+2 ------> as we don't know n so we have to put condition
function sumOfDigits(num){
    let sum = 0;
    while(num>0){
        sum += num%10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log('11',sumOfDigits(1287));