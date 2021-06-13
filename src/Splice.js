/*
    1. The splice()  method adds/remove items an array, and returns the removed itemss.
    2. Array.splice(index, howMany, item1, item2, .....itemX);
    3. Index:
        ==> Required, An integer that specifies at what position to add/remove items,
        ==> Use Nagative values to specify the position from theend of the array.
    4. howMany:
        ==> Optional, the number of items to be removed. If set to 0, no items will beremoved.
        ==> 
    5. Item1, Item2:
        ==> Optional, The new itemsto be addedto the array 
*/


const fruits = ['Banana', 'Lemon','Orange', 'Apple'];
const newSet = fruits.splice(2, 2, 'Grape', 'Kiwi','PineApple');

/* At position2, remove 2 items */
const remove = fruits.splice(2, 2);

console.log(fruits, " fruits");
console.log(newSet, "slice fruits")