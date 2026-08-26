// const obj = {
//     name: "Kshitij Jaiswal",
//     age:23
// }

// delete obj.age;
//-----------------------------------------------------
let n = 10
let bankAccount1 = {
    name: "P1",
    balance: 50000,
    mobileNumber:1234567890
}

let bankAccount2 = bankAccount1
bankAccount2.name = "P2"
bankAccount2.balance = 10000
bankAccount2.mobileNumber = 9876544321

console.log(bankAccount1)
console.log(bankAccount2)
// this is a wrong way of copying the object

//-------------------------------------------

//--------------SPREAD OPERATOR--------------------
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [11, 12, 13, 14, 15]

console.log(...arr1) //1 2 3 4 5
const val = [...arr1, "Kshitij", ...arr2]
console.log(val) // [ 1, 2, 3, 4, 5, 'Kshitij', 11, 12, 13, 14, 15 ]



let obj1 = {
    a: 1,
    b: 2,
    c:3
}
let obj2 = {
    x: 4,
    y: 5,
    z:6

}
let val2 = { obj1, obj2 }
console.log(val2) //{ obj1: { a: 1, b: 2, c: 3 }, obj2: { x: 4, y: 5, z: 6 } }

let val3 = {
    ...obj1,...obj2
}
console.log(val3)//{ a: 1, b: 2, c: 3, x: 4, y: 5, z: 6 }
//  console.log(...obj1) //console.log not allowed with object spreading


let str = "ABCDE"
console.log(...str)//A B C D E





let bankAccount3 = {
    name: "P1",
    balance: 50000,
    mobileNumber: 1234567890
}

let bankAccount4 = { ...bankAccount3 }
bankAccount4.name = "P2"
bankAccount4.balance = 10000
bankAccount4.mobileNumber = 9876544321

console.log(bankAccount3)
console.log(bankAccount4)


let person1 = {
    name: "kj",
    age: 23,
    address: {
        city: "Delhi",
        country:"India"
    },
    cars:["BMW","ALTO"]
}

let person2 = { ...person1 }
person2.name = "AJ"
person2.address.city = "Haryana"
person2.cars.push("Thar")

console.log(person1)
console.log(person2)

let person3 = {
    name: "kj",
    age: 23,
    address: {
        city: "Delhi",
        country: "India"
    },
    cars: ["BMW", "ALTO"]
}

let person4 = structuredClone(person3) 
person4.name = "AJ"
person4.address.city = "Haryana"
person4.cars.push("Thar")

console.log(person3)
console.log(person4)




let arr = [1, 2, 3, 4, 5]
let obj = {
    name: "S",
    age:22
}

let jsonArr = JSON.stringify(arr)
let originalData = JSON.parse(jsonArr)

let jsonObj = JSON.stringify(obj)
let originalObj = JSON.parse(jsonObj)

console.log(arr)
console.log(jsonArr)
console.log(originalData)

console.log(obj)
console.log(jsonObj)
console.log(originalObj.name)



