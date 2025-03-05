const persons = ['rakib', 'nokib', 'sakib', 'dakib'];

const sortedPerson = persons.sort();

console.log(sortedPerson);


const numb = [4,2,7,6,1,9];

numb.sort();
console.log(numb);

const num1 = [4, 15, 76, 7, 2, 20, 1];

const num_asc = [...num1].sort(function(a,b){
    return a-b;
})

const num_dsc = [...num1].sort(function(a,b){
    return b-a;
})

console.log(num_asc);
console.log(num_dsc);