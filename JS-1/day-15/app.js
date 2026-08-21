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