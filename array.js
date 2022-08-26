// Array //
// An array is a special variable which can hold more than one value//
const car = ["Saab", "volvo", "BMW"]
//why use array?//
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
//However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

//The solution is an array!

//An array can hold many values under a single name, and you can access the values by referring to an index number.

//Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

// Syntax:

const array_name = ["item1", "item2",];      
// It is a common practice to declare arrays with the const keyword.

// Learn more about const with arrays in the chapter: JS Array Const.

//Spaces and line breaks are not important. A declaration can span multiple lines:

// Example
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];

var a = "waleed"
console.log(a)
 
// you can also create an array and then provide the elements
//Example
const cars2 = [];
cars2[0] = "saab";
cars2[1] = "volvo";
cars2[2] = "BMW";
console.log(cars2)

//Accessing Array Elements
//You access an array element by referring to the index number:

const cars1 = ["Saab", "Volvo", "BMW"];
let Car = cars1[0];
console.log(Car)

//Changing an Array Element
//This statement changes the value of the first element in cars:


//Example
const Cars = ["Saab", "Volvo", "BMW"];
Cars[0] = "Opel";
console.log(Cars)

//Arrays are Objects
//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
//But, JavaScript arrays are best described as arrays.
//Arrays use numbers to access its "elements". In this example, person[0] returns John:
//Array:
const person = ["John", "Doe", 46];
console.log(person[0])

//Objects use names to access its "members". In this example, person.firstName returns John:
//Object:
const Person = {firstName:"John", lastName:"Doe", age:46};
console.log(Person.firstName)

//The length Property
//The length property of an array returns the length of an array (the number of array elements).
//Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length)
// accessing last array element
let fruit = fruits[fruits.length - 1]
console.log(fruit)

//looping array element
for (let i=0; i<fruits.length; i++){
    text = fruits[i]
}
console.log(text)

//Adding Array Elements
//The easiest way to add a new element to an array is using the push() method:

//Example
fruit = ["Banana", "Orange", "Apple"];
fruit.push("Lemon");
console.log(fruit)

//Associative Arrays
//Many programming languages support arrays with named indexes.
//Arrays with named indexes are called associative arrays (or hashes).
//JavaScript does not support arrays with named indexes.
//In JavaScript, arrays always use numbered indexes.  
//Example
var pErson = [];
pErson[0] = "John";
pErson[1] = "Doe";
pErson[2] = 46;
console.log(pErson.length);
console.log(pErson)

/*The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.

When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.*/