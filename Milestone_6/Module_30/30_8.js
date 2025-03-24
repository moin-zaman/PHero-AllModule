const glass = { 
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true 
};

console.log(glass);

const keys = Object.keys(glass);
console.log(keys); 
// [ 'name', 'color', 'price', 'isCleaned' ]

const values = Object.values(glass);
console.log(values); 
// [ 'glass', 'golden', 12, true ]

const entries = Object.entries(glass);
console.log(entries);

for (let [key,value] of Object.entries(glass)) {
    console.log(` key : ${key} value : ${value}`)
}

// It will return a two dimensional array

// delete glass.isCleaned;
// console.log(glass);

// Delete using spread operator

const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

// freeze 
// Object.freeze(glass); // It will allow delete, update, add to object ;
Object.seal(glass);  // It will allow the update of property value
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);



