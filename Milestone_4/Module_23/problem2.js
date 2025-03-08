
function totalMonthlySalary(employees)
{
    let total = 0;

    for(const emp of employees)
    {
        const correntSalary = emp.starting + (emp.experience * emp.increment);

        total += correntSalary;
    }
    return total/12;
}



const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const total = Math.round(totalMonthlySalary(employees));
console.log("Total Monthly Salary to be provided:", total);