var age=19;

let result = age > 18 ? "eligible to vote" : "not eligible to vote";
console.log(result);

var n=-23;
n < 0 ? console.log("Negative") : (n == 0 ? console.log("Zero") : console.log("Postive"));

var n = 0;

n == 0 ? console.log("Zero") :
    (n < 0 ? (
        n%2==0 ? console.log("Negative Even") : console.log("Negative Odd")
) : (
    n%2==0 ? console.log("Positive Even") : console.log("Positive Odd")
    ))

true && console.log("Hello");
    
false && console.log("Hello1");

true || console.log("Hello2");
false || console.log("Hello3");

//--------------------------------------------------------------------
console.log(null ?? 100);
console.log(undefined ?? 1001);
console.log(0 ?? 1002);
console.log(false ?? 1003);
console.log("" ?? 1004);
console.log(NaN ?? 1005);
console.log("Hello" ?? 1006);
console.log(false ?? true);
