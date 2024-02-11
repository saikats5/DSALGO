//[9,44,6,24,53,68,3,45,8,86,5] -> sort
//Compare two elements to bring the minimum at the start for all the iteration
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min !== i){
            [arr[min],arr[i]] = [arr[i],arr[min]];
        }
    }
    return arr;
}
console.log('11',selectionSort([9,44,6,24,53,68,3,45,8,86,5]));