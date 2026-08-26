let arr = [1, 2, 3, 4, 1, 2, 3, 1, 2, 1]
let obj = {}

for (let item of arr) {
    if (obj[item]) {
        obj[item]=obj[item]+1
    }
    else {
        obj[item]=1
    }
}

console.log(obj)

//------------------------------------------
let arr1="aaabccdedcebabdec"
let obj1 = {}

for (let item of arr1) {
    if (obj1[item]) {
        obj1[item] = obj1[item] + 1
    }
    else {
        obj1[item] = 1
    }
}

console.log(obj1)