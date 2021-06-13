/*
1. Write a function calledmaxSubarraySum which accepts an array of integers
    and a number called n. The function should calculate the  maximum sum of n consecutive
     elements in the array.
     Example:-
     maxSubarraySum([1,2,3,5,2,8,1,5], 2); //10
     maxSubarraySum([1,2,5,2,8,1,5], 4); //17
     maxSubarraySum([4,2,1,6], 1); //6
     maxSubarraySum([], 4); // null
*/

function maxSubarraySum(arr, maxNum){
    let target = 0;

    for(let i=0; i<arr.length; i++){
        let newSum = 0;
        //  console.log(newSum, "newSum", arr[i]);

        for(let j=0; j<maxNum; j++){
            //newSum = newSum + arr[i+j];
            // newSum = 0 + arr[0+0]// 0+1;
            // newSum = 1 + arr[0+1] // 1+2
            // newSum = 3 + arr[0+2] // 3+5
            // newSum = 8 + arr[0+3] // 8+2
            // 
            newSum+=arr[i+j];
        };

        if(newSum>target){
            target = newSum
        };
    }
    return target;
}


//Type_2

function maxSubarraySum2(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num){
        return null;
    }

    for(let i=0; i<num; i++){
        maxSum+=arr[i]
    }
    tempSum = maxSum;

    for(let i=num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 4), "maxSubArray")