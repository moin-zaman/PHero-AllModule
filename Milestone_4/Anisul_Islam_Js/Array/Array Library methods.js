var names = ["Moin", "Zaman", "Khan", "Tansen"];

// Adding elemnts using splice (); splice() can do both add or remove elements;


names.splice(1,0,"Karim","Rahim");
console.log(names);

//remove  + adding Elements using splice();

names.splice(1,2,"Hello");
console.log(names);

// Remove Elements using splice()

// names.splice(1,2);
// console.log(names);

//slice() returns new array 

var names1 = names.slice(2); 
console.log(names1);

var names2 = names.slice(1,4); 
console.log(names2);

names.sort();
console.log(names);

names.reverse();
console.log(names);

var num = [20, 15, 35, 1, 43, 0];
num.sort(function(a,b){
    return a-b;
});

console.log(num);


// node "Array Library Methods.js"

