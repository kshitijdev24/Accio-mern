// let arr = [1, 3, 5, 2, 4, 10, 99, 1000]

// const val = arr.every((item, index) => {
//     return item>0
// })

// console.log(val)

// const val2 = arr.some((item, index) => {
//     return item<0
// })

// console.log(val2)

// const myArr = new Array(10).fill(0)
// console.log(myArr)

let arr2 = [1, 2, 3, 4]
console.log(arr2.map((val) => {
    return val*2
}))

let arr3 = [1, 2, 3, 4, 5, 6]
console.log(arr3.filter((val) => {
    return val%2==0
}))

let arr4 = [5, 10, 15]
console.log(arr4.reduce((accum, curr) => {
    return accum+curr
}))

let arr5 = [4, 9, 12, 7, 15]
console.log(arr5.find((val) => {
    return val>10
}))

let arr6 = [3, -1, 5]
console.log(arr6.some((val) => {
    return val<0
}))

let arr7 = ["ab", "b", ""]
console.log(arr7.every((val) => {
    return val.length==0
}))

const arr8 = ["a", "b", "a", "c", "b", "a"]
console.log(arr8.reduce((accum, curr) => {
    accum[curr] = (accum[curr] || 0) + 1
    return accum
}, {}))

const arr9A = [1, 3, 5, 7]
console.log(arr9A.slice(0,-1).every((val, index) => {
        
        return arr9A[index] < arr9A[index + 1]
    
}))

const arr10A = [1, 5,3]
console.log(arr10A.slice(0, -1).every((val, index) => {

    return arr10A[index] < arr10A[index + 1]

}))

const arr11 = [1, 2, 3, 4, 5]
let res = arr11.filter((val) => {
    return val%2!=0
})

console.log(res.map((val) => {
    return val**2
}))

const arr12 = [
    { name: "Pen", price: 10, inStock: true },
    { name: "Book", price: 50, inStock: false },
    { name: "Bag", price: 30, inStock: true }
]

let res1 = arr12.filter((val) => {
    return val.inStock==true
})
console.log(res1)

console.log(res1.reduce((accum, curr) => {
    return accum.price+curr.price
}))

const arr13 = [{ price: 100, qty: 2 }, { price: 50, qty: 3 }]
let ans13 = arr13.reduce((accum,val) => {
    return accum+=val.price * val.qty
}, 0)
console.log(ans13)