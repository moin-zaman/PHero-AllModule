const school = {
    name: 'vnc',
    class: ['10', '11', '12'],
    event: ['science', 'bijoy dibosh', '21 Feb'],
    isNew: true,
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    },
    bestt: function(){
        console.log ("Iphone, Samsung");
    }
}

for(const key in school)
{
    // console.log(key);
    // console.log(school[key]);
}

const keys = Object.keys(school);

for(const key of keys)
{
    console.log(key, ': ', school[key]);
}


// Different Ways of object creation

const pen = {brand : 'Matador', price: 10, color: 'black'}
const pencil = new Object("Demo", '10');
console.log(pencil);
const rubber = Object.create({name1: 'hello'});
console.log(rubber);

