/* Recursion program */

function coutDownRegular(num){
    for(i = num; i>=0; i--){
        console.log(i)
    }
}

// Recursion
function countDown(num) {
    if(num <= 0){
        console.log(num, "All done!!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}