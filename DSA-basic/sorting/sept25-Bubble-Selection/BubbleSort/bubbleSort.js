let arr = [23, 4, 16, 8, 42, 15, 4, 85]

function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSorted = true
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSorted = false
            }
        }
        if (isSorted) {
            break
        }
    }

    console.log(arr)
}

BubbleSort(arr)