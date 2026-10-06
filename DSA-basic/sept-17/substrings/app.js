let str = "abcdefg"
function allThesubstrings(str) {
    let ans = []
    for (let i = 0; i < str.length; i++) {
        let temp = ""
        for (let j = i; j < str.length; j++) {
            temp += str[j];
            ans.push(temp)
        }
    }
    console.log(ans)
}
allThesubstrings(str)

function countTotalSubstrings(str) {
    let n = str.length
    console.log( (n*(n+1))/2)
}
countTotalSubstrings(str)

function subsstringsOfLengthK(str, k) {
    let ans = []
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let ss = str.slice(i, j + 1)
            if (ss.length == k) {
                ans.push(ss)
            }
        }
    }
    console.log(ans)
}

subsstringsOfLengthK(str, 3)

function KlengthSubstrings(str, k) {
    let ans=[]
    for (let i = 0; i <=str.length - k; i++){
        ans.push(str.slice(i,i+k))
    }
    console.log(ans)
}
KlengthSubstrings(str,3)