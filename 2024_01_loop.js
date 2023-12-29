//= basic working of loop,
//= it should initialize, condition, increment or decrement or any condition as such the loop should exits.

//. for Loop
// let arr=[1,2,3,4]
// for(let i=0; i<arr.length;i++){
//     const ele = arr[i]
//     console.log(ele);
// }

// --------------------------------------------

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Outer loop of value ${i}, inner value is ${j}`);
//         console.log(`${i}*${j} = ${i*j}`);
//     }
// }

// ---------------------------------------------

// let myArr = ["a","c", "f", "d"]
// console.log(`The array Length is ${myArr.length}`);
// for (let i = 0; i < myArr.length; i++) {
//     const ele = myArr[i];
//     console.log(ele);
// }

// break & continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected the value ${i}`);
    break; // break, breaks the loop and stops the execution after it and directly goes out of loop.
  }
  console.log(`value of i is ${i}`);
}
// ---------------------------------------------------
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected the value ${i}`);
    continue; // skips the flow for one time and continues with the next execution
  }
  console.log(`value of i is ${i}`);
}

//. while loop
let i = 0;
while (i <= 10) {
  console.log(`value of index is ${i}`);
  i = i + 2;
}

let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr = 0; //initialization
while (arr < myArr.length) {
  // condition
  console.log(`value is ${myArr[arr]}`);
  arr++; // condition to exit the loop else it would print the 1st value infinite times.
}
//. do-while loop
let score = 1; // initialization
do {
  console.log(`Score is ${score}`);
  score++; // condition to exit the loop
} while (score <= 10); // condition

// ---------------------------------------------------------
let winScore = 11; // initialization
do {
  console.log(`winScore is ${winScore}`);   //prints11, as it does the job 1st and checks the condition later.
  score++; // condition to exit the loop
} while (winScore <= 10); // condition
