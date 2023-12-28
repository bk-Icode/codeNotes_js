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
    if(i ==5){
        console.log(`Detected the value ${i}`);
    break;  // break, breaks the loop and stops the execution after it and directly goes out of loop.
    }
    console.log(`value of i is ${i}`);
}
// ---------------------------------------------------
for (let i = 1; i <= 20; i++) {
    if(i ==5){
        console.log(`Detected the value ${i}`);
    continue;   // skips the flow for one time and continues with the next execution
    }
    console.log(`value of i is ${i}`);
}


