const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

const psCp = 'passenger capacity';
car[psCp] = 5;

// console.log(car);

Object.assign(car, {price: 1.5, color: 'black'});
// console.log(car);

car.greet = function() {
    return `Hello, this car model is ${this.model}`;
};

console.log(car.greet());

let count = 0;

for(const k in car)
{
    count ++;
}

const items = Object.keys(car).length;


console.log(items);

const c = Object.entries(car);
console.log(c);