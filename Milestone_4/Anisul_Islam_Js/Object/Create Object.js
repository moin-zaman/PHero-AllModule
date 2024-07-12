// Student details
// node "Create Object.js"

// var name = "Moin Zaman";
// var age = 27;
// var cgpa = 3.87;
// var lang = ["Bengali", "English", "Hindi"];


// console.log(age);

// var student1 = {
//     name : "Moin Zaman",
//     age : 27,
//     cgpa : 3.81,
//     lang : ["Bengali", "Hindi", "English"]

// }

// var student2 = {
//     name : "Tansen Khan",
//     age : 22,
//     cgpa : 3.30,
//     lang : ["Bengali", "Hindi", "English"]

// }

// var student3 = {
//     name : "Moin Khan",
//     age : 24,
//     cgpa : 3.40,
//     lang : ["Bengali", "Hindi", "English"]

// }



// console.log(student1.cgpa);
// console.log(student1.lang);

// console.log(student2.name);
// console.log(student2.cgpa);

// console.log(student3.name);
// console.log(student1.cgpa);


function Student(name, age, cgpa, lang)
{
    this.name = name;    
    this.age = age;    
    this.cgpa = cgpa;    
    this.lang = lang;   
    
    this.display = function()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }

}

var student1 = new Student("Moin Zaman", 24, 3.45, ["Bengali", "English", "Hindi"]);

var student2 = new Student("Tansen", 27, 3.81, ["Bengali", "English", "Hindi"]);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.cgpa);
// console.log(student1.lang);

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.cgpa);
// console.log(student2.lang);

student1.display();
student2.display();

