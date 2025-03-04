// Set and Get Properties of Object

const Person = {
    name: "Moin",
    age: 25,
    salary: 25000,
    profession: "IT",
    'fav places': ["Bandarban", "Cox's Bazar", "Dhaka"],
    favPerson: ["AB", "BC", "CD"]
}

// console.log(Person);
console.log(Person["salary"]);
console.log(Person.name);
console.log(Person["fav places"][2]);
console.log(Person.favPerson[2]);

const personAge = Person['age'];
console.log(personAge);

// We can update the value of object's properties

Person.salary = 50000;
Person['age'] = 26;

console.log(Person.age);

const personName = Person['name'];
console.log(personName);

const kaaj = 'profession';

console.log(Person[kaaj]);

const propName = 'name';
Person[propName] = "Zaman";

console.log(Person.name);