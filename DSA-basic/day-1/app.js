
console.log("pattern-1")
let n = 3
for(let rows=1;rows<=n;rows++){
    let str="";
    for (let cols = 1; cols <= n; cols++){
        str+="* "
    }
    console.log(str)
}

console.log("pattern-2")
let m = 3
for (let rows = 1; rows <= m; rows++) {
    let str = "";
    for (let cols = 1; cols <= m; cols++) {
        str +=  rows+" "
    }
    console.log(str)
}

console.log("pattern-3")
let k= 3
for (let rows = 1; rows <= k; rows++) {
    let str = "";
    for (let cols = 1; cols <= k; cols++) {
        str += cols + " "
    }
    console.log(str)
}

console.log("pattern-4")
let w = 4
for (let rows = 1; rows <= w; rows++){
    let str = ""
    for (let cols = 1; cols <= w; cols++){
        if (rows == 1 || rows == w) {
            str+="* "
        }
        else {
            if (cols == 1 ) {
                str+="* "
            }
            if (cols != w || cols!=1) {
                str+=" "
            }
            if(cols==w){
                str+="* "
            }
        }
    }
    console.log(str)
}

console.log("pattern-5")
let a = 4;
for (let rows = 1; rows <= a; rows++){
    let str = ""
    for (let cols = 1; cols <= a; cols++){
        str += String.fromCharCode(64 + rows)
    }
    console.log(str)
}

console.log("pattern-6")
let b = 4;
for (let rows = 1; rows <= b; rows++) {
    let str = ""
    for (let cols = 1; cols <= b; cols++) {
        str += String.fromCharCode(64 + cols)
    }
    console.log(str)
}

console.log("pattern-7")
let counter = 0;
let z = 4;
for (let i = 1; i <= z; i++){
    let str =""
    for (let j = 1; j <= z; j++){
        if (j == 1 || j == z || i == 1 || i == z) {
            
            str += i + counter + " "
            counter++
        }
        else {
           
            str += "  "
            counter++
        }
    }
    counter--
    console.log(str)
}

console.log("pattern-8")
let count = 64;
let x = 4;
for (let i = 1; i <= x; i++) {
    let str = ""
    for (let j = 1; j <= x; j++) {
        if (j == 1 || j == x || i == 1 || i == x) {

            str +=  String.fromCharCode(count+i) + " "
            count++
        }
        else {

            str += "  "
            count++
        }
    }
    count--
    console.log(str)
}

console.log("pattern-9")
let counter1 = 1;
let d= 4;
for (let i = 1; i <= d; i++) {
    let str = ""
    for (let j = 1; j <= d; j++) {
        if (j == 1 || j == d || i == 1 || i == d) {

            str +=counter1 + " "
            counter1++
        }
        else {

            str += "  "
            counter1++
        }
    }
   
    console.log(str)
}


console.log("pattern-10")
let count2 = 1;
let f = 4;
for (let i = 1; i <= f; i++) {
    let str = ""
    for (let j = 1; j <= f; j++) {
        if (j == 1 || j == f || i == 1 || i == f) {

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