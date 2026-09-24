let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

for (let row = 0; row < arr.length; row++){
    let str = ""
    for (let col = 0; col < arr[row].length; col++){
        str+=arr[row][col]+" "
    }
    console.log(str)
}