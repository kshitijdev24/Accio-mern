const students = [
    { name: 'Aman', marks: 85, age: 20 },
    { name: 'Riya', marks: 92, age: 19 },
    { name: 'Karan', marks: 67, age: 21 },
    { name: 'Neha', marks: 78, age: 20 },
    { name: 'Rohit', marks: 92, age: 22 },
]

function solve(arr) {
    let max =Number.NEGATIVE_INFINITY;
    let topper = "";
    let avgMarks;
    let youngestStudentage = Number.POSITIVE_INFINITY;
    let youngestStudent=""
    let totalstudents = 0;
    let passedStudents = []
    let sum = 0;
    obj={}
    for (let obj of arr) {
        totalstudents++;
        sum += obj.marks;
        if (obj.marks > max) {
            topper = obj.name;
        }
        if (obj.age < youngestStudentage)
        {
            youngestStudentage = obj.age;
            youngestStudent = obj.name;
        }
        if (obj.marks >= 70) {
            passedStudents.push(obj.name)
        }
        avgMarks = sum / arr.length;

    }

    obj.topper = topper;
    obj.averageMarks = avgMarks;
    obj.passedStudents = passedStudents;
    obj.youngestStudent = youngestStudent;
    obj.totalstudents = totalstudents;

    console.log(obj)
}

solve(students);