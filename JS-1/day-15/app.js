// let obj = {
//     name: "XYZ",
//     age:23,
//     isPresent: false,
//     address: {
//         city: "Delhi",
//         country: "India"
//     },
//     colors:["Green", "Red", "Blue"],
//     sayHi: () => {
//         console.log("HELLO");
//     }
// }
// console.log(obj);

// //dot notation
// console.log(obj.name);
// console.log(obj.isPresent)
// console.log(obj.address.city)
// console.log(obj.colors[0])
// console.log(obj.colors[1])
// console.log(obj.colors[2])
// obj.sayHi();

// //bracket notation
// console.log(obj['name'])
// console.log(obj['address']['city'])
// console.log(obj['colors'][2])
// obj["sayHi"]()

// //destructuring
// const { age, name, isPresent } = obj;
// console.log(name, age, isPresent)

let obj = {
    model: "Version1",
    color:"red",
}

console.log(obj)

obj.model = "Version2"
obj["color"] = "black"
obj.memory = "2GB"
console.log(obj)


//this will give keys
for (let item in obj) {
    console.log(item)
}

//this will give values
for (let item in obj) {
    console.log(obj[item])
}

//key-value pairs
for (let item in obj) {
    console.log(obj,obj[item])
}

//shortHand to create object
//(here variable name becomes key and value becomes value)
let score = 10
let match = 20
let win = true

let obj1 = { score, match, win }
console.log(obj1)


// how to create custom key name in shorthand
let obj2 = { score, matchScore: match, win }
console.log(obj2)
delete obj2.score;
console.log(obj2)