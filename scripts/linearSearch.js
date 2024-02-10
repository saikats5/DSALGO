// Array iteration
function linearArr(arr, target){
    for(let key of arr){
        if(key === target){
            return arr.indexOf(key);
        }
    }
    return -1;
}
console.log('11',linearArr([6,35,3,7,23,56,-3],23));
console.log('22',linearArr([6,35,3,7,23,56,-3],4));