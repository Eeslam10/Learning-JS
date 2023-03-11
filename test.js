// let islam = 27;
// let year = 2023;

// log things to console
// console.log (islam, year);

// islam = 28;
// console.log (islam);

// const arsenal = 70;
// console.log(arsenal);

// var score = 75;
// console.log(score)


//strings
// console.log('hello, world');

// let email = 'islammuhd8@gmail.com';
// console.log(email);

//string concatenation
// let firstName = 'Islam';
// let lastName = 'Sani';

// let fullName = firstName + ' ' + lastName;

// console.log(fullName);

// getting characters
// console.log(fullName[0]);

//string length
// console.log(fullName.length);

//string methods
// console.log(fullName.toUpperCase()); 
// let result = fullName.toLowerCase();
// console.log(result, fullName);
 

// COMMON STRINGS METHODS

//let email = 'islammuhd8@gmail.com';
// let result = email.lastIndexOf('a');

//let result = email.slice(0,5);

//let result = email.substr(4,10);

//let result = email.replace('i', 's');


//console.log(result);


//DATA TYPE "NUMBERS"

//let radius = 10;
//const pi = 3.14;

//console.log(radius, pi); 

//MATH OPERATORS +, -, *, /, **, %

//console.log(10 / 2);
//let result = radius % 3;
//let result = pi * radius **2;

//Order of operation - B I D M A S

//let result = 5 * (10-3) **2; 

//console.log(result);

//let likes = 10;

//likes = likes + 1;
//likes++;
//likes +=10;
//likes -=5;
//likes *=10;
//likes /=2;
//likes--;

//console.log(likes);

//NAN = not a number

// console.log(4 * "islam");
// console.log(4 / "islam");

//let result = 'islam hit ' + likes + ' likes on twitter';
//console.log(result);

//TEMPLATE STRINGS: this allows us to inject variables into the string without having to exit out and using the plus (+) sign to cancatenate them.

// const title = 'Best footballers of all time';
// const author = 'Islam';
// const likes = 20;

//CONCATENATION WAY:
//let result = 'The blog called ' + title + ' by ' + author + ' has ' + 10 + ' likes ';
//console.log(result);


//TEMPLATE STRING WAY or template literal: ${}
//let result = `The blog called ${title} by ${author} has ${likes}`;
//console.log(result);

//creating html template

//let html = `
//    <h2>${title}</h2>
//    <p>by ${author}</p>
 //   <span>This blog has ${likes} likes</span>
//`;

//console.log(html);

//ARRAYS: this is used to store a collection of data like numbers or strings. ['', '', ''];
// let city = ['kdb', 'haaland', 'dias'];

// city[1] = 'alvarez';
// console.log(city[1]);

// let ages = [20, 30, 34, 67, 27];
// console.log(ages[3]);

// console.log(city.length);

//ARRAY METHODS:
// let result = city.join ('.');
// let result = city.indexOf('dias');
// let result = city.concat(['mahrez', 'rodri']);
// let result = city.push ('ake');
// result =city.pop();

// console.log(result);

//NULL & UNDEFINED

// let age;
// let age = null;

// console.log(age, age + 3, `the age is ${age}`);

//BOOLEANs &COMPARISONS. Boolean: this is use to eveluate conditions in our code. To check whether certain things are true or false.

console.log(true , false, 'true', 'false');

//Methods can return booleans
let email = 'islammuhd@gmail.com';
let names = ['islam', 'umar', 'abdullahi'];

// let result = email.includes(',');
// let result = names.includes('usman');
// console.log(result);

//Comparison Operators
// (==): meaning is age equal to 25.
// (!=): meaning is age not equal to 25. 

// let age = 25;

// console.log(age == 25)
// console.log(age == 30)
// console.log(age != 30)
// console.log(age != 25)
// console.log(age > 20)
// console.log(age < 20)
// console.log(age <= 25)
// console.log(age >= 25)

// let name = 'islam';

// console.log(name == 'islam'); 
// console.log(name == 'Islam'); 
// console.log(name > 'abu'); 
// console.log(name > 'Islam'); 