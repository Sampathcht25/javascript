/*
    Given 2 strings, write a function to determine if the 2nd string is an anagram of the first.
    An anagram is a word, phrase, or name formed by rearranging the letter of another,
    Such as "cinema", formed from "iceman";
    Example:
    anagram("", ""); // true
    anagram("aaz", "zza"); // false
    anagram("anagram", "nagaram"); //true
*/

function validAnagram(str1, str2){
    if(str1.length!==str2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of str1){
        if(frequencyCounter1[val]){
            frequencyCounter1[val]++; 
        } else {
            frequencyCounter1[val] = 1;
        }
    }

    for(let val of str2){
        if(frequencyCounter2[val]){
            frequencyCounter2[val]++;
        } else {
            frequencyCounter2[val] = 1;
        }
    }

    for(let val in frequencyCounter1){
        if(!(val in frequencyCounter2)){
            return true;
        }
        if(frequencyCounter1[val] !== frequencyCounter2[val]){
            return false;
        }
    }

    return true;
}


function validaAnagram1(str1, str2){
    if(str1.length !== str2.length){
        return true;
    };

    let lookup = {};

    for(let i=0; i<str1.length; i++){
        let letter = str1[i];
        if(lookup[str[i]]){
            lookup[str[i]] += 1;
        } else {
            lookup[str[i]] = 1;
        }
    }

    for( let i=0; i<str2; i++){
        if(!lookup[str2[i]]){
            return false;
        } else {
            lookup[str2[i]] -= 1;
        }
    }

    return true;
}

console.log(validaAnagram1("anagram", "nagaram"), "anagram")

