["", "", ""][({}, {}, {}, {})];

//. for-of
// const arr = [1,2,3,4,5,6,7]
// for (const ele of arr) {
//     console.log(ele);
// }
// const greet = "HelloWorld!"
// for (const ele of greet) {
//     console.log(ele);
// }

//. Maps, which holds the unique key-value pairs
const map = new Map();
map.set("IN", "India");
map.set("Aus", "Australia");
map.set("JPN", "Japan");
// console.log(map);   // map, gets the unique key-value pair

// for (const ele of map) {
//     console.log(ele);   // map, gets the key-value pair in array format
// }

//= [key, value] => here, the array gets destructured
// for (const [key,value] of map) {
//     // console.log(`the key value of map are ${key}`);
//     // console.log(`value of map are ${value}`);
//     console.log(`${key} : ${value}`);
// }

// ---------------------------------------

// const obj = {
//     'game1':"Badminton",
//     'game2':"Tennis"
// }
// for (const ele of obj) {
//     console.log(ele);   // obj is not iterable
// }

// ----------------------------------------

//> For-each
const lang = ["js", "css", "cpp", "rb", "py"];
// //? normal function, here namedFunction is not allowed.
// lang.forEach(function(ele){
//     console.log(ele+`----------`);
// })

// //> forEach with callback function
// lang.forEach((item)=>{
//     console.log(item);
// })

//> foreach by using function
// function printMe(item){
//     console.log(item);
// }
// lang.forEach(printMe)  // pass only the refrence of the function, not the

// lang.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const code = [
  {
    lang: "js",
    fileExt: ".js",
  },
  {
    lang: "css",
    fileExt: ".css",
  },
  {
    lang: "py",
    fileExt: "py",
  },
];

// code.forEach(ele => {
//     console.log(ele.lang);
// });

// ----------------------------------------

//! forEach doesnot return anything, gets undefined on return
// const arr = [1,2,3,4]
// const val = arr.forEach((ele)=>{return ele;})
// console.log(val); //undefined

//* filter, operation performed on Arrays
//> takes a callback function and applies on a condition.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let newVal = nums.filter((num) => num <= 7);
// console.log(newVal);

// let newVal = nums.filter((num) => {
//     return num <= 7 // need to add return keyword to get the result.
// });
// console.log(newVal);

//! filter using forEach
// const newNum = []
// nums.forEach((ele)=>{
//     if(ele<=7){
//         newNum.push(ele)
//     }
// })
// console.log(newNum);

// const books = [
//   { title: "a", genere: "a", publish: 101, edition: 201 },
//   { title: "b", genere: "b", publish: 102, edition: 202 },
//   { title: "c", genere: "a", publish: 103, edition: 203 },
//   { title: "d", genere: "a", publish: 104, edition: 204 },
//   { title: "e", genere: "e", publish: 105, edition: 205 },
// ];

// let userBooks = books.filter((bk) => bk.genere === "a");
// userBooks = books.filter((bk) => {
//   return bk.publish === 103;
// });
// console.log(userBooks);

// --------------------------------------------------------------------------------

//. using Map
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const newNum = num.map((ele) => ele + 10);   // prints directly
const newNum = num.map((ele) => {return ele * 2}); // if scope is opened, return keyword needs to be added.

console.log(newNum);

