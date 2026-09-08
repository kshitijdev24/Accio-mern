const employees = [
    { name: "Aman", salary: 45000, age: 25, department: "IT" },
    { name: "Riya", salary: 65000, age: 28, department: "HR" },
    { name: "Karan", salary: 55000, age: 24, department: "IT" },
    { name: "Neha", salary: 75000, age: 30, department: "Finance" }
];

function analyzeEmployees(employee) {
    let highestPaidEmployee;
    let highestSalary = Number.NEGATIVE_INFINITY;
    let youngestAge = Number.POSITIVE_INFINITY;
    let youngestEmployee;
    let avgSalary;
    let sum = 0;
    let ITemployees = [];
    for (let emp of employees) {
        if (emp.salary > highestSalary) {
            highestSalary = emp.salary;
            highestPaidEmployee = emp.name;
        }
        sum += emp.salary;
        if (emp.department == "IT") {
            ITemployees.push(emp.name);
        }
        if (emp.age < youngestAge) {
            youngestAge = emp.age;
            youngestEmployee = emp.name;
        }

    }
    let result = {};
    result.ITemployees = ITemployees;
    result.highestPaidEmployee = highestPaidEmployee;
    result.youngest = youngestEmployee;
    result.totalEmployees = employee.length;
    result.avgSalary = sum / employee.length;

    console.log(result);
}

analyzeEmployees(employees)