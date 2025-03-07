// Swap 2 values
let a = 5;
let b = 6;

let temp = a;
a = b;
b = temp;

console.log("a = ", a);
console.log("b = ", b);

// Another Way

// Destructing Mecanism
let x = 5;
let y = 7;

[x,y] = [y,x];
console.log("x = ", x);
console.log("y = ", y);

