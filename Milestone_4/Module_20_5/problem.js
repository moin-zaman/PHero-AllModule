const statement = "I am a hard working person";

const sen = statement.split(" ");
console.log(sen);

let sen1 = [];

for(let x = sen.length-1; x >= 0; x--)
{
    sen1.push(sen[x]);
    // console.log(sen[x]);
}


console.log(sen1);

const statement1 = sen1.join(" ");
console.log(statement1);



// let reverseWord = [];

// for(const word of sen)
// {
//     reverseWord.unshift(word);
// }

// console.log(reverseWord);
// const reverseWordState = reverseWord.join(" ");
// console.log(reverseWordState);