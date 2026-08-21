var marks = 90;
if (marks >= 0 && marks <= 60) {
    console.log("failed");
}
else if (marks >= 61 && marks <= 70) {
    console.log("C");
}
else if (marks >= 71 && marks <= 80) {
    console.log("B");
}
else if (marks >= 81 && marks <= 90) {
    console.log("A");
}
else if (marks >= 91 && marks <= 100) {
    console.log("A+");
}
else {
    console.log("Invalid marks");
}

//-----------------------------------------------------------------------
var month = 5;

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    console.log("31 days");
}
else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("30 days");
}
else if (month == 2) {
    console.log("28 or 29 days");
}
else {
    console.log("Invalid month");
}