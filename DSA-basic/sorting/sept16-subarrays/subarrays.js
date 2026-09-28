let arr = [1, 2, 3, 4, 5]
function getAllSubarrays(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            ans.push(arr.slice(i, j + 1))
        }
        
    }
    console.log(ans)
}
getAllSubarrays(arr)

function getAllSubarrays1(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let temp=[]
        for (let j = i; j < arr.length; j++) {
            temp.push(arr.slice(i, j + 1))
        }
         ans.push(temp)
    }
    console.log(ans)
}
getAllSubarrays1(arr)

function allSubArrays(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++){
        let temp = [];
        for (let j = i; j < arr.length; j++){
           
            temp.push(arr[j])
           ans.push([...temp])//shallow copy for non-nested array

        }
    }
    console.log(ans)
}
allSubArrays(arr)

function allSubArraysDeep(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let temp = [];
        for (let j = i; j < arr.length; j++) {

            temp.push(arr[j])
            ans.push(structuredClone(temp))//shallow copy for non-nested array

        }
    }
    console.log(ans)
}
allSubArraysDeep(arr)


function returnAllSubstringsNoInbuiltFunctions(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++){
        
        for (let j = i; j <arr.length; j++){
            let temp = []
            for (let k = i; k <= j; k++){
                temp.push(arr[k])
            }
            ans.push(temp)
        }
    }
    console.log(ans)
}

returnAllSubstringsNoInbuiltFunctions(arr)