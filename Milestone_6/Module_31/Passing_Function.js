// 1) Passing a Function as an Argument

function greet(callback)
{
    console.log("Hello");
    callback();
}

function sayGoodbye()
{
    console.log(`Goodbye!`);
}

// greet(sayGoodbye);


// 2) Passing Anonymous Function

function execute(fn)
{
    fn();
    console.log("Hello Execute");
}

execute(() => {
    console.log(`I am an anonymous Function`)
});


// 3) Passing an Arrow Function

function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 7, add));
console.log(calculate(5, 6, multiply));


// 4)
const add2 = (x, y) => x + y;
console.log(add2(5,6));


// 5)
function addition(x,y)
{
    console.log(x+y);
}
const add3 = addition;
add3(5, 7);


