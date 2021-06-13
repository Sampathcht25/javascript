/*
    1.This pattern invloves dividing a data set into smaller chunks and then repeating a process with a subsetof data.
    2.This pattern can tremendously decrease timecomplexity.
    3. Binary Search - divide and conqueralgarithm
    4. Time complexity - log(N) - Binary Search!
    Example:-
    search([1,2,3,4,5,6], 4); // 3
    search([1,2,3,4,5,6], 3); // 2
*/ 


//Navie solution

function search(arr, val) {
    for(let i=0; i<arr.length;i++){
        if(arr[i] == val){
            return i;
        }
    }

    return -1;
};


// Divide and conquer algorithm

function searchBinary(arr, val){
let min = 0;
let max = arr.length - 1;

while(min <= max) {
    let middle = Math.floor((min+max)/2);

    if(arr[middle] < val) {
        min = middle + 1
    } else if(arr[middle] > val) {
        max = middle-1;
    } else {
        return middle;
    }
}

}

console.log(searchBinary([1,2,3,4,5,6,7,8], 5), "Binary search")

