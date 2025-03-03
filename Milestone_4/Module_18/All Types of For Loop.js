for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Used to iterate over keys (indexes for arrays, properties for objects).

// For ... in

const person = { name: "Moin", age: 25, city: "Dhaka" };

for(let key in person)
{
    console.log(key, person[key]);
}




const numbers = [10, 20, 30];

for (let index in numbers) {
    console.log(index, numbers[index]);
}

// For ... of

// Used to iterate over values of iterables (arrays, strings, sets, maps, etc.).

const numbers1 = [10, 20, 30];

for(const num of numbers1)
{
    console.log(num);
}

const numbers2 = [3, 6, 9];

numbers2.forEach((num) => {
    console.log(num);
});


// node "All Types of For Loop.js"