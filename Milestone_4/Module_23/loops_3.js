

function abcd(students)
{
    const obj = [];
    for(const key of students)
    {
        if(key.gpa > 3.5)
        {
            obj.push({id: key.id, name: key.name, gpa: key.gpa});
        }
    }
    return obj
}

var students = [
    {id: 101, name: "Moin Zaman", gpa: 3.75},
    {id: 102, name: "Raisan Zaman", gpa: 3.45},
    {id: 103, name: "Tansen Zaman", gpa: 3.95},
    {id: 104, name: "Khna Zaman", gpa: 3.25}
];

const s1 = abcd(students);
console.log(s1);


