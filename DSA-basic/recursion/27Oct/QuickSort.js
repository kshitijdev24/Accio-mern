function quickSort(arr) {
    if (arr.length == 0 || arr.length == 1) {
        return arr
    }
    let pivotIndex = Math.floor(Math.random() * arr.length)// this is done to reduce time
    let pivot=arr[pivotIndex]
    let leftarr = []
    let rightarr=[]
    for (let i = 0; i < arr.length; i++){
        if (i == pivotIndex) {
            continue
        }
        if (arr[i] < arr[pivotIndex]) {
            leftarr.push(arr[i])
        }
        else {
            rightarr.push(arr[i])
        }
    }
    let leftsorted=quickSort(leftarr);
    let rightsorted=quickSort(rightarr);
    return [...leftsorted, pivot, ...rightsorted];
}

console.log(quickSort([-9, 1, 7, 2, 6, 5]));