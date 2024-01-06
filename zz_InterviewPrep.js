//! ControlFlow
// 	- if
// 	- if-else
// 	- nested If (if - else if)
// 	- switch
// 		- What is the purpose of break
// 			= it controls the flow of the execution of code. If we remove or comment the break then it would execute all the lines of code written after it.
// 	- truthy => "0", 'false', ' ', [], {}, function(){}
// 	- falsy => false, 0, -0, BigInt(0n), "", null, undefined, NaN

//. How to check if the dataType is Array
// Way_1, by using (.length) property
// let userEmail = [];
// if (userEmail.length === 0) {
//   console.log("Array is Empty");
// }

//. How to check if object is Empty
const empObj = {};
// Object.keys(empObj) //= returns an Array, such as the array can be tested using .length property.
// if (Object.keys(empObj).length === 0) {
//   console.log(`empObj is Empty..`);
// }

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
// const iceTeaPrice = 100;
// iceTeaPrice >= 80
//   ? console.log("less than 80")
//   : console.log("greater than 80");

//! Loops
//. for
//. break & continue
//= break, breaks the loop and stops the execution after it and directly goes out of loop.
// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`Detected the value ${i}`);
//     break; // break, breaks the loop and stops the execution after it and directly goes out of loop.
//   }
//   console.log(`value of i is ${i}`);
// }

//= continue, skips the flow for one time and continues with the next execution
// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`Detected the value ${i}`);
//     continue; // skips the flow for one time and continues with the next execution
//   }
//   console.log(`value of i is ${i}`);
// }

//. for-of loop, generally used in Array.

//. for-in loop used in Objects

//. forEach loop, generally used in Arrayofobjects [{},{}]
//= forEach, takes a callBack function and other optional properties too such as index and array
//= it does not return anything.
const arr = [1,2,3,4] 
const val = arr.forEach((ele)=>{return ele;})
console.log(val); //undefined

//. reduce
//= takes the callback function and an initialator
//= reduce has 2args. (accumulator and currentVal), where it takes the result of operation as the accumulator.
//= can be used in both Array & ArrayOfObjects.

//! DOM
//. By Id
document.getElementById('eleId')    // returns the eltag of elements with the entered id.
document.getElementById('eleId').id //  gets the value of the id
document.getElementById('eleId').class // undefined
document.getElementById('eleId').className  // gets the class with the specific eleId.
document.getElementById('eleId').getAttribute   // gets the function
document.getElementById('eleId').getAttribute('id') // takes up the attribute and fetches the associated value.
document.getElementById('eleId').setAttribute('class', 'test')  // here the className value gets always overRidden.

title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.style.borderRadius = '15px'

//- how to add the content
// title.textContent 
//> displays the whole content including the hidden which is being hidden by some css styling or by
//> doesn't supports HTML tag
// title.innerText , 
//> displays only the content being visible in the document page
//> doesn't supports HTML tag
// title.innerHTML , 
//> here it displays full element withe the extra tags being used.
//> supports HTML tag

//. ClassName
document.getElementsByClassName('heading')  // returns the HTML element tag with the specific class

//. querySelector
document.querySelector('h1')  // returns 1st h1 element
document.querySelector('#title')  // returns 1st HTML ele which matches the specific id
document.querySelector('.heading')  // returns 1st HTML ele which matches the specific class
document.querySelector('input[type="password"]')  // returns the HTMl ele with the specific selectors

//-we can select the elements too
const myul = document.querySelector('ul')  // gets the complete ul tag element
const myli = myul.querySelector('li')   // As querySelector selects the 1st ele, it fetches the li element from the li list
myli.style.backgroundColor = 'green'
myli.style.padding = '15px'
myli.innerText = 'qwerty' //changes the content to five.

//- querySelectorAll
const tempLiList = document.querySelectorAll('li') // gets the nodeList of all the elements with the list of extra properties. Dont confuse it with Array, Array have much more properties such as map,push pop etc...
tempLiList.style.color = 'red'  // cannot set properties of undefined.
tempLiList[0].style.color = 'red'  // this would change the color of the element. Please check the NodeList Properties before applying.

tempLiList.forEach((ele)=>{
    return ele.style.color = 'pink'
})

//! how to convert HTMl collection or NodeList to Array
const convertToArray = Array.from(tempLiList) // converts an iterable object to an array.
// now we can perform Array method operations.
convertToArray.forEach((ele)=>{
    return li.style.color = 'orange'
})



