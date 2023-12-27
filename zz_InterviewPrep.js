//! ControlFlow
// 	- if
// 	- if-else
// 	- nested If (if - else if)
// 	- switch
// 		- What is the purpose of break
// 			= it controls the flow of the execution of code. If we remove or comment the break then it would execute all the lines of code written after it.
// 	- truthy
// 	- falsy

//. How to check if the dataType is Array
// Way_1, by using (.length) property
let userEmail = [];
if (userEmail.length === 0) {
  console.log("Array is Empty");
}

//. How to check if object is Empty
const empObj = {};
// Object.keys(empObj) //= returns an Array, such as the array can be tested using .length property.
if (Object.keys(empObj).length === 0) {
  console.log(`empObj is Empty..`);
}

//. Browser Console
false == 0; // true
false == ""; //  true
0 == ""; // true

//. Nullish Coalescing Operator(??) null undefined
let val1;
// val1 = 5 ?? 10; // 5, always takes the 1st value.
//= generally in large operations, from database we wont be directly getting the response, generally we get 2 values its either null and response or undefined and response.
//= So, if we get respone 1st then it might disturb the whole code so to avoid those type of issues we use the operator.
// val1 = null ?? 10;  //10;   // it does the safety check, generally we put the complex function after null such that it performs the complex operations based on it.
// val1 = undefined ?? 15 //15
// val1 = null ?? 10 ?? 20;    // 10;

//. ternary operator
//= condition ? true : false, a kind of if-else condition.  
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("greater than 80");;