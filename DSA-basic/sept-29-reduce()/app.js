/*In JavaScript, the initial value in reduce() is the second argument passed to reduce().

Syntax
array.reduce((accumulator, currentValue) => {
    // logic
}, initialValue);
Example 1: Sum
let nums = [1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum); // 10

Here:

acc → accumulator
curr → current element
0 → initial value of acc

The process is:

acc = 0, curr = 1 → 1
acc = 1, curr = 2 → 3
acc = 3, curr = 3 → 6
acc = 6, curr = 4 → 10
Why is the initial value important?

Suppose:

let nums = [1, 2, 3, 4];

nums.reduce((acc, curr) => acc + curr);

Since no initial value is provided, JavaScript uses:

acc = 1        // first element
curr = 2       // second element

and starts reducing from there.

With:

nums.reduce((acc, curr) => acc + curr, 0);

it starts with:

acc = 0
curr = 1
Different types of initial values

You can use different initial values depending on what you're building:

// Number
[1, 2, 3].reduce((acc, x) => acc + x, 0);

// String
["A", "B", "C"].reduce((acc, x) => acc + x, "");

// Array
[1, 2, 3].reduce((acc, x) => {
    acc.push(x * 2);
    return acc;
}, []);

// Object
["apple", "banana"].reduce((acc, x) => {
    acc[x] = x.length;
    return acc;
}, {});

Simple rule:

The initial value determines the starting value and often the type/shape of the accumulator.*/ 


let arr = [1, 2, 3, 4, 5]

const ans1 = arr.reduce((accum, curr) => {
    return accum+curr
})

console.log(ans1)

const ans2 = arr.reduce((accum, curr) => {
    return accum*curr
})
console.log(ans2)

//use reduce() as map()
const ans3 = arr.reduce((accum, curr) => {
    return [...accum,curr**2]
}, [])
console.log(ans3)

let names = ['suraj', 'abhi', 'nipun', 'deepak']
let ans4 = names.reduce((accum, curr, index) => {
    return {
        ...accum,
        [`name${index}`]: curr
    }
}, {})
console.log(ans4)

// Sum of all elements
let arr2 = [10, 20, 30, 40, 50]
const sum = arr2.reduce((accum, curr) => {
    return accum+curr
})
console.log(sum)

//product of elements
let arr3 = [12,9,32,3,26]
const prod = arr3.reduce((accum, curr) => {
    return accum*curr
})
console.log(prod)

//count elements
const count = arr3.reduce((accum, curr) => {
    return accum+1
}, 0)
console.log(count)

//maximum element of array
const max = arr3.reduce((accum, curr) => {
    return accum=accum>curr?accum:curr
})
console.log(max)

//minimum element of array

const min = arr3.reduce((accum, curr) => {
    return accum=accum<curr?accum:curr
})
console.log(min)

//sum of even 
const sumOfEven = arr3.reduce((accum, curr) => {
    if (curr % 2 == 0) {
        accum+=curr
    }
    return accum
},0)
console.log(sumOfEven)

//sum of odd

const sumOfOdd = arr3.reduce((accum, curr) => {
    if (curr % 2 != 0) {
        accum+=curr
    }
    return accum
}, 0)
console.log(sumOfOdd)

//average of elemnts

const avg = arr3.reduce((accum, curr,index) => {
    if (index == arr3.length - 1) {
        return (accum+curr)/arr.length
    }
    return accum+curr
})
console.log(avg)

let arr5 = [-5, 10, -2, 8, 0, 15, -7]

const countPos = arr5.reduce((accum, curr) => {
    if (curr >0) {
        accum++
    }
    return accum
}, 0)
console.log(countPos)

const countNeg = arr5.reduce((accum, curr) => {
    if (curr < 0) {
        accum++
    }
    return accum
}, 0)
console.log(countNeg)

let arr6 = [0, 1, 0, 2, 3, 0, 4, 0]
const countZero = arr6.reduce((accum, curr) => {
    if (curr== 0) {
        accum++
    }
    return accum
}, 0)
console.log(countZero)

let strArr = ["cat", "elephant", "dog", "tiger"]

const longest = strArr.reduce((accum, curr, index) => {
    if (accum.length<curr.length) {
        return strArr[index]
    }
    accum=curr
    
    
},strArr[0])
console.log(longest)