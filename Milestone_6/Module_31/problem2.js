// 1)
const oddNumbers = [1, 3, 5, 7, 9];

const evenNumbers = oddNumbers.map(n => n+1);
console.log(evenNumbers);


// 2)

const arr = [33, 50, 79, 90, 101, 30];

const divisibleBy10 = arr.filter(n => n % 10 === 0);
console.log(divisibleBy10);


// 3)

const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
];

const seniorInstructor = instructor.filter(person => person.position.toLowerCase() === 'senior').map(p => p.name);
console.log(seniorInstructor);


// 4)

const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]

const totalAge = people.reduce((p, c) => p + c.age , 0);
console.log(totalAge);
