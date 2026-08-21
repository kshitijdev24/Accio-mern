function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
            return i;
        }
    }
    return - 1;
}

function LinearSearchLastOccurence(arr, target) {
    for (let i = arr.length - 1; i >= 0; i++){
        if (arr[i] == target) {
            return i
        }
    }
    return -1;
}

function hasTarget(arr, target) {
    for (let item of arr) {
        if (item == target) {
            return true
        }
    }
    return false
}

function LinearSearchAllOccurences(arr, target) {
    let ans = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
            ans.push(i);
        }
    }
    return ans;
}