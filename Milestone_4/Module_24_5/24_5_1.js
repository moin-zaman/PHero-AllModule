const products = {
    "name": "hello",
    age: 25,
    "0": 1,
    best: function()
    {
        console.log("Hello");
    }
}

console.log(products.best()); // undefined
console.log(products.best); // [function: best]

// console.log(products."0") // Not possible
// console.log(products.0) // Not possible

console.log(products["0"]); // 1
console.log(products.name);
// console.log(products."name"); // Not possible
console.log(products["name"]);

//  ** We can not use  Quotation while accessing objects's property 

// There is a thing called arguments inside function which is array like objects but not a actual array .


function add(n1, n2)
{
    console.log(n1, n2);
    console.log(arguments);
    console.log(arguments[3]);
}

add(12, 45, 21, 76, 32);