/*Given an array of numbers, return a new array where every number is doubled*/
let arr1 = [1, 2, 3, 4, 5]
let ans1 = arr1.map((val, idx) => {
    return val*2
})
console.log(ans1)

// Return a new array containing the square of every number.

let arr2 = [2, 3, 4, 5]
let ans2 = arr2.map((val, idx) => {
    return val**2
})
console.log(ans2)

//Convert Names to Uppercase
let arr3 = ["rahul", "amit", "priya", "neha"]
let ans3 = arr3.map((val, idx) => {
    return val.toUpperCase()
})
console.log(ans3)

// Find String Lengths
let arr4 = ["cat", "elephant", "dog", "tiger"]
let ans4 = arr4.map((val, idx) => {
    return val.length
})
console.log(ans4)

// Add 10 to Every Number
let arr5 = [5, 12, 20, 7]
let ans5 = arr5.map((val, idx) => {
    return val+10
})
console.log(ans5)

// Convert Numbers to Strings
let arr6 = [10, 20, 30, 40]
let ans6 = arr6.map((val, idx) => {
    return val.toString()
})
console.log(ans6)

//Apply 20% Discount
let arr7 = [1000, 500, 2500, 800]
let ans7 = arr7.map((val, idx) => {
    return val-(0.2*val)
})
console.log(ans7)

//Convert Celsius to Fahrenheit
let arr8 = [0, 10, 20, 30]
let ans8 = arr8.map((val) => {
    return (val * (9/5))+32
})
console.log(ans8)

//Add "Mr." to Names
let arr9 = ["Shubham", "Rahul", "Amit"]
let ans9 = arr9.map((val) => {
    return "Mr. "+val
})
console.log(ans9)

//Create Objects from Numbers
let arr10 = [2, 4, 6, 8]
let ans10 = arr10.map((val) => {
    return {number:val,square:val**2}
})
console.log(ans10)

//Add Index to Every Number
let arr11 = [10, 20, 30, 40]
let ans11 = arr11.map((val,idx) => {
    return val+idx
})
console.log(ans11)

//Create Usernames
let arr12 = ["Shubham", "Rahul", "Amit"]
let ans12 = arr12.map((val, idx) => {
    return val.toLowerCase()+"_"+idx
})
console.log(ans12)

//Convert Students into Objects
let arr13 = ["Aman", "Riya", "Karan"]
let ans13 = arr13.map((val) => {
    return {name:val,score:0}
})
console.log(ans13)

//Calculate Final Prices
let arr14 = [100, 500, 1000]
let ans14 = arr14.map((val) => {
    return val+(0.18*val)
})
console.log(ans14)

// Extract Names from Objects
let arr15 = [
    { id: 1, name: "Rahul", age: 22 },
    { id: 2, name: "Amit", age: 25 },
    { id: 3, name: "Priya", age: 21 }
]
let ans15 = arr15.map((val) => {
    return val.name
})
console.log(ans15)

//Calculate Total Price
let arr16 = [
    { name: "Laptop", price: 50000, quantity: 2 },
    { name: "Mouse", price: 1000, quantity: 3 },
    { name: "Keyboard", price: 2000, quantity: 1 }
]
let ans16 = arr16.map((val) => {
    return val.price * val.quantity
})
console.log(ans16)

//Add Full Name
let arr17 = [
    { firstName: "Rahul", lastName: "Sharma" },
    { firstName: "Amit", lastName: "Verma" },
    { firstName: "Priya", lastName: "Singh" }
]
let ans17 = arr17.map((val) => {
    return val.firstName+" "+val.lastName
})
console.log(ans17)

//Transform Product Data
let arr18 = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Phone", price: 30000, category: "Electronics" },
    { name: "Shoes", price: 5000, category: "Fashion" }
]
let ans18 = arr18.map((val) => {
    return {name:val.name , price:val.price-(val.price * 0.1)}
})
console.log(ans18)

// Add Rank Using Index
let arr19 = ["Rahul", "Amit", "Priya", "Karan"]
let ans19 = arr19.map((val,idx) => {
    return {name: val,rank:idx+1}
})
console.log(ans19)