function num(arr, n)
{
    let sum = 0;

    for(const values of arr)
    {
        sum += values;
    }

    return sum;
}

const arr = [1,4,7,9,2];

const addd = num(arr, arr.length);
console.log(addd);