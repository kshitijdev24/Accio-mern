function mergeTwoSortedArrays(arr1, arr2) {
    let m = arr1.length
    let n = arr2.length
    let arr3 = []
    let i = 0;
    let j = 0;
    while (i < m || j< n) {
        if (arr1[i] < arr2[j]) {
            arr3.push(arr1[i])
            i++
        }
        else {
            arr3.push(arr2[j])
            j++;
        }

        if (i >= m) {
            let rest=
            arr3.push(... arr2.slice(j, n));
            break;
        }
        if (j >= n) {
            arr3.push(... arr1.slice(i, m))
            break;
        }
    }

    // while (i < m) {
    //     arr3.push(arr1[i])
    //     i++
    // }
    // while (j < n) {
    //     arr3.push(arr2[j]);
    //     j++
    // }
    console.log(arr3);
}

let arr1=[1,4,7,99,101,999]
let arr2=[2,3,5,6,7,8]
mergeTwoSortedArrays(arr1, arr2);