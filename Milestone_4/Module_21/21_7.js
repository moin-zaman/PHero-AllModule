
function objPassing(person)
{
    const age = person.age;

    return age;
}

const person = {
    name1: "Moin",
    age: 25
}

const age = objPassing(person);
console.log(age);


function Student(name, age)
{
    this.name = name;
    this.age = age;
}

const s1 = new Student("Moin", 25);

console.log(s1.name);
console.log(s1.age);


function arr(num)
{
    const len = num.length;

    return len;
}


const len = arr([1,4,7,8]);
console.log(len);

