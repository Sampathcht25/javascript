/*
    ****----Hosting----****
    --> Hoisting is javascript mechanism Where variable and function declarions are move to their top of their scope 
    before their execution.
    --> Hoisting is javscript default behavior declarations part move to top,
    --> So "var" variables are hoisted to the top of their scope and initialized with value of 'undefined'.


*/
//This means
console.log(greeter);
var greeter = "Hello";

// It is interpreted as this

var greeter;
console.log(greeter); // greeter is Undefined

greeter = "Hello";

var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"


// =============Hoisting of let==============
//Just like  var, let declarations are hoisted to the top. 
//Unlike var which is initialized as undefined, the let keyword is not initialized. 
//So if you try to use a let variable before declaration, you'll get a Reference Error.

/*
==================Const=========================
Variables declared with the const maintain constant values. 
const declarations share some similarities with let declarations.

const declarations are block scoped
Like let declarations, const declarations can only be accessed within the block they were declared.

const cannot be updated or re-declared
This means that the value of a variable declared with const remains the same within its scope. 
It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:
*/

const greet1 = "Hello World..!!";
greet1 = "Say Hello";// error: Assignement to constant variable

console.log(greet1, "greet1");
const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

/*
This behavior is somehow different when it comes to objects declared with const. 
While a const object cannot be updated, the properties of this objects can be updated. 
Therefore, if we declare a const object as this:
*/

const movie = {
    title: "Intersteller",
    director: "Christopher Nolan",
    releaseDate: 2014,
    actor: 'Mathew',
    budget: '$165M',
    collection: '$701M'
}

//while we cannot do this:

    movie = {
        title: "Tenet",
        director: "Christopher nolan",
        releaseDate:2020,
        actor: "John David Washington",
        budget: '$200m',
        collection: '$360m'
    } // error:  Assignment to constant variable.

// We can do this:

movie.title = "Tenet"; // It will return without error
movie.actor = "John David Washington";

/*
    ==============Hoisting of const============
    Just like let, const declarations are hoisted to the top but are not initialized.
    =? Var declarations are globally scoped or function scoped while let and const are blocked-scoped,
    =? Var can be updated and re-declared within it scope;
    =? Let variable can be updated but not re-clared within scope;
    =? Const can be niether updated nor re-declared;
    =? They all are hoisted to the top of their scope. 
    =? But, var are initialized with undefined,
    =? Let and Const variable are not initialized.
    =? Var and let can be declared with out initialized;
    =? But, Const must be initialized during declaration;  
*/

