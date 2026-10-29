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

let arr3 = [5, 12, 8, 20, 3, 15]
let ans3 = arr3.filter((ele) => {
    if (ele > 10) {
        return ele
    }
})
console.log(ans3)

let arr4 = [10, 55, 23, 78, 45, 90]
let ans4 = arr4.filter((ele) => {
    if (ele < 50) {
        return ele
    }
})
console.log(ans4)

let arr5 = [-5, 10, -2, 8, 0, -7, 15]
let ans5 = arr5.filter((ele) => {
    if (ele > 0) {
        return ele
    }
})
console.log(ans5)

let arr6 = [-10, 5, -3, 8, -7, 12]
let ans6 = arr6.filter((ele) => {
    if (ele < 0) {
        return ele
    }
})
console.log(ans6)

let arr7 = [10, 12, 15, 22, 25, 31, 40]
let ans7 = arr7.filter((ele) => {
    if (ele % 5 == 0) {
        return ele
    }
})
console.log(ans7)

let arr8 = [10, 20, 25, 50, 55, 40, 70]
let ans8 = arr8.filter((ele) => {
    if (ele >= 20 && ele <=50) {
        return ele
    }
})
console.log(ans8)

let arr9 = [50, 100, 150, 75, 200, 99]
let ans9 = arr9.filter((ele) => {
    if (ele >= 100) {
        return ele
    }
})
console.log(ans9)

let arr10 = [5, 25, 100, 999, 42, 1000]
let ans10 = arr10.filter((ele) => {
    if ((ele.toString()).length > 2) {
        return ele
    }
})
console.log(ans10)

let arr11 = ["cat", "elephant", "dog", "computer", "sun", "javascript"]
let ans11 = arr11.filter((ele) => {
    if (ele.length > 5) {
        return ele
    }
})
console.log(ans11)

let arr12 = ["Apple", "Banana", "Avocado", "Mango", "Ant", "Orange"]
let ans12 = arr12.filter((ele) => {
    if ((ele.split(""))[0] == 'A') {
        return ele
    }
})
console.log(ans12)

let arr13 = ["javascript", "python", "js", "typescript", "java", "nodejs"]
let ans13 = arr13.filter((ele) => {
    if (ele.includes('js')) {
        return ele
    }
})
console.log(ans13)

let arr14 = ["madam", "hello", "level", "world", "radar"]
