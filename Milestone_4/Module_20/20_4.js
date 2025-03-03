
const sen = "I am learning Web Dev.";

// for( const letter of sen)
// {
//     console.log(letter);
// }

var str = "";
for(let x = sen.length - 1 ; x >= 0; x--)
{
    
    str = str.concat(sen[x]);
    // console.log(sen[x]);

}
console.log(str);
console.log(str.split(" "));




// 2)

var reverse = "";
for(const letter of sen)
{
    reverse = letter + reverse;
}

console.log(reverse);


// 3)

var rev = "";

for(let x = 0; x < sen.length; x++)
{
    rev = sen[x] + rev;
}
console.log(rev);


// 4)

const rev1 = sen.split("").reverse().join(""); 
console.log(rev1);
