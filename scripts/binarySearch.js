//[1,2,3,4,5,6,7,8] -> 5
//Sorted array and half it to get the exact data
function binarySearch(arr, val){
    let start = 0, last = arr.length-1;
    while(start <= last){
        let mid = Math.floor((start+last)/2);
        if(arr[mid] === val){
            return mid;
        }else if(arr[mid]<val){
            start = mid+1;
        }else{
            last = mid-1;
        }
    }
    return -1;
}
function binarySearchRecurssion(arr, val, start, last){
    if(start>last){
        return -1;
    }
    let mid = Math.floor((start+last)/2);
    if(arr[mid] === val){
        return mid;
    }else if(arr[mid]<val){
        binarySearchRecurssion(arr, val, mid+1, last)
    }else{
        binarySearchRecurssion(arr, val, start, mid+1)
    }
}
console.log('11',binarySearch([1,2,3,4,5,6,7,8],5));
console.log('22',binarySearch([1,2,3,4,5,6,7,8],6));