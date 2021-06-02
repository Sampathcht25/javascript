/*
    Creating Pointers or values that correspond to an index or position and move towards the beginning,
    end or middle based ona certian condition.
    Note: Very efficient for solving problems with minimal space complexity as well.
*/
/*
    Write a function called sumZero which accepts a sorted array of integers.
    The function should find the first pair where the sum is 0.
    Return an array that includes both values that sum to zero undefined if a pair does not exist.
    Input/Output:
    sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
    sumZero([-2,0,1,3]); // undefined
    sumZero([1,2,3]); // undefined
*/

// Type1 - O(N^2) Complexity

function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] == 0){
                return [arr[i], arr[j]]
            }
        }
    }
};

// Type2 O(N) Complexity

function sumZero2(arr){
// 1, 4
// 1, -3
// 2, -3
// 2, 3
// 3, -3

    let left = 0;
    let right = arr.length-1;
    
    while(left < right){

        if(arr[right]+arr[left] == 0){
            return [arr[left], arr[right]];
        } else if ((arr[left] + arr[right]) > 0) {
            right--;
        } else {
            left++;
        }

    }
    return undefined;
}



console.log(sumZero2([1,2,3,-3, 4]), "sumZero")



