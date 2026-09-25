console.log("right-angled triangle")
let m = 5
for (let i = 0; i < m; i++){
    let str=""
    for (let j = 0; j < i; j++){
        str+="* "
    }
    console.log(str)
}

console.log("right-angled triangle flipped")
let p = 5
for (let i = 1; i <= p; i++) {
    let str =""
    for (let k = 1; k <= p - i; k++) {
        str +="  "
    }
    for (let j = 1; j <= i; j++) {
        str += " *"
    }
    console.log(str)
}

console.log("upside down right angled triangle")
let x=5
for (let i = 1; i <= x; i++){
    let str = ""
    for (let j = x; j >= i; j--){
        str+="* "
    }
    console.log(str)
}

console.log("upside down right angled triangle flipped")
let y = 5
for (let i = 1; i <= y; i++) {
    let str = ""
    for (let k = 1; k <=i-1; k++){
        str+="  "
    }
    for (let j = y; j >= i; j--) {
        str += "* "
    }
    console.log(str)
}

console.log("hollow right-angled triangle")
let z=5
for (let i = 1; i <= z; i++){
    let str = ""
    for (let j = 1; j <= z; j++){
        if (i == z || j == 1 || i == j) {
            str+="* "
        }
        else {
            str+="  "
        }
    }
    console.log(str)
}

console.log("flipped hollow right-angled triangle")
let q = 5
for (let i = 1; i <= q; i++){
    let str=""
    for (let j = 1; j <= q; j++){
        if (i == q || j == q || i + j == q + 1) {
            str+="* "
        }
        else {
            str+="  "
        }
    }
    console.log(str)
}


console.log("hollow right-angled triangle upside down")
let f=5
for (let i = 1; i <= f; i++){
    let str = ""
    for (let j = 1; j <= f; j++){
        if (i == 1 || j == 1 || i + j == f + 1) {
            str+="* "
        }
        else {
            str+="  "
        }
    }
    console.log(str)
}

console.log("hollow right-angled triangle upside down flipped")
let g = 5
for (let i = 1; i <= g; i++){
    let str = ""
    for (let j = 1; j <= g; j++){
        if (i == 1 || j == g || i == j) {
            str+="* "
        }
        else {
            str+="  "
        }
    }
    console.log(str)
}