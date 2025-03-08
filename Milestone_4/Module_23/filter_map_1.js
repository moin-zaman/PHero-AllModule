const numbers = [2,3,4,5];

const sauareNumbers = [];

numbers.forEach(function(x){
    sauareNumbers.push(x*x);
})

console.log(sauareNumbers);


// Task 2

// Map function return an array . we do no to create an extra array;

const qubeNumbers = numbers.map(function(x){
    return x*x*x;
})
console.log(qubeNumbers);



// Task 3

const numbers1 = [10,43,5,25,30];

const conditionNumbers = numbers1.filter(function(x){
    return x > 10;
})
console.log(conditionNumbers);


