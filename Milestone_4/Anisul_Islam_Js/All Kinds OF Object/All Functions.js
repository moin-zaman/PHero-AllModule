// 2. Functions in JavaScript
// Functions in JavaScript can be created in different ways.

// 2.1 Function Declaration (Named Function)

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Moin")); // "Hello, Moin!"


// 2.2 Function Expression (Anonymous Function)

const greet = function(name) {
    return `Hello, ${name}!`;
};


console.log(greet("Moin")); // "Hello, Moin!"


// 2.3 Arrow Function (ES6)

const greet = (name) => `Hello, ${name}!`;

console.log(greet("Moin")); // "Hello, Moin!"


// 2.4 Immediately Invoked Function Expression (IIFE)

(function() {
    console.log("This function runs immediately!");
})();


// 2.5 Higher-Order Function (Function Taking Another Function)

function operate(num1, num2, operation) {
    return operation(num1, num2);
}

const sum = (a, b) => a + b;

console.log(operate(5, 3, sum)); // 8



// 2.6 Callback Function (Function Passed as an Argument)

function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

function afterGreet() {
    console.log("Callback function executed!");
}

greet("Moin", afterGreet);



// 2.7 Generator Function (function*)

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generateNumbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2


// 2.8 Async Function (Used with await)

async function fetchData() {
    return "Data Loaded";
}

fetchData().then(console.log); // "Data Loaded"


// 2.9 Recursive Function
// A function that calls itself.


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120


// 2.10 Closures (Function with Lexical Scope)

function outer() {
    let counter = 0;
    return function inner() {
        counter++;
        console.log(counter);
    };
}

const increment = outer();
increment(); // 1
increment(); // 2