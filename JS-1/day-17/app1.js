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