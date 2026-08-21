// global scope

var a = 10
let b = 20
const c = 20

/*
 CODE

*/

console.log(a)
console.log(b)
console.log(c)

//----------------------------------------------

{
    var a1 = 1
    let b1 = 2
    const c1 = 3
 
    console.log(a1)
    console.log(b1)
    console.log(c1)
}

console.log(a1)
// console.log(b1) let has a block-scope
// console.log(c1) const has a block-scope