function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    let lookup = {};
    let j = 0;
    for(let i=0; i < arguments.length; i++){
        if(lookup[arguments[i]]){
            lookup[arguments[i]]++;
        } else {
            lookup[arguments[i]] = 1;
        }
    }
  
    if(arguments.length == Object.keys(lookup).length) {
      return false;
    }
    
    return true;
  }

  //Type -2
  function areThereDuplicates2() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }