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

let t = 4
for (let row = 1; row <= t; row++){
    let str = "";