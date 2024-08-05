console.log('My First Code');
// Variables

a=5; // without declaration
//console.log(a);

var a=5;
//console.log(a);
{
   var a=34;
 //   console.log(a);
}
//console.log(a);

// Constants
const n=67;

//console.log(n);
{
    const n=77;
  //  console.log(n);
}
// Let : allows to change value within the block
let b=56;

{
    let b=90;
   // console.log(b);
}

//console.log(b);

// Data Types : String, Numbers, Boolean, ARRAYS, Objects

// String

var str = '';
//console.log(typeof(str));

// Number
var num = 123;
//console.log(typeof(num));

// Boolean
var bool = false;
//console.log(typeof(bool));

// Arrays
var arr1=['Pine', 'Acacia', 'Teak', 10];
//console.log(arr1);
//console.log(arr1[1]);

// Addtional functions on the array

//console.log(arr1.length); // Length of the array
arr1.push('Rosewood'); // adding new value in the array
//console.log(arr1.length); // legth of the array after adding value
// console.log(arr1);
arr1.pop(); //Removes the last element of the array
//console.log(arr1);

// Defining Objects method 1
let person = {
   fname:'Maya',
   age:80,
   location: 'TVM'
}

//console.log(person);
//console.log(person.fname);
//console.log(person.age);
//console.log(person.location);


// Definng Objects method 2
let car = new Object();
car.name='Ignis';
car.make='Maruti';
car.manufactureDate='2023';
car.model="Zeta";

//console.log(car);

// Array of objects
