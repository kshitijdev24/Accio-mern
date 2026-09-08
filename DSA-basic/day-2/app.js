
console.log("pattern-1")
let counter1 = 1;
let d = 4;
let e=5
for (let i = 1; i <= d; i++) {
    let str = ""
    for (let j = 1; j <= e; j++) {
        if (j == 1 || j == e || i == 1 || i == d) {

            str += counter1 + " "
            counter1++
        }
        else {

            str += "  "
            counter1++
        }
    }

    console.log(str)
}

console.log()
console.log("pattern-2")
let count2 = 1;
let f = 4;
let g=5
for (let i = 1; i <= f; i++) {
    let str = ""
    for (let j = 1; j <= g; j++) {
        if (j == 1 || j == g || i == 1 || i == f) {

            str += String.fromCharCode(count2 + 64) + " "
            count2++
        }
        else {

            str += "  "
            count2++
        }
    }
    console.log(str)
}
console.log()
console.log("pattern- right-triangle-1")
let n = 4;
let m = 5;
for (let i = 1; i <= n; i++){
    let str = ""
    for (let j = 1; j <= i; j++){
        str+="* "
    }
    console.log(str);
}
console.log()
console.log("pattern-inverted triangle-1")
let nn = 4;
let mm = 5;
for (let i = 1; i <= nn; i++) {
    let str = ""
    for (let j = mm; j >=i+1; j--) {
        str += "* "
    }
    console.log(str);
}
console.log()
console.log("pattern- right-triangle-2")
let n1 = 4;
for (let i = 1; i <= n1; i++) {
    let str = ""
    for (let j = 1; j <= i; j++) {
        if (i == 1 || j==1 || i==n1 || j==i) {
            str+="* "
        }
        else {
            str+=" "
        }
    }
    console.log(str);
}
console.log()
console.log("pattern-inverted triangle-2")
let nn1 = 4;
for (let i = 1; i <= nn1; i++) {
    let str = ""
    for (let j = 1; j <=(nn1-i) + 1; j++) {
        if (i == 1 || j == 1 || j == nn1 - i + 1) {
          str+="* "
        }
        else {
            str+=" "
        }
    
        
    }
    console.log(str)
}

let p = 4
for (let row = 1; row <= p; row++){
    let str = ""
    for (let space = 1; space <= p - row + 1; space++){
        str+=" "
    }
    for (let star = 1; star <= row; star++){
        str+="* "
    }
    console.log(str)
}

console.log();
let t = 4
for (let row = 1; row <= t; row++){
    let str = "";
    for (let space = 1; space <= row - 1; space++){
        str+=" "
    }
    for (let star = 1; star <= t - row + 1; star++){
        str+="* "
    }
    console.log(str)
}