/*
1. Slice() method returns the selected elements in an array, as a newobject
2. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
Note: the original array will not be changed.
*/

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 3);

console.log(fruits, citrus)

/* It returns 1index with 'Orange', 2index with 'Lemon'*/