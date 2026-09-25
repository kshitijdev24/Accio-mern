/*
A
B C 
D E F
G H I J*/
let counter = 1
let n=4
for (let i = 1; i <= n; i++){
    let str = ""
    for (let j = 1; j <= i; j++){
        str += String.fromCharCode(64 + counter)+" "
        counter++
    }
    console.log(str)
}

/*
1
2 2
3 3 3
4 4 4 4 */

let m=4
for (let i = 1; i <= m; i++){
    let str = ""
    for (let j = 1; j <=i; j++){
        str+=i+" "
    }
    console.log(str)
}


/*
1
1 2
1 2 3
1 2 3 4 */
let p=4
for (let i = 1; i <= p; i++){
    let str = ""
    for (let j = 1; j <= i; j++){
        str+=j+" "
    }
    console.log(str)
}

/*
A B C D
E F G
H I
J 
 */
let x = 4
let counter1=1
for (let i = 1; i <= x; i++){
    let str = ""
    for (let j = x; j >= i; j--){
        str += String.fromCharCode(64 + counter1) + " "
        counter1++
    }
    console.log(str)
}

let y = 4
let counter2=1
for (let i = 1; i <= y; i++){
    let str = ""
    for (let k = y - i; k>0; k--) {
        str +="  "
    }
    for (let j = 1; j <= i; j++){
        str+=counter2+" "
        counter2++
    }

    console.log(str)
}


let v = 4
let counter3=1
for (let i = 1; i <= v; i++){
    let str = ""
    for (let j = 1; j <= i - 1; j++){
        str+="  "
    }
    for (let k = v; k >= i; k--){
        str += String.fromCharCode(64 + counter3)+" "
        counter3++
    }
    console.log(str)
}