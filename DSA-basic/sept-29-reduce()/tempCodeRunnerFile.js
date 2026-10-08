let arr = [10, 20, 30, 40, 50];
let sum = arr.reduce((accum, curr) => {
    accum = accum + curr
    return accum
})
console.log(sum)