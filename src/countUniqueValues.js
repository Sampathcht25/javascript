/*
    ========>COUNT UNIQUE VALUES<============
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
    There can be negative numbers in the array, but it will always be  sorted.
    Example:
    countUniqueValues([1,1,1,1,1,1,2]); // 2 (length)
    countUniqueValues([1,2,,3,4,4,4,7,7,12,12,13]); // 7
    countUniquesValues([]); // 0
    countUniqueValues([-2,-1,-1,0,1]); // 4
*/

function countUniquesValues1(arr){
    let result = [];
    //let i = 0;
    //result[0] = arr[0];
    for(let j=0; j<arr.length; j++){
        if((arr[j] !== arr[j+1]) && (arr[j]+arr[j+1] !== 0)){
            result.push(arr[j])
        }
    }
    // if((arr[i] + arr[i+1] !== 0) && (arr[i] !== arr[i+1])){
    //     result.push(arr[i])
    // }

    return result + " Hello"+ result.length;
};

function countUniquesValues2(arr){
    let i=0;
    let newArr = [];
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
            newArr.push(arr[j])
        }
    }

     return i+1 +" uni values "+ newArr;
};

function countUniquesValues3(arr){
    let lookup = {};

    arr.forEach(element => {
        if(lookup[element]){
            lookup[element]++;
        } else {
            lookup[element] = 1;
        }
    });

    return Object.keys(lookup).length;
}





console.log(countUniquesValues3([1,-1, 2,2,2,3,3,, 4,3,,10]), "unique")
