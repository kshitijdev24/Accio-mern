let arr = [99, 7, 1, 6, 3, 5, -10]
function InsertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let isSwapped = false
        for (let j = i + 1; j >= 0; j--){
            if (arr[j] < arr[j - 1]) {
                isSwapped=true
                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j-1]=temp
            }
        }
        if (isSwapped == false) {
            break
        }
    }
    console.log(arr)
}

InsertionSort(arr)