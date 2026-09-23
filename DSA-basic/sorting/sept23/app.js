const arr1 = [9, 1, 0, 3, 4, 5, -15, 19, 13, 14, 11, 22, 24, 23]
arr1.sort()


//Increasing order
arr1.sort((a, b) => {
    return a-b
})

console.log(arr1)

//creasing order
arr1.sort((a, b) => {
    return b-a
})
console.log(arr1)


let arr = [
    {
        name: "A",
        age:32
    },
    {
        name: "B",
        age:22
    }
    ,
    {
        name: "C",
        age:12
    },
    {
        name: "D",
        age:42
    }
]


//here addresses of a and b are compared and not the values of a and b. So we need to return the difference between a and b to sort the array in increasing order.
arr.sort((a, b) => {
    return a-b
})
console.log(arr)


arr.sort((a, b) => {
    return a.age-b.age
})
console.log(arr)
