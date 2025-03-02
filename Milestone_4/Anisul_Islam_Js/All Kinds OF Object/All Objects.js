// 1. Objects in JavaScript
// JavaScript has multiple ways to create and use objects.

// 1.1 Object Literals (Plain Objects)
// The most common way to define objects is using an object literal {}.



const person = {
    name: "Moin",
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // "Moin"
person.greet(); // "Hello, my name is Moin"



// 1.2 Object Constructor (new Object())
// Objects can also be created using the Object constructor.



const obj = new Object();
obj.name = "Moin";
obj.age = 25;
console.log(obj.name); // "Moin"



// 1.3 Object.create() (Prototypal Inheritance)
// Object.create() is used to create an object with a specific prototype.


const personProto = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const person1 = Object.create(personProto);
person1.name = "Moin";
person1.greet(); // "Hello, my name is Moin"


// 1.4 Constructor Function Objects

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p1 = new Person("Moin", 25);
console.log(p1.name); // "Moin"


// 1.5 Class-Based Objects (ES6 Classes)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const p2 = new Person("Moin", 25);
p2.greet(); // "Hello, my name is Moin"


// 1.6 Singleton Object (Immediately Invoked Object)

const Singleton = (function() {
    let instance;

    function createInstance() {
        return { name: "Singleton Object" };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // true (Same instance)



// 1.7 JSON Object (Data Storage Format)

const jsonString = '{"name": "Moin", "age": 25}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // "Moin"

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); // '{"name":"Moin","age":25}'
