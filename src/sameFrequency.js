function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    let lookup = {};
    
    for(let i=0; i < num1.toString().length; i++){
        if(lookup[num1.toString().charAt(i)]){
            lookup[num1.toString().charAt(i)]++;
        } else {
            lookup[num1.toString().charAt(i)] = 1;
        }
    }
    
    for(let j=0 ; j < num2.toString().length; j++){
        if(!lookup[num2.toString().charAt(j)]) {
            return false;
        } else {
           lookup[num2.toString().charAt(j)]-=1;
        }
    }
    return true;
  }
  

  //Type --2
  function sameFrequency2(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }