//1287 -> 4
function digitCount(num){
    num = Math.abs(num);
    let count = 0;
    while(num>0){
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}
console.log('11',digitCount(1287));
console.log('22',digitCount(1));
console.log('33',digitCount(9));
console.log('44',digitCount(-9));