let arr1 = [1, 2, 3, 4, 5, 6]
let ans1 = arr1.filter((ele) => {
    return ele%2==0
})
console.log(ans1)

let arr2 = [10, 15, 20, 25, 30, 35]
let ans2 = arr2.filter((val) => {
    return val%2!=0
})
console.log(ans2)