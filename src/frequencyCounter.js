/* Type one */
function same(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    };
    let arr = [];
    let sameArr = null;
    for( let i=0; i<arr1.length; i++){
        for(j=0; j<arr2.length; j++){
            if(arr1[i] **2 == arr2[j]){
                sameArr= true;
                arr.push(i, j)
            }
        }
    }

    return arr + sameArr;
};

/* Type two Naive solution 
    Time complexity O(N^2)
*/
function same2(){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i=0; i<arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i]**2);
        if(correctIndex === -1){
            return falase;
        }

        arr2.splice(correctIndex, 1);
    }

    return true;
}

/*
    Refactored Program - O(N) More efficient way 
*/
function same3(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        console.log(val, "val", frequencyCounter1[val])
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    };

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    };

    for( let key in frequencyCounter1){
        console.log(key,'key')
        if(!(key**2 in frequencyCounter2)){
            return false;
        };
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false;
        }
    }

    return true;
}


console.log(same3([3, 4, 1], [1, 9, 4]))