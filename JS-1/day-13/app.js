let arr=[1,2,3,4,5,6];

arr.push(7)

console.log(arr);

//--------------------------------------------------------

let removed=arr.pop();
console.log(removed);
console.log(arr);

//-------------------------------------------------------

let removedShift=arr.shift();
console.log(removedShift);
console.log(arr);

//-------------------------------------------------------
let newLength = arr.unshift(-1, -2, -3);
console.log(newLength);
console.log(arr);

//-------------------slice doesnt change original array-------------------------------------
let arr1 = [1, 2, 3, 4, 5, 6, 7]

let ans1 = arr1.slice(3);
let ans2 = arr1.slice(1, 4);
let ans3 = arr1.slice(1, 400);
let ans4 = arr1.slice(-3, -1);// only with slice you can use negative indexing 
console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);

//--------------------------
let arr2 = [1, 2, 3, 4, 5, 6];

let ans = arr2.splice(2, 3) // here 2 is start index an 3 is delete count

//splice() make changes in original array
console.log(arr2);// [1,2,6]
console.log(ans);//[3,4,5]

//--------------------------------------------
let arr4=[1,2,3,4,5,6,7]
const anss = arr4.concat([8, 9, 10]);
const anss2 = arr4.includes(3);
const anss3 = arr4.indexOf(4);
const anss4 = arr4.lastIndexOf(4);
const anss5 = arr4.join("->");


console.log(anss)
console.log(anss2)
console.log(anss3)
console.log(anss4)
console.log(anss5)
console.log(arr4.reverse());

