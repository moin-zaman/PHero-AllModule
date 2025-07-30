const num = [1,2,3,4,5,6,7];

// console.log(num);
// num.reverse();
// console.log(num);

for(let i = num.length - 1; i >= 0; i--)
{
    console.log(num[i]);
}

let rev_num = [];

// let i = 0;

for(const key of num)
{
    rev_num.unshift(key);
    // rev_num[i] = key;
    // i++;
}

console.log(rev_num);


const arr= [];

for(let i = 0; i < num.length ; i++)
{
    arr[i] = num[num.length-1 - i];
}
console.log(arr);    

