// [1,2,3] == [1,2,3]
function equalArray(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
console.log('11',equalArray([3,2,1],[1,2,3]));
console.log('22',equalArray([1,2,3],[1,2,3]));

function shortEqualArray(arr1, arr2){
    return arr1.length !== arr2.length && arr1.every((val, i)=>val === arr2[i])
}
console.log('33',equalArray([3,2,1],[1,2,3]));
console.log('44',equalArray([1,2,3],[1,2,3]));