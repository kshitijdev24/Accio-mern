console.log("pyramid")
let m = 5
for (let i = 1; i <= m; i++){
    let str = ""
    for (let j = m - i; j >= 1; j--){
        str+="  "
    }
    for (let k = 1; k <= (2*i)-1; k++) {
        str += "* "
    }
    for (let l = m - i; l >= 1; l--){
        str+="  "
        } 
    console.log(str)
}

console.log("upside down pyramid")
let n = 5
let counter=1
for (let i = 1; i <= n; i++){
    let str = ""
    for (let k = 1; k <= i - 1; k++){
        str+="  "
    }
    for (let j = (2 * n) - counter; j >= 1; j--){
        str+="* "
    }
    for (let k = 1; k <= i - 1; k++) {
        str += "  "
    }
    counter+=2
    console.log(str)
}

console.log("diamond")
let counter1 = 1
let p=5
for (let i = 1; i <= p; i++){
    let str = ""
    let dash = (p - counter1) / 2
    if (i <= (p + 1) / 2) { 
        
        for (let k = 1; k <= dash; k++) {
            str += "  "
        }
        for (let j = 1; j <= counter1; j++) {
            str += "* "
        }
        if (i < (p + 1) / 2) {
            counter1+=2
        }
    }

    else {
        dash++
        counter1-=2
        for (let k = 1; k <= dash; k++) {
            str += "  "
        }
        for (let j = 1; j <= counter1; j++) {
            str += "* "
        }

    }
    
    console.log(str)
}

console.log("sandclock")
let f = 5
let stars=5
for (let i = 1; i <= f; i++){
    let str = ""
    if (i <= (f + 1) / 2) {
        for (let j = 0; j < i - 1; j++) {
            str += "  "
        }
        for (let k = stars; k >= 1; k--) {
            str += "* "
        }
        if (i < (f + 1) / 2) {
            stars -= 2
        }
    }
    else {
        stars += 2
        let dash = (f - stars)/2
        for (let n = dash; n >= 1; n--){
            str+="  "
        }
        for (let m = 1; m <= stars; m++){
            str+="* "
        }
    }
    console.log(str)
}
