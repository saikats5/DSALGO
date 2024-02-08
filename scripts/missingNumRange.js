//[3,1,0] -> 2 missing
function missingNum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return arr.length*(arr.length + 1)/2 - sum;
}

console.log('11',missingNum([3,1,0]));
console.log('22',missingNum([9,1,0,2,4,3,8,7,6]));