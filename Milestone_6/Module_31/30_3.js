
const numbers = [4, 5, 2, 8, 10];
// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }

// console.log(doubled)

function double(num)
{
    return num * 2;
}

const double2 = n => n * 2;

// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const output = numbers.map(double);
console.log(output);

const output2 = numbers.map(double2);
console.log(output2);


const output3 = numbers.map(n => n * 2);
console.log(output3);
