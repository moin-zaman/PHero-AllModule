function evenNum(arr, n)
{

    const evenn = [];

    for(const values of arr)
    {
        if(values % 2 === 0)
        {
            evenn.push(values);
        }
    }

    return evenn;
}

const arr = [1,4,7,9,2];

const evenArr = evenNum(arr, arr.length);

console.log(evenArr);