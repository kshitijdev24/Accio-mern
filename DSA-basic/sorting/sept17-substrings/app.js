let str = "abcd"

function getAllSubstrings(str) {
    let ans = []
    for (let i = 0; i < str.length; i++){
        let substr = ""
        for (let j = i; j < str.length; j++){
            substr += str[j]
            ans.push(substr)
        }
    }
    console.log(ans)
}
getAllSubstrings(str)


function getAllSubstringsOfLengthK(str, k) {
    let ans = []
    
    for (let i = 0; i < str.length; i++){
        let substr = ''
        for (let j = i; j < str.length; j++){
            substr += str[j]
            if (substr.length == k) {
                ans.push(substr)
            }
        }
    }
    console.log(ans)
}

getAllSubstringsOfLengthK(str, 3)


str1="abcdefgh"
function substringsLengthKslidingwindow(str1, k) {
    let ans = []
    for (let i = 0; i <=str1.length-k; i++){
        ans.push(str1.slice(i,i+k))
    }
    console.log(ans)
}
substringsLengthKslidingwindow(str1,3)