class Person{
    constructor(name)
    {
        this.name = name;
    }
    sleep()
    {
        console.log(` is sleeping`);
    }
}

const kodom = new Person("Kodom Ali");


const badam = new Person("Badal Ali");

kodom.sleep();
badam.sleep();

const k = kodom.sleep;
k();


// Dot and Bracket Notaion

const person = {
    name: 'kodom ali', 
    job: 'badam khai',
    3:'third',
    'add-dress': 'kochu khet'
}
const prop = 'job'
console.log(person.job)
console.log(person['job'])
console.log(person[prop])
console.log(person['3'])
confirm.log(person["add-dress"])

