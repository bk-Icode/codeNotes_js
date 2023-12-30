const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

// for (const key in myObj) {
//     console.log(key);    //gets the keys of an obj
// }

// for (const key in myObj) {
//     console.log(myObj[key]);    // gets the values of an obj
// }

// for (const key in myObj) {
//     console.log(`${key} : ${myObj[key]}`);
// }

// ------------------------------------------------------

//. for-in in Array
const lang = ['java', 'javascript', 'c++', 'py']
for (const key in lang) {
    console.log(key);   // gets the keys of an array, which is also the index starting from 0.
}

//. for-in in map
for (const key in map) {

}