const myMath = {
    add: function(num1, num2)
    {
        const result = num1+num2;
        return result;
    }
}

console.log(myMath.add(2,5));

// console.log(Math.max(2,6,8,3,1,5));
// console.log(Math.min(2,6,8,3,1,5));
// console.log(Math.round(2.34));
// console.log(Math.round(2.45));
// console.log(Math.round(2.49));
// console.log(Math.round(2.59));

// console.log(Math.floor(2.99));
// console.log(Math.floor(2.001));


// console.log(Math.ceil(2.001));
// console.log(Math.ceil(2.999));


console.log(Math.random());
console.log(Math.random() * 10);


const rand = Math.random() * 15;
console.log(Math.ceil(rand));
