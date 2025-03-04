let name1 = "MoiAAnanAnabaadha";

name1 = name1.toLowerCase();
// console.log(name1);

let count = 0;
for(const key of name1)
{
    if(key === 'a')
    {
        count ++;
    }

        
}

console.log(count);



// Best way

// const count1 = name1.split('').filter(char => char === 'a').length;
// console.log(count1);



// Task 3

let task3 = "MoinZAmneghjU";

task3 = task3.toLowerCase();
console.log(task3);

if(task3.includes('a') && task3.includes('e') && task3.includes('i') && task3.includes('o') && task3.includes('u'))
{
    console.log("true");
}
else{
    console.log("false");
}


// Best way

// if (/[aeiou]/.test(task3)) {
//     console.log("true");
// } else {
//     console.log("false");
// }


// Task 4

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.




// let str1 = "Xylophone and xerox are examples of X and x words.";
// let newStr = "";

// for (let char of str1) {
//     if (char === 'x') {
//         newStr += 'y';
//     } else if (char === 'X') {
//         newStr += 'Y';
//     } else {
//         newStr += char;
//     }
// }

// console.log(newStr);


// using regular expression

let str = "Xylophone and xerox are examples of X and x words.";

str = str.replace(/x/g, 'y').replace(/X/g, 'Y');

console.log(str);





