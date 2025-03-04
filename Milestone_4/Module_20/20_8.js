
const mobile = {
    type: "IOS",
    model: "Iphone 16",
    release: "2024",
    color: "white",
    new: true,
    iphone: ["Iphone 16", "Iphone 16 mini", "Iphone 16 pro"],
    Others:{
        type: "Android",
        model: "S23"
    },
    bestt: function(){
        console.log ("Iphone, Samsung");
    }
}

const keys = Object.keys(mobile);
// console.log(keys);

const values = Object.values(mobile);
// console.log(values);


const school = {
    name: 'vnc',
    class: ['10', '11', '12'],
    event: ['science', 'bijoy dibosh', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(school);

console.log(school.unique.color);
console.log(school.unique.result.merit);

const gpa = school['unique'].result['gpa'] = 4.56;
console.log(gpa);

delete school['class'];

console.log(school);