let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((accum, curr) => {
    accum = accum + curr
    return accum
})
console.log(sum)

let arr1 = [2, 3, 4, 5];
let prod = arr1.reduce((accum, curr) => {
    accum = accum * curr;
    return accum
})
console.log(prod)

let arr2 = [10, 20, 30, 40, 50, 60];
let count = arr2.reduce((accum, curr) => {
    accum = accum + 1
    return accum
}, 0)
console.log(count)

let arr3 = [12, 45, 7, 89, 34, 23];
let max = arr3.reduce((accum, curr) => {
    if (curr > accum) {
        accum=curr
    }
    return accum
})
console.log(max)

let arr4 = [12, 45, 7, 89, 34, 23];
let min = arr4.reduce((accum, curr) => {
    if (accum > curr) {
        accum=curr
    }
    return accum
})
console.log(min)

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
let sumOfEven = arr5.reduce((accum, curr) => {
    if (curr % 2 == 0) {
          accum+=curr
    }
    return accum
}, 0)
console.log(sumOfEven)

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];
let sumOfOdd = arr6.reduce((accum,curr) => {
    if (curr % 2 != 0) {
                  accum+=curr
    }
    return accum
}, 0)
console.log(sumOfOdd)

let arr7 = [10, 15, 20, 25, 30, 35, 40];
let countEven = arr7.reduce((accum,curr) => {
    if (curr % 2 == 0) {
        accum++;
    }
    return accum;
}, 0)
console.log(countEven)

let arr8 = [10, 15, 20, 25, 30, 35, 40];
let countOddNo = arr8.reduce((accum,curr) => {
    if (curr % 2 != 0) {
        accum++;
    }
    return accum
}, 0)
console.log(countOddNo)

let arr9 = [10, 20, 30, 40, 50];
let avg = arr9.reduce((accum, curr) => {
    accum += curr
    return accum
},0)/arr9.length
console.log(avg)

let arr10 = [-5, 10, -2, 8, 0, 15, -7];
let countNegative = arr10.reduce((accum,curr) => {
    if (curr < 0) {
         accum++
    }
    return accum
}, 0)
console.log(countNegative)

let arr11 = [-5, 10, -2, 8, 0, 15, -7];
let countPositive = arr11.reduce((accum, curr) => {
    if (curr > 0) {
        accum++;
    }
    return accum
},0)
console.log(countPositive)

let arr12 = [0, 1, 0, 2, 3, 0, 4, 0];
let countZeroes = arr12.reduce((accum, curr) => {
    if (curr == 0) {
        accum++;
    }
    return accum
}, 0)
console.log(countZeroes)

let arr13 = ["cat", "elephant", "dog", "tiger"];
let longestStr = arr13.reduce((accum,curr) => {
    if (accum.length < curr.length) {
          accum=curr
    }
    return accum
})
console.log(longestStr)

let arr14 = ["apple", "kiwi", "banana", "fig"];
let shortestStr = arr14.reduce((accum,curr) => {
    if (accum.length > curr.length) {
        accum=curr
    }
    return accum
})
console.log(shortestStr)

let arr15 = ["apple", "banana", "cat", "elephant", "dog", "computer"];
let countLonger5 = arr15.reduce((accum, curr) => {
    if (curr.length > 5) {
        accum++
    }
    return accum
}, 0)
console.log(countLonger5)

let arr16 = ["Hello", "World", "JavaScript"];
let concatenateStrings = arr16.reduce((accum, curr) => {
    accum = accum + " " + curr;
    return accum
})
console.log(concatenateStrings)

let arr17 = [1, 2, 3, 4, 5];
let reverseArr = arr17.reduce((accum, curr) => {
    accum = [curr, ...accum]
    
    return accum
},[])
console.log(reverseArr)

let prices = [100, 250, 50, 300, 150];
let totalPrice = prices.reduce((accum,curr) => {
    accum += curr;
    return accum
})
console.log(totalPrice)

let costs = [100, 200, 300];
let totalcost = costs.reduce((accum,curr) => {
    accum += curr * (0.18) + curr
    return accum
},0)
console.log(totalcost)

let arr18 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let occObj = arr18.reduce((accum, val) => {
    if (accum[val] == undefined) {
             accum[val]=1
    }
    else {
        accum[val]++;
    }
    return accum
}, {})
console.log(occObj)

let word = "javascript".split('')
let freqObj = word.reduce((accum, val) => {
    if (accum[val] == undefined) {
                  accum[val]=1
    }
    else {
        accum[val]++
    }
    return accum
}, {})
console.log(freqObj)

let arr19 = [1, 2, 3, 4, 5, 6, 7, 8]
let segrat = arr19.reduce((accum, val) => {
  
    if (val % 2 == 0) {
        (accum.even).push(val)
    }
    else {
        (accum.odd).push(val)
    }
    return accum;
}, {even:[],odd:[]})
console.log(segrat)

let arr20 = [1, 2, 2, 3, 4, 4, 5, 5, 5];

let uniqueArr = arr20.reduce((accum, curr) => {
    if (!(accum.includes(curr))) {
          accum.push(curr)
    }
    return accum
}, [])
console.log(uniqueArr)

let arr21 = [[1, 2], [3, 4], [5, 6]];
let flattArr = arr21.reduce((accum, curr) => {
    accum.push(...curr)
    return accum
},[])
console.log(flattArr)

let employees = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 60000 },
    { name: "C", salary: 70000 }
];

let totalSalary = employees.reduce((accum, val) => {
    accum += val.salary
    return accum
}, 0)
console.log(totalSalary)

let employees2 = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 80000 },
    { name: "C", salary: 60000 }
];

let highestSalary = employees2.reduce((accum,curr) => {
    if (accum.salary < curr.salary) {
        accum=curr
    }
    return accum
})
console.log(highestSalary)

let employees3 = [
    { name: "A", dept: "IT" },
    { name: "B", dept: "HR" },
    { name: "C", dept: "IT" },
    { name: "D", dept: "Sales" },
    { name: "E", dept: "HR" }
];

let deptFreq = employees3.reduce((accum, curr) => {
    if (accum[curr.dept] == undefined) {
        accum[curr.dept]=1
    }
    else {
        accum[curr.dept]++
    }
    return accum
}, {})
console.log(deptFreq)

let employees4 = [
    { name: "A", dept: "IT" },
    { name: "B", dept: "HR" },
    { name: "C", dept: "IT" },
    { name: "D", dept: "Sales" }
];

let deptClass = employees4.reduce((accum,curr) => {
    if (accum[curr.dept] == undefined) {
          accum[curr.dept]=[{name:curr.name}]
    }
    else {
        (accum[curr.dept]).push({name:curr.name})
    }
    return accum
}, {})
console.log(deptClass)

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

let totalCartPrice = cart.reduce((accum, curr) => {
    accum += curr.price * curr.quantity
    return accum
}, 0)
console.log(totalCartPrice)

let products = [
    { name: "Phone", price: 30000 },
    { name: "Laptop", price: 70000 },
    { name: "Tablet", price: 40000 }
];
let mostExpensive = products.reduce((accum, curr) => {
    if (accum.price < curr.price) {
        accum=curr
    }
    return accum
})
console.log(mostExpensive)

let users = [
    { id: 1, name: "Shubham" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" }
];

let convertUsers = users.reduce((accum, curr) => {
    let key = Number(curr.id)
    accum[key]=curr.name
    return accum
}, {})
console.log(convertUsers)

let electronics = [
    { name: "iPhone", category: "mobile" },
    { name: "Samsung", category: "mobile" },
    { name: "MacBook", category: "laptop" },
    { name: "Dell", category: "laptop" }
];

let electronicClass = electronics.reduce((accum, curr) => {
    if (accum[curr.category] == undefined) {
         accum[curr.category]=[curr.name]
    }
    else {
        accum[curr.category].push(curr.name)
    }
    return accum
}, {})
console.log(electronicClass)                     

let students = [
{ name: "A", marks: 80 },
{ name: "B", marks: 90 },
{ name: "C", marks: 70 },
{ name: "D", marks: 60 }
];

let avgMarks = students.reduce((accum, curr) => {
    accum += curr.marks
    return accum
}, 0)/students.length
console.log(avgMarks)

let arr22 = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3];
let maxFreq = arr22.reduce((accum, curr) => {
    if (accum[curr] == undefined) {
        accum[curr]=1
    }
    else {
        accum[curr]++
    }
    return accum
}, {})

let maxVal=Number.NEGATIVE_INFINITY
for (let key in maxFreq) {
    if (maxFreq[key] > maxVal) {
        maxVal=key
    }
}
console.log(maxVal)

let transactions = [
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 300 },
    { user: "C", amount: 150 },
    { user: "B", amount: 100 }
];

let spendingObj = transactions.reduce((accum, curr) => {
    if (accum[curr.user] == undefined) {
                         accum[curr.user]=curr.amount
    }
    else {
        accum[curr.user]+=curr.amount
    }
    return accum
}, {})
console.log(spendingObj)

let str = "aabbcddexx";
let strArr = str.split("")
let OneOccurence = strArr.reduce((accum, curr) => {
    if (accum[curr] == undefined) {
        accum[curr]=1
    }
    else {
        accum[curr]++
    }
    return accum
}, {})
for (let key in OneOccurence) {
    if (OneOccurence[key] == 1) {
        console.log(key)
        break;
    }
}

let cart2= [
    { name: "Laptop", category: "electronics", price: 50000, quantity: 1 },
    { name: "Mouse", category: "electronics", price: 1000, quantity: 2 },
    { name: "Shirt", category: "clothing", price: 1500, quantity: 3 },
    { name: "Shoes", category: "clothing", price: 3000, quantity: 1 }
];

let summaryObj = cart2.reduce((accum, curr) => {
    accum.totalItems += curr.quantity
    accum.totalAmount += curr.quantity * curr.price
    let key = curr.category
    if (accum.categoryTotal[key] == undefined) {
        accum.categoryTotal[key]=curr.price*curr.quantity
    }
    else {
        accum.categoryTotal[key]+=curr.price*curr.quantity
    }

    return accum
}, { totalItems: 0, totalAmount: 0, categoryTotal: {} })

console.log(summaryObj)