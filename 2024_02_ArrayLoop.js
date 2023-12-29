["","",""]
[{}, {}, {}, {}]

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
const map = new Map()
map.set('IN', "India")
map.set('Aus', "Australia")
map.set('JPN', "Japan")
console.log(map);   // map, gets the unique key-value pair

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

const obj = {
    'game1':"Badminton",
    'game2':"Tennis"
}
for (const ele of obj) {
    console.log(ele);   // obj is not iterable
}

