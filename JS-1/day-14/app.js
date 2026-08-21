let arr=[1,2,3,4,5]

let start=0;
let end=arr.length-1;

while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log(arr)

// 
let arr1 = [1, 2, 3, 4, 5, 6]
let temp = [];
for (let i = arr1.length - 1; i >= 0; i--){
    temp.push(arr1[i]);
}
console.log(temp);