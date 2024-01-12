/*
   javascript has the primitive data types:
   null
   number
   boolean
   undefined
   string
   symbol
   bigint
   object
*/

/*let counter = 120;//number
console.log(typeof (counter));
counter = false;//boolean
console.log(typeof (counter));
counter = "foo";//string
console.log(typeof (counter));
counter = null;//null
console.log(typeof (counter));
*/

//this is an object, an object a variable that holds several other objects
/*let person = {
    first_Name: 'John',
    second_Name: 'Doe'
};*/
//and contact
let contact = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
    phone: '+1 3235352',
    address: {
        building: 5500,
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }//the address holds an object that has building, street, city, state and building.
};// in order to access the object's property, we use the "." notation and the array-like notation "[]"
//for example console.log(contact.first_name); or console.log(contact.second_name);
//if an undentiifable object is called, the console will return undefined.
//the use of the array-like notation, console.log(contact['phone']);
        //console.log(contact['email']);
console.log(contact.address);
let amount1 = 5.e-7;
console.log(amount1);

let error = 'An error occured';
let has_error = Boolean(error);

console.log(has_error);
//stack and heap
/*static data is the data whose size is fixed at compile time. static time includes,
-: Primitive types
-: References values that refer to objects
    +: since primitive memory values are constant, the javascript engine allocates a fixed 
amount of memory space to the static data and stores it on the stack.

-: heap:
    +: JavaScript stores objects and functions on the heap, because a fixed memory isn't allocated
    for these objects

    example of stack:
        +: let name = 'John';
        +: let age = 32;

    example of heap:
        +: let person = {
            name: 'John',
            age: 32,
            country: USA
        };
 the object or function contains many primitive types meaning, diffirent types are being allocated to the 
parent variable.

*/

let person = {
    name: 'John',
    age: 23,
    country: 'USA',
};

console.log(person);
//Dynamic properties:
//A reference value# allows you to add, change and delete properties at any time. For example:

person.ssn = '123-45-6789'; // adds a new value, ssn;
person.name = 'John Doe';// changes the name value from "John" to "John doe"
delete person.age;// using the "delete" keyword, we can delete the age value.

console.log(person);

let age = 25;
let newAge = age;

newAge += 1;
console.log(age, newAge);

let athletes = new Array(3);
let scores = new Array(1, 2, 3, 4);
let signs = new Array('Red');

/*
we can create arrays using different ways, 
1.) let athletes = new Array(); using the "new" and "Array" keyword
    +:we can also omit the "new" keyword.
2.) let colour = ['red', 'green', 'blue']; this is the most frequent way to create an array
    +: we can also create an empty array, using the square brackets without specifying the
    element like this:
let colour = [];

-: we can access an element depending on the index in an array like this:
athletes[0];
athletes[1];
athletes[2];

-: we can also change the element using the index;
let mountain = ['Everest', 'fuji', 'Nanga Parbet'];
mountain[2] = 'K2';

console.log(mountain);
=: Everest, fuji, K2
*/

/*
array elements manipulation:
let seas = ['Black seas', 'Caribbean sea'. 'North sea', 'Baltic sea'];
*/

let sea = ['Black seas', 'Caribbean sea'. 'North sea', 'Baltic sea'];
//add an element to the end of the array
console.log(sea.push('Red sea'));
//and an element to the beginning of the array
console.log(sea.unshift('Rea sea'));

//removing an element from the end of the array
const last_element = sea.pop();
console.log(last_element);
//removing an element from the beginning of the array
const first_element = sea.shift();
console.log(first_element);
//finding an index of an element in the array
let index = seas.indexof('North sea');
console.log(index);
//check if a value is an array, returns true or false
console.log(Array.isArray(sea));
