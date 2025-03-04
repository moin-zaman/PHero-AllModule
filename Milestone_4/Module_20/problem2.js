const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    greet: function(){
        return `Hello, this model is $(this.model)`;
    },
    event: ['science', 'bijoy dibosh', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// const keys = Object.entries(car);

// console.log(keys);

for (const key in car) {
    console.log(`key: ${key} | type: ${typeof car[key]}`);
}


// Best Approach 

// Object.entries(car).forEach(([key, value]) => {
//     console.log(`key: ${key} | type: ${typeof value}`);
// });