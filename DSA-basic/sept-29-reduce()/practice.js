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
