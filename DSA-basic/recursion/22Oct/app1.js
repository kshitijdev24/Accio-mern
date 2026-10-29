function findNthFibo(n){
    if(n==1){
        return 0
    }
    if(n==2){
        return 1
    }
    let first =0
    let second = 1
    while (n > 2) {
        let curr = first + second
        first = second
        second = curr
        n--
    }
    return second
}

console.log(findNthFibo(5))

//recursive method
function fibonacci(n) {
    if (n == 1) {
        return 0
    }
    if (n == 2) {
        return 1
    }

    return fibonacci(n-1)+fibonacci(n-2)
}

console.log(fibonacci(5))