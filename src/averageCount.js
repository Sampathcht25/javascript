function averagePair(arr, num){
    if(!arr.length) {
        return false;
    }
      // add whatever parameters you deem necessary - good luck!
    for(let i=0; i< arr.length; i++){
        for(let j=0; j<arr.length; j++){
        let avg = (arr[i]+arr[j]) / 2;
        if( avg == num) {
            return true;
        }
        }
    }
    return false;
    }