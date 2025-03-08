

function studentNames(students)
{
    return students.filter(function(x){
        return x.gpa > 3.5;
    })
}



function studentNames1(students)
{
    return students.filter(function(x){
        return x.gpa > 3.5;
    }).map(function(y){
        return y.name;
    })
}



const students = [
    {id: 101, name: "Moin Zaman", gpa: 3.75},
    {id: 102, name: "Raisan Zaman", gpa: 3.45},
    {id: 103, name: "Tansen Zaman", gpa: 3.95},
    {id: 104, name: "Khna Zaman", gpa: 3.25}
];

const s1 = studentNames(students);
console.log(s1);


const s2 = studentNames1(students);
console.log(s2);


