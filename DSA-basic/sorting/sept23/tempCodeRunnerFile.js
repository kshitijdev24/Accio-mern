// const arr1 = [9, 1, 0, 3, 4, 5, -15, 19, 13, 14, 11, 22, 24, 23]
// // arr1.sort()


// // //Increasing order
// // arr1.sort((a, b) => {
// //     return a-b
// // })

// // console.log(arr1)

// // //creasing order
// // arr1.sort((a, b) => {
// //     return b-a
// // })
// // console.log(arr1)


// // let arr = [
// //     {
// //         name: "A",
// //         age:32
// //     },
// //     {
// //         name: "B",
// //         age:22
// //     }
// //     ,
// //     {
// //         name: "C",
// //         age:12
// //     },
// //     {
// //         name: "D",
// //         age:42
// //     }
// // ]


// // //here addresses of a and b are compared and not the values of a and b. So we need to return the difference between a and b to sort the array in increasing order.
// // arr.sort((a, b) => {
// //     return a-b
// // })
// // console.log(arr)


// // arr.sort((a, b) => {
// //     return a.age-b.age
// // })
// // console.log(arr)


// // practise

// arr3 = ["banana", "apple", "mango", "cherry"]
// arr3.sort()
// console.log(arr3)

// arr4 = ["Raj", "Amit", "Ram", "Karan", "Bob"]
// arr4.sort((a, b) => {
//     if (a.length != b.length) { return a.length - b.length }
//     else {
//         return a.localeCompare(b)
//     }
// })
// console.log(arr4)


// arr5 = [
//     {
//         name: "Rahul",
//         age:20
//     },
//     {
//         name: "Amit",
//         age:15
//     },
//     {
//         name: "Priya",
//         age:20
//     },
//     {
//         name: "Raj",
//         age:18
//     }
// ]

// arr5.sort((a, b) => {
//     if (a.age == b.age) {
//         return (a.name).localeCompare(b.name)
//     }
//     else {
//         return a.age-b.age
//     }
// })
// console.log(arr5)

// arr6= [
//     {
//         name: "Rahul",
//         salary: 50000
//     },
//     {
//         name: "Amit",
//         salary: 70000
//     },
//     {
//         name: "Priya",
//         salary: 70000
//     },
//     {
//         name: "Raj",
//         salary: 50000
//     }
// ]

// arr6.sort((a, b) => {
//     if (a.salary== b.salary) {
//         return (a.name).localeCompare(b.name)
//     }
//     else {
//         return a.salary - b.salary
//     }
// })
// console.log(arr6)

// arr7 = [
//     {
//         name: "A",
//         price: 500,
//         rating:4.2
//     },
//     {
//         name: "B",
//         price: 300,
//         rating: 4.5
//     },
//     {
//         name: "C",
//         price: 500,
//         rating: 4.8
//     },
//     {
//         name: "D",
//         price: 300,
//         rating: 4.1
//     }
// ]

// arr7.sort((a, b) => {
//     if (a.price == b.price) {
//         return b.rating-a.rating
//     }
//     else {
//         return a.price-b.price
//     }
// })

// console.log(arr7)



// arr8 = [
//     {
//         name: "A",
//         marks: 90,
//         age: 21
//     },
//     {
//         name: "B",
//         marks: 90,
//         age: 19
//     },
//     {
//         name: "C",
//         marks : 85,
//         age: 20
//     }
// ]

// arr8.sort((a, b) => {
//     if (a.marks == b.marks) {
//         return a.age - b.age
//     }
//     else {
//         return b.marks - a.marks
//     }
// })

// console.log(arr8)