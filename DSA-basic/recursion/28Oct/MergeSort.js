function MergeSorted(arr1, arr2){
    let arr3 = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr3.push(arr1[i]);
            i++
        }
        else {
            arr3.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        arr3.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        arr3.push(arr2[j])
        j++
    }
    return arr3;
}

function MergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftSorted = MergeSort(arr.slice(0, mid));
    let rightSorted = MergeSort(arr.slice(mid,arr.length));
    return MergeSorted(leftSorted, rightSorted);
}

console.log(MergeSort([5, 3, 8, 4, 2, 1, 7, 6]));
