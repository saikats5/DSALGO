//[9,44,6,24,53,68,3,45,8,86,5] -> sort
//Compare the right element with the left unsorted array to bring it in the front
function selectionSort(arr){
    for(let i=1; i<arr.length; i++){
        let current = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}
console.log('11',selectionSort([9,44,6,24,53,68,3,45,8,86,5]));