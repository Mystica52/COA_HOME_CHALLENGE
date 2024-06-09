function continous_subArr(arr,target){
     //initialize the start pointer and current 
    let index_start =0;
     let current_sum =0;
    // This loop iterates through the array with the end pointer, representing the end of the current subarray.
     for(let i=0; i<arr.length; i++){
         current_sum+= arr[i]
        // If currentSum exceeds the target, reduce the sum by moving the start pointer to the right.
         while (current_sum>target && index_start<=i){
         current_sum -=arr[index_start];
         index_start++;
         }
     if (current_sum ==target){
         
     //   return arr.slice(start, i + 1)
     return true
     }
     }
     return false;
 }
 let arr=[4, 2, 7, 1, 9, 5];
 let target =17;
 console.log(continous_subArr(arr,target))