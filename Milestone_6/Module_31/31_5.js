// reduce

const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous, current) => previous + current , 0);
// console.log(total);


// Array of Objects 

const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
];

// map
const productNames = products.map(product => product.name);
console.log(productNames);



// Filter
const productPrice = products.filter(product => product.price > 50000);
// console.log(productPrice);



// forEach
products.forEach(product => console.log(product.id));


// Find

const affordable = products.find(p => p.price < 50000);
console.log(affordable);

// reduce

const t = products.reduce((p, c) => p + c.price, 0);
console.log(t);