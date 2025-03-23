// var : no reason to use var
// let : allow it to reassign
// const: do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(money);


let count = 0;
count = count + 10;
console.log(count)

const numbers = [23, 4, 23, 12, 56];
// numbers = [4, 5, 7, 7];
numbers[3] = 60;
numbers.push(8, 9, 65);
console.log(numbers);

// object 
const student = {
    name: 'moyna pakhi',
    class: 12
}

// student = {name:'kokil konthi'};
student.name = 'moyur konthi';
console.log(student);

// loop
let sum = 0;
for(let i = 0; i <10; i++){
    const num = i; // Here in every iteration num is newly creating

    sum = sum + num;
}
console.log(sum);