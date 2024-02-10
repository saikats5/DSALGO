// [1,3,5,9,14,26,50] -> 17 -> floor-14,ceil-26
function ceilFloor(arr, val){
    let start = 0, last = arr.length-1, floor = -1, ceil = -1;
    while(start<=last){
        let mid = Math.floor((start+last)/2);
        if(arr[mid] === val){
            floor = mid;
            ceil = mid;
            return [arr[floor],arr[ceil]];
        }else if(arr[mid] < val){
            start = mid + 1;
            floor = mid;
        }else{
            last = mid - 1;
            ceil = mid;
        }
    }
    return [arr[floor],arr[ceil]];
}
console.log('11',ceilFloor([1,3,5,9,14,26,50],17));
console.log('22',ceilFloor([1,3,5,9,14,26,50],14));