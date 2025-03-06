function binaryString(binaryNum)
{
    let count = 0;
    for(const values of binaryNum)
    {
        if(values === '0')
        {
            count++;
        }
    }
    return count;
}

const binaryNum  = "100001001110";

const count = binaryString(binaryNum);
console.log(count);

// Alternative way

// const count = binaryNum.split('').filter(value => value === '0').length;
// console.log(count);  // Output: 6
