// Task 1

const num = [5,6,11,12,98,5,11];

const n = 11;

let count = 0;

for(const key of num)
{
    if(n === key)
    {
        count++;
    }

}

console.log(count);

// Task 2

function vowelCount(vowel)
{
    let count = 0;
    for(const key of vowel)
    {
        // if(key === 'a' || key === 'e' || key === 'i' || key === 'o' || key === 'u')
        // {
        //     count++;
        // }
        
        if ('aeiou'.includes(key)) 
        {  // Checking if the character is a vowel
            // Here 'aeiou' string Literal
            count++;
        }

    }
    return count;
}

const v = "MoinaUuveioAasfa";
let w = v.toLowerCase();
const cV = vowelCount(w);
console.log(cV);


// Task 3


function charCount(sen)
{
    const sen1 = sen.split(" ");
    let maxCount = 0;
    let maxWord = '';
    for(const key of sen1)
    {
        let count = 0;
        count = key.length;


        // for(const c of key)
        // {
        //     count++;
        // }

        if(count > maxCount)
        {
            maxCount = count;
            maxWord = key;
        }
    }
    return maxWord;
}

const sen = "I am learning Programming to become a programmer";

const maxWord  = charCount(sen);
console.log(maxWord);


// Task 4

const randNum = Math.floor(Math.random() * (11) + 10);
console.log(randNum);


