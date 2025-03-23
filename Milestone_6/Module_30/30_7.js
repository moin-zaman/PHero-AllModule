const actor = {
    name: 'Ananata',
    age: 30,
    phone: '01717653844',
    money: 124545121545
}

// if right side is an object left side of destructuring will be object as well 
// use property name as a variable that contains the property value

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

const {phone} = actor;
const {phone : mobileNumber} = actor;

const {money, age} = actor;

console.log(phone);
console.log(phone);
console.log(mobileNumber);

console.log(money);
console.log(age);
console.log(age);


// Array Detructuring

const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

console.log(first, second);
console.log(x, y);


function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo)


let [num1,, num2] = [2, 7, 10];
console.log(num1, num2);

// Rest Operator
let [n1, ...n2] = [1,2, 5, 6,8];
console.log(n1, n2);