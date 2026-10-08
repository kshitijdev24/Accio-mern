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


