//[9,44,6,24,53,68,3,45,8,86,5] -> sort
//compare two elements to move the maximum at the for each complete iteration
function bubbleSort(arr){
    let swapped;
    do{
        swapped = false;
        for(let i=0;i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                // let temp = arr[i];
                // arr[i] = arr[i+1];
                // arr[i+1] = temp; 
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
    }while(swapped)
    return arr;
}
console.log('11',bubbleSort([9,44,6,24,53,68,3,45,8,86,5]));