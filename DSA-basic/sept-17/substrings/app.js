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

function allsubstringsusingslice(str) {
    let ans=[]
    for (let i = 0; i < str.length; i++){
        for (let j = i; j < str.length; j++){
            ans.push(str.slice(i,j+1))
        }
    }
    console.log(ans)
}
allsubstringsusingslice(str)

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
KlengthSubstrings(str, 3)

function substringsStartingfromK(str,k){
    let ans = []
    for (let i = k; i < str.length; i++){
        for (let j = i; j < str.length; j++){
            ans.push(str.slice(i,j+1))
        }
    }
    console.log(ans)
}
substringsStartingfromK(str,3)


let name="kshitijtyrfgh "
function substringsContainingVowels(name) {
    let ans = []
    for (let i = 0; i < name.length; i++){
        for (let j = i; j < name.length; j++){
            let subs=name.slice(i,j+1)
            if (subs.includes('a') || subs.includes('e') || subs.includes('i') || subs.includes('o') || subs.includes('u')) {
                ans.push(subs)
            }
        }
    }
    console.log( ans)
}
substringsContainingVowels(str)

function largestsubstringcontainingVowel(str) {
    let result = ""
    for (let i = 0; i < str.length; i++){
        for (let j = i; j < str.length; j++){
            let ss = str.slice(i, j + 1)
            if (ss.includes("a") || ss.includes("e") || ss.includes("i") || ss.includes("o") || ss.includes("u")) {
                if (ss.length > result.length) {
                    result=ss
                }
            }
        }
    }
    console.log(result)
}
largestsubstringcontainingVowel(name)


let word="racecarptxyz"
function printAllpalindromeSS(str) {
    let result = []
    for (let i = 0; i < str.length; i++){
        for (let j = i; j < str.length; j++){
            let ss = str.slice(i, j + 1)
            if ((ss ==(str.slice(i, j + 1)).split("").reverse().join(""))&& ss.length>1) {
                result.push(ss)
            } 
        }
    }
    console.log(result)
}
printAllpalindromeSS(word)

function printAllSSWithOnlyVowels(str) {
    let result = []
    for (let i = 0; i < str.length; i++){
        for (let j = i; j < str.length; j++){
            
        }
    }
}