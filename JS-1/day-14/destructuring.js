let arr = [1, 2, 3, 4]

const [a, b, c, d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


let arr1= [[1, 2, 3], [4, 5, 6], [7, 8, 9, [10, 11, 12]]]

const nArr = arr1.flat(Infinity);

console.log(arr1);
console.log(nArr);