var numbers = [10,20,30,40];

// numbers.forEach(myFunc);

// function myFunc(x)
// {
//     console.log(x);
// }

// annonymus function inside ForEach Loop

numbers.forEach(function(x)
{
    console.log(x);
})



// Task2

const squareNum = [];
numbers.forEach(function(x){
    squareNum.push(x*x);
})
console.log(squareNum);


// Task 3
console.log(numbers);
numbers.forEach(function(x, index, arr){
    arr[index] = x+5;
})
console.log(numbers);